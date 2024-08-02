const div = document.querySelector(".about__script__Texto"),
    about__script__Texto = "{ Ingeniero de Software }";

function efectoTextTyping(elemento, texto, i = 0) {
    elemento.textContent += texto[i];

    if (i === about__script__Texto.length - 1) return;

    setTimeout(() => efectoTextTyping(div, about__script__Texto, i + 1), 120);

}

efectoTextTyping(div, about__script__Texto);