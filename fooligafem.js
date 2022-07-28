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

}

