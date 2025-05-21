//puxa o numero aleatorio para o jogo
let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//Função para exibir texto na tela
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag, texto);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

exibirTextoNaTela('h1', 'jogo do numero secreto');
exibirTextoNaTela('p', 'tente um numero de 1 a 100');

function verificarChute() {
    let chute = document.querySelector('input').value;

 //Acerto do numero secreto
    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentaivas' : 'tentativa'; 
        let mensagemTentativas = `Você acertou em ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

//erro do numero secreto
    }else{
        if(chute == numeroSecreto){
            exibirTextoNaTela('p', 'voce acertou o numero secreto')
        } else {
            (chute > numeroSecreto) ? exibirTextoNaTela('p', 'O número secreto é menor') : exibirTextoNaTela('p', 'O número secreto é maior');
        }
    }limparCampo();
    tentativas++;
}

//Gerador de numero aleatorio
function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosSorteados = listaDeNumerosSorteados.length;

    if (quantidadeDeNumerosSorteados == numeroLimite)
        listaDeNumerosSorteados = [];{
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
        
    }

}
//limpar a caixa de texto
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

//reiniciar o jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Tente um número de 1 a 10');
    document.getElementById('reiniciar').setAttribute('disabled', 'disabled');
    limparCampo();
        
    }