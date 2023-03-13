"use strict";
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
 * Deberá crear una clase para contemplar un rectángulo con dos propiedades:
 * 1 → Base
 * 2 → Altura
 *
 * También deberá tener un método para calcular el área (Base*Altura), este
 * método deberá devolver un valor numérico.
 */
var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}());
console.log('RECTANGULO-1', new Rectangulo(2, 6).calcularArea());
console.log('RECTANGULO-2', new Rectangulo(3, 9).calcularArea());
