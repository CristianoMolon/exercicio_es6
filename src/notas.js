let alunos = [
    {Nome: 'Cristiano', Nota: 10},
    {Nome: 'Valeria', Nota: 6},
    {Nome: 'João', Nota: 4},
    {Nome: 'Walter', Nota: 5},
    {Nome: 'Carlinhos', Nota: 9}
]

const aprovados = alunos.filter((aluno) => { return aluno.Nota > 5})

console.log(aprovados);