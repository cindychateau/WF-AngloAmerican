var likes = 0;

function me_gusta() {
    likes++;
    var elemento_numero = document.querySelector("#numero"); //elemento_numero = <span id="numero">3</span>
    elemento_numero.innerText = likes;
}