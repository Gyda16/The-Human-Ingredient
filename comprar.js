document.addEventListener("DOMContentLoaded", function() {

    // Nodos de selección de tarjetas
    const ticketCards = document.querySelectorAll(".ticket-card");
    const summaryName = document.getElementById("summary-product-name");
    const summaryPrice = document.getElementById("summary-product-price");
    const finalTotal = document.getElementById("final-total");

    // Nodos de pago y modal
    const paymentForm = document.getElementById("payment-form");
    const successModal = document.getElementById("success-modal");
    const closeModalBtn = document.getElementById("close-modal-btn");

    // Inputs específicos para aplicar formateo automático
    const cardInput = document.getElementById("cardnumber");
    const expiryInput = document.getElementById("cardexpiry");
    const cvvInput = document.getElementById("cardcvv");

    // 1. INTERCAMBIO DE PRODUCTO
    ticketCards.forEach(card => {
        card.addEventListener("click", function() {
            ticketCards.forEach(c => c.classList.remove("active"));
            this.classList.add("active");

            const price = this.getAttribute("data-price");
            const name = this.getAttribute("data-name");

            summaryName.textContent = name;
            summaryPrice.textContent = price + "€";
            finalTotal.textContent = price + "€";
        });
    });

    // 2. MÁSCARA AUTOMÁTICA PARA EL NÚMERO DE TARJETA (Agrupa de 4 en 4)
    if (cardInput) {
        cardInput.addEventListener("input", function(e) {
            let value = e.target.value.replace(/\D/g, ""); // Borra todo lo que no sea número
            let formatted = value.match(/.{1,4}/g)?.join(" ") || value;
            e.target.value = formatted.substring(0, 19); // Límite de caracteres con espacios
        });
    }

    // 3. MÁSCARA AUTOMÁTICA PARA LA FECHA DE VENCIMIENTO (Añade / solo)
    if (expiryInput) {
        expiryInput.addEventListener("input", function(e) {
            let value = e.target.value.replace(/\D/g, ""); // Borra letras
            if (value.length > 2) {
                value = value.substring(0, 2) + "/" + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }

    // 4. BLOQUEO DE LETRAS EN EL CVV
    if (cvvInput) {
        cvvInput.addEventListener("input", function(e) {
            e.target.value = e.target.value.replace(/\D/g, "");
        });
    }

    // 5. CONTROL DEL FORMULARIO DE ENVÍO
    if (paymentForm) {
        paymentForm.addEventListener("submit", function(event) {
            event.preventDefault();
            successModal.classList.add("open");
            paymentForm.reset();
        });
    }

    // 6. CIERRE DEL MODAL
    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", function() {
            successModal.classList.remove("open");
        });
    }
});