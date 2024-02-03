let numSecreto = 0;
let intentos = 0;
let numMax = 3;
let listNumSorteados = [];

console.log(numSecreto);

function asignarTextoElemento(elemento, texto){
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numIngresado = parseInt(document.getElementById('valorIngresado').value);

  if(numIngresado === numSecreto){
    //El usuario acerto
    asignarTextoElemento('p', `¡FELICIDADES!, el numero es: ${numSecreto}, echo en ${intentos} ${(intentos===1)?'intento':'intentos'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  }else{
    //El usuario no acerto
    if(numIngresado > numSecreto ){
      asignarTextoElemento('p', `El num es menor, tu num fue ${numIngresado}, llevas ${intentos} ${(intentos===1)?'intento':'intentos'}`);
    }else if(numIngresado < numSecreto){
      asignarTextoElemento('p', `El num es mayor, tu num fue ${numIngresado}, llevas ${intentos} ${(intentos===1)?'intento':'intentos'}`);
    }  
    intentos ++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector('#valorIngresado').value = '';
}

function generarNumSecreto() {

  let numGenerado = Math.floor(Math.random()*numMax)+1;

  //Si ya sorteamos todos los numero
  if(listNumSorteados.length == numMax){
    asignarTextoElemento('h1',`Game Over`);
    asignarTextoElemento('p',`Felicidades adivinaste todos los numeros`);
    desabilitar('intentar');
    desabilitar('valorIngresado');
  }else{
    
    //Si el numero generado esta incluido en la lista
    if(listNumSorteados.includes(numGenerado)){

      return generarNumSecreto();

    }else{
      agregarLista(listNumSorteados,numGenerado);
      return numGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento('h1', 'Juego del numero Secreto');
  asignarTextoElemento('p',`Digita un numero del 1 al ${numMax}`);
  numSecreto = generarNumSecreto();
  intentos = 1;
}

function reiniciarjuego() {
  //limpiar caja
  limpiarCaja();
  //Indicar mensaje de intervalo de numero
  //Generar num aletorio
  //reiniciar num intentos
  condicionesIniciales()
  //Desabilitar el boton de reiniciar juego
  desabilitar('reiniciar');
  console.log(listNumSorteados);
}
function desabilitar(boton) {
  document.getElementById(boton).setAttribute('disabled', true);
}

function agregarLista(list, i) {
  list.push(i);
  return;
}

condicionesIniciales();





/*
[------------------------HORA DE PRACTICA 1------------------------]

Funcion Hola Mundo

function holaMundo() {
  console.log("Hola Mundo");
}
holaMundo();


Funcion Hola name

function holaName(name) {
  name = prompt("name");
  console.log(`Hola ${name}`);
}
holaName();


Funcion multiplica el num

function numDoble(numIngresado) {
  numIngresado = prompt("Ingresa un numero ") *2;
  console.log(`EL DOBLE DEL NUMERO INGRESADO ES: ${numIngresado}`);
}
numDoble();


Funcion Numero mayor

function numMayor(numIngresado1, numIngresado2) {

  numIngresado1 = prompt("Ingresa un numero ");
  numIngresado2 = prompt("Ingresa un numero ");

  if(numIngresado1 > numIngresado2){
    console.log(`El num ${numIngresado1} es mayor`);
  }else if(numIngresado1 < numIngresado2){
    console.log(`El num ${numIngresado2} es mayor`);
  }else{
    console.log("son iguales");
  }

}
numMayor();


Numero multiplicacdo por si mismo

function numMultiplicado(numIngresado) {

  numIngresado = prompt("Ingresa un numero ");
  numIngresado *= numIngresado;

    console.log(`El numero su multiplo por si mismo es ${numIngresado}`);

}
numMultiplicado();

[------------------------HORA DE PRACTICA 2------------------------]

IMC DE PESO-------------
function calcularIMC(peso, altura) {

  peso = document.getElementById('peso').value;
  altura = document.getElementById('altura').value;

  let result = peso/(altura*=altura);

  if(result < 18.50 ){
    asignarTextoElemento('p',`su IMC es de ${result}, esta en peso bajo`)
  }else if(result >= 25 ){
    asignarTextoElemento('p',`su IMC es de ${result}, esta en sobrepeso`)
  }else{
    asignarTextoElemento('p',`su IMC es de ${result}, esta en un peso idonio`)
  }
  return;
}


CALCULAR FACTORIAL-------------
function calcularFactorial(num) {
  
  let result = 1;
  num = document.getElementById('numH').value;

  for(leti = 1; i <= num; i++){
    result *= i;
  }
  asignarTextoElemento('p',`su numero fue ${num}, el factorial es : ${result}`);
  return;
}


CALCULAR DOLAR----------
function calcularDolar(dolar) {

  let peso = 1;
  dolar = document.getElementById('dolarH').value;

  peso = dolar * 17;

  asignarTextoElemento('p',`su numero fue ${peso}`);
  return;
}


CALCULAR EL AREA Y PERIMETRO DE RECTANGULO----------

function calcularAyP(alto, ancho) {

  alto = document.getElementById('altoH').value;
  ancho = document.getElementById('anchoH').value;

  let area = alto * ancho;
  let perimetro = (alto*2)+(ancho*2);

  asignarTextoElemento('p',`area es ${area}, perimetro es ${perimetro}`);
  return;
}


CALCULAR EL AREA Y PERIMETRO DE CIRCULO----------
function calcularCirculo(radio) {

  radio = document.getElementById('radioH').value;

  let area = 3.14 * (radio*radio);
  let perimetro = 2 * 3.14 * radio;

  asignarTextoElemento('p',`area es ${area}, perimetro es ${perimetro}`);
  return;
}


TABLA DE MULTIPLICAR-------------
function tablaMultiplicar(num) {

  let result = 0 ;
  let i = 0;
  num = document.getElementById('numH').value;


  for(i = 1; i <= 10; i++){
    result = num * i;
    console.log(`${num} * ${i} = ${result}`);
  }

  return;
}

[------------------------HORA DE PRACTICA 3------------------------]

LISTAS Y FUNCIONES

let i = 0;
let listGenerica = [];
let numeroCudrado = [];
let promedios = [8,8,9];
let lenguajesProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python','Java', 'Ruby', 'GoLang'];

function mostrarList(){
  for(i = 0; i <= lenguajesProgramacion.length; i++){
    console.log(lenguajesProgramacion[i]);
  }
}

function mostrarListInverso(){
  for(i = lenguajesProgramacion.length; i >= 0; i--){
    console.log(lenguajesProgramacion[i]);
  }
}

function mostrarListReverse(){
  lenguajesProgramacion.reverse();
  console.log(lenguajesProgramacion);
}

function calcularPromedio() {
  for(i = 0; i <= promedios.length-1; i++){
    result += promedios[i] ;
  }
  return console.log(result/promedios.length);
}

function mostrarNumMayor() {
  console.log(Math.max(...numeros));
}

function mostrarNumMenor() {
  console.log(Math.min(...numeros));
}

function sumaElementos() {
  for(i = 0; i <= numeros.length-1; i++){
    result += numeros[i] ;
  }
  return console.log(result);
}


function alCuadrado() {
  for(i = 0; i <= numeros.length-1; i++){
    result = numeros[i]* numeros[i] ;
    agregarLista(numeroCudrado, result);
  }
  return console.log(numeroCudrado);
}

alCuadrado();
sumaElementos();
mostrarNumMayor();
mostrarNumMenor();
mostrarList();
mostrarListInverso();
calcularPromedio();



*/