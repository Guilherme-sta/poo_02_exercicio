class Produto{
    nome: string = "";
    preco: number = 0;

    aplicarDesconto(percentual: number) {
        const desconto = this.preco * (percentual / 100);
        return this.preco - desconto;
    }
    emitirOrcamento(percentual: number) {
        const novo_preco = this.aplicarDesconto(percentual);
        const preco_formatado = this.preco.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
        const novo_preco_formatado = novo_preco.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
        return `Produto: ${this.nome}, Preço: ${preco_formatado}\nDesconto: ${percentual}% → Novo preço: ${novo_preco_formatado}`;
    }
}

let produto1 = new Produto;
produto1.nome = "Camisa";
produto1.preco = 100;
console.log(produto1.emitirOrcamento(10));