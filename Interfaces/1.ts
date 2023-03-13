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

/*
 * Dado el código siguiente, tendremos que crear una interfaz que sirva
 * después para validar el objeto.
 */

/*
var camaleon = {
  tipo: "reptil",
  peculiaridad: "camuflarse"
}
*/

interface animal {
    tipo:string,
    peculiaridad:string,
    sizecm:number
}

const camaleon : animal = {
  tipo: "reptil",
  peculiaridad: "camuflarse",
  sizecm: 20
}

console.log('CAMALEON', camaleon);
