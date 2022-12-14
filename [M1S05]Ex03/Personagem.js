export default class Personagem {
    percentualVida = 100
    constructor(nome) {
        this.nome = nome
    }

    sofreuDano(percentualDano) {
        this.percentualVida -= percentualDano
        if (this.percentualVida < 0) {
            this.percentualVida = 0
        }
    }

    usouKitMedico() {
        if (this.percentualVida < 100) {
            this.percentualVida += 10
        } else {
            console.log('Não é possível curar mais, sua vida já está no máximo')
        }
        if (this.percentualVida > 100) {
            this.percentualVida = 100
        }
    }
}