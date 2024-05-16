function rectangulo(altura , ancho) {
return (altura * ancho)
}
console.log (rectangulo (2,3))



function triangulo(altura , ancho) {
    return ((altura*ancho)/2)
}
console.log (triangulo(2,3))



function largoDelArray(array) {
    return array.length
}
console.log (largoDelArray([1,2,3,4,5,6]))



function dolarHoy(precio_pesos){
    precio_dolar = (precio_pesos *0.0011)
    return '$' + precio_dolar
}
console.log(dolarHoy(200000)) 



function precioFinal(precio){
    return 'ARS$' + (precio + (precio*0.21))
}
console.log(precioFinal(300))



function mitad(numero){
    return (numero/2)
}
console.log(mitad(100))



function diaSegunNumero(array_de_dias,numero){
    return (array_de_dias[numero-1])
}
console.log(diaSegunNumero(['lunes','martes','miercoles','jueves','viernes','sabado','domingo'],3))



// ejecutando funciones
console.log('Ejecutando Funciones')


function siguiente(numero) {
    return numero + 1;
  }
console.log (siguiente(5))


  
  function doble(numero) {
    return 2 * numero;
  }
console.log(doble(5))


  
  function siguienteDelDoble(numero) {
     return siguiente(doble(numero));
  }
console.log(siguienteDelDoble(5))


  
function anterior(numero) {
    return numero - 1;
  }
console.log (anterior(5))



function triple(numero) {
    return 3 * numero;
  }
console.log(triple(5))



function anteriorDelTriple(numero) {
    return anterior(triple(numero));
 }
console.log(anteriorDelTriple(5))