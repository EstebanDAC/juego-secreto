let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeromaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function Verificarintento() {
let numeroDeUsuario = parseInt(document.getElementById('ValorUsuario').value);

if(numeroDeUsuario === numeroSecreto) {
 asignarTextoElemento('p', `Excelente acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
 document.getElementById('reiniciar').removeAttribute('disabled');
} else {
    if(numeroDeUsuario > numeroSecreto) {
 asignarTextoElemento('p','el numero secreto es menor');
 
} else {
       asignarTextoElemento('p','el numero secreto es mayor');
   
   }
   intentos++;
   borrar();
}

return;

}
function borrar() {
    document.querySelector('#ValorUsuario').value = '';
}



function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeromaximo)+1;

    if(listaNumerosSorteados.length == numeromaximo) {

 asignarTextoElemento('p', 'Juego terminado');

    } else {

    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();


    } else {
        //Si el numero generado está incluido en la lista 
        listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
    }

}
}

function condiciones() {
asignarTextoElemento('h1', 'El numero secreto');
asignarTextoElemento('p', `Escribe un numero del 1 al ${numeromaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;
    
}

function forzarJUEGO() {
borrar();
condiciones();
document.querySelector('#reiniciar').setAttribute('disabled', 'true');


}
condiciones();