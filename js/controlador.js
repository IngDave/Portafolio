/*animador texto section about*/
const div = document.querySelector(".container__about__script__Texto"),
    about__script__Texto = "{ Ingeniero de Software }";

function efectoTextTyping(elemento, texto, i = 0) {
    elemento.textContent += texto[i];

    if (i === about__script__Texto.length - 1) return;

    setTimeout(() => efectoTextTyping(div, about__script__Texto, i + 1), 120);

}
efectoTextTyping(div, about__script__Texto);

//evento que permite abrir campos de texto:
const mostrarTexto = document.getElementById('mostrar__parrafo');
const btn = document.getElementById('.container__services__btn');

btn.addEventListener('click', function() {
    if (mostrarTexto.style.display === 'none' || mostrarTexto.style.display === '') {
        mostrarTexto.style.display = 'block';
        btn.textContent = 'Ocultar párrafo';
    } else {
        mostrarTexto.style.display = 'none';
        btn.textContent = 'Mostrar párrafo';
    }
});

/*Alert_Formulario*/
document.getElementById('btn_Submit').onclick = function () {
    Swal.fire({
        position: "bottom-start",
        icon: "success",
        title: "Mensaje enviado",
        text: "¡Guardado exitosamente!",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        backdrop: true,
        toast: true
    })
}

