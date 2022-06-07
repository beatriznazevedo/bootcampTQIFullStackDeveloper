/* Links Auxiliares

OBJETO ERROR: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error

INSTANCEOF: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof

TYPEOF: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof

TRY..CATCH: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch

*/

function validaArrays(arr, num) {
	try {
		if (!arr && !num) throw new ReferenceError('Envie os parâmetros.');

		if (typeof arr !== 'object')
			throw new TypeError('Precisa ser um elemento do tipo Object.');

		if (typeof num !== 'number')
			throw new TypeError('Precisa ser um elemento do tipo Number.');

		if (arr.length !== num) throw new RangeError('Tamanho inválido.');

		return arr;
	} 

    catch (e) {
		if (e instanceof RangeError) {
			console.log('RangeError');
			console.log(e.message);
		} else if (e instanceof ReferenceError) {
			console.log('ReferenceError');
			console.log(e.message);
        } else if (e instanceof TypeError) {
			console.log('TypeError');
			console.log(e.message);
		} else {
			console.log('Erro não esperado:' + e);
			console.log(e.message);
		}
	}
}

console.log(validaArrays([1, 2, 3], 5));