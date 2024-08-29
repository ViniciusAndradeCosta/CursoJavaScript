//calcular a area do circulo
//area = pi * raio * raio

const pi = Math.PI

const raio = 10

const area = pi * Math.pow(raio,2)

console.log('A area do circulo e: ', area.toFixed(2))

//fazendo a saida de um modo diferente

console.log(`Area do circulo: ${pi.toFixed(2)} * ${raio} * ${raio} = ${area.toFixed(2)}`)
