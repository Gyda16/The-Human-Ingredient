document.addEventListener("DOMContentLoaded", () => {

    // 1. Base de datos con los textos y las rutas para tus imágenes
    const placesData = {
        cocina: {
            title: "La Cocina Infernal",
            desc: "Aquí es donde ocurre la magia gótica. Equipada con fogones malditos de alta velocidad, los chefs deben coordinar sus movimientos para emplatar las comandas de los demonios mayores antes de que agoten su paciencia.",
            img: "./lugar-cocina.png"
        },
        almacen: {
            title: "Almacén de \"Ingredientes\"",
            desc: "El rincón más oscuro del restaurante. En este depósito se conservan las piezas humanas premium capturadas en el matadero. Mantén la refrigeración al máximo o la putrefacción arruinará el menú del día.",
            img: "./lugar-almacen.png"
        },
        comedor: {
            title: "El Comedor del Abismo",
            desc: "La sala principal donde se sientan los clientes del inframundo. Las mesas deben limpiarse constantemente de restos de sangre; un comedor sucio altera la cordura del personal y enfurece a los inspectores de almas.",
            img: "./lugar-comedor.png"
        },
        matadero: {
            title: "Zona de Sacrificio",
            desc: "El punto de partida de toda la cadena de producción. Aquí se procesan los suministros de carne a golpe de hacha. Cada segundo invertido aquí cuenta, optimiza la velocidad para que la cocina nunca se quede vacía.",
            img: "./lugar-matadero.png"
        }
    };

    // 2. Captura de elementos del DOM
    const tabs = document.querySelectorAll(".place-tab");
    const displayImg = document.getElementById("place-display-img");
    const displayTitle = document.getElementById("place-display-title");
    const displayDesc = document.getElementById("place-display-desc");
    const infoCard = document.querySelector(".place-info-card");

    // 3. Lógica del clic interactivo
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {

            // Si ya está activa, no hacemos nada
            if (tab.classList.contains("active")) return;

            // Cambiar el estado visual de las pestañas laterales
            document.querySelector(".place-tab.active").classList.remove("active");
            tab.classList.add("active");

            // Obtener la clave del lugar (ej: "almacen")
            const placeKey = tab.getAttribute("data-place");
            const data = placesData[placeKey];

            // Aplicar efecto de transición visual a la imagen y tarjeta
            displayImg.classList.add("fade-out");
            infoCard.style.animation = 'none'; // Reseteamos animación

            setTimeout(() => {
                // Cambiamos los contenidos y la ruta de la imagen
                displayImg.src = data.img;
                displayTitle.textContent = data.title;
                displayDesc.textContent = data.desc;

                // Quitamos el efecto de desvanecimiento
                displayImg.classList.remove("fade-out");
                // Forzamos al navegador a reiniciar la animación de la tarjeta
                infoCard.offsetHeight;
                infoCard.style.animation = "slideUpCard 0.4s ease-out";
            }, 250); // Tiempo exacto a mitad de transición
        });
    });
});
