function storeInputValues(inputs) {
  const inputValues = []

 for(let input of inputs) {
   inputValues.push(input.value)
   
 }
 

 return inputValues
}

export {storeInputValues}