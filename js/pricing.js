document.addEventListener('DOMContentLoaded', () => {
    const monthlyToggle = document.getElementById('monthly');
    const annualToggle = document.getElementById('annual');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const annualPrices = document.querySelectorAll('.annual-price');

    // Tooltips para características de planes
    const planFeatures = document.querySelectorAll('.plan-features li');
    
    planFeatures.forEach(feature => {
        const tooltip = feature.querySelector('.tooltip');
        
        if (tooltip) {
            feature.addEventListener('mouseenter', () => {
                tooltip.style.visibility = 'visible';
                tooltip.style.opacity = '1';
            });

            feature.addEventListener('mouseleave', () => {
                tooltip.style.visibility = 'hidden';
                tooltip.style.opacity = '0';
            });
        }
    });

    // Cambio de precios mensual/anual
    monthlyToggle.addEventListener('change', () => {
        monthlyPrices.forEach(price => price.style.display = 'block');
        annualPrices.forEach(price => price.style.display = 'none');
    });

    annualToggle.addEventListener('change', () => {
        monthlyPrices.forEach(price => price.style.display = 'none');
        annualPrices.forEach(price => price.style.display = 'block');
    });
});
