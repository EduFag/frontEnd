const verde = document.getElementById("verde");
const vermelho = document.getElementById("vermelho");
const amarelo = document.getElementById("amarelo");
const azul = document.getElementById("azul");
const startButton = document.getElementById("start");
const buttons = document.querySelectorAll(".button");
const som = document.getElementById("som")
const gameOverSom = document.getElementById("gameover")
const score = document.getElementById("score")

        let sequencia = [];
        let indiceJogador = 0;
        let pontos = 0;

        function pisca(botao) {
            if (botao === 0) {
                botao = verde;
            } else if (botao === 1) {
                botao = vermelho;
            } else if (botao === 2) {
                botao = amarelo;
            } else {
                botao = azul;
            };
            const originalColor = botao.style.background;
            som.play();
            botao.style.background = "white";
            setTimeout(() => {
                botao.style.background = originalColor;
            }, 300);
        }

        function geraNovaSequencia() {
            const novaCor = Math.floor(Math.random() * 4);
            sequencia.push(novaCor);
        }

        function mostraSequencia() {
            let delay = 0;
            for (let i of sequencia) {
                setTimeout(() =>{
                    pisca(i)
                }, delay);
                delay += 700;
            }
        }

        function iniciarJogo() {
            sequencia = [];
            indiceJogador = 0;
            geraNovaSequencia();
            mostraSequencia();
        }

        function validarJogada(cor) {
            if (cor === sequencia[indiceJogador]) {
                indiceJogador++;
                if (indiceJogador === sequencia.length) {
                    indiceJogador = 0;
                    pontos++;
                    score.innerHTML = "Nível: " + pontos;
                    geraNovaSequencia();
                    setTimeout(mostraSequencia, 1500);
                }
            } else {
                gameOver();
            }
        }

        function gameOver() {
            pontos = 0;
            gameOverSom.play();
            score.innerHTML = "Nível: " + pontos;
        }

        startButton.onclick = iniciarJogo

        function confereBotao(event) {
            const id = event.target.id;
            if (id === "verde") {
                pisca(0);
                validarJogada(0);
              } else if (id === "vermelho") {
                pisca(1);
                validarJogada(1);
              } else if (id === "amarelo") {
                pisca(2);
                validarJogada(2);
              } else {
                pisca(3);
                validarJogada(3);
        }
    }

        for (let button of buttons) {
            button.onclick = confereBotao;
        }