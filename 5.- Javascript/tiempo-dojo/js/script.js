function alerta(elemento_a) {
    //elemento_a = <a onclick="alerta(this)" href="#">Burbank</a>

    var ciudad = elemento_a.innerText;

    alert("Cargando informe meteorológico de..."+ciudad);

    var elemento_h2 = document.querySelector("h2"); 
    //elemento_h2 = <h3 id="prueba">Hoy</h3>
    //.innerText: texto interno
    //.style: cambiar el estilo
    elemento_h2.innerText = ciudad;
}

function eliminar_cookies() {
    var elemento_cookie = document.querySelector(".cookies");
    elemento_cookie.remove();
    //document.querySelector(".cookies").remove()
}

function cambiar_temperatura() {
    var selector = document.querySelector("select");
    //console.log(selector.value);

    for(let i=0; i<8; i++) {
        //elemento_temperatura = <span class="max" id="temp0">24</span>
        var elemento_temperatura = document.querySelector("#temp"+i);
        //temperatura = 24 -> TEXTO
        var temperatura = elemento_temperatura.innerText;
        temperatura = parseInt(temperatura); //Transforma el texto en un número entero

        console.log(temperatura);

        var nueva_temperatura = 0;
        if(selector.value == "C") {
            //F -> C
            nueva_temperatura = (temperatura - 32) * 5/9;
        } else {
            //C -> F
            nueva_temperatura = (temperatura * 9/5) + 32;
        }

        nueva_temperatura = Math.round(nueva_temperatura);
        //nueva_temperatura = nueva_temperatura.toFixed(2); // Dos decimales
        elemento_temperatura.innerText = nueva_temperatura;
    }
}
