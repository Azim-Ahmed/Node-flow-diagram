const ConvertData = ({ jsonInput, setJsonInput, convert }) => {
  return (
    <>
      <div name="flex justify-center absolute bottom-0 ">
        <div className="mx-2 mb-3 xl:w-96">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label inline-block mb-2 text-white"
          >
            Input Form
          </label>
          <textarea
            className="form-control block w-full h-52 px-3 py-1.5 text-sm font-normal text-white bg-indigo-600 bg-clip-padding
      border border-solid border-gray-300 rounded transition
      ease-in-out m-0 focus:text-white focus:bg-indigo-500 focus:border-blue-600 focus:outline-none
    "
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="paste ypur JSON"
            value={jsonInput}
            onChange={(e) => {
              setJsonInput(e.target.value);
            }}
          />
        </div>
      </div>
      <div
        className="rounded-lg text-center bg-green-200 my-3 py-1 w-40  mx-2 hover:bg-green-300"
        onClick={(e) => {
          convert();
        }}
      >
        Convert
      </div>
    </>
  );
};
export default ConvertData;
