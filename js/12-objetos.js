/* 

objetos

son colecciones de propiedades. una propiedad es una asociación entre nombre (clave o key) y un valor (value)


Los valores puede ser de distintos tipos numeros, cadenas de tecto bolenos, arreglos, funciones

sintexis

nombreObjeto 
// propiedades = {
clave1: valor,
clave2: valor,
clave3: valor
}

*/

const persona = {
  nombre: "fer",
  apellido: "gonzalez",
  edad: 20,
  esInvitado: true,
  monstruos: ["pupkiman", "wolf man", "frankenstain", "chuky"],

  //this es una palabra reservada que autoreferencia al objeto (persona)
  saludar: function() { 
    console.log ("hola mi nombre es " + this.nombre + "y me gusta" + this.monstruos[2])
  }
}

console.log (persona)


/* acceder a las propiedades de un objeto utilizamos un punto o un corchete.

objeto.clave 👉 notacion de punto
objeto [clave] 👉 notacion de corchetes
*/



console.log(persona.nombre);
console.log(persona["apellido"]);

//concatenamos valores
console.log ("hola mi nombre es " + persona.nombre + " " + persona.apellido + " y tengo " + persona.edad) ;

//plantillas literales
console.log(`hola mi nombre es ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años! (●'◡'●)`);

//accemos al booleano

console.log (persona.esInvitado);


if(persona.esInvitado == true) {
  console.log ("puede pasar y disfrutar del hallowen de enfoco");
} else {
  console.log ("no puedes pasr regresate a tu casita");
}

//acceder al array

console.log(persona.monstruos[0]);

console.log(`hola mi nombre es ${persona.nombre} ${persona.apellido} y ire disfrazada al halloween disfrazada de ${persona.monstruos[3]} 👧🔪`);

/* 

metodos de objetos

Los métodos son funciones que estan asociados a un objeto. Se pueden llamar utilizando la notacion de punto.

objeto.metodo()

*/


 console.log (persona.saludar( )); //asi no accedemos a los métodos.
persona.saludar(); // Esta es la forma de acceder a los métodos.

