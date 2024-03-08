class jugador{
    constructor(nombre, vidas, daño, lanzamiento) {
this.nombre = "nombre"
    this.vidas = 3
    this.danyo = 1
   this.lanzamiento = "lanzamiento"
 }
    


class guerrero extends jugador {
    constructor (nombre){
        super(nombre)
     this.nombre = "nombre"
    this.vidas = 3
    this.daño = 1
    
    }
    
}


class mago extends jugador {
    constructor(nombre){
        super(nombre)
this.nombre = "nombre"
    this.vidas = 2
    this.daño = 2

    }
    
   
}}

class equipo {
jugadores = []

anyadirjugador (jugador) {this.jugadores.push(jugador)}


}

let nolife =() => {
    return this.jugadores.every((jugador) => {
        if(jugador.lifes === 0) {
            return ("Has perdido!!")
        } else {
            return false
        }
    })
}

