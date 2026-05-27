document.addEventListener("DOMContentLoaded", () => {

    // 1. Base de datos con los textos y las rutas para tus imágenes
    const placesData = {
        cocina: {
            title: "La Cocina Infernal",
            desc: "Aquí es donde ocurre la magia gótica. Equipada con fogones de alta velocidad, los chefs deben coordinar sus movimientos para emplatar las comandas de los demonios mayores antes de que agoten su paciencia.",
            img: "./lugar-cocina.png"
        },
        almacen: {
            title: "El huerto",
            desc: "Ingredientes frescos a diario... Algunos demasiado frescos.",
            img: "./lugar-almacen.png"
        },
        comedor: {
            title: "El Comedor del Abismo",
            desc: "La sala principal donde se sientan los clientes. Las mesas deben limpiarse constantemente; un comedor sucio altera a tus clientes.",
            img: "./lugar-comedor.png"
        },
        matadero: {
            title: "▇▇▇▇▇▇▇ ▇▇▇ ▇▇▇▇▇▇ ▇▇",
            desc: "P̷̡͍̻͇͚͇͓̫͍̣̻̮͇̤̮̙̭̯̲̐͆̔̽̓ͮ̒̾̏͗̒̌͢͟͠r̶̴̜̪̩͖ͦ͋͊͋ͪ_̰̓̑̄ͣ̀e̶̷̴̤̼̝̻̬̩̥̭̝̫̙͎ͣ̑̋ͤͮͣͦ̓ͣ̕͞p̗͍̌̈́̏̓͘͘͠͠ą̘̻̜͕́̿̿ͤ͆͒́ͦ́ͬr̫͍͎͋͊͊̊́͞a̸̷̢̢̠͍̤̤̯̘̠̳̦̣̝̲̜͊ͨ̾̈́͂ͯͧ̑̒ͪ͡t͈̀͟e̶͊͘_̹͖̰̪̹̙͗́̊̄̎̚ p̶̞̭̺̬̱̩̟̬̊ͯ̆͛̾ͩ̃̉͝͝r̸̡̢̛̯̙̻͓̣̤͉ͥͧ̇̔ͥ͂̾ͥ͋͐̍̈͊͝e͢p̤͈̬͙̋ͩ́͒̎̓͠áͦr̨̋͟ą̯͉̩͚͚̲̍ͤ̇͑͋͌͂͑͌ͧ̇̄̒ͦ̄ͣ͟͡ͅţ̵̵̴̸͍̺̬͚̖͙͙̲̏͛ͦ̽͗ͨ̈́ͤ̈͐̋eͪͭ_̜͇̲̩̯̱̺̅͑̎́̈ͪ̓͑͑̎̂ͤͨͧͩ͢͟͠͠ p̴̧̘̦͙͙̦̝̙̦͕͓̪̩̔͊̔͊͂̽̅ͯͫ̆̆͘͜͢͡͠ͅr͓ͨę̸̸̴̛͙̮͎̱͎ͦ̔̒ͦ̀ͣ̊ͪͫ̕̚͝_͓͈͕̅̽͛̾ͫ͒͞p̞͕̹̪̂̔ͭ́ͦ̇̌̕͡á̴̴̢͎͚̲̩̯͕̰͕̭͋ͧ̿͊͐̌ͣ̐̈́̓̒̕̕͢͝͝r̯̚_͔̔̏_̴̧͓͚̩̅ͫ̅̀́ͤ́ͅă̸͇͚̳̍͠t̴̡͚͖̮̣̣̝̪̬͚̼͚̖ͥ̔̀́̈́̋͑ͫ̋͑ͭͨͪ͘̚͢͡ͅe̷̢̛̝̲̭̠̖̙̲͖̙͈͖̙̬ͥ̀ͭͥ̃́͒̑̌ͅ p̵̶̢͖̗̣͚͈̘̫̳̓ͪ̌ͬ͋ͧͣ͡ŕ̬̺̤̆̾͒̅̽͋̈ͣͪ̕_̺͔͋̔ͧ̈́̎_̡̛̮̖́ͭ͊́̾̎͛e_̭͚̦̗̲̤̜̱̤̱̱̆͒̇ͭͮ̍̋ͩ̚͡͝p̶͈̖͔̻̏͊̋ͪ̍ͩ͒ͣ̚͞á̷̡̨̩͈̳̳̣̦̩̲̗̖ͭͤ̍̉̓̒͂̐̎̃ͨ̚͞͞͠ŕ̛͓̬̭͖̦͋ͬͬ̕͜ȧ̸̵̧̧͓̮̻̫̰̱͉̹͇̝̰̭͇̤̫̇ͮͬͩ̔͌́̀̇͟͡͡ͅţ̗̬̩̍̈́͛͆̈̄ͨ̈ͦ̄́̚͝_̵̧̱͇̤̱͍͐ͧ̇̔ͧ̔́̔̑͢ȩ̵͉̺̠̯̫̥͙͍̱͈̀̓͛ͫ̈́ͦͯ̋ͯͧ͆ͮ̐ͨ̎͛́͘͢͟ͅ p̸̛̗̜̬͖̦̠͍̟̟̈ͦ̈́ͬͤ͊̂ͦͦͪͮ̕̚̕͜͞͡͡͞r̠͎̅e͍̱͔̔ͨ̇ͫ̿̇̎ͫ̽̚p̛̪̄̋̈á͎̭̦͙̜̠̔ͯ̅̄͢͝͠ŗ̵̢̘͈͎̠̋́̓̈́͊̑͐̋̊̑ͤͮá̵̛̗̤̻̬̬͔̞ͧͤ̃ͩ̓ͮͦͧͫ̀͐̒ͯͨ́ͫ͠t͔̫͚͇ͣ͂ͬ̀͆ͤe̶̶̵̡͈̣̺̱͖̰̺͎͕̻̼̞͂ͥͫͣ͆̈́́͐̀͐ͬ͌̒̾̾͢͝ p̵͉̓͋r̴̲̙̭̼̙͋̋̋̓̓͌e̛̖̟̰̳̹̎̒̒ͬ͌͛p̢̺̖̣͔͓̖̫̒͊͊͆ͥá̵̸̢͓̤̳̣̯̯̼̦̬̱̪̮̇̀ͮ̀̍̉́̀ͤͣ̍ͫ͗͂̇ͬ̽̌͜͞r̵̢̳̟̞̘̹̯͈͈ͥ̃ͯ̽͐̇͌͛̉̿̆͑̀̉͡͝ͅạ̴̴̸͔̼͚̯̗̋͊ͮ̄̍̌ͭ͂̿̊ͅț͔̫͆͆̓̎̍ͫ̈́̆̇͒́̚͜e̵̵͈͎̱̻ͪͤ̐ͬ̔ͯ͊ͅ p͕ͪ́͝r͋e̶͖̪͂͐̍̾ͥ͠pá̡̹̗ͯ̄ṟ̸̟̹̦̟̱̩̭̀̊ͮ͊͒͗͜â̵̱͓̞͖͚ͬ͋́̇͗͌ͬ̎͐̚̚ͅt̢̗̬͓͈̫̙ͣ͒ͩ̚͟e̵̲͒̀̆̆̈̓̐̈́̚ ṕ̧̡̹̖͍̼̹̲̯͗͆̂ͧ̐̓͜r͖̯͂ͯ̂̋͜ȩ̵̩̫͔̺̘͓̄ͥ̇͋́̋ͮͣ͂ͩ̃̚͘͘͢͝p̢̱̳̲̬̯͋̃̓̆͊á̪r̲̱͐̆͋͒̐̂̿̍́a̷̶̡̰̫̺̹͍͓̟̰͉ͪ̈́̍̌̎̅ͪͨ̔ͬ͑͋̓̃̑̈ͪ̄͘͢͞͠ṯ̷̳͙̦̖̹ͦ͆̾̊̑̑̄̆ͯ̚ê̥̭̬̭͇̙͉̘̗͕͚͎̌͒̓̉ͧ̅̇ͥ͘ p̸̸̨͔͉̯̟ͭ̈́ͬ̃̎̑̇ͯ̐̉͜͟͝r̷̶͙͙͖̜̙̟̪̲͇͍̗͉ͦͩ̈̏ͬ̉̀̋̃ͥ̾͊ͧ̓̕͜͝͞ę̴͓̖͔̤̌ͣ̈́̔͢ͅp̷͙̥͕͇̎ͫͥͫ̋ͧ_͖̀̀á̯_̷̷̷͎̥̟̰̟̱̳̬̺̯͈͚̺̿̆̉̋͗ͧ̆̔̎̅͂̌͘͡͡͠r̶̴͕͕̫̯̩͉͍̻̼̈́͗͑̌ͧ̒̀͌͘͜a̓͟_̴̶̧͎͔͖͚̩͍̙̤͚̖͈͗̉̉͋̀̑̉ͪͩͯ̂ͨ̏͊͜t͓͎e p̛̱̒͠͝ͅ_̼r̢̹͙̖̼̟ͮͩ͒̓̔̾̓ͪ͜_̰̦̙̹̗͐ͭ̉̆̾̒̐͘͢ę̷̴̠̭̪̬̠͉̗̟̫̝̯̺͚̓͋́̑͌̏͛ͭ͒͂̍͜͜p̵̧̨̠̭̗̪͓̱̮̻̮ͯ̂̈ͯ̌ͩ̑̌ͨͪ̈͒͌̆̀̉͠áͯr̴̝̻͖̝͎̙̜͙̪̯̐͐̾̊ͬ̒́̀̚ȧ̲̥̣̬̣͍̘̜͖͈̰̹̲̻̖̼̳ͫ̓ͨ̆͂̎ͣͪͫ̀̀͡t̨̟̭̗͟ę͔̩̒̒́ͯ̄ ṕ̢̢̛̻͔͙̩͔̲̦̞͔̰̓̂̀͑̒́ͥͫͭ͑͜͡͝ŗ̶̨̲͔͚̦͕͉̤ͮͦ͊ͧͤ̃͐̈́̕͟ȩ̝̜̺̭̳̼̦͒̈́ͩ̌̈̏͌̓p̷̷̷̴̡̢̢̛͎̤͇̤̦͓̟͓͔̬͓̞̓͛̂͐ͥͯ̆ͫ̌͒͗̉͟͢͝á͉̀̓̅̈́͊r̷̵̴̴̶̨̖̥̻̙͚̥͚ͣͬ̋͌̎ͦͩ͒̋ͩ͌̑́ͧ͘̕͟͠͝͠a̠̮͛͑ͣ͛ţ̂ę̶͙̋̐̿ p̴̸͕͍͉͈̫̯̯̹̻̰ͭ̋͂ͦͭ̇̂͐̊́ͤ͢͢͢͡r͈̓ͨ̃ë̡̞́̽͂̍͠pͯ̀͆̆͠_̴̧̨͙̫͕̳̫͔͇͌ͯ̏̈́ͮ̆ͭ̏̚͢͜ḁ̧̛͇̜̫͔̹̤̰͉́̓͑̌̾̃ͨ̓̓ͧ̕͘ͅr̡̰̬̖̈́ͦͤͣ̕ạ̧̨̛̣͎̮͙̼̬ͦ́͊ͬͬ̔͑ͭͥ̀ͬ̎̇̿ͤ̃͊͜͟ͅt̶̖͌͋ͪͫͣ̑͜e̪͔̱͎̲ͥ͟_̷̸̨͈̻̞͋̐̃͊̀̒̂̅̈̏͟͡ p̸̷̸̧̛̖͇̯͍̠̪̯̱̘̖̦͐̔͗ͩͬ͒͛͋͂ͨͮ́̎̋͝͡r̵̼̒́̉̍̉ͮ̏̚͘̕͢͜e_̳̤̩̹̬̪̙͇̣̻̣̣̎̌̈ͫ̽͢͢͝ͅp̶̡̢͚̜̫̖͒͆́̐ͥ̂ͨ̿̿̑̔̄̌͜͜͜͞á̘̩̬͈͓̣̝̜̤ͭ̌ͪͮ̔̈́ͯͫ̚͝rą̡̩͓̙̰̞͎̯̤̠̎ͣͪ̓ͪ̓̍́̅ͣ̅͂ͣ̈ͨͦ͘͟͜͠ͅt̡̛ͤ̂ͤͦe̶̡̧͉̥͖̙̘ͨ͊̆ͦͯ̓͟͝_̞̩͔̳̫̒ ṕ̧̧̜̞͇͓̪͈̓̋́́̽̓̃̚͟͞ͅr̨̦̳̲̈̐͘͝e̹̝ͣ͛̽͞_̢_͖p̶̡̩̟͎͇̘̣̝̔ͮ̇̋̀͊͐̋͋͊̽̀̋̚͜͞͞͡á̡̢̛̺̦̞̖̲̹̠̹̅̀̑ͭͭ̅ͬ̆ͭ̉̽̚͜ͅr͕̀͞_̶̨̫̖̹̦͒ͩ́̍at̫͓̙ͮe̴̩̱̭̓̿͢͞ p̶͓̋̍ͯ̀͊̎̇͆r̴̶̢̛̠̞͍̰̙͖̻͓̘̬̃̏́̾ͮ̓ͮ͐̚͜͢ep̷̢͖͔̪̮͛̾̎̓͋ͭ̔̌̕͜͝ͅá̶̢̺̼͚͇̬̝̄͊ͨ͊̊̇͘͢͠͠ŗ̶̷̙̙̲̤͍͖̱͍͔̅̊̌̈̌͐͑̕̕͜ă̧̨̳̹̟̭̯̹̟̞̲̍ͣ͊̏̾͊͝͡t̴̢͕͉͖͕̦̤́͆͗̆͋ͦ́̑̆̕͟ę̵̪̪̹ͯ̏̔͌̉͟ p̵̡̼͎̪̝̫̟̭̞̻͗͋͗͂̈̽̋ͣͭ͂͛̊ͨͩ͑ͬͥ̋͘͢͡ͅr̯e̵͎̔̇ͪ͐ͥ͞p͙̪̱͎̠̉͂̓ͫ̍̈á̞̱͊̃͗ͥͤ̎͠ͅŕ̢̯̫̆̾͊ͭ́̐_̷̼̪̐̾͋̄͝a̵̡̛̬͔̙̮͖̝̳͖̮̰̍ͯ̍̉ͨ̏̈͑̒ͩͬ͞ţ̶̛̗̪͎͈͙̂̆̽͌̒̊͐ͫ̌̓ͭ̉͝͠ę̴̜͔͙͙͓͍̣̝̹͕̤͔̆̀ͮ͋́̂ͫͩ̓̃̓͟ͅ p̨̝̗̗ͪ̎͗̄̃͡ͅ_̸̶̡̜̜͍̰͗ͪ̆͌̋̏̓̔̚͜r̴͕̠̾̒ę̡̧͈̪̺̺̜͚͙̮͎̺̯̅ͤ̊̐̌ͤ͋ͨ̐͆̇̚p͚̖̲̆̒á̷̴̴̺̟̮͉͕̙̬̯̤͕̫̝͈͑̋̍͌ͯ́̌͒ͬ́ͤ͊ͦ͘͡͡r̷̡̼͙̠̼͍͈̭̼̺͒ͧ́̆́̑̈̑̓ͦ̾̚͜͟͜͡͡a̷̛͓̝͍̙͎̱͒ͥͥͩ͒ͪ̒ͤ̄͆̒̃t̶̶̡̹̥̣̺̣̻͇͎̖̹͚̀̈́̂͂̀ͥ͂͆ͭ̓̐̈́̿ͦ̀͛͘̕e̤ͩ p̘͕̣͂r̨͓̩̻͎͕̫͓̗͔̞̖͒̀͑̐́̉̂ͤ̂̀͆̅ͥ̈́͞͞ͅȩ̡̬̮̼͈̱̬͊̾ͧ͗ͧ́̑͒ͬ̄̀̕̚͟͞p̶̞̊̾͜á̷̶̶͉̣̟̌̓̈͐̈͌ͩ̽r̡̡͎̙͙͎̹̲̫̫̱̯̳͗ͩͬ͒̀̃̌̒͐̄ͨ̂ͯ͜͟͝͞ͅa̵̷̭̪͍̹̺̖̜̠̻͍͚̝̤̟ͨͧ́̃́̓̀̔ͯ̉͂͂͛̑͆̓ͧ͠t̵̵̡͙͚̪̗͕͚̥̼̔͗̆ͯͫ́̽́́̕͞_̵̧̩͕̗͛̓ͪ͂ͯe͎",
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