const menorValor = 0;
const maiorValor = 100;
const numeroAleatorio = generateRandom();

function generateRandom() {
    return parseInt(Math.random() * maiorValor + 1);
}

const elementoMenorValor = document.getElementById("menor-valor");
elementoMenorValor.innerHTML = menorValor;
const elementoMaiorValor = document.getElementById("maior-valor");
elementoMaiorValor.innerHTML = maiorValor;


console.log(numeroAleatorio);