const SummaryNodes = ({ node, setParent }) => {
  return (
    <div className="grid grid-cols-2 static py-1">
      <div>{node.data.label}</div>
      <div
        className={
          node.type === "group"
            ? "relative right-0 rounded-md px-2 mx-1 bg-green-400 text-black hover:cursor-pointer"
            : "relative right-0 rounded-md px-2 mx-1 bg-red-400"
        }
        onClick={(evt) => {
          setParent(node.id);
        }}
      >
        {node.type === "group" ? "Join" : ""}
      </div>
    </div>
  );
};
export default SummaryNodes;
