import Usuario from './Usuario.js'

const jonas = new Usuario('Jonas', 'jonas@gmail.com', '123')

console.log(jonas)

let res = document.getElementById('res')

const botao = document.getElementById('acessar')

// Exemplo com Arrow Function direto no click
botao.addEventListener('click', () => {
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    if (jonas.autenticar(email, senha)) {
        console.log("Entrei")
        res.innerHTML = `Autenticado com sucesso`
    } else {
        console.log("Entrou else")
        res.innerHTML = `Credenciais Inválidas.`
    }
})

// Exemplo com Function normal
botao.addEventListener('click', chamaAutenticar)

function chamaAutenticar() {
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    if (jonas.autenticar(email, senha)) {
        console.log("Entrei")
        res.innerHTML = `Autenticado com sucesso`
    } else {
        console.log("Entrou else")
        res.innerHTML = `Falha na autenticação`
    }
}