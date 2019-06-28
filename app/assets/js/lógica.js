// Obs: SEPARAR em módulos diferentes as declarações da lógica.

// Variáveis:

var tabuleiro = {
    q1: document.querySelector("#q1"),
    q2: document.querySelector("#q2"),
    q3: document.querySelector("#q3"),
    q4: document.querySelector("#q4"),
    q5: document.querySelector("#q5"),
    q6: document.querySelector("#q6"),
    q7: document.querySelector("#q7"),
    q8: document.querySelector("#q8"),
    q9: document.querySelector("#q9"),
}

var jogadas = 0;

var jogador1 = {
    nome: "jogador1",
    cor: "blue"
}
jogador1.jogadas = [];

var jogador2 = {
    nome: "jogador2",
    cor: "red"
}
jogador2.jogadas = [];


tabuleiro.q1.ja_clicado = false; tabuleiro.q2.ja_clicado = false;
tabuleiro.q3.ja_clicado = false; tabuleiro.q4.ja_clicado = false;
tabuleiro.q5.ja_clicado = false; tabuleiro.q6.ja_clicado = false;
tabuleiro.q7.ja_clicado = false; tabuleiro.q8.ja_clicado = false;
tabuleiro.q9.ja_clicado = false;

tabuleiro.q1.addEventListener('click', () => { verificarPosicao(q1) });
tabuleiro.q2.addEventListener('click', () => { verificarPosicao(q2) });
tabuleiro.q3.addEventListener('click', () => { verificarPosicao(q3) });
tabuleiro.q4.addEventListener('click', () => { verificarPosicao(q4) });
tabuleiro.q5.addEventListener('click', () => { verificarPosicao(q5) });
tabuleiro.q6.addEventListener('click', () => { verificarPosicao(q6) });
tabuleiro.q7.addEventListener('click', () => { verificarPosicao(q7) });
tabuleiro.q8.addEventListener('click', () => { verificarPosicao(q8) });
tabuleiro.q9.addEventListener('click', () => { verificarPosicao(q9) });



// Lógica
function verificarPosicao(quadrado_clicado) {

    if (quadrado_clicado.ja_clicado == false) {
        checarQuemFazAJogada(quadrado_clicado);
        // console.log('Jogada Permitida');

    } else if (quadrado_clicado.ja_clicado == true) {
        bloquearJogada();
    }

    quadrado_clicado.ja_clicado = true;
}

function checarQuemFazAJogada(quadrado_clicado) {
    
    if (jogadas % 2 == 0) {
        // quadrado_clicado.style.backgroundColor = "blue";
        fazerJogada(jogador1, quadrado_clicado);
 

    } else if (jogadas % 2 != 0) {
        // quadrado_clicado.style.backgroundColor = "red";
        fazerJogada(jogador2, quadrado_clicado);

    }

    jogadas++;
}


function fazerJogada(jogador, quadrado_clicado) {

    if (jogador == jogador1) {
        quadrado_clicado.style.backgroundColor = jogador1.cor;
        registrarJogada(jogador1, quadrado_clicado);

    } else if (jogador == jogador2) {
        quadrado_clicado.style.backgroundColor = jogador2.cor;
        registrarJogada(jogador2, quadrado_clicado);
    }

}

function registrarJogada(jogador, quadrado) {

    jogador.jogadas.push(quadrado.id);
    // console.log(jogador.nome, jogador.jogadas);

    checarVitoria(jogador.jogadas);
}

function bloquearJogada() {
    alert("Jogada não permitida!")
}

function checarVitoria(jogadas) {

}

function checarFimDeJogo() {
    // Empate
}

function fimDeJogo() {

}
