/* 

arreglos

es un arreglo es una coleccion de datos, una lista de elementos.

en JS los arreglos se definen utilizando los corchetes [] y los elementos internos se separan por comas,

pueden contener el mismo tipo de dato o de diferentes tipos, incluso pueden contener arreglos anidados.


*/

let frutas = ["Manzana", "Sanida", "Piña", "pera", "kiwi"];
let calificaciones = [9.3, 10, 4, 8];
let misDatos = ["fer", 20, true];
let coordenadas = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

console.log(frutas)
console.log(calificaciones)
console.log(misDatos)
console.log(coordenadas)

 /* 
 
 lengtht 👉 nos indica la cantidad de elementos que tenemos dentro del arreglo
 indice 👉 Nos indica la "Posición" del elemento dentro del arreglo

 para acceder a los elementos de un arreglo utilizamos su indice. Los arreglos siempre comenzan con el indice 0.
 
 */

 console.log(frutas.length); // Cantidad de datos
 console.log(calificaciones.length);
 console.log(misDatos.length);
  console.log(coordenadas.length);

  /* 
  
  indice 👉 Nos indica la "Posición" del elemento dentro del arreglo

 para acceder a los elementos de un arreglo utilizamos su indice. Los arreglos siempre comenzan con el indice 0  se coloca el valor entre corchetes [].
  
  */

  console.log("mi fruta favorita es la " + frutas[1] + " 🍉");
  console.log("con limon saque la calificacion de " + calificaciones[2] + " de calificacion");
  console.log("me llamo " + misDatos[0] + " y tengo " + misDatos[1] + " años.");
  console.log("este dato esta en un arreglo anidado: " + coordenadas[1][2]);

  /* 
  
  Metodos de los erreglos:
  push() Agrega 1 o mas elementos al final del arreglo.
  pop() Elimina el último elemento del arrreglo y lo devuelve.
  shift() Elimina el primer elemento del arreglo y lo devuelvve
  unshift() agrega 1 o mas elemntos al inicio de un arreglo
  indexof() devuelve el indice del primer elemento que coincida coon el valor especificado o regresa -1 si no encientra nada
  

  */

console.log(frutas.length); // 5

  /* push */
frutas.push("uva" , "papaya");
console.log(frutas.length);
console.log(frutas.length);
frutas.push("uva" , "papaya");

/* pop */
let ultimaFruta=frutas.pop();
console.log(frutas.length);
console.log(frutas.length);
frutas.pop();
console.log(frutas.length); //6
console.log(ultimaFruta);
let indiceFruta =frutas.indexOf();
console.log(indiceFruta)


/* 

iteracion obre arrays
tomamos una lista de datos y acccedemos a sus datos, a traves 

*/

frutas.unshift ("pitaya", "coco");

for (i=0; i<frutas.length; i++) {
  console.log("se me antojo una: " + frutas[i]);
}