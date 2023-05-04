import wineData from "./utils/wineData.json";
import {
  calculateMean,
  calculateMedian,
  calculateMode,
  filterDataIntoCategory,
} from "./utils/helper.js";
import { useEffect, useState } from "react";

type dataType = {
  Ash: number | string;
  Magnesium: string | number;
  Hue: string | number;
  Flavanoids: string | number;
};

function App() {
  const [data, setData] = useState<{ name: string; data: [dataType] }[]>([]);
  useEffect(() => {
    const newdata = filterDataIntoCategory(wineData);
    setData(newdata);
  }, []);
  const rowFlavanoids = [
    "Measure",
    "Flavanoids Mean",
    "Flavanoids Median",
    "Flavanoids Mode",
  ];
  const rowGamma = ["Measure", "Gamma Mean", "Gamma Median", "Gamma Mode"];
  function calculateGamma(item: {
    Ash: number | string;
    Magnesium: string | number;
    Hue: string | number;
  }) {
    return (
      (Number(item?.Ash) * Number(item.Hue)) /
      Number(item?.Magnesium)
    ).toFixed(3);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          {rowFlavanoids?.map((item) => (
            <div className="cell">{item}</div>
          ))}
        </div>

        {data?.map((item) => (
          <div>
            <div className="cell values">{item.name}</div>
            <div className="cell values">
              {calculateMean(
                item?.data?.map((item) => Number(item?.Flavanoids))
              )}
            </div>
            <div className="cell values">
              {calculateMedian(
                item?.data?.map((item) => Number(item?.Flavanoids))
              )}
            </div>
            <div className="cell values">
              {calculateMode(
                item?.data?.map((item) => Number(item?.Flavanoids))
              )}
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          {rowGamma?.map((item) => (
            <div className="cell">{item}</div>
          ))}
        </div>

        {data?.map((item) => (
          <div>
            <div className="cell values">{item.name}</div>
            <div className="cell values">
              {calculateMean(
                item?.data?.map((item) => Number(calculateGamma(item)))
              )}
            </div>
            <div className="cell values">
              {calculateMedian(
                item?.data?.map((item) => Number(calculateGamma(item)))
              )}
            </div>
            <div className="cell values">
              {calculateMode(
                item?.data?.map((item) => Number(calculateGamma(item)))
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
