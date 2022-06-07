function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Beatriz',
	idade: 24,
};

const pessoa2 = {
	nome: 'Sidney',
	idade: 27,
};

const pessoa3 = {
	nome: 'Cristiane',
	idade: 44,
};

console.log(calculaIdade.call(pessoa3, 40));
console.log(calculaIdade.apply(pessoa2, [24]));
console.log(calculaIdade.call(pessoa1, 20));