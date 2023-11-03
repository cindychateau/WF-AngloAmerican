console.log("¡Hola mundo!");

var num = 1;
var texto = "Este es un texto";
var bool = true; //true o false
console.log(texto);

var despues; //Declarar variable
console.log(despues);
despues = "Texto colocado después";
console.log(despues);
despues = 10;

//let (variable que se crea en un alcance finito)
//const (variable que no puede cambiar de valor)

var num1 = 1;
var num2 = 2;
var suma = num1 + num2; // 1 + 2 = 3

var nombre = "Pedro Páramo";
var mensaje = "Mi nombre es:";
console.log(mensaje+nombre); // + en texto es para concatenar

var edad = 40;
var hobby = "Leer";
var otro_mensaje = "Mi nombre es "+nombre+" y tengo "+edad+" años y mi hobby es "+hobby; //Concatenando
var mensaje_inter = `Mi nombre es ${nombre} y tengo ${edad} y mi hobby es ${hobby}`; //Interpolacion
console.log(mensaje_inter);

var combinamosTexto = "ABC";
console.log(combinamosTexto + num1);
console.log(combinamosTexto + num1 + num2);
console.log(num1 + num2 + combinamosTexto);

var orden = 10 + 20 / 6; // 1.- () 2.- /*% 3.- +-
orden = (10 + 20) / 6;
console.log(orden);

var n = 13;
n += 4; // 13 + 4 = 17
n++; //17 +1 = 18
console.log(n);

var nombre_completo = "Pablo";
nombre_completo += " Picasso";
console.log(nombre_completo);

if(bool) { //a === b; a !== b; a < b; a > b; a <= b; a >=b
    console.log("Variable Verdadera");
} else {
    console.log("Variable Falsa");
}

var numero = 20;
if(numero >= 15) {
    console.log("Num mayor a 15");
} else {
    console.log("Num menor a 15");
}

var edad_infante = 3;
if(edad_infante < 2) {
    console.log("El infante es bebe");
} else if(edad_infante < 5) {
    console.log("El infante es toddler");
} else {
    console.log("El infante es niño");
}

// var mes = 11;
// switch(mes) {
//     case 1:
//     case 2:
//     case 3:
//         console.log("Febrero");
//         break;
    
//     case 11:
//         console.log("Noviembre");
//         break;
// }

var temperatura = 20;
var estaLloviendo = false;

if(temperatura >= 18 && !estaLloviendo) { //&& -> AMBAS condicionales deben cumplirse
    console.log("¡Vamos a pasear al parque!");
}

var edad_conducir = 17;
var permisoPadres = true;

if(edad_conducir > 18 || permisoPadres) { // || -> Que alguna de las condicionales se cumpla
    console.log("Tienes permiso para obtener la licencia de manejo");
}

/*
i = 0
¡Hola!
¿cómo te va?
--
i = 1
¡Hola!
¿cómo te va?
--
i = 2
¡Hola!
¿cómo te va?
--
i = 3
*/
for(var i=0; i < 3; i++) { // (inicialización; condicional; paso/avance)
    console.log("¡Hola!");
    console.log("¿cómo te va?");
}

for(var j=10; j > 0; j-=2) {
    console.log(j);
}

var x = 0;
while(x < 3) {
    console.log("Entramos al while");
    x++;
}

var inicio = 1;
var final = 8;
while(inicio < final) {
    console.log(`Inicio: ${inicio} Final: ${final}`);
    inicio++;
    final--;
}