
function randomNumberInRange(range, output) {
  
  
  let nums = new Set();
  while (nums.size < output) {
      nums.add(Math.floor(Math.random() * (range - 1 + 1) + 1));
  }
  return [...nums];

}

export {randomNumberInRange }