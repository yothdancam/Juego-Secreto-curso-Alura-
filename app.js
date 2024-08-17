let numeroSecreto= 0;
let intentos = 0;
let numeroMaximo=10;
let listaNumerosSorteados=[];
function asignarTextoElemento(elemento,texto) {
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
 
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1; 

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sorteron todos los números posibles');
    }
    else{
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function elementosIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();
    intentos = 1;
    }

    function reiniciarJuego() {
        elementosIniciales();
        limpiarCaja();
        document.getElementById('reiniciar').setAttribute('disabled', 'true');
      
    }
elementosIniciales();



