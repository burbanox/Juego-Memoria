var sujeto = 
{
    nombre : "Carlos Jimenez",
    edad : 34,
    estatura : 1.90,
    peso : 80
}

function simulacion(persona,dias) 
{
    const PERDIDA_DIA = 0.65

    console.log(`Peson inicial : ${persona.peso}`)
    for (var i = 0; i < dias; i++) {
      var probabilidad = Math.random();
      if (probabilidad <= 0.33) {
        //Sube de peso
        persona.peso+=PERDIDA_DIA*Math.random()
      } else if (probabilidad <= 0.66) {
        //Baja de peso
        persona.peso-=PERDIDA_DIA*Math.random()
      }
      console.log(`Peso en el dia ${i} : ${persona.peso.toFixed(2)}kg`)
    }
    console.log(`Al final de ${dias} el peso de ${persona.nombre} es ${persona.peso.toFixed(2)}kg`)
}

simulacion(sujeto, 365)