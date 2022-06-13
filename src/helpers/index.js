import * as htmlToImage from "html-to-image";

export function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
export function edgeArrowId(source, target) {
    return `${source}>${target}`;
}
export function addDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
export function saveCanvas(flowImageDownload) {
    htmlToImage
        .toPng(flowImageDownload.current, { quality: 1 })
        .then(function (dataUrl) {
            var link = document.createElement("a");
            link.download = `Flow_chart_diagram${Math.floor(
                Math.random(10000)
            )}.png`;
            link.href = dataUrl;
            link.click();
        });
}
export const checkduplicity = (arrayData) => {
    const itemsData = arrayData.filter((value, index) => {
        const _value = JSON.stringify(value);
        return (
            index ===
            arrayData.findIndex((obj) => {
                return JSON.stringify(obj) === _value;
            })
        );
    });
    return itemsData;
}

export function saveFlow(elements, nanoid, setOpenMenuClick) {
    const downloadLink = document.createElement("a");
    const fileBlob = new Blob([JSON.stringify(elements, null, 2)], {
        type: "application/json",
    });
    downloadLink.href = URL.createObjectURL(fileBlob);
    downloadLink.download = "node-flow" + nanoid(3) + ".json";
    downloadLink.click();
    setOpenMenuClick(false);
}

export function toJSON(elements) {
    if (!elements) {
        return;
    }
    const downloadLink = document.createElement("a");
    const fileBlob = new Blob([JSON.stringify(elements, null, 2)], {
        type: "application/json",
    });
    downloadLink.href = URL.createObjectURL(fileBlob);
    downloadLink.download = "node-flow" + ".json";
    downloadLink.click();
}
export function WordCount(str) {
    return str.split(" ");
}