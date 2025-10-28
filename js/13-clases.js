/* 

clases

son una forma de definir objetos, sus propiedades y metodos, creando un prototipo del cual se generaran varios objetos. heredando su comportamiento.

sintxis 

class nombreObjeto {
//utilizamos el metodo constructor especial para inicializar objetos.

  constructor(prop1, prop2) {
    this.key = prop1;
    this.key = prop2;
  }
}

// los nombres de las clves conienzan con mayuscula
*/

class Persona {

  constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
  }

  //Metodo

  saludar() {
    alert(`Hola soy ${this.nombre} y tengo ${this.edad} años!`)
  }

}

/* 

crear insancias sw las clases

vanmos  utilizar una constante y crear una nueva instancia con la siguiente sintaxis:

const nombreConstante new NombreClase(prop1, prop2)

*/

const persona1 = new Persona ("juanito", 24);
const persona2 = new Persona ("pablo", 22);
const persona3 = new Persona ("Maria", 20);

/* mostramos objetos */

console.log(persona1);
console.log(persona2);
console.log(persona3);

/* accedemos a los datos */

console.log (`El es ${persona1.nombre} y tiene ${persona1.edad}.`);

console.log (`El es ${persona2.nombre} y tiene ${persona2.edad}.`);

console.log (`El es ${persona3.nombre} y tiene ${persona3.edad}.`);

/* llamamos al metodo saludar de cada objeto */

persona1.saludar();
persona2.saludar();
persona3.saludar();