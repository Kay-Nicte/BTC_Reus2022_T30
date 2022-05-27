//Ejercicio 1:

//Muestra por consola el mensaje "¡Hola, mundo!"
console.log("Ejercicio 1:\n\n¡Hola, mundo!");

//Esta función se activará cuando se clique el botón correspondiente
function PrimeraFuncion() {
    //Cambia el contenido del párrafo de id "contenido" y escribe en él el mensaje "Soy el primer script"
    document.getElementById("contenido").innerHTML = "Soy el primer script";
}


//Ejercicio 2:

//Almacenar el mensaje en una variable, usando \n \' y \" para mostrar los caracteres y hacer salto de línea
var mensaje = alert("Hola Mundo! \n Qué facil es incluir \'comillas simples\' \n y \" comillas dobles\"");

//Ejercicio 3:

console.log("\nEjercicio 3:\n")

//Array que almacena los doce meses del año
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

//Bucle para mostrar el contenido del array 'meses'
for (var i = 0; i < 12; i++) {
    console.log(meses[i]);
}

//Ejercicio 4:

//Array de valores diversos
var valores = [true, 5, false, "hola", "adios", 2];

//Ejercicio 4.1:

//Array de Strings
var arrayStrings = [];

//Bucle para guardar los strings de valores
for (i = 0; i < 6; i++) {
    if (typeof(valores[i]) == 'string') {
        arrayStrings.push(valores[i])
    }
}

//Variable para almacenar el string más grande
var max = "";

//Bucle para almacenar el string más grande
for (var j = 0; j < arrayStrings.length; j++) {
    if (arrayStrings[j].length > max.length) {
        max = arrayStrings[j];
    }
}

//Mensaje a mostrar por consola
console.log("\nEjercicio 4.1: El string mayor\n\nEl string más grande es: " + max + "\n");

//Ejercicio 4.2:

//Array para almacenar los booleanos
var booleans = [];

//Bucle para almacenar el elemento sólo si es booleano
for (k = 0; k < valores.length; k++) {
    if (typeof(valores[k]) == 'boolean') {
        booleans.push(valores[k])
    }
}

//Mostrar el valor original de los booleanos
console.log("\nEjercicio 4.2:\n\nValores booleanos originales: " + booleans);

//Bucle para modificar los valores
for (let index = 0; index < booleans.length; index++) {
    if (booleans[index] == true) {
        booleans[index] = false;
    } else {
        booleans[index] = true;
    }
}

//Mostrar los nuevos valores de los booleanos
console.log("Valores booleanos alterados: " + booleans);

//Ejercicio 4.3:

//Array para guardar los valores numéricos
var numeros = [];

//Bucle para almacenar los valores numéricos
for (var a = 0; a < 6; a++) {
    if (typeof(valores[a]) == 'number') {
        numeros.push(valores[a])
    }
}

//Mostrar por consola las operaciones y sus resultados
console.log("\nEjercicio 4.3: Resultado de operaciones matemáticas básicas:\n");
console.log("Suma: " + (numeros[0] + numeros[1]) + "\nResta: " + (numeros[0] - numeros[1]) + "\nMultiplicación: " + (numeros[0] * numeros[1]) + "\nDivisión: " + (numeros[0] / numeros[1]) + "\nResiduo: " + (numeros[0] % numeros[1]));


//Ejercicio 5: Las condiciones de los if deben mostrar el contenido de forma correcta:

var numero1 = 5;
var numero2 = 8;

console.log("\nEjercicio 5: Condicionales:\n");

if (numero1 < numero2) {
    console.log(numero1 + " no es mayor que " + numero2);
}
if (numero2 > 0) {
    console.log(numero2 + " es positivo ");
}
if (numero1 < 0 || numero1 != 0) {
    console.log(numero1 + " es negativo o distinto de " + 0);
}
if (++numero1 <= numero2) {
    console.log("Incrementar en 1 unidad el valor de " + numero1 +
        " no lo hace mayor o igual que " + numero2);
}

//Ejercicio 6: Calcular la letra del DNI

