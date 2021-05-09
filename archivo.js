const PROBABILIDAD_LLUVIA = 0.25

const estaLLoviendo = () => Math.random()<=PROBABILIDAD_LLUVIA

var contador = 0 

do{
    contador++
}while(!estaLLoviendo())

console.log(`Tuve que ir ${contador} hasta encontrar lluvia`)