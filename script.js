import { cateogryOfAwards } from './js/cateogryOfAwards.js'
import { displayPointsandImage } from './js/displayPointsandImage.js'
import { pointValuesCounter } from './js/pointValuesCounter.js'
import { randomNumberInRange } from './js/randomNumber.js'
import { setInputRandomValues } from './js/setRandomValues.js'
import { findDuplicates } from './js/findDuplicates.js'
import { moveCursorAfterEndTyping } from './js/moveCursosEndTyping.js'
import { storeInputValues } from './js/storeInputValues.js'

const sortInputs = document.querySelectorAll('input[name="sorteados"]')
const choosenInputs = document.querySelectorAll('input[name="escolhidos"]')
const sendButton = document.querySelector('button[name="btnres"]')
const alert = document.querySelector('#res')





function runLottery() {
  const randomArrayOfNumbers = randomNumberInRange(60 , 6)
  setInputRandomValues(sortInputs, randomArrayOfNumbers)

  const randomInputs = storeInputValues(sortInputs)
  const chosedInputs = storeInputValues(choosenInputs)

  const duplicateds = findDuplicates(chosedInputs)

  if(duplicateds.length > 0) {
    alert.innerHTML = `
    <div class="alert alert-danger">
    <p id="points">Insira algum número, ou não repita os números</p
    </div>
    `
  } else {
    const points = pointValuesCounter(randomInputs, chosedInputs)

    displayPointsandImage[points](alert, points, cateogryOfAwards[points])

  }

  console.log(duplicateds)
}


choosenInputs.forEach(input => input.addEventListener('keyup', moveCursorAfterEndTyping))
sendButton.addEventListener('click', runLottery)