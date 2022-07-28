import equipos, { equiposA, equiposB, equiposC, equiposD } from "./equipos.js";

import playOff, {  } from "./fooligafem.js";


const selectChamp = new playOff("A", equiposA);

console.log(`|
|== Selección del grupo A ==|
| Campeon:`)
let champA = selectChamp.playOffinit(equiposA)
console.log(champA)
console.log(`|
| Sub-Campeon:`)
let subA = selectChamp.playOffinitS(equiposA)
console.log(subA)
console.log(`|
|== Selección del grupo B ==|
| Campeon:`)
let champB = selectChamp.playOffinit(equiposB)
console.log(champB)
console.log(`|
| Sub-Campeon:`)
let subB = selectChamp.playOffinitS(equiposB)
console.log(subB)
console.log(`|
|== Selección del grupo C ==|
| Campeon:`)
let champC = selectChamp.playOffinit(equiposC)
console.log(champC)
console.log(`|
| Sub-Campeon:`)
let subC = selectChamp.playOffinitS(equiposC)
console.log(subC)
console.log(`|
|== Selección del grupo D ==|
| Campeon:`)
let champD = selectChamp.playOffinit(equiposD)
console.log(champD)
console.log(`|
| Sub-Campeon:`)
let subD = selectChamp.playOffinitS(equiposD)
console.log(subD)
console.log('|')

console.log('')
console.log('========================== CUARTOS DE FINAL ============================')
console.log('')

var golesA = selectChamp.getRandomInt(10);
var golesB = selectChamp.getRandomInt(10);


  console.log(`|Round 1 - ${champA} - VS - ${subB} -|`)
  console.log(`|Round 2 - ${champB} - VS - ${subC} -|`)
  console.log(`|Round 3 - ${champC} - VS - ${subD} -|`)
  console.log(`|Round 4 - ${champD} - VS - ${subA} -|`)

var semifinalistas = []

  console.log('')
  console.log(`|-${champA} : ${golesA} Goles :: ${subB} : ${golesB} Goles -|`);
  console.log('')

  if ( golesA > golesB ) {
    console.log(`└======> Gana el Round 1 ${champA} con: ${golesA} Goles`)
    semifinalistas.push(champA);
  } else {
    console.log(`└======> Gana el Round 1 ${subB} con: ${golesB} Goles`)
    semifinalistas.push(subB);    
  }
console.log('')
var golesA = selectChamp.getRandomInt(10);
var golesB = selectChamp.getRandomInt(10);
console.log('')


  console.log(`|- ${champB} : ${golesA} Goles :: ${subC} : ${golesB} Goles -|`);
  console.log('')

  if ( golesA > golesB ) {
    console.log(`└======> Gana el Round 2 ${champB} con: ${golesA} Goles`)
    semifinalistas.push(champB);
  } else {
    console.log(`└======> Gana el Round 2 ${subC} con: ${golesB} Goles`)
    semifinalistas.push(subC);  
  }
console.log('')
var golesA = selectChamp.getRandomInt(10);
var golesB = selectChamp.getRandomInt(10);
console.log('')

  console.log(`|- ${champC} : ${golesA} Goles :: ${subD} : ${golesB} Goles -|`);
  console.log('')

  if ( golesA > golesB ) {
    console.log(`└======> Gana el Round 3 ${champC} con: ${golesA} Goles`)
    semifinalistas.push(champC);    
  } else {
    console.log(`└======> Gana el Round 3 ${subD} con: ${golesB} Goles`)
    semifinalistas.push(subD);  
  }
console.log('')
var golesA = selectChamp.getRandomInt(10);
var golesB = selectChamp.getRandomInt(10);
console.log('')


  console.log(`|- ${champD}  apunta: ${golesA} Goles :: ${subA} : ${golesB} Goles -|`);
  console.log('')

  if ( golesA > golesB ) {
    console.log(`└======> Gana el Round 4 ${champD} con: ${golesA} Goles`)
    semifinalistas.push(champD);
  } else {
    console.log(`└======> Gana el Round 4 ${subA} con: ${golesB} Goles`)
    semifinalistas.push(subA);      
}
console.log('')
console.log('============================= SEMIFINALES ===============================')
console.log('')

console.log(`|-- Los Equipos clasificados para las Semifinales son: -|`)
console.log(semifinalistas)

let finalista = semifinalistas.findIndex(
    (equipo, finalista) => finalista == 0
);
let fin1 = semifinalistas[finalista]
// console.log(semifinalistas[finalista]);

let finalista2 = semifinalistas.findIndex(
    (equipo, finalista2) => finalista2 == 1
);
let fin2 = semifinalistas[finalista2]
// console.log(semifinalistas[finalista2]);

let finalista3 = semifinalistas.findIndex(
    (equipo, finalista3) => finalista3 == 2
);
let fin3 = semifinalistas[finalista3]
// console.log(semifinalistas[finalista3]);

let finalista4 = semifinalistas.findIndex(
    (equipo, finalista4) => finalista4 == 3
);
let fin4 = semifinalistas[finalista4]
// console.log(semifinalistas[finalista4]);


console.log('')
var golesA = selectChamp.getRandomInt(10);
var golesB = selectChamp.getRandomInt(10);


  console.log(`|Round 1 - ${fin1} - VS - ${fin3} -|`)
  console.log(`|Round 2 - ${fin2} - VS - ${fin4} -|`)

var semifinalistas = []

  console.log('')
  console.log(`|-${fin1} : ${golesA} Goles :: ${fin3} : ${golesB} Goles -|`);
  console.log('')

  if ( golesA > golesB ) {
    console.log(`└======> Gana el Round 1 ${fin1} con: ${golesA} Goles`)
    var sCamp1 = fin1
    var perd1 = fin3
  } else {
    console.log(`└======> Gana el Round 1 ${fin3} con: ${golesB} Goles`)
    var sCamp1 = fin3
    var perd1 = fin1
  }
console.log('')
var golesA = selectChamp.getRandomInt(10);
var golesB = selectChamp.getRandomInt(10);
console.log('')


  console.log(`|- ${fin2} : ${golesA} Goles :: ${fin4} : ${golesB} Goles -|`);
  console.log('')

  if ( golesA > golesB ) {
    console.log(`└======> Gana el Round 2 ${fin2} con: ${golesA} Goles`)
    var sCamp2 = fin2
    var perd2 = fin4
  } else {
    console.log(`└======> Gana el Round 2 ${fin4} con: ${golesB} Goles`)
    var sCamp2 = fin4
    var perd2 = fin2
  }
console.log('')
console.log('')
console.log('======================= TERCER Y CUARTO PUESTO =========================')
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

console.log(`Pasan a la final "${sCamp1}" vs "${sCamp2}"`)
console.log('')
var golesA = selectChamp.getRandomInt(10);
var golesB = selectChamp.getRandomInt(10);
console.log('')


  console.log(`|- ${sCamp1} : ${golesA} Goles :: ${sCamp2} : ${golesB} Goles -|`);
  console.log('')

  if ( golesA > golesB ) {
    console.log('')
    console.log(`    =============================================================
    ${sCamp1} Campeona de la EURO WOMEN'S CUP
    =============================================================`)
  } else {
    console.log('')
    console.log(`    =============================================================
    ${sCamp2} Campeona de la EURO WOMEN'S CUP
    =============================================================`)
    
  }
console.log('')