const API_URL = 'https://swapi.dev/api/';
var respuesta = prompt("Escribe : objeto/id");

console.log("hola".green)

function comprobarRespuesta(palabra)
{
    var p = palabra.indexOf('/') + 1;
    var comprobacion = false;
    if(p!=0)
    {
        var objeto = palabra.substr(0,p)
        if(objeto==="people/" || objeto==="starships/" || objeto==="planets/")
        {
            var regex = /.*[0-9]+\/$/;
            if(regex.test(palabra))
            {
                console.log('true')
                comprobacion = true;
            }
        }
    }

    if(comprobacion)
    {
        return true
    }else 
    {
        return false
    }
}

function buscarPersonaje(entrada)
{
    if(comprobarRespuesta(entrada))
    {
        var url = API_URL + entrada
        var obj = { crossDomain : true }
        $.get(url,obj,function(data)
        {
            console.log(`Esta id se trata de : ${data.name}`)
        })
    }
    else
    {
        console.log("comando mal escrito")
    }
}

buscarPersonaje(respuesta)