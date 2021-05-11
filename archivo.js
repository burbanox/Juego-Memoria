class Persona 
{
    constructor(nombre,apellido,altura)
    {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar()
    {
        console.log(`Hola soy ${this.nombre} ${this.apellido} y mido ${this.altura}`)
    }
}

class Desarrollador extends Persona 
{
    constructor(nombre,apellido,altura)
    {
        super(nombre,apellido,altura)
    }

    expertis()
    {
        var estatura;
        if(this.altura<1.80)
        {
            estatura = "soy chiquito"
        } else 
        {
            estatura = "soy grande"
        }
        console.log(`Hola soy ${this.nombre} ${this.apellido} ${estatura}`)
    }
}

var harold = new Desarrollador("Harold","Burbano",1.80)
var valentina = new Desarrollador("Valentina","Burbanoo",1.60)

harold.saludar()
harold.expertis()
valentina.saludar()
valentina.expertis()
