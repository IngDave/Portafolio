/*animador texto section about*/
const div = document.querySelector(".about__script__Texto"),
    about__script__Texto = "{ Ingeniero de Software }";

function efectoTextTyping(elemento, texto, i = 0) {
    elemento.textContent += texto[i];

    if (i === about__script__Texto.length - 1) return;

    setTimeout(() => efectoTextTyping(div, about__script__Texto, i + 1), 120);

}
efectoTextTyping(div, about__script__Texto);

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