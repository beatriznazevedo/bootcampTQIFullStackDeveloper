/*
function comparaNumeros(num1, num2) {
     
    const saoIguais = num1 === num2;
    const soma = num1 + num2;

    if (saoIguais) {
        return "São Iguais"
    }

    return "Não são iguais";
    
    // IF TERNÁRIO
    return saoIguais ? "São iguais" : "Não são iguais";
    
}
*/

function comparaNumeros(num1, num2) {
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}` ;
}

function criaPrimeiraFrase(num1, num2) {
    let primeiraFrase = `Os números ${num1} e ${num2}`;
    let saoIguais = 'não'; 

    if (num1 === num2) {
        saoIguais = '';
    }

    return `${primeiraFrase} ${saoIguais} são iguais.`;
};

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;
    let resultadoDez = 'menor';
    let resultadoVinte = 'menor';

    if (soma > 10) {
        comparaDez = 'maior';
    }

    if (soma > 20) {
        comparaVinte = 'maior';
    }

    return `Sua soma é ${soma}, que é ${comparaDez} que 10 e ${comparaVinte} que 20.`
}

console.log(comparaNumeros(10,20));