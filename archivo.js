function heredar(padre,hijo)
{
    hijo.prototype = padre.prototype
    hijo.prototype = new padre
    hijo.prototype.constructor = hijo
}

function Persona(nombre,apellido, altura) 
{
    this.nombre = nombre
    this.apellido = apellido
    this.altura
    this.especie = "Humano"
}

heredar(Persona,Desarrollador)

Persona.prototype.soyAlto = function()
{
    if(this.altura<1.80)
    {
        console.log(`Yo ${this.nombre} ${this.apellido} no soy alto porque mido ${this.altura}`)
    } else 
    {
        console.log(`Yo ${this.nombre} ${this.apellido} soy alto porque mido ${this.altura}`)
    }
}

Persona.prototype.saludar = function()
{
    console.log(`Hola soy ${this.nombre} ${this.apellido} y soy celestina`)
}

function Desarrollador(nombre,apellido,estatus) 
{
    this.nombre = nombre
    this.apellido = apellido
    this.estatus = estatus
}

heredar(Persona,Desarrollador)

Desarrollador.prototype.saludar = function()
{
    console.log(`Hola soy ${this.nombre} ${this.apellido} y soy ${this.estatus}`)
}

var andrea  = new Desarrollador("Andrea","Rodriguez","senior")

andrea.saludar()
andrea.altura = 1.80
andrea.soyAlto()
console.log(`Soy ${andrea.especie}`)

