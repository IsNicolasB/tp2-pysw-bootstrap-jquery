document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stat-number');
    
    if (counters.length === 0) {
        return;
    }

    const speed = 200; // Velocidad de la animación (ms)

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        
        const updateCount = () => {
            const increment = target / speed;
            
            if (count < target) {
                count += increment;
                const suffix = counter.getAttribute('data-suffix') || '';
                counter.innerText = Math.ceil(count) + suffix;
                setTimeout(updateCount, 1);
            } else {
                const suffix = counter.getAttribute('data-suffix') || '';
                counter.innerText = target + suffix;
            }
        };

        updateCount();
    };

    // Función para verificar si un elemento está en el viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // Iniciar animación cuando los contadores están en el viewport
    const handleScroll = () => {
        counters.forEach(counter => {
            if (isInViewport(counter) && !counter.classList.contains('animated')) {
                counter.classList.add('animated');
                animateCounter(counter);
            }
        });
    };

    // Verificar al cargar la página y al hacer scroll
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verificar al cargar la página
});
