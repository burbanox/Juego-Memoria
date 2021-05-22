const botonInicio = document.getElementById('start-button');
const redSection = document.getElementById('red-section');
const greenSection = document.getElementById('green-section');
const blueSection = document.getElementById('blue-section');
const purpleSection = document.getElementById('purple-section');

class Juego 
{
    constructor()
    {
        this.inicializar();
    }

    inicializar() 
    {
        botonInicio.classList.add('hiden');
    }
}

function empezarJuego()
{
    var juego = new Juego()
}

function reiniciarJuego()
{
    botonInicio.classList.remove('hiden')
}