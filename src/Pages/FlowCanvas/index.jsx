import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  // applyEdgeChanges,
  // applyNodeChanges,
  MiniMap,
  updateEdge,
  MarkerType,
} from "react-flow-renderer";
import dagre from "dagre";
import TextField from "@mui/material/TextField";
import { Layout, Sidebar } from "../../components";
import "../../assets/Css/updatenode.css";
import "../../index.css";
import { GrAdd } from "react-icons/gr";
import { Grid } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import DynOutputHandle from "../../components/FlowComponents/Handler/DynOutputHandle";
import DynInputHandle from "../../components/FlowComponents/Handler/DynInputHandle";
import CustomInputNode from "../../components/FlowComponents/Nodes/CustomInputNode";
import CustomOutputNode from "../../components/FlowComponents/Nodes/CustomOutputNode";
import CustomEdge from "../../components/FlowComponents/CustomEdge";
import ConnectionLine from "../../components/FlowComponents/CustomEdge/ConnectionLine";
import DecisionNode from "../../components/FlowComponents/Nodes/DecisionNode";
import CircleNode from "../../components/FlowComponents/Nodes/CircleNode";
import { edgeArrowId } from "../../helpers";
// import SummaryNodes from "../components/FlowComponents/SummaryNodes";

const CustomFunctionNode = ({ data }, props) => {
  const [outputcount, setOutputCount] = useState(1);
  const [inputcount, setInputCount] = useState(1);

  return (
    <>
      <div className="py-1 hover:border-green-500 rounded-md border-2 p-3 shadow-xl">
        <div className="my-1">
          <GrAdd onClick={() => setOutputCount((i) => i + 1)} />
        </div>
        <hr />
        <div>
          {Array(outputcount)
            .fill(null)
            .map((_, i) => (
              <DynOutputHandle key={i} idx={i} />
            ))}
        </div>
        <div>
          {Array(inputcount)
            .fill(null)
            .map((_, i) => (
              <DynInputHandle key={i} idx={i} />
            ))}
        </div>
        {data.label}
        <hr />
        <div className="text sm fill-purple-700 hover:fill-green-500 my-1">
          <GrAdd onClick={() => setInputCount((i) => i + 1)} />
        </div>
      </div>
    </>
  );
};

