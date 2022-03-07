export default function calculatePairs(arr, x) {
  if (arr.length === 0) return null;
  
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        const difference = arr[i] - arr[j];
        if (difference === x) {
          counter++
        }
      } 
    }
  }
  
  return counter;
}
