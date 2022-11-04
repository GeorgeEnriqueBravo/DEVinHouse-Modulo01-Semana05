// const { Fatura } = require("./Fatura")
// o método REQUIRE é um método antigo que permite rodar import/export no node.js e no Code.
// Desse jeito não é necessário mudar as extensões pra .mjs e nem utilizar package.json

import Fatura from "./Fatura.js"


const melao = new Fatura(123, "Melão", 2, 3);

const valor = melao.obterValorTotal();

console.log(valor); // 6

console.log(melao.valorTotal) // 6


// Exemplo de uma segunda instância da classe para teste
const maca = new Fatura(456, 'Maca', 5, 4)

console.log(maca)

console.log(maca.obterValorTotal())

console.log(maca.valorTotal)