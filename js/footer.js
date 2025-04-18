$(document).ready(function() {
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