/*
 * Archivo principal de JavaScript
 * Constructora STAVE
 */

document.addEventListener('DOMContentLoaded', function () {
    console.log('Sitio web de Constructora STAVE cargado correctamente.');

    // Desplazamiento suave al hacer clic en enlaces internos
    const enlaces = document.querySelectorAll('a[href^="#"]');

    enlaces.forEach(function (enlace) {
        enlace.addEventListener('click', function (e) {
            e.preventDefault();

            const destino = document.querySelector(this.getAttribute('href'));

            if (destino) {
                destino.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});


