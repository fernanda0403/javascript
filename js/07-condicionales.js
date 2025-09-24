/* 

  Condicionales
  Son estructuras de control que permiten ejecutar diferentes bloques de código según una condición (verdadera o falsa).

    1.- if 👉 Evalua una condición y si es verdadera, ejecuta el bloque de codigo dentro de sus llaves.

    Sintaxis: 
    if (condicion) {
      //bloque o código que se ejecuta
    }
*/

let edad = 13;
if (edad >= 18) {
  // Código que se ejecuta:
  alert("Eres mayor de edad, date! 😉")
}

/* 

  2.- Else
  Permite ejecutar un bloque de codigo si la condicion es falsa

  Sintaxis: 
    if (condicion) {
      //código que se ejecuta si la condicion es verdadera
    } else {
      //código que se ejecuta si la condicion es falsa.
    }
*/

let hora = 13;
if (hora < 12) {
  // Código que se ejecuta:
  console.log("buenos dias a la vidaa, buenos dias señor sol ☀")
} else {
  console.log("Buenas tardes, ¡Ya vamos por menos! 😪")
}

/* 

  3.- else if
  Nos va permitir tener más de una condición a ser evaluada, esta evaluacion es en secuencia, si una condicion es verdadera se ejecuta su bloque de código.

  Sintaxis: 
    if (condicion1) {
      //código que se ejecuta si la condicion es verdadera
    } else if (condicion2) {
      //código que se ejecuta si la condicion anterior es falsa y esta condicion es verdadera.
    } else {
      //codigo que se ejecuta si ninguna de las anteriores es verdadera.  
    }
*/

let calificacion = 10;
if (calificacion >= 9) {
  console.log("eres un exlente programador 🌟")
} else if (calificacion>=7) {
   console.log("ahi la llevas, ya casi te sale 😎")
} else if (calificacion>=5) {
   console.log("Echale mas ganitas o nos vemos en extra-ordinario 🙀") 
} else {
  console.log("Ya valio barriga! Bienvenido al extra-ordinario 🔥") 
}
