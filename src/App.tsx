import wineData from "./utils/wineData.json";
import { filterDataIntoCategory } from "./utils/helper.js";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    filterDataIntoCategory(wineData);
  }, []);

  return <div></div>;
}

export default App;
