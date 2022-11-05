import Time from "./Time.js"
import Partida from "./Partida.js"

const santos = new Time('Santos', 'SAN', 0, 0, 0, 0 ,0)
const saoPaulo = new Time('São Paulo', 'SP', 0, 0, 0, 0, 0)
const gremio = new Time('Gremio', 'GRE', 0, 0, 0, 0, 0)
const inter = new Time('Inter', 'INT', 0, 0, 0, 0 ,0)

const partida1 = new Partida('GRE', 2, 'INT', 1)
const partida2 = new Partida('SAN', 3, 'SP', 3)

// Exemplo de partida Santos e SP
santos.computarPartida(partida2)
saoPaulo.computarPartida(partida2)
console.table(santos)
console.table(saoPaulo)
console.log(`Santos e São Paulo jogaram ${santos.numeroDeJogos} vez`)
console.log(`O Santos tem ${santos.numeroDePontos} pontos no rank.`)
console.log(`O São Paulo tem ${saoPaulo.numeroDePontos} ponto no rank.`)

console.table('------------------------------')

// Exemplo da partida Gremio e Inter
gremio.computarPartida(partida1)
inter.computarPartida(partida1)
console.table(gremio)
console.table(inter)
console.log(`Grêmio e Inter jogaram ${gremio.numeroDeJogos} vez`)
console.log(`O Grêmio tem ${gremio.numeroDePontos} pontos no rank.`)
console.log(`O Inter tem ${inter.numeroDePontos} pontos no rank.`)

console.table('------------------------------')

// Exemplo de partida sem o time que a chamou
santos.computarPartida(partida1)