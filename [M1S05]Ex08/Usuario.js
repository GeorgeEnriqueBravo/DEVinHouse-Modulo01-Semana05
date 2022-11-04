export default class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome
        this.email = email
        this.senha = senha
    }

    autenticar(emailInformado, senhaInformada) {
        console.log(emailInformado, senhaInformada)
        console.log(this.email, this.senha)
        return (this.email === emailInformado && this.senha === senhaInformada);
    }
}