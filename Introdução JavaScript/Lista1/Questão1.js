//metros -> decimetros, centimetros e milimetros

const promptSync = require("prompt-sync")

const input = promptSync()

parseFloat()

const metro = parseFloat(input("Digite o valor em metro que você quer transformar: "))

const decimetros = metro * 10
const centimetros = metro * 100
const milimetros =  metro * 1000

console.log("Metro em decimetros: ", decimetros)
console.log("Metro em centimetros: ", centimetros)
console.log("Metro em milimetros: ", milimetros)
