const verde = document.getElementById("verde");
const vermelho = document.getElementById("vermelho");
const amarelo = document.getElementById("amarelo");
const azul = document.getElementById("azul");
const startButton = document.getElementById("start");

sequencia = [];
indiceSequencia = 0;

function pisca(x) {
  if (x === 0) {
    verde.style.backgroundColor = "white";
    setTimeout(() => {
      verde.style.backgroundColor = "green";
    }, 500);
  } else if (x === 1) {
    vermelho.style.backgroundColor = "white";
    setTimeout(() => {
      vermelho.style.backgroundColor = "red";
    }, 500);
  } else if (x === 2) {
    amarelo.style.backgroundColor = "white";
    setTimeout(() => {
      amarelo.style.backgroundColor = "yellow";
    }, 500);
  } else {
    azul.style.backgroundColor = "white";
    setTimeout(() => {
      azul.style.backgroundColor = "blue";
    }, 500);
  }
}

startButton.onclick = () => {
  loop();
};

function loop() {
    x = Math.floor(Math.random() * 4);
    sequencia.push(x);
    time = 0
    alert(sequencia)
    for (const y of sequencia) {
        time++
        setTimeout(() =>{
            pisca(y)
        }, 500 * time)
    }
    indiceSequencia = 0
}

// verde.onclick = () => {
//   if (sequencia[indiceSequencia] === 0) {
//     loop();
//   } else {
//     gameOver();
//   }
// };

// vermelho.onclick = () => {
//   if (sequencia[indiceSequencia] === 1) {
//     loop();
//   } else {
//     gameOver();
//   }
// };

// amarelo.onclick = () => {
//   if (sequencia[indiceSequencia] === 2) {
//     loop();
//   } else {
//     gameOver();
//   }
// };

// azul.onclick = () => {
//   if (sequencia[indiceSequencia] === 3) {
//     loop();
//   } else {
//     gameOver();
//   }
// };

const buttons = document.querySelectorAll(".button");

function validacao(event) {
  const id = event.target.id;
  if (id === "verde" && sequencia[indiceSequencia] === 0) {
    indiceSequencia++
    alert(indiceSequencia)
    loop();
  } else if (id === "vermelho" && sequencia[indiceSequencia] === 1) {
    indiceSequencia++
    alert(indiceSequencia)
    loop();
  } else if (id === "amarelo" && sequencia[indiceSequencia] === 2) {
    indiceSequencia++
    alert(indiceSequencia)
    loop();
  } else if (id === "azul" && sequencia[indiceSequencia] === 3) {
    indiceSequencia++
    alert(indiceSequencia)
    loop();
  } else {
    gameOver()
  }
}

for (const button of buttons) {
  button.onclick = validacao;
}

function gameOver() {
  alert("game over");
  sequencia = [];
  indiceSequencia = 0;
}
