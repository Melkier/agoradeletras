function PFacebook() {
    window.open("https://www.facebook.com");
}

function PInstagram() {
    window.open("https://www.instagram.com");
}

function PYoutube() {
    window.open("https://www.youtube.com");
}

function PTWITER() {
    window.open("https://x.com/?lang=es");
}

function CNosotros() {
    let respuesta1 = confirm("¿Te gustaría conocer más sobre Ágora de Letras en nuestra sección 'Sobre Nosotros'?");
    if (respuesta1) {
        alert("¡Bienvenido a la sección 'Sobre Nosotros' de Ágora de Letras!");
        window.location.href = "SobreNosotros.html";
    } else {
        alert("Está bien, ¡te esperamos en otro momento en Ágora de Letras!");
    }
}

function Confirmacion() {
    let respuesta = confirm("¿Te gustaría contactarnos y saber más sobre Ágora de Letras?");
    if (respuesta) {
        alert("¡Genial! Bienvenido a nuestra sección de contacto de Ágora de Letras.");
        window.location.href = "Contacto.html";
    } else {
        alert("No te preocupes, ¡nos encantaría ayudarte en otro momento!");
    }
}

function Sugerencia() {
    alert("Gracias por compartir tu consulta/sugerencia. El equipo de Ágora de Letras te contactará pronto.");
}
