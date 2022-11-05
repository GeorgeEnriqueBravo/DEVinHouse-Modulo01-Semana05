export default class Fatura {
    constructor(id, descricao, quantia, preco) {
        this.id = id
        this.descricao = descricao
        this.quantia = quantia > 0 ? quantia : 0
        this.preco = preco > 0 ? preco : 0
    }

    get valorTotal() {
        return this.obterValorTotal()
    }

    obterValorTotal() {
        return this.quantia * this.preco
    }
}


// module.exports = { Fatura }
// o método REQUIRE é um método antigo que permite rodar import/export no node.js e no Code.
// Desse jeito não é necessário mudar as extensões pra .mjs e nem utilizar package.json