//Array de letras
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

//Pedir el número del DNI y la letra al usuario mediante un prompt
var dni = prompt("Introduce un número de DNI (sin letra):");


var letraDni = prompt("Introduce la letra del DNI (en mayúsculas):");

//Validar el número introducido
if (dni > 99999999 || dni < 0) {
    alert("Introduce un número válido");
}

//Función para comprobar qué letra le corresponde al número introducido
function comprobarLetraDni(numeroDNI, letra) {
    var residuo = numeroDNI % 23;
    return letra[residuo];
}

//Dependiendo del resultado obtenido, se muestra un mensaje al usuario
if (comprobarLetraDni(dni, letras) == letraDni) {
    alert("DNI correcto");
} else {
    alert("DNI incorrecto")
}

//Ejercicio 7: Calcular el factorial de un número entero

var numeroF = 5;

console.log("\nEjercicio 7: Factoriales\n\nEl factorial del numero " + numeroF + " es: ");

for (let index = numeroF - 1; index > 1; index--) {
    numeroF = numeroF * index;
}

console.log(numeroF);

//Ejercicio 8: Calcular si es par o impar

console.log("\nEjercicio 8: Calcular si es par o impar\n\n");

function calcularParImpar(num) {
    if ((num % 2) == 0) {
        return console.log("El número " + num + " es par.\n");
    } else {
        return console.log("El número " + num + " es impar.\n");
    }
}

//Ejecutar la función calcularParImpar
calcularParImpar(5);

//Ejercicio 9: MAYÜSCULAS, minúsculas o AmBaS

console.log("\nEjercicio 9: MAYÜSCULAS, minúsculas o AmBaS\n\n");

//Declarar e inicializar las variables mayuscula, minuscula y espacio
let mayuscula = 0;
let minuscula = 0;
let espacio = 0;

//Función para recorrer el string
function comprobarMayusculasYminusculas(string) {
    for (let index = 0; index < string.length; index++) {

        if (string.charAt(index) == " ") {
            espacio++;
        } else if (string.charAt(index) == string.charAt(index).toLowerCase()) {
            minuscula++;
        } else if (string.charAt(index) == string.charAt(index).toUpperCase()) {
            mayuscula++;
        }
    }

    //Condicionales para mostrar la respuesta correspondiente
    if (mayuscula > 0 && minuscula > 0) {
        return console.log("El texto contiene mayúsculas y minúsculas.");
    } else if (mayuscula > 0 && minuscula == 0) {
        return console.log("El texto sólo contiene mayúsculas.");
    } else if (mayuscula == 0 && minuscula > 0) {
        return console.log("El texto sólo contiene minúsculas.");
    }
}

//Ejecutar la función comprobarMayusculasYminusculas
comprobarMayusculasYminusculas("AmBaS");

//Ejercicio 10: Palíndromos

console.log("\nEjercicio 10: Palíndromos\n\n");

//Declarar e inicializar las variables
let arrayLetras = [];
let textoInvertido = [];
let contador = 0;

function comprobarPalindromo(string) {
    for (let index = 0; index < string.length; index++) {

        //Recorrer la cadena de texto para almacenar las letras
        if ((/[a-zA-Z]/).test(string.charAt(index))) {
            arrayLetras.push(string.charAt(index));
        }
    }

    //Guardar en otro array los mismos caracteres, pero invertidos
    for (let indexInvertido = arrayLetras.length; indexInvertido >= 0; indexInvertido--) {
        textoInvertido.push(string.charAt(indexInvertido));

        //Array anidado para comprobar y almacenar coincidencias
        for (let index = 0; index < arrayLetras.length; index++) {
            if (textoInvertido[indexInvertido] == arrayLetras[index]) contador++;
        }
    }

    //Si (contador == arrayLetras.length), quiere decir que coinciden todos los campos
    if (contador == arrayLetras.length) {
        return console.log("El texto es palíndromo.")
    } else {
        return console.log("El texto no es palíndromo.")
    }
}

//Ejecutar la función
comprobarPalindromo("aeiiea");