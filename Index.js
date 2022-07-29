import equipos, { equiposA, equiposB, equiposC, equiposD } from "./equipos.js";

import playOff, { } from "./fooligafem.js";


const selectChamp = new playOff("A", equiposA);

console.log(`
|=========== Selección del Grupo A ===========|
|`)
let champA = selectChamp.playOffinit(equiposA)
let subA = selectChamp.playOffinitS(equiposA)

console.log(`|--> Campeon: "${champA}" :: Sub-Campeon: "${subA}"
|
|=========== Selección del Grupo B ===========|
| `)
let champB = selectChamp.playOffinit(equiposB)
let subB = selectChamp.playOffinitS(equiposB)
console.log(`|--> Campeon: "${champB}" :: Sub-Campeon: "${subB}"
|
|=========== Selección del Grupo C ===========|
|`)
let champC = selectChamp.playOffinit(equiposC)
let subC = selectChamp.playOffinitS(equiposC)
console.log(`|--> Campeon: "${champC}" :: Sub-Campeon: "${subC}"
|
|=========== Selección del Grupo D ===========|
|`)
let champD = selectChamp.playOffinit(equiposD)
let subD = selectChamp.playOffinitS(equiposD)
console.log(`|--> Campeon: "${champD}" :: Sub-Campeon: "${subD}" 
|___`)

console.log('')
console.log('========================== CUARTOS DE FINAL ============================')
console.log('')

  console.log(`|Round 1 - ${champA} - VS - ${subB} -|`)
  console.log(`|Round 2 - ${champB} - VS - ${subC} -|`)
  console.log(`|Round 3 - ${champC} - VS - ${subD} -|`)
  console.log(`|Round 4 - ${champD} - VS - ${subA} -|`)

var semifinalistas = []

    const playS = new playOff();
    playS.ronda(1, champA, subB, semifinalistas);
    playS.ronda(2, champB, subC, semifinalistas);
    playS.ronda(3, champC, subD, semifinalistas);
    playS.ronda(4, champD, subA, semifinalistas);


console.log('')
console.log('============================= SEMIFINALES ===============================')
console.log('')

console.log(`|-- Los Equipos clasificados para las Semifinales son: -|
`)
semifinalistas.forEach(equipos => console.log(`|--> ${equipos}.`));

let finalista = semifinalistas.findIndex(
    (equipo, finalista) => finalista == 0
);
let fin1 = semifinalistas[finalista]

let finalista2 = semifinalistas.findIndex(
    (equipo, finalista2) => finalista2 == 1
);
let fin2 = semifinalistas[finalista2]

let finalista3 = semifinalistas.findIndex(
    (equipo, finalista3) => finalista3 == 2
);
let fin3 = semifinalistas[finalista3]

let finalista4 = semifinalistas.findIndex(
    (equipo, finalista4) => finalista4 == 3
);
let fin4 = semifinalistas[finalista4]


console.log('')
const sCamp = []
const perd = []
function rondaSemi(ronda, equipo1, equipo2){
    var golesA = selectChamp.getRandomInt(10);
    var golesB = selectChamp.getRandomInt(10);
    console.log('')
    console.log(`|-${equipo1} : ${golesA} Goles :: ${equipo2} : ${golesB} Goles -|`);
    console.log('')
    if ( golesA > golesB ) {
        console.log(`└======> Gana el Round ${ronda} ${equipo1} con: ${golesA} Goles
        `)
        sCamp.push(equipo1);
        perd.push(equipo2);
      } else {
        console.log(`└======> Gana el Round ${ronda} ${equipo2} con: ${golesB} Goles
        `)
        sCamp.push(equipo2);
        perd.push(equipo1);
      }

}


  console.log(`|Round 1 - ${fin1} - VS - ${fin3} -|`)
  console.log(`|Round 2 - ${fin2} - VS - ${fin4} -|`)

    rondaSemi(1, fin1, fin3);
    rondaSemi(2, fin2, fin4);

    
console.log('')
console.log('')
console.log('======================= TERCER Y CUARTO PUESTO =========================')

let perd1 = perd.findIndex(
    (equipo, perd1) => perd1 == 0
);
perd1 = perd[perd1]

let perd2 = perd.findIndex(
    (equipo, perd2) => perd2 == 1
);
perd2 = perd[perd2]

console.log('')
console.log(`Pasan al tercer y cuarto lugar "${perd1}" vs "${perd2}"`)
console.log('')
var golesA = selectChamp.getRandomInt(10);
var golesB = selectChamp.getRandomInt(10);
console.log('')


  console.log(`|- ${perd1} : ${golesA} Goles :: ${perd2} : ${golesB} Goles -|`);
  console.log('')

  if ( golesA > golesB ) {
    console.log(`└======> Gana ${perd1} con: ${golesA} Goles`)
    
  } else {
    console.log(`└======> Gana ${perd2} con: ${golesB} Goles`)
    
  }
console.log('')
console.log('')
console.log('================================ FINAL =================================')
console.log('')

let sCamp1 = sCamp.findIndex(
    (equipo, sCamp1) => sCamp1 == 0
);
sCamp1 = sCamp[sCamp1]

let sCamp2 = sCamp.findIndex(
    (equipo, sCamp2) => sCamp2 == 1
);
sCamp2 = sCamp[sCamp2]

console.log(`Pasan a la final "${sCamp1}" vs "${sCamp2}"`)
console.log('')
var golesA = selectChamp.getRandomInt(10);
var golesB = selectChamp.getRandomInt(10);
console.log('')


  console.log(`|- ${sCamp1} : ${golesA} Goles :: ${sCamp2} : ${golesB} Goles -|`);
  console.log('')

  if ( golesA > golesB ) {
    console.log('')
    console.log(`     =============================================================
          <|${sCamp1}|> Campeona de la EURO WOMEN'S CUP
     =============================================================`)
  } else {
    console.log('')
    console.log(`     =============================================================
      <|${sCamp2}|> Campeona de la EURO WOMEN'S CUP
     =============================================================`)
    
  }
console.log('')