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
        this.eventoMouseDown = this.eventoMouseDown.bind(this);
        this.eventoMouseUp = this.eventoMouseUp.bind(this);
        this.nivel = 1;
    }

    iniciarJuego()
    {
        console.log('Metodo : iniciarJuego()');
        this.inicializar();
        this.siguienteNivel();
    }
    inicializar() 
    {
        console.log('Metodo : inicializar()');
        botonInicio.classList.add('hiden');
        this.subnivel = 0;
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
        console.log('Metodo : generarSecuencia()');
        this.numeros = new Array(this.nivel).fill(0).map(n=> Math.floor(Math.random()*4))
    }

    transformarSecuencia(numero)
    {
        console.log('Metodo : transformarSecuencia()');
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
        console.log('Metodo : siguienteNivel()');
        this.generarSecuencia();
        this.iluminarSecuencia();
        this.agregarEventosClick();
    }

    iluminarSecuencia()
    {
        console.log('Metodo : iluminarSecuencia()');
        for(let i = 0;i<this.nivel;i++)
        {
            const color = this.transformarSecuencia(this.numeros[i]);
            setTimeout(()=>this.iluminarColor(color),this.intervalo*2*i);
        }
        setTimeout(()=>this.agregarMouseDown(),1000 + this.intervalo*2*this.nivel);
    }
    
    iluminarColor(color)
    {
        console.log('Metodo : iluminarColor()');
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

    agregarMouseDown()
    {
        console.log('Metodo : agregarMouseDown()');
        this.agregarApuntador();
        this.colores.blueSection.onmousedown = this.eventoMouseDown;
        this.colores.redSection.onmousedown = this.eventoMouseDown;
        this.colores.greenSection.onmousedown = this.eventoMouseDown;
        this.colores.purpleSection.onmousedown = this.eventoMouseDown;
        this.colores.blueSection.onmouseup = this.eventoMouseUp;
        this.colores.redSection.onmouseup = this.eventoMouseUp;
        this.colores.greenSection.onmouseup = this.eventoMouseUp;
        this.colores.purpleSection.onmouseup = this.eventoMouseUp;
        this.colores.blueSection.onmouseleave = this.eventoMouseUp;
        this.colores.redSection.onmouseleave = this.eventoMouseUp;
        this.colores.greenSection.onmouseleave = this.eventoMouseUp;
        this.colores.purpleSection.onmouseleave = this.eventoMouseUp;
    }

    agregarApuntador()
    {
        console.log('Metodo : agregarApuntador()');
        this.colores.redSection.classList.add('apuntar');
        this.colores.blueSection.classList.add('apuntar');
        this.colores.greenSection.classList.add('apuntar');
        this.colores.purpleSection.classList.add('apuntar');
    }

    removerApuntadores()
    {
        console.log('Metodo : removerApuntadores()');
        this.colores.redSection.classList.remove('apuntar');
        this.colores.blueSection.classList.remove('apuntar');
        this.colores.greenSection.classList.remove('apuntar');
        this.colores.purpleSection.classList.remove('apuntar');
    }

    eventoMouseDown(ev)
    {
        console.log('Metodo : eventoMouseDown()');
        const COLOR_OBTENIDO = ev.target.dataset.color;
        this.hoverColor(COLOR_OBTENIDO);
    }
    removerMauseDown()
    {
        console.log('Metodo : removerMauseDown()');
        this.colores.blueSection.onmousedown = undefined;
        this.colores.redSection.onmousedown = undefined;
        this.colores.greenSection.onmousedown = undefined;
        this.colores.purpleSection.onmousedown = undefined;
    }
    eventoMouseUp(ev)
    {
        console.log('Metodo : eventoMouseUp()');
        const COLOR_OBTENIDO = ev.target.dataset.color;
        let colors = this.dataColorClase(COLOR_OBTENIDO);
        this.apagarColor(colors);
    }

    removerLeaveUp()
    {
        console.log('Metodo : removerLeaveUp()');
        this.colores.blueSection.onmouseup = undefined;
        this.colores.redSection.onmouseup = undefined;
        this.colores.greenSection.onmouseup = undefined;
        this.colores.purpleSection.onmouseup = undefined;
        this.colores.blueSection.onmouseleave = undefined;
        this.colores.redSection.onmouseleave = undefined;
        this.colores.greenSection.onmouseleave = undefined;
        this.colores.purpleSection.onmouseleave = undefined;
    }

    colorNormal(ev)
    {
        console.log('Metodo : colorNormal()');
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

    hoverColor(color)
    {
        console.log('Metodo : hoverColor()');
        switch(color)
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
        console.log('Metodo : apagarColor()');
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
        console.log('Metodo : agregarEventosClick()');
        this.colores.blueSection.addEventListener('click',this.elegirColor)
        this.colores.redSection.addEventListener('click',this.elegirColor)
        this.colores.greenSection.addEventListener('click',this.elegirColor)
        this.colores.purpleSection.addEventListener('click',this.elegirColor)
    }
    removerEventosClick()
    {
        console.log('Metodo : removerEventosClick()');
        this.colores.blueSection.removeEventListener('click',this.elegirColor)
        this.colores.redSection.removeEventListener('click',this.elegirColor)
        this.colores.greenSection.removeEventListener('click',this.elegirColor)
        this.colores.purpleSection.removeEventListener('click',this.elegirColor)
    }

    elegirColor(ev)
    {
        console.log('Metodo : elegirColor()');
        const COLOR_OBTENIDO = ev.target.dataset.color;
        var numero = this.trasformarColorNumero(COLOR_OBTENIDO);
        if(numero===this.numeros[this.subnivel])
        {
            if(this.subnivel===this.nivel-1)
            {
                this.resetearJuego();
                this.nivel++;
                setTimeout(()=>this.siguienteNivel(),500)
            } else
            {
                this.subnivel++;
            }
        } else
        {
            alert('YOU DIED');
            this.resetearJuego();
        }
    }

    dataColorClase(color)
    {
        console.log('Metodo : dataColorClase()');
        let colors;
        switch(color)
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
        return colors;
    }

    trasformarColorNumero(color)
    {
        console.log('Metodo : trasformarColorNumero()');
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

    resetearJuego()
    {
        console.log('Metodo : resetearJuego()');
        this.inicializar();
        this.removerLeaveUp();
        this.removerApuntadores();
        this.removerEventosClick();
        this.removerMauseDown();
    }
}

function empezarJuego()
{
    let juego = new Juego()
    juego.iniciarJuego();
}

function reiniciarJuego()
{
    let juego = new Juego();
    juego.resetearJuego();
    botonInicio.classList.remove('hiden')
}
