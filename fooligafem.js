import equipos from "./equipos.js";


export default class playOff {
    constructor(grupo, equipos) {
        this.grupo = grupo
        this.equipos = equipos 
    }
    
    playOffinit(equipos){
        const ganador = Math.floor(Math.random() * equipos.length);
        var elegido = equipos[ganador]
        equipos.splice(ganador, 1)
        return elegido
    }

    playOffinitS(equipos){
        const ganador2 = Math.floor(Math.random() * equipos.length);
        return equipos[ganador2]
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    
    
    ronda(ronda, equipo1, equipo2, semifinalistas){
        var golesA = Math.floor(Math.random() * 10);
        var golesB = Math.floor(Math.random() * 10);
        console.log('')
        console.log(`|-"${equipo1}" : ${golesA} Goles :: "${equipo2}" : ${golesB} Goles -|`);
        console.log('')
        if ( golesA > golesB ) {
            console.log(`└======> Gana el Round ${ronda} "${equipo1}" con: ${golesA} Goles
            `)
            semifinalistas.push(equipo1);
          } else {
            console.log(`└======> Gana el Round ${ronda} "${equipo2}" con: ${golesB} Goles
            `)
            semifinalistas.push(equipo2);    
          }
        return semifinalistas
    }

}

