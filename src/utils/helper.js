export function filterDataIntoCategory(data) {
  const map = {};
  // storing the data with same Alcohol Name
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
  const result = Object.values(map); //converting the map to array to be iterable
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
  // if length is even that taking middle 2 elemnent and taking avergae of them
  if (length % 2 == 0) {
    term = result[length / 2] + result[length / 2 - 1];
    return term / 2;
  } else {
    // if length is odd than picking the middle element
    term = result[(length - 1) / 2];
    return term;
  }
}
export function calculateMode(dataset) {
  let max = 0;
  // making a map with key as num and value as the count of the key and checking at every step which is the maximum count
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

  // converting the map to array to iterate and see which key has the max count
  const resultant = Object.entries(map)
    .filter((a) => a[1] === max)
    .map((item) => item[0]);
  // if more than 1 element has max count the returning more than 1 mode
  if (resultant.length > 1) {
    return "More then 1 Mode";
  }
  //  if only 1 element as max count then returning it
  return resultant;
}
