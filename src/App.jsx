import { useEffect, useState } from "react";
import Table from "./components/Table";
import { rowFlavanoids } from "./utils/CONST";
import {
  calculateMean,
  calculateMedian,
  calculateMode,
  filterDataIntoCategory,
} from "./utils/helper.js";
import wineData from "./utils/wineData.json";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const newdata = filterDataIntoCategory(wineData);
    setData(newdata);
  }, []);

  const rowGamma = ["Measure", "Gamma Mean", "Gamma Median", "Gamma Mode"];
  function calculateGamma(item) {
    return Number(
      (
        (Number(item?.Ash) * Number(item.Hue)) /
        Number(item?.Magnesium)
      ).toFixed(3)
    );
  }
  function calculateFlavanoid(item) {
    return Number(item?.Flavanoids);
  }

  return (
    <div className="container">
      <Table
        title="Flavanoid"
        rowData={rowFlavanoids}
        data={data}
        extractFunction={calculateFlavanoid}
      />
      <br />
      <br />
      <Table
        title="Gamma"
        rowData={rowGamma}
        data={data}
        extractFunction={calculateGamma}
      />
    </div>
  );
}

export default App;
