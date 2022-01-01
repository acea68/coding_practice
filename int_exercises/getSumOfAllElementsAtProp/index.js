function getSumOfAllElementsAtProperty(obj, key) {
    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        if (obj[key].length !== 0) {
          let sumTotal = obj[key][0];
          for (let num = 1; num < obj[key].length; num++) {
            sumTotal += obj[key][num];
          }
          return sumTotal;
        }
      }
    }
    return 0;
  }
  var obj = {
      key: [4, 1, 8]
    };
  var output = getSumOfAllElementsAtProperty(obj, 'key');
  console.log(output); // --> 13