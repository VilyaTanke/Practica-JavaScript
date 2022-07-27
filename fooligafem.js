import equipos from "./equipos.js";


export default class playOff {
    constructor(grupo, equipos) {
        this.grupo = grupo
        this.equipos = []
        
    }
    
    playOffinit(){
    const ganador = Math.floor(Math.random() * equipos.length);
    console.log(`ganador ${grupo} es: ${equipos[ganador]}`)
}



}

// playOffinit("A", equiposA);

