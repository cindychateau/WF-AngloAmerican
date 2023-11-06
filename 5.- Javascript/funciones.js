/*
Función: Bloque de código al cual nombramos y al que podemos llamar todas las veces que necesitemos en el momento que lo necesitemos
*/
//function nombre_funcion(parametro1, parametro2...){}
function saludo() {
    console.log("Hola");
    console.log("¿Cómo estás?");
}

saludo();
saludo();
saludo();
saludo();
saludo();

//nombre = "Juana"
function saludo_con_nombre(nombre) {
    console.log(`Hola ${nombre}`);
}

saludo_con_nombre("Elena");
saludo_con_nombre("Juana");

//nombre = "Elena", apellido = "De Troya"
function saludo_con_nombre_apellido(nombre, apellido) {
    console.log(`1.- Hola ${nombre} ${apellido}`);
    console.log("2.- Hola "+nombre+" "+apellido);
}

saludo_con_nombre_apellido("Elena", "De Troya");
//num1 = 10, num2 = 15
function sumatoria(num1, num2) {
    //Regresa un valor
    return num1+num2; //<- 10+15 = 25
}

var resultado = sumatoria(10, 15); //resultado = 25;
console.log(`El resultado es: ${resultado}`);

//Crea una función que reciba un arreglo y regrese la suma de todos los valores del arreglo
/*
arr = [1, 2, 3, 4, 5];
sum = 0
i = 0
sum = 0 + arr[0] = 0 + 1 = 1
---
i = 1
sum = 1 + arr[1] = 1 + 2 = 3
---
i = 2
sum = 3 + arr[2] = 3 + 3 = 6
---
i = 3
sum = 6 + arr[3] = 6 + 4 = 10
---
i = 4
sum = 10 + arr[4] = 10 + 5 = 15
---
i = 5
RETURN 15
*/
function suma_arreglo(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

var suma = suma_arreglo([1, 2, 3, 4, 5]); //suma = 15
var arreglo = [2, 3, 4, 5];
var suma2 = suma_arreglo(arreglo);