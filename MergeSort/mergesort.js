
 //@authors ["Zana"]


function merge(left, right, iterationObj) {
    const result = [];
    let i = 0;
    let j = 0;
  
   
    while (i < left.length && j < right.length) {
      iterationObj.count++; 
  
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
 
    while (i < left.length) {
      iterationObj.count++;
      result.push(left[i]);
      i++;
    }
  
    while (j < right.length) {
      iterationObj.count++;
      result.push(right[j]);
      j++;
    }
  
    return result;
  }
  
  
  

  export function mergeSort(arr, iterationObj = { count: 0 }) {

    iterationObj.count++; 
  
    if (arr.length <= 1) {
      return {
        arr: arr.slice(), 
        iterations: iterationObj.count,
        sorted: true
      };
    }
  
    const middle = Math.floor(arr.length / 2);
    const leftPart = arr.slice(0, middle);
    const rightPart = arr.slice(middle);
  
    const leftResult = mergeSort(leftPart, iterationObj);
    const rightResult = mergeSort(rightPart, iterationObj);
  
    const mergedArr = merge(leftResult.arr, rightResult.arr, iterationObj);
  
    return {
      arr: mergedArr,
      iterations: iterationObj.count,
      sorted: true
    };
  }
  