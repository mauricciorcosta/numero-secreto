function validaChute(chute) {
    const numero = +chute;
    
    if (seChuteForInvalido(numero)) {
        elementoChute.innerHTML += "<div>Valor Inválido</div>"
        return
    }
    if (numeroForMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `
        <div>O número secreto precisa estar entre ${menorValor} e ${maiorValor} </div>
        `
        return
    }
    if (numero === numeroAleatorio) {
        document.body.innerHTML = `
        <h2>VOCÊ ACERTOU!</h2>
        <h3>O número secreto era ${numeroAleatorio}</h3>
        <button id="btnJogar" class="btn-jogar">Jogar Novamente</button>
        `
        const botao = document.getElementById("btnJogar");
        botao.addEventListener("click", () => {
            location.reload();
        })
    } else if (numero < numeroAleatorio) {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
        `
    }
    
}

function seChuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor;
}