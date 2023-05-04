export function filterDataIntoCategory(data) {
  const map = {};
  data?.map((wine) => {
    if (map.hasOwnProperty(wine?.Alcohol)) {
      map[wine?.Alcohol].data.push(wine);
    } else {
      map[wine?.Alcohol] = {
        name: `Class ${wine?.Alcohol}`,
        data: [wine],
      };
    }
  });
  const result = Object.values(map);
  return result;
}
export function calculateMean(dataset) {
  const sum = dataset?.reduce((acc, data) => acc + data, 0);
  return (sum / dataset.length).toFixed(3);
}
export function calculateMedian(dataset) {
  const result = dataset.sort((a, b) => a - b);
  const length = result.length;
  let term;
  if (length % 2 == 0) {
    term = result[length / 2] + result[length / 2 - 1];
    return term / 2;
  } else {
    term = result[(length - 1) / 2];
    return term;
  }
}
export function calculateMode(dataset) {
  let max = 0;
  const map = dataset?.reduce((acc, data) => {
    if (acc.hasOwnProperty(data)) {
      acc[data] += 1;
    } else {
      acc[data] = 1;
    }
    if (acc[data] > max) {
      max = acc[data];
    }
    return acc;
  }, {});

  const resultant = Object.entries(map)
    .filter((a) => a[1] === max)
    .map((item) => item[0]);

  if (resultant.length > 1) {
    return "More then 1 Mode";
  }

  return resultant;
}
