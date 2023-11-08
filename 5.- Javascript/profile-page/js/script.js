console.log("Página cargada");

function cerrar_sesion() {
    alert("Cerrando Sesión");
    console.log("Se cerró la sesión del usuario");
}

//this -> es elemento que llama a mi función/elemento con el que interactuamos
function cambiar_texto(elemento_this) {
    //console.log(elemento_this);
    elemento_this.innerText = "Otro texto";
}

function mouse_dentro(elemento_imagen){
    elemento_imagen.src = "images/todd-s.jpg";
}

function mouse_fuera(elemento_imagen) {
    elemento_imagen.src = "images/jane-m.jpg";
}

function eliminar(elemento) {
    elemento.remove();
}

var clicks_profile = 0;
function hicimos_click(elemento) {
    clicks_profile++;
    alert("Hemos hecho clicks:"+clicks_profile);
    elemento.style.color = "purple";
    //background-color ->backgroundColor
    //font-weight -> fontWeight
    elemento.style.fontWeight = "normal";
    elemento.style.backgroundColor = "red";
}

function editar_perfil() {
    var nombre = document.querySelector("#name"); // nombre = <h1 id="name">Jane Doe</h1>

    var input = document.querySelector('#nombre'); //Seleccionando elemento input

    if(input.value == "") {
        nombre.innerText = "Elena de Troya";
    } else {
        nombre.innerText = input.value;
    }
    
    var locacion = document.querySelector('.location');
    locacion.innerHTML = '<img src="icons/map-marker.png" alt="pin" class="icon-s"> Roma';

    var parrafo = document.querySelector(".jobs");
    parrafo.innerText = "Desarrolladora, Ingeniera y Reina de Troya";
}

function eliminar_persona() {
    /*
    var fila = document.querySelector("#fila-todd");
    fila.remove();
    */
    document.querySelector("#fila-todd").remove();
}