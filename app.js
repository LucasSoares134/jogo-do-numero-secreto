





//let titulo = document.querySelector('h1');//"vai lá no documento e pega o h1"
//titulo.innerHTML = 'Jogo do número secreto';
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
//--------------------REVER LISTA E FUNÇÃO ATÉ MAXIMIZAR!!!!!!!!!! fazer desafios referentes a eles e mais exercicio até maximizar!!!!!!!!!BORA BORA BOTAR PRA FUDER PORRA!!!!!--------------------
let listaDeNumeroSorteados = [];
let numeroLimite =10;
//sempre iniciar a lista, antes de tudo, para não dar erro. Criando a lista vazia, antes de chamar o numero, não dá erro
//(particularidade do java script)
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextiNaTela(tag,texto){//Criando um método, onde, dependendo dos parametros passados, vai realizar uma ação.
let campo = document.querySelector(tag);
    campo.innerHTML = texto;//função de código, onde cada linha faz algo, dependendo do paremetro que for passado , ao chamar a função
responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2} );
}
function exibirMensagemInicial(){

    exibirTextiNaTela("h1","Jogo do número secreto");
    exibirTextiNaTela("p","Escolha um número entre 1 e 10");
}
exibirMensagemInicial();


//trecho de código realiza uma determinada ação. 

//[]-forma do array.**length - Tamanho da lista(quantidade de elementos). Indice da lista, sempre começa com 0. segue a sintaxe
//let nomeArray['1','2','3']........Se eu quiser cahmar nomeArray[0]- chamaria o numero 1
//[nomeArray.length - 1]- traz o ultimo elemento da lista.

function verificarChute(){//padrão de estrutura// chamando uma função.

    let chute = document.querySelector("input").value;//péga somente o valor, dentro de input
    console.log(chute == numeroSecreto);//comparando os valores e exibindo o valor em boleano...
    if (chute == numeroSecreto){
        exibirTextiNaTela("h1", "Acertou");
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextiNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");

    }
    else{
        if(chute > numeroSecreto){
            exibirTextiNaTela("p", "O numero secreto é menor");

    }
        else{
            exibirTextiNaTela("p", "O numero secreto é maior");
        }
tentativas++;
limparCampo();
    }


}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);//return, para retornar o valor e poder ser chamado lá em cima, na chamada da função.
let quantidadeDeElementoNaLista = listaDeNumeroSorteados.length;
if (quantidadeDeElementoNaLista==numeroLimite){
    quantidadeDeElementoNaLista = [];
}
    if(listaDeNumeroSorteados.includes(numeroEscolhido)){//verifica se o elemento está na lista (array)
return gerarNumeroAleatorio();
}    else{
    listaDeNumeroSorteados.push[numeroEscolhido];//PUSH- ADICIONA PARA O ULTIMO ESPAÇO DISPONIVEl//".pop" -> tira o ultimo elemento inserido//adiciona um novo numero na lista
    console.log(listaDeNumeroSorteados);
    return numeroEscolhido;//pegar o numero sorteado e gravar no array, impedido de repitir e gerando um novo numero.
}
}//no java script, você pode criar o metódo de chamar no começo, não dá problema. TRADUZINDO, quando chamar a função e passa o retorno, ao ser chamada, que é o número aleatório..............

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio;
    limparCampo;
    tentativas = 1;
  exibirMensagemInicial();
  document.getElementsById("reiniciar").setAttribute("disabled",true);

}