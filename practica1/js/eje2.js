let misDatos = {
    nombre: 'Benjamin',
    apellido: 'Orchanksy',
    dni: '46127493',
    edad: '18',
    comidasFavoritas: ['Carne','Pescado','Pollo'],
    saludar: function() {
        return 'Hola mi nombre es ' + this.nombre + ' ' + this.apellido + 'y tengo ' + this.edad + ', mi comida favorita es ' + this.comidasFavoritas[0]

    }
}

let saludo = misDatos.saludar();

console.log(saludo)

let auto = {
    marca: 'BMW',
    modelo: 'M3',
    anio: '2024',
    color: 'Negro',
    posicion: 0,
    avanzar: function (n){
        return this.posicion += n
    },
    retroceder: function (n){
        return this.posicion -= n
    }
}

auto.avanzar(10)
auto.retroceder(15)
auto.avanzar(6)

console.log(auto.posicion)


let AutoNuevo = {
    marca: 'BMW',
    modelo: 'M3',
    anio: '2025',
    color: 'Negro',
    posicion: 0,
    moverse: function (n){
        return this.posicion += n
    },
}

AutoNuevo.moverse(-5)
AutoNuevo.moverse(+6)

console.log(AutoNuevo.posicion)

let IronMan = {
    nombre: 'Iron Man',
    equipo: 'Avengers',
    poderes: ['Volar','Lanzar Misiles','Disparar Laser'],
    energia: 100,
    getPoder: function(numero){
        return `Poder Elegido de ${this.nombre}, ${this.poderes[numero - 1]}, energia restante:${this.energia -= 10}` 

    }
}

let Hulk = {
    nombre: 'Hulk',
    equipo: 'Avengers',
    poderes: ['Aplastar','Gritar','Golpear'],
    energia: 100,
    getPoder: function(numero){
        return `Poder Elegido de ${this.nombre}, ${this.poderes[numero - 1]}, energia restante:${this.energia -= 10}` 

    }
}

console.log (Hulk.getPoder(1))
console.log (IronMan.getPoder(1))
console.log (Hulk.getPoder(2))
console.log (IronMan.getPoder(2))
console.log(IronMan.getPoder(3))
console.log(Hulk.getPoder(3))