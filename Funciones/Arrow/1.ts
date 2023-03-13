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

/* Convertir las siguientes funciones a funciones flecha */

/*
function obtenerDoble( a, b ){
  return (a + b) * 2
}

function obtenerTriple( a, b, c ){
  return (a + b +c) * 3
}
*/

let obtenerDoble = ( a:number, b:number ) => (a + b) * 2;
console.log('OBTENERDOBLE', obtenerDoble(2,3));  // 5*2 = 10

let obtenerTriple = ( a:number, b:number, c:number ) => (a + b +c) * 3;
console.log('OBTENERTRIPLE', obtenerTriple(2,3,5));  // 10*3 = 30
