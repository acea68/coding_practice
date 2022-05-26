function findShortestWordAmongMixedElements(arr) {
  if (arr.length === 0) {
    return "";
  }
  let shortest = "";
  for (let elem of arr) {
    if (typeof elem === "string") {
      if (shortest.length === 0) {
        shortest = elem;
      } else if (elem.length < shortest.length) {
        shortest = elem;
      }
    }
  }
  return shortest;
}
var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'