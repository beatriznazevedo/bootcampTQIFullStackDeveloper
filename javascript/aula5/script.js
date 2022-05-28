function funcao() {
    console.log('Tudo certo');
}

funcao();

function mensagem(primeiro, segundo) {
    console.log(primeiro, segundo);
}

mensagem('Tudo', 'certo');

//declarativas
function funcaoDeclarativa() {
    console.log('mensagem de função declarativa')
}

funcaoDeclarativa();

//expressão com nomeação
var funcaoExpressao = function() {
    console.log('mensagem de função de expressão')
}

funcaoExpressao();

//arrou function
var funcaoArrow = () => {
    console.log('arrow function')
} 

funcaoArrow();
