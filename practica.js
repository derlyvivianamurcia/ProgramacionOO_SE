let nombre = 'Derly';
let apellido = "Murcia";
let edad = 23;

console.log(`hola mi nombre es: ${nombre} ${apellido} y tengo ${edad}`)

//EJERCICIO

var a = 0;
var b = 0;
var calcularMultiplicacion=0;

a =parseInt(prompt('Digita un numero (a)'));
b =parseInt(prompt('Digita un numero (b)'));
calcularMultiplicacion = multiplicacion (a,b);

function multiplicacion(nA, nB) {
    const resultado = nA*nB;
    console.log('El resultado de la multiplicación es el siguiente:' + resultado)
}



