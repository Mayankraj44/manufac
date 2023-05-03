export function filterDataIntoCategory(data) {
  const map = {};
  data?.map((wine) => {
    if (map.hasOwnProperty(wine?.Alcohol)) {
      map[wine?.Alcohol].push(wine);
    } else {
      map[wine?.Alcohol] = [wine];
    }
  });
  console.log(map);
}
