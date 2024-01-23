
let listaNumerosSorteados = [];
let numeroSecreto = 0
let contador = 1
let numeroMaximo = 10

console.log(numeroSecreto)

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto
    return;
}

function verificarIntento(){
    let numeroDeUsuario =  parseInt(document.getElementById('valorUsurio').value);
    

    if(numeroDeUsuario === numeroSecreto){
       asignarTextoElemento('p', `Muy bien, acertaste en ${contador} ${contador ===1 ? 'intento': 'intentos'}`) 
       document.getElementById('reiniciar').removeAttribute("disabled")
    }else if(numeroDeUsuario>numeroSecreto){
        //el usuario no acerto
        asignarTextoElemento('p', 'El numero secreto es menor')
    }else{
        asignarTextoElemento('p', ' El numero secreto es mayor')
    }
        limpiarBox()
        contador++
    console.log(contador)

    return;
}
function mensajesIniciales(){
    asignarTextoElemento('h1', "numero Secreto")
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`)
    
}

function reiniciarJuego(){
    //limpiar caja
    limpiarBox()
    //indicar mensaje de inicio
    mensajesIniciales()
    //generar el numero aleatorio
    numeroSecreto=generarNumeroSecreto()
    //inicializar el numero de intentos
    contador = 1
    //deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true')
}
function limpiarBox(){
   document.querySelector('#valorUsurio').value='';

}

function generarNumeroSecreto() {
    let numeroSecreto = parseInt(Math.random()*numeroMaximo+1)

    console.log(numeroSecreto)
    console.log(listaNumerosSorteados)

    // ya se sortiaron todos los numeros 
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p', ' Ya se sortearon todos los numeros posibles')
    }else{
        // si el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroSecreto)){
            return generarNumeroSecreto()
    
        }else{
            listaNumerosSorteados.push(numeroSecreto)
            return numeroSecreto
        }
    }


    return numeroSecreto;
}

mensajesIniciales()