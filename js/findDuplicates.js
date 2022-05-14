function findDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) != index)
} 


export {findDuplicates}