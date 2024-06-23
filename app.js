let numeroSecreto = 0;
let intentos  =0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function AsignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
console.log(listaNumerosSorteados);
function VerificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario==numeroSecreto){ //El usuario acierta
        AsignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos==1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            AsignarTextoElemento('p','El numero secreto es menor');
        }else{
            AsignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        LimpiarCaja();
    }

    return;
}

function LimpiarCaja() {

    document.querySelector('#valorUsuario').value = '';
    return;
    
}

function GenerarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    //Si ya sorteamos toos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        AsignarTextoElemento('p','Ya se sortearon todos los numeros sorteados');

    }else{

    //Si el numnero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return GenerarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}
function CondicionesIniciales() {
    AsignarTextoElemento('h1','¡Juego del numero secreto!');
    AsignarTextoElemento('p',`¡Inidica el numero del 1 al 10 ${numeroMaximo}`);
    numeroSecreto = GenerarNumeroSecreto();
    intentos=1;
    console.log(numeroSecreto);
}

function ReiniciarJuego() {
    //limpiar la caja
    LimpiarCaja();

    //Indicar mensaje de intervalo de numeros/Generar el numero aleatorio/Inicializar el numero de intentos
    CondicionesIniciales();

    ///Deshabilitar el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}



CondicionesIniciales();