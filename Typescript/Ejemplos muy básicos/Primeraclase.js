var Primeraclase = /** @class */ (function () {
    function Primeraclase() {
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
        };
        console.log('THIS.CUALQUIERA', this.cualquiera);
    }
    return Primeraclase;
}());
var objeto = new Primeraclase();
