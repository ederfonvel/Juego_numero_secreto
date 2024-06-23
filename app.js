let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numerMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function veririficarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    //consola de log para verificacion
    console.log(numeroDeUsuario === numeroSecreto);
    console.log(numeroSecreto);
    console.log(intentos);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p','Acertaste en ' + intentos + (intentos === 1 ? ' vez' : ' veces'));

        //remueve atributo disable del boton nuevo juego
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {

        //el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es Menor.');
        } else {
            asignarTextoElemento('p','El numero secreto es Mayor.');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

//limpia cada de numero
function limpiarCaja() {
    // let limpiar = document.querySelector('#valorUsuaro');
    // limpiar.value = '';

    document.querySelector('#valorUsuario').value = '';
}

//genera numero aleatorio
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numerMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos los numeros
    if(listaNumerosSorteados.length == numerMaximo){
        asignarTextoElemento('p','Ya se sortearon todo los numeros. Presiona F5 para continuar.')
    } else {
        //si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    // listaNumerosSorteados.push() = Math.floor(Math.random()*10)+1;
    // return Math.floor(Math.random()*10)+1;
}


function condicionesIniciales() {
    //funcion que cambia los mensajes para H! y P del juego
    asignarTextoElemento('h1', 'Juego de número secreto. !');
    asignarTextoElemento('p', `Indica un número de 1 a ${numerMaximo}`);
    document.querySelector('#reiniciar').setAttribute('disabled',true);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


//reinicia el juego
function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio / generar numero aleatorio / inicializar numeros de intentos
    condicionesIniciales();
    //deshabilitar boton de reiniciar juego


}

condicionesIniciales();

