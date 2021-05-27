const botonInicio = document.getElementById('start-button');
const redSection = document.getElementById('red-section');
const greenSection = document.getElementById('green-section');
const blueSection = document.getElementById('blue-section');
const purpleSection = document.getElementById('purple-section');

class Juego 
{
    constructor()
    {
        this.elegirColor = this.elegirColor.bind(this); 
        this.hoverColor = this.hoverColor.bind(this);
        this.colorNormal = this.colorNormal.bind(this);
        this.resetearBotones = this.resetearBotones.bind(this);
    }
    iniciarJuego()
    {
        this.inicializar();
        this.generarSecuencia();
        this.siguienteNivel();
    }
    inicializar() 
    {
        botonInicio.classList.add('hiden');
        this.nivel = 1;
        this.colores = 
        {
            redSection,
            greenSection,
            blueSection,
            purpleSection
        }
        this.intervalo = 500; //intervalo entre encedido y apagado de colores
    }
    resetearBotones()
    {
        console.log('removiendo hover ')
        this.colores.blueSection.onmouseover = undefined;
        this.colores.redSection.onmouseover = undefined;
        this.colores.greenSection.onmouseover = undefined;
        this.colores.purpleSection.onmouseover = undefined;
    }
    generarSecuencia() 
    {
        this.numeros = new Array(10).fill(0).map(n=> Math.floor(Math.random()*4))
    }

    transformarSecuencia(numero)
    {
        switch(numero)
        {
            case 0 :
                return 'redSection';
            case 1 :
                return 'greenSection';
            case 2 :
                return 'blueSection';
            case 3 :
                return 'purpleSection';
        }
    }

    siguienteNivel()
    {
        this.iluminarSecuencia();
        this.agregarEventosClick();
    }

    iluminarSecuencia()
    {
        for(let i = 0;i<this.nivel;i++)
        {
            const color = this.transformarSecuencia(this.numeros[i]);
            setTimeout(()=>this.iluminarColor(color),this.intervalo*2*i);
        }
        setTimeout(()=>this.agregarHover(),1000 + this.intervalo*2*this.nivel);
    }
    
    iluminarColor(color)
    {
        switch(color)
        {
            case 'redSection':
                this.colores[color].classList.add('sombreado-rojo');
                break;
            case 'greenSection':
                this.colores[color].classList.add('sombreado-verde');
                break;
            case 'blueSection':
                this.colores[color].classList.add('sombreado-azul');
                break;
            case 'purpleSection':
                this.colores[color].classList.add('sombreado-purpura');
                     break;
        }
        setTimeout(()=>this.apagarColor(color),this.intervalo);
    }

    agregarHover()
    {
        this.colores.blueSection.onmouseover = this.hoverColor;
        this.colores.redSection.onmouseover = this.hoverColor;
        this.colores.greenSection.onmouseover = this.hoverColor;
        this.colores.purpleSection.onmouseover = this.hoverColor;
        this.colores.blueSection.onmouseout = this.colorNormal
        this.colores.redSection.onmouseout = this.colorNormal
        this.colores.greenSection.onmouseout = this.colorNormal
        this.colores.purpleSection.onmouseout = this.colorNormal
    }

    colorNormal(ev)
    {
        const COLOR = ev.target.dataset.color;
        let colors;
        switch(COLOR)
        {
            case 'rojo':
                colors = 'redSection';
                break;
            case 'verde':
                colors = 'greenSection';
                break;
            case 'azul':
                colors = 'blueSection';
                break;
            case 'morado':
                colors = 'purpleSection';
                 break;
        }
        this.apagarColor(colors)
    }

    hoverColor(ev)
    {
        console.log('se esta haciendo hover sobre un elemento')
        const COLOR = ev.target.dataset.color
        switch(COLOR)
        {
            case 'rojo':
                this.colores.redSection.classList.add('sombreado-rojo');
                break;
            case 'verde':
                this.colores.greenSection.classList.add('sombreado-verde');
                break;
            case 'azul':
                this.colores.blueSection.classList.add('sombreado-azul');
                break;
            case 'morado':
                this.colores.purpleSection.classList.add('sombreado-purpura');
                break;
        }

    }

    apagarColor(color)
    {
        switch(color)
        {
            case 'redSection':
                this.colores[color].classList.remove('sombreado-rojo');
                break;
            case 'greenSection':
                this.colores[color].classList.remove('sombreado-verde');
                break;
            case 'blueSection':
                this.colores[color].classList.remove('sombreado-azul');
                break;
            case 'purpleSection':
                this.colores[color].classList.remove('sombreado-purpura');
                     break;
        }
    }

    agregarEventosClick()
    {
        this.colores.blueSection.addEventListener('click',this.elegirColor)
        this.colores.redSection.addEventListener('click',this.elegirColor)
        this.colores.greenSection.addEventListener('click',this.elegirColor)
        this.colores.purpleSection.addEventListener('click',this.elegirColor)
    }

    elegirColor(ev)
    {
        const COLOR_OBTENIDO = ev.target.dataset.color;
        var numero = this.trasformarColorNumero(COLOR_OBTENIDO);
    }

    trasformarColorNumero(color)
    {
        switch(color)
        {
            case 'rojo' :
                return 0;
            case 'verde' :
                return 1;
            case 'azul' :
                return 2;
            case 'morado' :
                return 3;
        }
    }
}

function empezarJuego()
{
    let juego = new Juego();
    juego.iniciarJuego();
}

function reiniciarJuego()
{
    let juego = new Juego();
    juego.inicializar();
    juego.resetearBotones();
    botonInicio.classList.remove('hiden');
}
