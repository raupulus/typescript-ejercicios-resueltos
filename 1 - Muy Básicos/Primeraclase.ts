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
 *
 * Deberá crear una clase con los una variable pública de cada tipo, un
 * constructor, instanciar un objeto y luego compilar el typescript a js.
 */

class Primeraclase {
    public texto: string;
    public numero: number;
    public boleano: boolean;
    public array: Array<any>;
    public cualquiera: any;

    constructor() {
        this.texto = 'Cadena de texto';
        console.log('THIS.TEXTO', this.texto);
        this.numero = 2;
        console.log('THIS.NUMERO', this.numero);
        this.boleano = true;
        console.log('THIS.BOLEANO', this.boleano);
        this.array = ['Posición 1', 2, { 'yo': 'objeto' }];
        console.log('THIS.ARRAY', this.array);
        this.cualquiera = {
            'propiedad1': 'valor1',
            'propiedad2': 'valor2'
        }
        console.log('THIS.CUALQUIERA', this.cualquiera);
    }
}

var objeto = new Primeraclase();
