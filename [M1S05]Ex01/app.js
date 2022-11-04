import Funcionario from './Funcionario.js'

const ada = new Funcionario("528.442.040-31", "Ada Lovelace", 1000);

console.log(ada)
console.log(ada.salario); // 1000

ada.promover(50)
console.log(ada.salario); // 1500

console.log(ada.validaCPF())

// const odo = new Funcionario('528.442.040-31')

// const udu = new Funcionario(52844204031)
// console.log(udu.validaCPF())