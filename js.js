var countOperationsToEmptyArray = function (nums) {
  let operations = 0;
  const indexMap = new Map();

  // Create a map of numbers and their indices
  nums.forEach((num, index) => {
    indexMap.set(num, index);
  });

  // Sort the numbers to simulate removing the smallest first
  const sortedNums = [...nums].sort((a, b) => a - b);
  let lastRemovedIndex = -1;

  for (const num of sortedNums) {
    const currentIndex = indexMap.get(num);
    if (currentIndex < lastRemovedIndex) {
      // If we wrap around the array, we need a full pass
      operations += nums.length;
    } else {
      operations += currentIndex - lastRemovedIndex;
    }
    lastRemovedIndex = currentIndex;
  }

  return operations;
};

console.log(countOperationsToEmptyArray([3, 4, -1])); // Output: Number of operations
