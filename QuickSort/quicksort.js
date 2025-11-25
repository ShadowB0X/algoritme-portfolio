
export function quickSort(arr, iterationObj = { count: 0 }) {
    iterationObj.count++; 
  
    if (arr.length <= 1) {
      return {
        arr: arr.slice(),
        iterations: iterationObj.count,
        sorted: true
      };
    }
  
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
  
 
    for (let i = 0; i < arr.length - 1; i++) {
      iterationObj.count++; 
  
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    const leftSorted = quickSort(left, iterationObj);
    const rightSorted = quickSort(right, iterationObj);
  
    const merged = [...leftSorted.arr, pivot, ...rightSorted.arr];
  
    return {
      arr: merged,
      iterations: iterationObj.count,
      sorted: true
    };
  }
  