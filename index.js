function encriptar() {
    var texto = document.getElementById("texto").value;
    var tituloMensajeEncriptado = document.getElementById("titulo-mensaje-encriptado");
    var textoImagen = document.getElementById("texto-imagen");
    var figuraEncriptada = document.getElementById("figura-encriptada");

    var textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length ) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensajeEncriptado.textContent = "Texto encriptado correctamente";
        textoImagen.textContent = "";
        figuraEncriptada.src = "./img/ilustracion.jpg";
    } else {
        figuraEncriptada.src = "./img/figura.jpg";
        tituloMensajeEncriptado.textContent = "Ningún mensaje fue encriptado";
        textoImagen.textContent = "Ingrese el texto que desees encriptar o desencriptar";
        Swal.fire({
            title: "OH OH ",
            text: "Debes escribir un texto",
            icon: "Warning",
            confirmButtonText: "Aceptar"
          });
          
    }
}

function desencriptar(){
    var texto = document.getElementById("texto").value;
    var tituloMensajeEncriptado = document.getElementById("titulo-mensaje-encriptado");
    var textoImagen = document.getElementById("texto-imagen");
    var figuraEncriptada = document.getElementById("figura-encriptada");

    var textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    
        if (texto.length ) {
            document.getElementById("texto").value = textoCifrado;
            tituloMensajeEncriptado.textContent = "Texto desencriptado correctamente";
            textoImagen.textContent = "";
            figuraEncriptada.src = "./img/desencriptar.jpg";
        } else {
            figuraEncriptada.src = "./img/figura.jpg";
            tituloMensajeEncriptado.textContent = "Ningún mensaje fue desencriptado";
            textoImagen.textContent = "Ingrese el texto que desees encriptar o desencriptar";
            Swal.fire({
                title: "OH OH",
                text: "Debes escribir un texto",
                icon: "warning", 
                confirmButtonText: "Aceptar"
              });
              
        }
    
}
