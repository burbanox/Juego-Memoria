const API_URL = 'https://swapi.dev/api/people/';

function obtenerDatos(id)
{
    const API_URL = 'https://swapi.dev/api/people/';
    var url = API_URL + id;
    var obj = {crossDomain : true}
    return new Promise((resolve,reject)=>
    {
        $.get(url,obj,(data)=>
        {
            resolve(data,id)
        }).fail(()=>reject(id))
    })
}

function obtenerPersonaje(id)
{
    obtenerDatos(id).then(saludar).catch(onError)
}

function saludar(personaje)
{
    console.log(`El id corresponde a : ${personaje.name}`)
}

function onError(id)
{
    console.log(`La id \#${id} no se encuentra registrada`);
}

function entrada()
{
    var id = prompt("Introduce el id de tu personaje : ");
    obtenerPersonaje(id);
}

function interactividad()
{
    var eleccion = true; 
    while(eleccion)
    {
        entrada()
        var respuesta = prompt("Deseas continuar ? : y/n")
        eleccion = respuesta==='y';
    }
}

interactividad();