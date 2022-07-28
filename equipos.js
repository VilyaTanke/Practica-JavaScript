import playOff from "./fooligafem.js";

const equipos = [' Athletic Club', ' Atletico de Madrid', ' Deportivo Alavés', ' F.C. Barcelona', ' Levante U.D.', ' Madrid C.F.F.', ' Rayo Vallecano', ' Real Betis', ' Real Madrid', ' Real Sociedad', ' Sevilla F.c.', ' S.D. Eibar', ' Sporting de Huelva', ' U.D.G. Tenerife', ' Valencia C.F.', ' Villareal C.F.']

// console.table(equipos)

export const equiposA = equipos.slice(0, 4);
export const equiposB = equipos.slice(4, 8);
export const equiposC = equipos.slice(8, 12);
export const equiposD = equipos.slice(12, 16);

console.log(`
========================================================================
============ COMIENZAN LAS FASES ELIMINATORIAS DEL TORNEO ==============
========================================================================`)
console.log('')

console.log(`
|========= Equipo A ==============|
|   Los participantes son:        |`)
console.table(equiposA)

console.log(`
|========= Equipo B ==============|
|   Los participantes son:        |`)
console.table(equiposB)

console.log(`
|========= Equipo C ==============|
|   Los participantes son:        |`)
console.table(equiposC)

console.log(`
|========= Equipo D ==============|
|   Los participantes son:        |`)
console.table(equiposD)

// console.log(`
// |========================= Equipo C ===================================|
// |                  Los participantes son:                              |
// |                                                                      |
// |        ${equiposC}         |
// |======================================================================|`)

// console.log(`
// |========================= Equipo D ===================================|
// |                  Los participantes son:                              |
// |                                                                      |
// |  ${equiposD} |
// |======================================================================|`)



export default equipos