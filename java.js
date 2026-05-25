/**
 * Motor de Animaciones Avanzado - Réplica Zelda Nintendo Switch
 */
document.addEventListener("DOMContentLoaded", () => {

    const header = document.getElementById("main-header");
    const heroParallaxBg = document.getElementById("hero-parallax-bg");
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    // ==========================================================================
    // 1. CONTROL DE EVENTO SCROLL (NAVBAR COMPACTA & PARALLAX HERO)
    // ==========================================================================
    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY;

        // Transformación del menú cápsula
        if (scrollPosition > 60) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        // Efecto Parallax en el fondo azul de la isla
        // Mueve la caja de fondo a menor velocidad que el desplazamiento real
        if (heroParallaxBg) {
            heroParallaxBg.style.transform = `translateY(${scrollPosition * 0.35}px)`;
        }

        // Resaltar sección activa en el menú según la posición de la pantalla
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });

    // ==========================================================================
    // 2. DETECTOR DE INTERSECCIÓN EFICIENTE (REVEAL LATERAL IZQUIERDA / DERECHA)
    // ==========================================================================
    const revealOptions = {
        root: null,
        threshold: 0.12, // Se activa cuando asoma un 12% de la estructura en pantalla
        rootMargin: "0px 0px -40px 0px"
    };

    const scrollRevealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Una vez ejecutada la animación, dejamos de observar para ahorrar recursos de CPU
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Seleccionamos todos los bloques laterales preparados en el CSS
    const elementsToReveal = document.querySelectorAll(".reveal-left, .reveal-right");

    elementsToReveal.forEach(element => {
        scrollRevealObserver.observe(element);
    });
});
/**
 * Actualización del Script: Asegurar que el footer se anime correctamente
 */
document.addEventListener("DOMContentLoaded", () => {
    // ... (Mantén tu código anterior del header y parallax) ...

    // Seleccionamos las nuevas partes del footer para el sistema de Reveal
    const footerElements = document.querySelectorAll('.footer-legal, .footer-official-logos, .black-divider-section');

    // Si usaste el IntersectionObserver que te di antes, solo añade esto:
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.1 });

    // Observar nuevos elementos
    footerElements.forEach(el => observer.observe(el));

    // Animación extra para los botones del footer
    const footerBtns = document.querySelectorAll('.btn-footer');
    footerBtns.forEach(btn => observer.observe(btn));
});
/**
 * Motor de Animaciones Avanzado - Réplica Zelda Nintendo Switch
 */
document.addEventListener("DOMContentLoaded", () => {

    const header = document.getElementById("main-header");
    const heroParallaxBg = document.getElementById("hero-parallax-bg");
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    // ==========================================================================
    // 1. CONTROL DE EVENTO SCROLL (NAVBAR COMPACTA & PARALLAX HERO)
    // ==========================================================================
    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY;

        // Transformación del menú cápsula
        if (scrollPosition > 60) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        // Efecto Parallax en el fondo de la sección de inicio
        if (heroParallaxBg) {
            heroParallaxBg.style.transform = `translateY(${scrollPosition * 0.35}px)`;
        }

        // Resaltar sección activa en el menú según la posición de la pantalla
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });

    // ==========================================================================
    // 2. DETECTOR DE INTERSECCIÓN (REVEAL LATERAL PARA ELEMENTOS DEL CUERPO Y FOOTER)
    // ==========================================================================
    const revealOptions = {
        root: null,
        threshold: 0.12, // Se activa cuando asoma un 12% del elemento
        rootMargin: "0px 0px -40px 0px"
    };

    const scrollRevealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Dejamos de observar una vez animado
            }
        });
    }, revealOptions);

    // Seleccionamos todos los bloques que deben aparecer con animación
    const elementsToReveal = document.querySelectorAll(
        ".reveal-left, .reveal-right, .reveal, .footer-legal, .footer-official-logos, .black-divider-section"
    );

    elementsToReveal.forEach(element => {
        scrollRevealObserver.observe(element);
    });
});
// ==========================================================================
// 3. INTERACTIVIDAD DE PRE-LANZAMIENTO PARA EL BOTÓN DE STEAM
// ==========================================================================
const steamBtn = document.getElementById("steam-trigger");

if (steamBtn) {
    steamBtn.addEventListener("click", () => {
        // Guardamos el texto original para no perderlo
        const originalText = steamBtn.textContent;

        if (steamBtn.textContent === "STEAM / PC") {
            // Cambia el mensaje temporalmente con la temática de la deuda de tu juego
            steamBtn.textContent = "¡PRÓXIMAMENTE EN STEAM!";
            steamBtn.style.borderColor = "#e20613";
            steamBtn.style.color = "#ffffff";

            // Devuelve el botón a su estado original tras 2.5 segundos
            setTimeout(() => {
                steamBtn.textContent = originalText;
                steamBtn.style.borderColor = "";
                steamBtn.style.color = "";
            }, 2500);
        }
    });
}