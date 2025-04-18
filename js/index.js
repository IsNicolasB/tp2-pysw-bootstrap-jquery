$(document).ready(function() {
    // Animación de la sección Hero
    $('.hero-content h1').hide().fadeIn(1000);
    $('.hero-content h2').hide().delay(1000).fadeIn(1000);
    $('.hero-content .btn').hide().delay(2000).slideDown(1000);

    // Animación jQuery para cards de clases (sin CSS externo)
    $('.class-card').css({
        transition: 'box-shadow 0.3s, margin-top 0.3s'
    });
    $('.class-card .card-title').css({
        transition: 'color 0.3s'
    });

    $('.class-card').hover(
        function() {
            $(this).stop().animate({ 'margin-top': '-10px' }, 200);
            $(this).css('box-shadow', '0 15px 30px rgba(0,0,0,0.2)');
            $(this).find('.card-title').css('color', 'var(--primary-color)');
        },
        function() {
            $(this).stop().animate({ 'margin-top': '0px' }, 200);
            $(this).css('box-shadow', '0 4px 6px rgba(0,0,0,0.1)');
            $(this).find('.card-title').css('color', '');
        }
    );

    $(document).ready(function() {
      var $counters = $('.stat-number');
  
      if ($counters.length === 0) return;
  
      var speed = 200; // velocidad de la animación (ms)
  
      function animateCounter($counter) {
          var target = parseInt($counter.data('target'));
          var suffix = $counter.data('suffix') || '';
          var count = 0;
          var increment = Math.ceil(target / speed);
  
          var interval = setInterval(function() {
              count += increment;
              if (count >= target) {
                  $counter.text(target + suffix);
                  clearInterval(interval);
              } else {
                  $counter.text(count + suffix);
              }
          }, 1);
      }
  
      // Verifica si el elemento está en el viewport
      function isInViewport($el) {
          var rect = $el[0].getBoundingClientRect();
          return (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
      }
  
      // Iniciar animación cuando los contadores están en el viewport
      function handleScroll() {
          $counters.each(function() {
              var $counter = $(this);
              if (isInViewport($counter) && !$counter.hasClass('animated')) {
                  $counter.addClass('animated');
                  animateCounter($counter);
              }
          });
      }
  
      $(window).on('scroll', handleScroll);
      handleScroll(); // Verificar al cargar la página
  });
  

    // Personalización del carousel de testimonios
    $('#testimonialsCarousel').carousel({
      interval: 4000, // velocidad en ms
      ride: 'carousel',
      pause: false // para controlar manualmente la pausa con hover
    });

    $('#testimonialsCarousel').hover(
      function() {
        $(this).carousel('pause');
      },
      function() {
        $(this).carousel('cycle');
      }
    );

    // Validación Bootstrap y spinner para el formulario de newsletter

    $('#newsletter-form').on('click', function() {
      var $form = $(this);
      var $input = $('#newsletter-email');

      $input.removeClass('is-valid is-invalid');
      $form.addClass('was-validated');
      
    });
    
    $('#newsletter-form').on('submit', function(e) {
      e.preventDefault();
      var $form = $(this);
      var $input = $('#newsletter-email');
      var $btn = $('#newsletter-submit');
      var $spinner = $('#newsletter-spinner');

      if(this.checkValidity() === false) {
        $input.addClass('is-invalid');
        return;
      }
      
      $form.addClass('was-validated');
      $input.addClass('is-valid');  
      $btn.prop('disabled', true);
      $spinner.removeClass('d-none');
      // Simula un envío AJAX
      setTimeout(function() {
        $spinner.addClass('d-none');
        $btn.prop('disabled', false);
        $input.val('');
        $form.removeClass('was-validated');
        $input.removeClass('is-valid');
        alert('¡Gracias por suscribirte!');
      }, 1800);
    });
});