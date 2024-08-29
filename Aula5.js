//metodos de string e number

const nome = 'Vinicius Andrade' //string
console.log(typeof nome)

//retornar o tamanho da string //se tiver dois nomes e o espaco, o espaco e contabilizado
const tamanho = nome.length
console.log('Tamanho da string: ', tamanho)

//retorna true se tiver a letra na string e falso se nao tiver

console.log(nome.includes('n'))
console.log(nome.includes('z'))

//concatena a variavel
const nomeCompleto = nome.concat(' Costa')
console.log(nomeCompleto)

//colocar string em caixa alta
console.log(nomeCompleto.toUpperCase())

//colocar string em letras minusculas
console.log(nomeCompleto.toLowerCase())

//casas decimais depois da virgula
const numero = 25.975421
const novoNumero = numero.toFixed(2)
console.log(novoNumero)
