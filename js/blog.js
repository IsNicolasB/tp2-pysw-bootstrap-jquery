$(function () {
    // Filtro de categorías
    $('.filter-btn').on('click', function () {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        $('.blog-page').removeClass('filter-nutricion filter-entrenamiento filter-bienestar');
    
        const category = $(this).data('category');
        if (category !== 'all') {
            $('.blog-page').addClass('filter-' + category);
            // Oculta comentarios que no son de la categoría seleccionada
            $('.comment-box .comment').hide().filter('[data-category="' + category + '"]').show();
        } else {
            // Muestra todos los comentarios
            $('.comment-box .comment').show();
        }
    });

    // Scroll Reveal con jQuery + IntersectionObserver:
    $(document).ready(function () {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    $(entry.target).addClass('active');
                }
            });
        }, observerOptions);

        $('.blog-post').each(function () {
            observer.observe(this);
        });
    });

    // Comportamiento de comentarios
    $('.comment-box').on('click', '.btn-reply', function () {
        const parent = $(this).closest('.comment');
        const respuesta = prompt("Escribe tu respuesta:");
        if (respuesta) {
            const autor = 'Tú'; // O usar otro sistema si hay login
            const inicial = autor.charAt(0).toUpperCase();
            const respuestaHTML = `
        <div class="comment ms-4">
          <div class="comment-avatar" data-initial="${inicial}"></div>
          <div class="comment-content">
            <span class="comment-author">${autor}</span>
            <p>${respuesta}</p>
          </div>
        </div>
      `;
            parent.after(respuestaHTML);
        }
    });

    $('.comment-box').on('click', '.btn-highlight', function () {
        $(this).closest('.comment').toggleClass('highlight');
    });
});