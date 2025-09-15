class Numero{
    valor: number = 0;

    ehPar() {
        if ((this.valor % 2) === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    ehImpar() {
        if ((this.valor % 2) !== 0) {
            return true;
        }
        else {
            return false;
        }
    }
}

let numero1 = new Numero;
numero1.valor = 4;
console.log("O número 1 é par? ",numero1.ehPar());
console.log("O número 1 é ímpar? ",numero1.ehImpar());

let numero2 = new Numero;
numero2.valor = 9;
console.log("O número 2 é par? ",numero2.ehPar());
console.log("O número 2 é ímpar? ",numero2.ehImpar());