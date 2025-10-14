/* 

Bucles

Los bucles son estructuras que permiten repetir un bloque de código varias veces, hasta que se cumpla una condición especifica.

las mas comunes en JS son for, while y do...while

1. bucle for
  se utiliza cuando sabemos cuantas veces queremos repetir un bocle de codigo. la sintaxis es:

  for (inicialización; condición; incremento) {
    //el codigo que se va a repetir su ejecución 
    ...
  }

inicializacón 👉 Variable con un valor inicial
condición 👉 Se ecalua una exprecion si es true se ejecuta el bucle
incremento 👉 Aumneta el valor de la variable en cada iteración

*/

for (let i = 0; i < 10; i++) {
  console.log("REPETICIÓN "+i+":tengo hambre, denme comida")
  
}

/* 

2. bucle while

se utiliza cuando no sabemos cuantas veces queremos repetir un bucle de  codigo, pero si queremos que se repita mientras una condicion es verdadera. sintaxis:

iniciclización

while () {
  // codigo que se va a repetir su ejecución
  incremento
}

*/

let j = 0; // inicialización

while (j<5) {
  console.log("otro bucle");
j++
}

/* 

3. bucle do...while

este bucle es similar al bucle while, pero garantiza qu eel bocle de codigo se ejecute al menos 1 vez. Ya que la condicion se ecalua despues de la ejecucion 

do {
// codigo a ejecutar
incremento
} while (condicion)

*/

let k = 5;

do{
  console.log("use mis puntos de oxxo, wii");
  k++;
} while(k < 5);
