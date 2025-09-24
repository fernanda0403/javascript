/* 

  operadores

son simbolos que le indican al interprete que debe realizarse una operacion matematica, logica o relacional y producir un resultado 

  1.- aritmeicos
    se uilizan para operaciones basicas como, la suma, resta, multiplicación, división, etc.
    + 👉 nos sirve para sumar
    - 👉 nos sirve para restar
    / 👉 nos sirve para dividir
    * 👉 nos sirve para mltiplicar
    % 👉 modulo (residuo de una división)

    ++ 👉 incremento (suma 1 al valoe)
    -- 👉 decermento (resta 1 al valor)

Expreción: conjunto de valores, variables y operadores
*/



let a = 10;
let b = 5;

  /* + (suma) */
console.log(a + b); // 15

  /* - (resta) */
console.log(a - b); // 5

  /* * (multiplicación) */
console.log(a * b); // 50

  /* / (división) */
console.log(a/b); // 2

 /* % (modulo - residuo) */
console.log(a % b); // 0

/* ++ (incremento) */
a++;
console.log(a++); //11

/* ++ (incremento) */
b--;
console.log(b--); // 4


/* 

  2.- Operadores de asignación

  Estos operadores se utilizan para asignar valores a las variable

  = 👉 asignación
  += 👉 suma y asigna
  -= 👉 resta y asigna
  *= 👉 multiplica y asigna
  /= 👉 divide y asigna
  %= 👉 modulo y asigna

*/

let c = 20;
console.log(c); // 20

c += 5; // 25
c -= 10; // 15
c*= 2; // 30
c /= 3; // 10
c %= 3; // 1

console.log(c);

/*  
  3.- operadores de comparación
  estos operadores se utilizan para comparar dos valores y devolver un valor booleano (true o false)

  == 👉 igualidad (compara solo el valor)
  === 👉 igualdad estricta (compara el valor y el tipo)
  != 👉 desigualdad (compara solo el valor)
  !== 👉 desigualdad estricta (compara el valor y el tipo)
  > 👉 mayor que
  < 👉 menor que 
  >= 👉 mayor o igual que
  <= 👉 menor o igual que

*/

let d = 10; // number 
let e = "10"; // cadena de caracteres

console.log(d == e); // verdadero
console.log(d === e); // falso

console.log(d != e); // falso
console.log(d !== e); // verdadero

console.log(d > 5); // verdadero
console.log(d < 15); // verdadero

console.log(d >= 10); // verdadero
console.log(d <= 5); // falso

/*

  4.- operadores logicos
  se utilizan para combinar expreciones booleanas

    && 👉 AND (y) - si ambos valores son verdadero el resultado es verdadero. Si al menos un valor es falso, el resultado es falso.

    || 👉 OR (o) - si al al menos un valor es verdadero, el resultado es verdadero. Solo si ambos valores son falsos, el resultado sera falso

    ! 👉 NOT (no) - Niega el valor. El resultado es el valor contrario al que esta negando.
    
*/

let f = true;
let g = false;

console.log(f && g); // falso
console.log(f || g); // true
console.log(!f); // false
console.log(!g); // true

