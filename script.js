function alerta (){
    alert ("Bem vindo(a)!");
}

alerta ()

let curiosidadeAtual = 0;
const curiosidades = [
    "Curiosidade: Jogo jogos de ritmo",
    "Curiosidade: Estudo japonês",
    "Curiosidade: Estou adorando aprender JavaScript",
    "Curiosidade: Estudo gastronomia no IFSC",
    "Curiosidade: Pratico Kyudo (arqueria tradicional japonesa)"
]
function alterarTexto(){
let curiosidadeNova = document.getElementById("curiosidade");

    curiosidadeNova.textContent = curiosidades[curiosidadeAtual];
    curiosidadeAtual = (curiosidadeAtual + 1) % curiosidades.length;

}

