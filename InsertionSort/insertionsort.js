

export function insertionSort(arr) {
    let iterations = 0;
  
    
    for (let i = 1; i < arr.length; i++) {
      iterations++; 
  
      const value = arr[i];  
      let j = i - 1;
  
 
      while (j >= 0 && arr[j] > value) {
        iterations++;         
        arr[j + 1] = arr[j]; 
        j--;
      }
  
      arr[j + 1] = value;
    }
  
    return {
      arr: arr,
      iterations: iterations,
      sorted: true
    };
  }
  