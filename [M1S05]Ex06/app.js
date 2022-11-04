import Juros from "./Juros.js"


const aplicação = new Juros(10000, 0.07, 24)
console.log(aplicação.calcularJurosSimples())
console.log(aplicação.calcularJurosCompostos())

const aplicação2 = new Juros(10000, 0.15, 10)
console.log(aplicação2.calcularJurosSimples())
console.log(aplicação2.calcularJurosCompostos())