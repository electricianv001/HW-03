
function uniqueSorted(arr) {
  const onlyNumbers = arr.filter(Number.isFinite);
  return [...new Set(onlyNumbers)].sort((a, b) => a - b);
}


const data = [5, 3, 9, 3, 5, -1, 0, 9, 2, 2, 10];
console.log('output:', uniqueSorted(data)); 
