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


  console.log(`|-------- ${champA} ----- VS ----- ${subB} ---------------|`)

  console.log(`|--------- apunta: ${golesA} Goles ::::::::::::::: apunta: ${golesB} Goles-----------|`);
  console.log('|-------------------------------------------------------------|')

  if ( golesA > golesB ) {
    console.log(`Gana el ${champA} con: ${golesA} Goles`)
  } else {
    console.log(`Gana el ${subB} con: ${golesB} Goles`)
  }
console.log('--------------------------------------------')
var golesA = selectChamp.getRandomInt(10);
var golesB = selectChamp.getRandomInt(10);
console.log('--------------------------------------------')

console.log(`|-------- ${champB} ----- VS ----- ${subC} ---------------|`)

  console.log(`|--------- apunta: ${golesA} Goles ::::::::::::::: apunta: ${golesB} Goles-----------|`);
  console.log('|-------------------------------------------------------------|')

  if ( golesA > golesB ) {
    console.log(`Gana el ${champB} con: ${golesA} Goles`)
  } else {
    console.log(`Gana el ${subC} con: ${golesB} Goles`)
  }
console.log('--------------------------------------------')
var golesA = selectChamp.getRandomInt(10);
var golesB = selectChamp.getRandomInt(10);
console.log('--------------------------------------------')

console.log(`|-------- ${champC} ----- VS ----- ${subD} ---------------|`)

  console.log(`|--------- apunta: ${golesA} Goles ::::::::::::::: apunta: ${golesB} Goles-----------|`);
  console.log('|-------------------------------------------------------------|')

  if ( golesA > golesB ) {
    console.log(`Gana el ${champC} con: ${golesA} Goles`)
  } else {
    console.log(`Gana el ${subD} con: ${golesB} Goles`)
  }
console.log('--------------------------------------------')
var golesA = selectChamp.getRandomInt(10);
var golesB = selectChamp.getRandomInt(10);
console.log('--------------------------------------------')

console.log(`|-------- ${champD} ----- VS ----- ${subA} ---------------|`)

  console.log(`|--------- apunta: ${golesA} Goles ::::::::::::::: apunta: ${golesB} Goles-----------|`);
  console.log('|-------------------------------------------------------------|')

  if ( golesA > golesB ) {
    console.log(`Gana el ${champD} con: ${golesA} Goles`)
  } else {
    console.log(`Gana el ${subA} con: ${golesB} Goles`)
  }
console.log('--------------------------------------------')

