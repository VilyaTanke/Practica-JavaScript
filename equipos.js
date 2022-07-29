import playOff from "./fooligafem.js";

const equipos = [' Athletic Club', ' Atletico de Madrid', ' Deportivo Alavés', ' F.C. Barcelona', ' Levante U.D.', ' Madrid C.F.F.', ' Rayo Vallecano', ' Real Betis', ' Real Madrid', ' Real Sociedad', ' Sevilla F.c.', ' S.D. Eibar', ' Sporting de Huelva', ' U.D.G. Tenerife', ' Valencia C.F.', ' Villareal C.F.']

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
|=========[ Grupo A ]========|
|   Los participantes son:  |
|                           |`)

equiposA.forEach(equipos => console.log(`|--> ${equipos}.`));

console.log(`
|=========[ Grupo B ]========|
|   Los participantes son:  |
|                           |`)
equiposB.forEach(equipos => console.log(`|--> ${equipos}.`));


console.log(`
|=========[ Grupo C ]========|
|   Los participantes son:  |
|                           |`)
equiposC.forEach(equipos => console.log(`|--> ${equipos}.`));


console.log(`
|=========[ Grupo D ]========|
|   Los participantes son:  |
|                           |`)
equiposD.forEach(equipos => console.log(`|--> ${equipos}.`));



export default equipos