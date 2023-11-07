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

