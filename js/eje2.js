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
        return this.posicion + n
    },
    retroceder: function (n){
        return this.posicion - n
    }
}

auto.avanzar(10)
auto.retroceder(15)
auto.avanzar(6)

console.log(auto.posicion)
