let listaLenguajes = ['kotlin', 'python',"JavaScript"]
let tamanoLista = listaLenguajes.length-1

listaLenguajes.push('c++')


// function vistaEnConsola(e){
   
//     console.log(e)
// }

function arregloInverso (listaLenguajes){

    for (let i= listaLenguajes.length-1; i>=0; i--){
     console.log(listaLenguajes[i])
        
    }
}

arregloInverso(listaLenguajes)