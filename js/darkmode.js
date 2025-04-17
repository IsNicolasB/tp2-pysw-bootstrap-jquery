document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const root = document.documentElement;
    const moonIcon = darkModeToggle.querySelector('i');

    // Verificar preferencia de modo oscuro guardada
    const savedMode = localStorage.getItem('dark-mode');
    if (savedMode === 'enabled') {
        root.classList.add('dark-mode');
        moonIcon.classList.replace('fa-moon', 'fa-sun');
    }

    darkModeToggle.addEventListener('click', () => {
        if (root.classList.contains('dark-mode')) {
            root.classList.remove('dark-mode');
            moonIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('dark-mode', 'disabled');
        } else {
            root.classList.add('dark-mode');
            moonIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('dark-mode', 'enabled');
        }
    });
});