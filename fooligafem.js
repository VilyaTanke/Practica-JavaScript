import equipos from "./equipos.js";


export default class playOff {
    constructor(grupo, equipos) {
        this.grupo = grupo
        this.equipos = equipos  
    }
    
    playOffinit(equipos){
        const ganador = Math.floor(Math.random() * equipos.length);
        // console.log(` ${equipos[ganador]} `)
        var granD = equipos[ganador]
        var elegido = equipos[ganador]
        equipos.splice(elegido, 1)
        return granD
    }

    playOffinitS(equipos){
        const ganador2 = Math.floor(Math.random() * equipos.length);
        // console.log(equipos[ganador2])
        return equipos[ganador2]
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

}

