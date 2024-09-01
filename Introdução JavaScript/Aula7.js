//entrada de dados pelo teclado

//prompt-sync
//npm gerenciador de depencias do node
//npm i nome da biblioteca 


//Entrada de dados pelo teclado
const promptSync = require("prompt-sync")

const input = promptSync()

parseFloat()

const numero = parseFloat(input("Digite o valor que voce queira guardar na variavel numero: "))
console.log(numero)

const segundoNumero = parseFloat(input("Digite o valor para guardar na segunda variavel numero: "))
console.log(segundoNumero)

const media = (numero + segundoNumero) / 2
console.log("O valor da média: ", media)
