import Time from "./Time.js"
import Partida from "./Partida.js"

const gremio = new Time('Gremio', 'GRE', 0, 0, 0, 0, 0)
const inter = new Time('Inter', 'INT', 0, 0, 0, 0 ,0)
const santos = new Time('Santos', 'SAN', 0, 0, 0, 0 ,0)
const saoPaulo = new Time('São Paulo', 'SP', 0, 0, 0, 0, 0)

const partida1 = new Partida('GRE', 2, 'INT', 1)
const partida2 = new Partida('SAN', 3, 'SP', 3)

// Exemplo da partida Gremio e Inter
gremio.computarPartida(partida1)
inter.computarPartida(partida1)
console.table(gremio)
console.table(inter)

console.table('------------------------------')

// Exemplo de partida Santos e SP
santos.computarPartida(partida2)
saoPaulo.computarPartida(partida2)
console.table(santos)
console.table(saoPaulo)

console.table('------------------------------')

// Exemplo de partida sem o time que a chamou
santos.computarPartida(partida1)
console.table(santos)