document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.getElementById('newsletter-form');

    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value;

        // Aquí normalmente enviarías el email a tu servidor
        // Por ahora solo mostraremos un mensaje de éxito
        alert(`¡Gracias por suscribirte! Te mantendremos informado en ${email}`);
        
        // Limpiar el formulario
        newsletterForm.reset();
    });
});
