// BOTÃO

function clicou(){

    alert("🌱 Bem-vindo ao Agrinho 2026!");

}

// TÍTULO ANIMADO

const frases = [

    "🌱 AGRINHO 2026",
    "🚜 Agro Forte",
    "🌍 Futuro Sustentável",
    "💧 Preserve a Natureza"

];

let i = 0;

setInterval(() => {

    document.getElementById("titulo").innerHTML =
    frases[i];

    i++;

    if(i >= frases.length){

        i = 0;

    }

},3000);

// CONTADOR

let numero = 0;

setInterval(() => {

    numero += 1;

    document.getElementById("numero").innerHTML =
    numero + "+";

},100);

// RELÓGIO

function atualizarRelogio(){

    const agora = new Date();

    document.getElementById("relogio").innerHTML =
    agora.toLocaleTimeString("pt-BR");

}

setInterval(atualizarRelogio,1000);
// Ação do botão Água
const botaoAgua = document.getElementById("botao-agua");

botaoAgua.addEventListener("click", () => {

    // Exemplo 1: mostrar alerta
    alert("💧 Lembre-se de economizar água no campo!");

    // Exemplo 2: mudar cor do card quando clicado
    botaoAgua.parentElement.style.background = "#a2d5f2";

    // Exemplo 3: atualizar contador de água
    let contadorAgua = botaoAgua.getAttribute("data-contador") || 0;
    contadorAgua = parseInt(contadorAgua) + 1;
    botaoAgua.setAttribute("data-contador", contadorAgua);
    botaoAgua.innerText = `Clique Aqui (${contadorAgua})`;

});
