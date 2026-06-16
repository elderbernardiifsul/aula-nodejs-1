//modula que encapsula as operacoes da calculadora

let msg = 'A calculadora está iniciando...';

console.log('$ '+msg);

function soma(a,b){
    return a+b;
}

function sub(a,b){
    exibirResultado(a-b);
    return a-b;
}

function exibirResultado(resultado){
    console.log("O resultado da função é: "+resultado)
}

console.log('$ ' + 'Terminou de carregar o módulo');

module.exports = {
    soma,
    sub
}