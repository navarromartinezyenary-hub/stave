/*
 * Archivo principal de JavaScript
 * Constructora STAVE
 */

document.addEventListener('DOMContentLoaded', function () {

    console.log('Sitio web de Constructora STAVE cargado correctamente.');

    /* =========================
       MENÚ HAMBURGUESA
    ========================= */

    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {

        menuToggle.addEventListener('click', function () {

            navLinks.classList.toggle('active');

        });

    }

    /* =========================
       SCROLL SUAVE
    ========================= */

    const enlaces = document.querySelectorAll('a[href^="#"]');

    enlaces.forEach(function (enlace) {

        enlace.addEventListener('click', function (e) {

            e.preventDefault();

            const destino = document.querySelector(
                this.getAttribute('href')
            );

            if (destino) {

                destino.scrollIntoView({
                    behavior: 'smooth'
                });

                /* CERRAR MENÚ EN MÓVIL */

                if (navLinks) {
                    navLinks.classList.remove('active');
                }
            }

        });

    });

});


