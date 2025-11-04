/* 

Las funciones

Las funciones son bloques de codigo reutilizables que realizan una tarea especifica




1.- Función Declarda
  Es la forma mas comun de definir funciones. Se  puede llamar a la función antes de su deginicion debido al hoisting, es decir, que se "elevan" en el contexto de ejecución.

  sintaxis:
  funtion nombreFuncion() {
    // cuarpo de la función
    ...
  }

  Llamada:
  nombreFuncion();

*/

//Fumncion declarada
function saludar() {
  console.log("¿Hola, como te va? 😃🤙 soy una función declarada 😆");
}

saludar();




/* 

2.- Funcion expresada (anónimas)

Este tipo de funciones se asignan a una variale. No puede ser llamada antes de su definicón.

Sintxis:

const nombreConstante = function() {
//Cuerpo de la función
...
}

Llamada:
nombreConstante();

*/

//función expresada

const despedir = function () {
  console.log("Función expresda ya se va, bye bye 😜🤙 ")
}

despedir();



/* 

3.- Funciones flecha (Arrow Function)

  Tienen una sintaxis más concisa, son útiles para ejecuciones cortas. Generalmente se asigna a una variable.

  sintaxis:

  const nombreConstante = () => {
    //cuerpo función
    ...
    }

    Llamda:

    nombreConstante();

*/

//Funciones flecha

const mensaje = () => {
  console.log("soy una funcion de flecha Yupii")
}

mensaje();



/* 

Parametros y Argumentos

Las funciones pueden aceptar parámetros para recibir datos cuando son llamadas

sintaxis:

funtion nombreFuncion(parametro1, parametro2) {
//cuarpo de la funcion
...
}

llamada:

nombreFuncion(argumento1, arrgumento2);
*/

function sumar(num1, num2) {
  console.log(`el resltado de la suma es: ${num1 + num2}`)
}

sumar(2, 3);
sumar(20, 20)
sumar(.12, .56)
sumar(4752649, 1)

//ejercicio
function hola(nombre) {
  console.log(`Hola: ${nombre}`)
}

hola("fer")
hola("yatto")
hola("toño")
hola("lalo")

/* 

parametros por defectos

  en las funciones podemos tener valores por defectos si no se proporcionan argumentos al llamar a la funcion

  Sintaxis:

  function nombreFuncion(parametro1 = valorDefult) {
  //cuerpo de la función
  ...
  }

  Llamada:

  nombreFuncion() //usa los valores por defecto
  nombreFuncion(argumento1) // usa el valor del argumento

*/

const multiplicar = function (num1 = 1, num2 = 2) {
  console.log(`El resuntado de multiplicar ${num1} por ${num2} es: ${num1 * num2}`)
}

multiplicar();
multiplicar(8, 5);
multiplicar(4, 5);



const usuario = (usuario = "invitado") => {
  if (usuario == "invitado") {
    console.log("registrate o continua como invitado")
  } else {
    console.log(`bienvenido ${usuario}`)
  }
}

usuario();
usuario("fer");
usuario("ariel");
usuario("esteban");


/* 

Valor de retorno 

las funciones pueden devolver un valor utilizando la palabra "return"

sintaxis:

 function nombreFuncion() {
  //cuerpo de la función
  ...

  return valor;
  }

  Llamada:

  nombreConstante = nombreFuncion();
  
*/

function despedida(nombre="fer") {
  return `adios ${nombre}`
} 

const resultado = despedida("toño");

console.log(resultado)



/* 


Return implicito

Las funciones flecha no necesita la palabra return, en su estructura Más simple (una sola linea)

sintaxis:

const nombreConstante = () => valor;

    Llamda:

    nombreConstante();
*/

const restar = (num1, num2) => num1 - num2

const resultadoResta = restar(2,3);

console.log(resultadoResta)


/* console.log(restar(2,3)) */