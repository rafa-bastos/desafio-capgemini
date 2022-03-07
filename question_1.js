export default function calculateMediana(arr) {
  if (arr.length === 0) return null;
  
  const roundedSize = Math.floor(arr.length / 2);
  const sortedArr = arr.sort();
  
  return sortedArr[roundedSize];
}
