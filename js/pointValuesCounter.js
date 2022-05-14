function pointValuesCounter(sorteados, escolhidos) {
  let points = 0;
  for(let i = 0; i < sorteados.length; i++) {
    for(let j = 0; j < sorteados.length; j++) {
      if(sorteados[i] === escolhidos[j]) {
        points += 1
      }
    }
  }
  return points
}

export {pointValuesCounter}