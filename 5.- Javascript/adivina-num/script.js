//Librería: Math
console.log(Math.random()); //Math.random genera un número aleatorio del 0-1

console.log(Math.round(4.22)); //Math.round me redondea el número que ingrese

//Generar un número entero aleatorio 1 - 100
var num_aleatorio = Math.floor(Math.random()*99+1);
console.log(num_aleatorio);

//Función: Comparar el número que el usuario ingresó con el número aleatorio generado. Avisar al usuario si su num mayor, menor o igual
function adivina_numero() {
    var elemento_input = document.querySelector("#numero"); // elemento_input = <input type="text" id="numero" >


    var elemento_resultados = document.querySelector(".resultados");

    if(elemento_input.value == num_aleatorio) {
        //alert("¡Felicidades! Adivinaste");
        elemento_resultados.innerText = "¡Felicidades! Adivinaste";
        //Generamos nuevo aleatorio
        num_aleatorio = Math.floor(Math.random()*99+1);
        console.log(num_aleatorio);

    } else if(elemento_input.value > num_aleatorio) {
        //alert("El número aleatorio es menor");
        elemento_resultados.innerText = "El número aleatorio es menor";
    } else {
        //alert("El número aleatorio es mayor");
        elemento_resultados.innerText = "El número aleatorio es mayor";
    }
}