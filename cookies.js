document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("cookie-banner");
    const btnAccept = document.getElementById("btn-accept-cookies");
    const btnReject = document.getElementById("btn-reject-cookies");

    console.log("Script de cookies cargado correctamente.");

    // HEMOS QUITADO EL COMPROBADOR DE COOKIES PARA QUE EL BANNER SALGA SIEMPRE
    setTimeout(() => {
        if (banner) {
            banner.classList.add("cookie-banner-visible");
            console.log("Banner mostrado siempre por petición del usuario.");
        }
    }, 500);

    // Si hace clic en "Aceptar todo"
    if (btnAccept) {
        btnAccept.addEventListener("click", () => {
            fijarCookie("cookies_decision", "aceptadas", 30);
            banner.classList.remove("cookie-banner-visible"); // Se esconde al pulsar
        });
    }

    // Si hace clic en "Rechazar"
    if (btnReject) {
        btnReject.addEventListener("click", () => {
            fijarCookie("cookies_decision", "rechazadas", 30);
            banner.classList.remove("cookie-banner-visible"); // Se esconde al pulsar
        });
    }
});

// --- FUNCIONES GESTORAS DE COOKIES ---
function fijarCookie(nombre, valor, dias) {
    let expiracion = "";
    if (dias) {
        let fecha = new Date();
        fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
        expiracion = "; expires=" + fecha.toUTCString();
    }
    document.cookie = nombre + "=" + (valor || "") + expiracion + "; path=/; SameSite=Lax";
}