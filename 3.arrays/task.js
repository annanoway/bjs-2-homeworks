function compareArrays(arr1, arr2) {
  let result = false;

  function checkItem(item, index) {
    return item === arr2[index];
  };

    result = arr1.every(checkItem) && arr1.length === arr2.length

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter(arr => (arr > 0) && (arr % 3 === 0)).map(arr => arr * 10);
  
  return resultArr; // array
}
