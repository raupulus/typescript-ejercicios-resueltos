/**
 * @author Raúl Caro Pastorino (raupulus)
 * @copyright Copyright © 2018 Raúl Caro Pastorino
 * @license https://wwww.gnu.org/licenses/gpl.txt
 *
 * https://raupulus.dev
 */

/*
 * ↓ INSTRUCCIONES DEL EJERCICIO ↓
 *
 * Se requiere ser lo más específico posible en cuanto a tipos y uso estricto
 * para typescript definiendo y ajustándose a concretar (usar ES6)
 */

/* Se partirá del siguiente código */

/*
var nombre = "Manolo el del bombo";
var edad = 23;
var PERSONAJE = {
  nombre: nombre,
  edad: edad
};
*/

let nombre:string = "Manolo el del bombo";

let edad:number = 23;

const PERSONAJE : { nombre:string, edad:number} = {
  nombre: nombre,
  edad: edad
};

console.log(nombre);
console.log(edad);
console.log(PERSONAJE.nombre);
console.log(PERSONAJE.edad);
