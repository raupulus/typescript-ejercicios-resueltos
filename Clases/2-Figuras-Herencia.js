"use strict";
/**
 * @author Raúl Caro Pastorino (fryntiz)
 * @copyright Copyright © 2018 Raúl Caro Pastorino
 * @license https://wwww.gnu.org/licenses/gpl.txt
 *
 * https://fryntiz.es
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
 * ↓ INSTRUCCIONES DEL EJERCICIO ↓
 *
 * Se requiere ser lo más específico posible en cuanto a tipos y uso estricto
 * para typescript definiendo y ajustándose a concretar (usar ES6)
 */
/*
 * A partir del ejercicio anterior "1-Rectángulo.ts" deberá sacar 2 clases con
 * una padre de la cual heredar factores comunes.
 *
 * Deberá crear una clase para contemplar un rectángulo y un triángulo con dos * propiedades:
 * 1 → Base
 * 2 → Altura
 *
 * También deberá tener un método para calcular el área en el rectángulo:
 *(Base*Altura) y en el triángulo: ((Base*Altura)/2)
 */
/**
 * Clase Figura que será una clase padre de la que hereda cada figura
 * @param base   number Valor de la base
 * @param altura number Valor de la altura
 */
var Figura = /** @class */ (function () {
    function Figura(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    return Figura;
}());
/**
 * Clase Rectángulo que hereda de Figura
 * @param base   number Valor de la base
 * @param altura number Valor de la altura
 */
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect(base, altura) {
        return _super.call(this, base, altura) || this;
    }
    Rect.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    return Rect;
}(Figura));
console.log('RECTANGULO-1', new Rect(2, 6).calcularArea());
console.log('RECTANGULO-2', new Rect(3, 9).calcularArea());
/**
 * Clase Triángulo que hereda de Figura
 * @param base   number Valor de la base
 * @param altura number Valor de la altura
 */
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(base, altura) {
        return _super.call(this, base, altura) || this;
    }
    Triangulo.prototype.calcularArea = function () {
        return (this.base * this.altura) / 2;
    };
    return Triangulo;
}(Figura));
console.log('TRIANGULO-1', new Triangulo(2, 6).calcularArea());
console.log('TRIANGULO-2', new Triangulo(3, 9).calcularArea());
