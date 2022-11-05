export default class Time {
    constructor(nome, sigla, vitorias, derrotas, empates, golsMarcados, golsSofridos) {
        this.nome = nome
        this.sigla = sigla
        this.vitorias = vitorias
        this.derrotas = derrotas
        this.empates = empates
        this.golsMarcados = golsMarcados
        this.golsSofridos = golsSofridos
    }

    get numeroDeJogos() {
        return this.vitorias + this.derrotas + this.empates
    }

    get numeroDePontos() {
        return (this.vitorias * 3) + this.empates
    }

    computarPartida(partida) {
        if (this.sigla === partida.siglaTimeA || this.sigla === partida.siglaTimeB) {

            const time = partida.siglaTimeA === this.sigla ? partida.siglaTimeA : partida.siglaTimeB;

            time === partida.siglaTimeA ? this.golsMarcados += partida.golsTimeA : this.golsSofridos += partida.golsTimeA;

            if (partida.golsTimeA > partida.golsTimeB) {
                time === partida.siglaTimeA ? this.vitorias += 1 : this.derrotas += 1;

            } else if (partida.golsTimeA < partida.golsTimeB) {
                time === partida.siglaTimeA ? this.derrotas += 1 : this.vitorias += 1;

            } else {
                this.empates += 1;
            }

        } else {
            console.log('Desculpe, time não está na partida!')
            console.log("Sem alterações no placar!")
        }
      }
}