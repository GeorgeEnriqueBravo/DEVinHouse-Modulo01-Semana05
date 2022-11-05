import Usuario from './Usuario.js'

const george = new Usuario('George', 'george@gmail.com', '123')

let res = document.getElementById('res')

const botao = document.getElementById('acessar')

// Exemplo com Arrow Function direto no click
botao.addEventListener('click', () => {
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    if (george.autenticar(email, senha)) {
        console.log(`Autenticado com sucesso`)
        res.innerHTML = `Autenticado com sucesso`
    } else {
        console.log(`Credenciais Inválidas.`)
        res.innerHTML = `Credenciais Inválidas.`
    }
})

// Exemplo com Function normal
botao.addEventListener('click', chamaAutenticar)

function chamaAutenticar() {
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    if (george.autenticar(email, senha)) {
        console.log(`Autenticado com sucesso`)
        res.innerHTML = `Autenticado com sucesso`
    } else {
        console.log(`Credenciais Inválidas.`)
        res.innerHTML = `Credenciais Inválidas.`
    }
}