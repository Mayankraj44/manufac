import {
  calculateMean,
  calculateMedian,
  calculateMode,
} from "../../utils/helper";

function Table({ title, data, rowData, extractFunction }) {
  return (
    <>
      <h2>{title}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          {rowData?.map((item) => (
            <div className="cell">{item}</div>
          ))}
        </div>

        {data?.map((item) => (
          <div>
            <div className="cell values">{item.name}</div>
            <div className="cell values">
              {calculateMean(item?.data?.map((item) => extractFunction(item)))}
            </div>
            <div className="cell values">
              {calculateMedian(
                item?.data?.map((item) => extractFunction(item))
              )}
            </div>
            <div className="cell values">
              {calculateMode(item?.data?.map((item) => extractFunction(item)))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Table;
