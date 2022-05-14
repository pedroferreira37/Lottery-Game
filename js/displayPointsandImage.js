
  const displayPointsandImage = {
    0: (node, points, text) => {
      node.innerHTML = 
      `
      <div class="alert alert-primary">
      <p id="points">Você fez: ${points} pontos <img src="" alt="" id="img"></p>
      ${text === undefined ? '' : `<p id="text">Você fez uma: ${text}</p>`}
      
      </div>
      `
              
    },
        1:(node, points, text) => {
          node.innerHTML = 
      `
        <div class="alert alert-primary">
          <p id="points">Você fez: ${points} ponto <img src="assets/icons8-coins-16 3.png" alt="" id="img"</p>
          ${text === undefined ? '' : `<p id="text">Você fez uma: ${text}</p>`}
        </div>
       
      `
    },
        2: (node, points, text) => {
          node.innerHTML = 
          `
          <div class="alert alert-primary">
            <p id="points">Você fez: ${points} pontos  <img src="assets/Group 1.png" alt="" id="img"</p>
            ${text === undefined ? '' : `<p id="text">Você fez uma: ${text}</p>`}
          </div>
            
          `
    },
        3: (node, points, text) => {
          node.innerHTML = 
          `
          <div class="alert alert-primary">
            <p id="points">Você fez: ${points} pontos <img src="assets/Group 2.png" alt="" id="img"></p>
            ${text === undefined ? '' : `<p id="text">Você fez uma: ${text}</p>`}
          </div>
            
          `
    },
        4: (node, points, text) => {
          node.innerHTML = 
          `
          <div class="alert alert-primary">
            <p id="points">Você fez: ${points} pontos <img src="assets/Group 3.png" alt="" id="img"></p>
            ${text === undefined ? '' : `<p id="text">Você fez uma: ${text}</p>`}
          </div>
            
          `
    },
        5 : (node, points, text) => {
          node.innerHTML = 
          `
          <div class="alert alert-primary">
            <p id="points">Você fez: ${points} pontos <img src="assets/Group 4.png" alt="" id="img"></p>
            ${text === undefined ? '' : `<p id="text">Você fez uma: ${text}</p>`}
          </div>
            
          `
    },
        6: (node, points, text) => {
          node.innerHTML = 
          `
          <div class="alert alert-primary">
            <p id="points">Você fez: ${points} <img src="assets/Group 5.png" alt="" id="img"></p>
            ${text === undefined ? '' : `<p id="text">Você fez uma: ${text}</p>`}
          </div>
            
          `
 }
}

export { displayPointsandImage}