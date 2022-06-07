const alunos = [
	{
		nome: 'Beatriz',
		nota: 10,
		turma: '1B',
	},
	{
		nome: 'Sidney',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 5,
		turma: '2C',
	},
];

function alunosAprovados(alunos, media) {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		let {nota, nome} = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 6));