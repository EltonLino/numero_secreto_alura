function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

        preencherCampo('h1', "Acertou!");
        preencherCampo("p", `Parabéns! Você acertou o numero secreto com ${tentativas} ${palavraTentativa}`);
        chute = document.getElementById("reiniciar").removeAttribute("disabled");
    }else
        if(chute > numeroSecreto){
            preencherCampo("p", `O número secreto é menor que ${chute}`);
        } else{
            preencherCampo("p", `O número secreto é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
}

function preencherCampo(tag, texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function gerarNumeroAleatorio(){    
    let quantidadeNumerosNaLista = numerosSorteados.length;
    if (quantidadeNumerosNaLista == 100){
        numerosSorteados = [];
    }

    numeroEscolhido =  parseInt(Math.random() * 100 + 1);

    if (numerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }

}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciar() {
    limparCampo();
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    iniciarJogo();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}

function iniciarJogo() {
    preencherCampo("h1", "Jogo do número secreto");
    preencherCampo("p", "Escolha um número entre 1 e 100");   
}

let numerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
iniciarJogo();
console.log(numerosSorteados);