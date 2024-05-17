numero = prompt('Ingrese un numero: ')
numero2 = prompt('Ingrese otro numero: ')

let multiplicar = function(numero, numero2){
    return `el resultado de multiplicar ${numero} y ${numero2} es ${numero * numero2}`
}

console.log(multiplicar(numero,numero2))

// filosofo hipster

let fil_hips = {
    nacionalidad: 'Argentino',
    profesion: 'Musico',
    caminata: '2km'
}

nacionalidad_user = prompt('Ingrese su nacionalidad: ')
profesion_user = prompt('Ingrese su profesion: ')
caminata_user = prompt('Ingrese su caminata diaria: ')

function filosofoHipster(nacionalidad_user, profesion_user, caminata_user){
    if(nacionalidad_user == 'Argentino' && profesion_user == 'Musico' && caminata_user == '2km'){
        return 'soy un filosofo hipster'
    } else {
        return 'Aún no soy filósofo hipster'
    }
}

console.log(filosofoHipster(nacionalidad_user,profesion_user,caminata_user))