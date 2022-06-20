// Задание 1
function getArrayParams(arr) {

  let min = arr[0]
  let max = arr[0]
  let sum = 0

    for(let i = 0; i < arr.length; i++) {

      if(arr[i] < min) {
        min = arr[i]
      } else
      if(arr[i] > max) {
        max = arr[i]
      }
    
      sum += arr[i]
    }

    let avg = sum/arr.length

  let obj = {
    min: min,
    max: max,
    avg: Number(avg.toFixed(2)),
  }

  return obj
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  
  let max = -Infinity;

  for(let i = 0; i < arrOfArr.length; i++) {

      if(func(arrOfArr[i]) > max) {
        max = func(arrOfArr[i])
      }
  }

  return max;
}

// Задание 3
function worker2(arr) {

  let min = arr[0]
  let max = arr[0]

    for(let i = 0; i < arr.length; i++) {

      if(arr[i] < min) {
        min = arr[i]
      } else
      if(arr[i] > max) {
        max = arr[i]
      }
    }

  let delta = Math.abs(min - max)

      return delta
}

function makeWork(arrOfArr, func) {
  
  let max = 0;

  for(let i = 0; i < arrOfArr.length; i++) {

      if(func(arrOfArr[i]) > max) {
        max = func(arrOfArr[i])
      }
  }

  return max;
}

