let pregunta = '¿Vas a salir de tu casa?'
let salida_casa = confirm(pregunta)

if (salida_casa){
    alert('Chequeá el pronóstico del tiempo antes de salir') 
} else {
    alert('Que bueno que te quedes. Va a llover mucho hoy.')
}

nombre = prompt('Cual es tu nombre?')
edad = prompt('Cual es tu edad?')
console.log(nombre)
console.log(edad)

fanDeportes = confirm('Te gustan los deportes?')
console.log(fanDeportes)

alert(`muchas gracias ${nombre} por contestar las preguntas`)

let usuario = {
    nombre,
    edad,
    deportistaProfesional: function(fanDeportes){
        if (fanDeportes){
            return 'Si, soy fan de los deportes'
        } else {
            'No soy tan fan aún de los deportes'
        }
    }
    
}
console.log(usuario.deportistaProfesional(fanDeportes))