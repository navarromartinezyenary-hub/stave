/*
 * Archivo principal de JavaScript
 * Constructora STAVE
 */

document.addEventListener('DOMContentLoaded', function () {

    console.log('Sitio web cargado correctamente');

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
       CERRAR MENÚ AL HACER CLICK
    ========================= */

    const menuItems = document.querySelectorAll('.nav-links a');

    menuItems.forEach(function (item) {

        item.addEventListener('click', function () {

            if (navLinks.classList.contains('active')) {

                navLinks.classList.remove('active');

            }

        });

    });

    /* =========================
       SCROLL SUAVE
    ========================= */

    const enlaces = document.querySelectorAll('a[href^="#"]');

    enlaces.forEach(function (enlace) {

        enlace.addEventListener('click', function (e) {

            const destinoID = this.getAttribute('href');

            /* SOLO enlaces internos */

            if (destinoID.length > 1) {

                const destino = document.querySelector(destinoID);

                if (destino) {

                    e.preventDefault();

                    destino.scrollIntoView({
                        behavior: 'smooth'
                    });

                }

            }

        });

    });

});


