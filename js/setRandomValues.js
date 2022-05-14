
function setInputRandomValues(inputs, random) {
  inputs.forEach((input, index) => {
    input.value = random[index]
  })
}

export {setInputRandomValues}