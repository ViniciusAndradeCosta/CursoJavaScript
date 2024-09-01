//O salário bruto. Quantia paga ao INSS(10%). Quantia para o sindicato(2%). Quantia para o imposto de renda(15%). O salário líquido.


const promptSync = require("prompt-sync")

const input = promptSync()

parseFloat()

const salarioHora = parseFloat(input("Quanto você ganha por hora?: "))
const horasTrabalhadas = parseFloat(input("Informe suas horas trabalhadas no mês: "))

const salarioBruto = salarioHora * horasTrabalhadas
const INSS = salarioBruto * 0.10
const sindicato = salarioBruto * 0.02
const impostoDeRenda = salarioBruto * 0.15
const salarioLiquido = salarioBruto - INSS - sindicato - impostoDeRenda

console.log("Salario Bruto: ", salarioBruto.toFixed(2))
console.log("Quantia paga ao INSS: ", INSS.toFixed(2))
console.log("Quantia paga ao sindicato: ", sindicato.toFixed(2))
console.log("Qauntia paga de Imposto de Renda: ", impostoDeRenda.toFixed(2))
console.log("Salario Liquido: ", salarioLiquido.toFixed(2))
