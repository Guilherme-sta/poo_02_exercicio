class Pessoa{
    nome: string = "";
    idade: number = 0;

    apresentar() {
        return `Meu nome é ${this.nome} e tenho ${this.idade} anos.`
    }
}

let pessoa1 = new Pessoa;
pessoa1.nome = "Ely";
pessoa1.idade = 46;
console.log(pessoa1.apresentar());