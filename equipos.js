import playOff from "./fooligafem.js";

const equipos = ['Athletic Club', 'Atletico de Madrid', 'Deportivo Alavés', 'F.C. Barcelona', 'Levante U.D.', 'Madrid C.F.F.', 'Rayo Vallecano', 'Real Betis', 'Real Madrid', 'Real Sociedad', 'Sevilla F.c.', 'S.D. Eibar', 'Sporting de Huelva', 'U.D.G. Tenerife', 'Valencia C.F.', 'Villareal C.F.']

// console.table(equipos)

export const equiposA = equipos.slice(0, 4);
export const equiposB = equipos.slice(4, 8);
export const equiposC = equipos.slice(8, 12);
export const equiposD = equipos.slice(12, 16);

console.log(`Los participantes en el equipo A son: ${equiposA}`)

console.log(`Los participantes en el equipo B son: ${equiposB}`)
// console.table(equiposB)
console.log(`Los participantes en el equipo C son: ${equiposC}`)
// console.table(equiposC)
console.log(`Los participantes en el equipo D son: ${equiposD}`)
// console.table(equiposD)

const ronda1 = new playOff("A", equiposA);
console.log(`el ganador es: ${ronda1}`)

export default equipos