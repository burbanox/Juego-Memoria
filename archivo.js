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

async function obtenerPersonaje(arreglo)
{
    var promesas = arreglo.map(id => obtenerDatos(id))
    var personajes;
    try
    {
        personajes = await Promise.all(promesas);
        imprimirPersonajes(personajes,arreglo);
    }catch(id)
    {
        onError(id)
    }
}

function onError(id)
{
    console.log(`La id \#${id} no se encuentra registrada`);
}

function entrada()
{
    var id = prompt("Introduce el id de tu personaje : ");
    return id;
}

function imprimirPersonajes(arr,arr_id) 
{
    for(var i = 0;i<arr.length;i++)
    {
        console.log(`${arr_id[i]} : ${arr[i].name}`)
    }
}

function interactividad()
{
    var eleccion = true; 
    var arr = [];
    while(eleccion)
    {
        arr.push(entrada())
        var respuesta = prompt("Deseas continuar ? : y/n")
        eleccion = respuesta==='y';
    }
    var personajes = obtenerPersonaje(arr);
}

interactividad();