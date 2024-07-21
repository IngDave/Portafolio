const div = document.querySelector(".lefts__paragrafo"),
    lefts__paragrafo = "Ingeniero de Software";

function efectoTextTyping(elemento, texto, i = 0) {
    elemento.textContent += texto[i];

    if (i === lefts__paragrafo.length - 1) return;

    setTimeout(() => efectoTextTyping(div, lefts__paragrafo, i + 1), 120);

}

efectoTextTyping(div, lefts__paragrafo);