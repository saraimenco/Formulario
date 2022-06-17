var listanombre=[]
var listaapellido=[]
var listadireccion=[]

var arraynombre= [];
var arrayapellido= [];
var arraydireccion= [];


var leerinfo = function(){
    
    arraynombre= JSON.parse( localStorage.getItem('listanombre'))
    listanombre=arraynombre

    arrayapellido= JSON.parse( localStorage.getItem('listaapellido'))
    listaapellido=arrayapellido

    arraydireccion= JSON.parse( localStorage.getItem('listadireccion'))
    listadireccion=arraydireccion

    document.getElementById('infotabla').innerHTML='<tr><th scope="col">#</th><th scope="col">Nombre</th><th scope="col">Apellido</th><th scope="col">Dirección</th><th scope="col"> Eliminar</th></tr>'
    for (let index = 0; index < arraynombre.length; index++) { 
        document.getElementById('infotabla').innerHTML += 
        '<tbody><tr> <th scope="row">'+[index+1]+'</th><td>'
         +arraynombre[index]+'</td> <td>'+arrayapellido[index]+'</td> <td>'+arraydireccion[index]+
         '</td><td><button type="button" class="btn btn-outline-danger" onclick="eliminar('+ [index] +')" >Eliminar</button> </td></tr></tbody>'
            
    }
   
}


var guardar = function(){
    var datonombre= document.getElementById('nombre').value 
    listanombre.push(datonombre)
    localStorage.setItem('listanombre', JSON.stringify(listanombre))

    var datoapellido= document.getElementById('apellido').value
    listaapellido.push(datoapellido)
    localStorage.setItem('listaapellido', JSON.stringify(listaapellido))


    var datodireccion= document.getElementById('direccion').value
    listadireccion.push(datodireccion)
    localStorage.setItem('listadireccion', JSON.stringify(listadireccion))
    leerinfo()

}

var eliminar = function(indice){
    console.log(indice)
    listanombre.splice(indice,1)
    localStorage.setItem('listanombre', JSON.stringify(listanombre))

    listaapellido.splice(indice,1)
    localStorage.setItem('listaapellido', JSON.stringify(listaapellido))

    listadireccion.splice(indice,1)
    localStorage.setItem('listadireccion', JSON.stringify(listadireccion))

    leerinfo()
}

leerinfo()
