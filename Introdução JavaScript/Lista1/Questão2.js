//numero aletorio de 0 a 100 e imprimir o sucessor e o antecessor 

parseInt()

const aleatorio = parseInt(Math.random() * 100)

const sucessor = aleatorio + 1
const antecessor = aleatorio - 1

console.log ('Numero aleatorio de 0 a 100: ', aleatorio)
console.log ('Numero antecessor do numero aleatorio: ', antecessor)
console.log ('Numero sucessor do numero aleatorio: ', sucessor)
