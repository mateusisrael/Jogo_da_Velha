// Obs: SEPARARA em módulos diferentes as declarações da lógica.

// Variáveis:
/*
var q1 = document.querySelector("#q1").addEventListener('click', () => { jogada("q1") });
var q2 = document.querySelector("#q2").addEventListener('click', () => { jogada("q2") });

*/



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


tabuleiro.q1.addEventListener('click', () => { jogada(q1) });
tabuleiro.q2.addEventListener('click', () => { jogada(q2) });
tabuleiro.q3.addEventListener('click', () => { jogada(q3) });
tabuleiro.q4.addEventListener('click', () => { jogada(q4) });
tabuleiro.q5.addEventListener('click', () => { jogada(q5) });
tabuleiro.q6.addEventListener('click', () => { jogada(q6) });
tabuleiro.q7.addEventListener('click', () => { jogada(q7) });
tabuleiro.q8.addEventListener('click', () => { jogada(q8) });
tabuleiro.q9.addEventListener('click', () => { jogada(q9) });





// Lógica
function jogada(quad_clicado) {
    console.log(quad_clicado);
    jogadas++;
    
    
    if (jogadas % 2 == 0) {
        // console.log("O valor da jogada é PAR. JOGADAS:", jogadas);
        quad_clicado.style.backgroundColor = "blue";
 

    } else if (jogadas % 2 != 0) {
        // console.log("O valor da jogada é IMPAR. JOGADAS:", jogadas);
        quad_clicado.style.backgroundColor = "red";

    }

}



function checarFimDeJogo() {

}

function fimDeJogo() {

}
