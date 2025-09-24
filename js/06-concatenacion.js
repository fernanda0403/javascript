/* 

  Concatenación de cadena de texto
  Es el proceso de unir dos o más cadenas de texto en una sola.
  Esto se hace utilizando el operador + o las plantillas literales (template strings) se usan con brackticks `` (acento invertido o acento agudas)

*/

let miNombre = "Fernanda";
let miapellido = "González";

// Usando el operador +

let nombreCompleto = miNombre + " " + miapellido;
console.log(nombreCompleto);

// usando plantillas literales

let nombreNuevo = `Mi Nombre es ${miNombre} ${miapellido} y tengo ${2*10} años.`;
console.log(nombreNuevo);

/* si se utliza el operador + con valores numerico se suman. Pero si se usa con cadenas de caracter de concatenan. */

let resultado = 5+10;
console.log(resultado)

let resultadoDos = "5"+10;
console.log(resultadoDos)