const FlowCanvas = () => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  const nodeWidth = 172;
  const nodeHeight = 36;

  const getLayoutedElements = (nodes, edges, direction = "TB") => {
    const isHorizontal = direction === "LR";
    dagreGraph.setGraph({ rankdir: direction });

    nodes.forEach((node) => {
      dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    });

    edges.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    nodes.forEach((node) => {
      const nodeWithPosition = dagreGraph.node(node.id);
      node.targetPosition = isHorizontal ? "left" : "top";
      node.sourcePosition = isHorizontal ? "right" : "bottom";

      // We are shifting the dagre node position (anchor=center center) to the top left
      // so it matches the React Flow node anchor point (top left).
      node.position = {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      };

      return node;
    });

    return { nodes, edges };
  };

  const nodeTypes = useMemo(
    () => ({
      customOutput: CustomOutputNode,
      decision: DecisionNode,
      customInput: CustomInputNode,
      customFunction: CustomFunctionNode,
      circle: CircleNode,
    }),
    []
  );
  const edgeTypes = useMemo(
    () => ({
      custom: CustomEdge,
    }),
    []
  );
  const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
    [],
    []
  );
  const reactFlowWrapper = useRef(null);
  const flowImageDownloadRef = useRef();
  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [openEditor, setOpenEditor] = useState(false);
  const [nodeName, setNodeName] = useState("NULL");
  const [nodeBg, setNodeBg] = useState("NULL");
  const [group, setGroup] = useState("");

  const [sizeX, setSizeX] = useState(0);
  const [sizeY, setSizeY] = useState(0);
  const [type, setType] = useState();
  const [parent, setParent] = useState();
  const [id, setID] = useState();
  const [jsonInput, setJsonInput] = useState("");

  const convert = useCallback(
    (event) => {
      const jsonNode = JSON.parse(jsonInput);
      const filteredEdges = jsonNode.filter((item) => item.type === "edge");
      const filteredNodes = jsonNode.filter((item) => item.type !== "edge");
      console.log({ filteredEdges, filteredNodes });
      setNodes((nds) => nds.concat(filteredNodes));
      setEdges((nds) => nds.concat(filteredEdges));
    },
    [jsonInput, setNodes, setEdges]
  );

  const onConnect = useCallback(
    (params) => {
      if (!params?.source || !params?.target) {
        return;
      }
      const source = params?.source;
      const target = params.target;
      const newDecisionLineEdge = source.match(/decision/g);
      const newEdgeId = edgeArrowId(source, target);
      // const newSource = new Array(source);
      // const newTarget = new Array(target);
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            id: newEdgeId,
            type: "custom",
            animated: false,
            style: { stroke: "black" },
            data: {
              text: newDecisionLineEdge ? "Enter your line" : "",
            },
            markerEnd: {
              type: MarkerType.ArrowClosed,
            },
          },
          eds
        )
      );
    },
    [setEdges]
  );
  const onLayout = useCallback(
    (direction) => {
      const { nodes: layoutedNodes, edges: layoutedEdges } =
        getLayoutedElements(nodes, edges, direction);

      setNodes([...layoutedNodes]);
      setEdges([...layoutedEdges]);
    },
    [nodes, edges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        let x = 0;
        let y = 0;
        if (node.id === parent) {
          x = node.position.x;
          y = node.position.y;
          console.log("parent: " + node.id + " " + parent);
          console.log("parent posx: " + x);
          console.log("parent posy: " + y);
        } else if (node.selected === true && node.type !== "group") {
          node.parentNode = parent;
          node.position.x = x;
          node.position.y = y;
          node.extent = "parent";
        }
        return node;
      })
    );
  }, [parent, setNodes]);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.selected === true) {
          node.data = {
            ...node.data,
            label: nodeName,
          };
          node.style = { ...node.style, backgroundColor: nodeBg };
          console.log("size: " + sizeX);

          node.style.width = parseInt(sizeX);
          node.style.height = parseInt(sizeY);

          // node.style={...node.style, height:sizeY}
          // node.style={...node.style, width:sizeX}
        }

        return node;
      })
    );
  }, [nodeName, nodeBg, sizeX, sizeY, setNodes]);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.selected === true) {
          console.log("selected found");
          // when you update a simple type you can just update the value
          node.type = "group";

          setType(node.type);

          setGroup("");
        }
        console.log("not selected");
        return node;
      })
    );
  }, [group, setNodes]);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");
      const label = event.dataTransfer.getData("application/reactflow/label");
      const bgCol = event.dataTransfer.getData("application/reactflow/color");
      if (typeof type === "undefined" || !type) {
        return;
      }
      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      let newNode;

      if (type === "circle") {
        newNode = {
          id: `flow_azim_renderer_${uuidv4()}`,
          type,
          position,
          data: { label: `${label}` },
          style: {
            backgroundColor: "white",
            width: 80,
            height: 80,
            borderRadius: "50%",
            border: "1px solid gray",
          },
        };
        setNodes((nds) => nds.concat(newNode));
      }
      if (type === "decision") {
        newNode = {
          id: `flow_azim_renderer_${uuidv4()}`,
          type,
          position,
          data: { label: `${label}` },
          style: {
            backgroundColor: "",
            width: "",
            height: "",
            borderRadius: 6,
            borderColor: "#1111",
          },
        };
        setNodes((nds) => nds.concat(newNode));
      }
      if (type === "customOutput") {
        newNode = {
          id: `flow_azim_renderer_${uuidv4()}`,
          type,
          position,
          data: { label: `${label}` },
          style: {
            backgroundColor: bgCol,
            width: 200,
            height: 60,
            borderRadius: 6,
            borderColor: "#1111",
          },
        };
        setNodes((nds) => nds.concat(newNode));
      }
      if (type === "customInput") {
        newNode = {
          id: `flow_azim_renderer_${uuidv4()}`,
          type,
          position,
          data: { label: `${label}` },
          style: {
            backgroundColor: bgCol,
            width: 200,
            height: 60,
            borderRadius: 6,
            borderColor: "#1111",
          },
        };
        setNodes((nds) => nds.concat(newNode));
      }
      if (type === "customFunction") {
        newNode = {
          id: `flow_azim_renderer_${uuidv4()}`,
          type,
          position,
          data: { label: `${label}` },
          style: {
            backgroundColor: bgCol,
            width: 200,
            height: 86,
            borderRadius: 6,
            borderColor: "#1111",
          },
        };
        setNodes((nds) => nds.concat(newNode));
      }

      // setNodes((nds) => nds.concat(newNode));

      // setType(type)
      // setNodeBg(bgCol)
      // setNodeName(label)

      // setSizeX(w)
      // setSizeY(heightl)
    },
    [reactFlowInstance, setNodes]
  );
  const onNodeClick = (event, node) => {
    setOpenEditor(true);
    event.preventDefault();
    setNodeBg(node.style.backgroundColor);
    setNodeName(node.data.label);
    setSizeX(node.style.width);
    setSizeY(node.style.height);
    setType(node.type);
    setID(node.id);
    if (node.type === "group") {
    }
  };

  const onPaneClick = (event) => setOpenEditor(false);
  const onEdgeUpdate = (oldEdge, newConnection) =>
    setEdges((els) => updateEdge(oldEdge, newConnection, els));
  const graphStyles = { width: "100%", height: "650px", Background: "white" };
  return (
    <Layout
      jsonInput={jsonInput}
      setJsonInput={setJsonInput}
      convert={convert}
      flowImageDownloadRef={flowImageDownloadRef}
      edges={edges}
      nodes={nodes}
      setEdges={setEdges}
      setNodes={setNodes}
    >
      <div className="bg-indigo-100 py-2">
        <div className>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Sidebar />
              <div className="controls">
                <button onClick={() => onLayout("TB")}>vertical layout</button>
                <button onClick={() => onLayout("LR")}>
                  horizontal layout
                </button>
              </div>
            </Grid>
            <Grid ref={flowImageDownloadRef} item xs={10}>
              <div
                className=" bg-indigo-100 rounded-md my-1 mx-2 border-2 border-indigo-400"
                ref={reactFlowWrapper}
              >
                <ReactFlow
                  nodes={nodes}
                  edges={edges}
                  onNodesChange={onNodesChange}
                  onEdgesChange={onEdgesChange}
                  onConnect={onConnect}
                  onInit={setReactFlowInstance}
                  onDrop={onDrop}
                  onDragOver={onDragOver}
                  onEdgeUpdate={onEdgeUpdate}
                  connectionLineComponent={ConnectionLine}
                  connectionLineType="smoothstep"
                  onNodeDragStart={(event, node) => {
                    event.preventDefault();
                    setNodeBg(node.style.backgroundColor);
                    setNodeName(node.data.label);
                    setSizeX(node.style.width);
                    setSizeY(node.style.height);
                    setType(node.type);
                    setID(node.id);
                    console.log("type: " + node.type);
                    console.log("x " + node.style.width);
                    console.log("y " + node.style.height);
                  }}
                  onPaneClick={onPaneClick}
                  nodeTypes={nodeTypes}
                  edgeTypes={edgeTypes}
                  onNodeClick={onNodeClick}
                  style={graphStyles}
                >
                  <MiniMap />

                  {openEditor && (
                    <div className="updatenode__controls ">
                      <div className="grid grid-cols-1 divide-y divide-black">
                        <div>
                          <TextField
                            value={nodeName}
                            label={`Label:`}
                            onChange={(evt) => setNodeName(evt.target.value)}
                            id="outlined-basic"
                            variant="outlined"
                          />
                          <TextField
                            label={`Background:`}
                            value={nodeBg}
                            disabled={type === "decision" ? true : false}
                            onChange={(evt) => setNodeBg(evt.target.value)}
                            id="outlined-basic"
                            variant="outlined"
                          />

                          <div className="updatenode__checkboxwrapper">
                            <label>Group</label>
                            <button
                              className="rounded-md text-black bg-white hover:bg-rose-400 my-1 py-1 px-1"
                              onClick={(evt) => setGroup("a")}
                            >
                              {" "}
                              Make Group
                            </button>
                          </div>
                          <TextField
                            label={`Width:`}
                            value={sizeX}
                            disabled={type === "decision" ? true : false}
                            onChange={(evt) => setSizeX(evt.target.value)}
                            id="outlined-basic"
                            variant="outlined"
                          />
                          <TextField
                            label={`Height:`}
                            value={sizeY}
                            disabled={type === "decision" ? true : false}
                            onChange={(evt) => setSizeY(evt.target.value)}
                            id="outlined-basic"
                            variant="outlined"
                          />
                          <div>
                            <div className="py-1">Info:</div>
                            <div
                              style={{
                                fontWeight: "600",
                                whiteSpace: "nowrap",
                                width: "180px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              Type: {type}
                            </div>
                            <div
                              style={{
                                fontWeight: "600",
                                whiteSpace: "nowrap",
                                width: "180px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              ID: {id}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div>
                        <div>Nodes on Board:</div>
                        <div className="py-1 px-1 border-2 h-36 rounded-md overflow-y-scroll">
                          {nodes.map((node, key) => (
                            <SummaryNodes
                              key={key}
                              node={node}
                              setParent={setParent}
                            />
                          ))}
                        </div>
                      </div> */}
                    </div>
                  )}

                  <Controls />
                  <Background gap={8} color="black" />
                </ReactFlow>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Layout>
  );
};

export default FlowCanvas;
