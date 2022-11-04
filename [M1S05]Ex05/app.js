import CalculadoraDeArea from "./CalculadoraDeArea.js"

const triangulo = new CalculadoraDeArea("triangulo", 6, 8)
const quadrado = new CalculadoraDeArea("quadrado", 4, 4)
const retangulo = new CalculadoraDeArea("quadrado", 4, 6)

console.log(triangulo.calcular()) // 24
console.log(quadrado.calcular()) // 16
console.log(retangulo.calcular()) // 24

// Exemplo fornecido junto ao exercício
const quadA = new CalculadoraDeArea("quadrado", 6, 6);
const areaQA = quadA.calcular();
console.log(areaQA); // 36

// Exemplo fornecido junto ao exercício
const triangB = new CalculadoraDeArea("triangulo", 8, 7);
const areaTB = triangB.calcular();
console.log(areaTB); // 28