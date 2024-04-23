alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
//A função parseInt() analisa um argumento string e retorna um inteiro na base especificada.
//A função Math.random() é usado para retornar um número pseudoaleatório de ponto flutuante entre 0 e 1(exclusivo)
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

//enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e 100`); 
    if(numeroSecreto == chute ) {
        break;
    }
    else {
        if(numeroSecreto > chute){
            alert(`O número secreto é maior que ${chute}`);
        } else{
            alert(`O número secreto é menor que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;    
    }
}
// Operador ternário, mesma coisa que IF e Else
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto, ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//if(tentativas > 1) {
//    alert(`Isso ai! Você descobriu o número secreto, ${numeroSecreto} com ${tentativas} tentativas`);
//}else {
//    alert(`Isso ai! Você descobriu o número secreto, ${numeroSecreto} com ${tentativas} tentativa`);
//}
