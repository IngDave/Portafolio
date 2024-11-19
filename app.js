const div = document.querySelector(".text__animado"),
    text__animado = "Actualizando el portafolio...";

function efectoTextTyping(elemento, texto, i = 0) {
    elemento.textContent += texto[i];

    if (i === texto.length - 1) {
        // Esperar un momento antes de borrar y reiniciar la animación
        setTimeout(() => {
            elemento.textContent = ""; // Limpiar el contenido
            efectoTextTyping(elemento, texto); // Reiniciar
        }, 1000); // Pausa al final del texto
        return;
    }

    setTimeout(() => efectoTextTyping(elemento, texto, i + 1), 150);
}

efectoTextTyping(div, text__animado);
