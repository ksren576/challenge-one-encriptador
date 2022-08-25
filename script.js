const inputMensaje = document.querySelector("#mensaje");
const encriptarBtn = document.querySelector(".encriptar");
const desencriptarBtn = document.querySelector(".desencriptar");
const copiarBtn = document.querySelector(".copiar");
const escucharBtn = document.querySelector(".escuchar");
const inputResultado = document.querySelector("#respuesta");
const encriptador = document.querySelector(".encriptador");

function validacionTexto(mensaje) {
    let letrasMinusculas = "abcdefghijklmnñopqrstuvwxyz";
    let mensajeError = "";

    for (let letra of mensaje) {
        if (!letrasMinusculas.includes(letra)) {
            mensajeError = "Solo se permiten letras minúsculas"
        }
    }
    if (mensajeError.length === 0) {
        return true;
    }
    alert(mensajeError);
    return false;
}

function encriptar() {
    const mensaje = inputMensaje.value;
    if (!validacionTexto(mensaje)) return;
    const mensajeEncriptado = mensaje.replace("e", "enter").replace("i", "imes").replace("a", "ai").replace("o", "ober").replace("u", "ufat");
    inputResultado.innerHTML = mensajeEncriptado;
    ocultarImagen();
}

function desencriptar() {
    const mensajeCodificado = inputMensaje.value;
    const mensajeDecodificado = mensajeCodificado.replace("enter", "e").replace("imes", "i").replace("ai", "a").replace("ober", "o").replace("ufat", "u");
    inputResultado.innerHTML = mensajeDecodificado;
}

function copiar() {
    const mensajeCodificado = inputResultado.innerHTML;
    navigator.clipboard.writeText(mensajeCodificado);
}

function ocultarImagen() {
    const div = document.querySelector('.mensaje-vacio');
    div.style.visibility = 'hidden';
    copiarBtn.style.visibility = 'visible';
}


encriptarBtn.onclick = encriptar;
desencriptarBtn.onclick = desencriptar;
copiarBtn.onclick = copiar;
