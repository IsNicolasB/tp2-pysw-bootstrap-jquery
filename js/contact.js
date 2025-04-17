document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const submitBtn = form.querySelector('.submit-btn');
    const modal = document.getElementById('confirmation-modal');
    const closeModalBtn = modal.querySelector('.close-modal');
    const modalCloseBtn = modal.querySelector('.modal-close-btn');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validación final
        if (form.checkValidity()) {
            submitBtn.classList.add('loading');

            // Simulación de envío con timeout
            setTimeout(() => {
                submitBtn.classList.remove('loading');
                form.reset();
                showConfirmationModal();
            }, 2000);
        } else {
            // Forzar validación si hay campos inválidos
            form.reportValidity();
        }
    });

    function showConfirmationModal() {
        modal.style.display = 'flex';
    }

    function hideConfirmationModal() {
        modal.style.display = 'none';
    }

    // Eventos para cerrar modal
    closeModalBtn.addEventListener('click', hideConfirmationModal);
    modalCloseBtn.addEventListener('click', hideConfirmationModal);
    
    // Cerrar modal si se hace click fuera
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideConfirmationModal();
        }
    });
});
