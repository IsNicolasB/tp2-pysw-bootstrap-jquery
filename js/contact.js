$(document).ready(function() {
    // Form validation
    const form = $('#contact-form');
    const submitBtn = $('.submit-btn');
    const spinner = $('.spinner-border');
    const confirmationModal = new bootstrap.Modal('#confirmation-modal');

    // Real-time validation including autofill detection
    form.find('input, select, textarea')
        .on('input change webkitAnimationStart', function() {
            validateField($(this));
            checkFormValidity();
        })
        .on('animationend', function() {
            validateField($(this));
            checkFormValidity();
        });

    function validateField(field) {
      if (field[0].checkValidity()) {
        field.removeClass('is-invalid').addClass('is-valid');
      } else {
        field.removeClass('is-valid').addClass('is-invalid');
      }
    }

    function checkFormValidity() {
      if (form[0].checkValidity()) {
        submitBtn.prop('disabled', false);
      } else {
        submitBtn.prop('disabled', true);
      }
    }

    // Form submission
    form.on('submit', function(e) {
      e.preventDefault();
      
      if (form[0].checkValidity()) {
        // Disable submit button and show spinner
        submitBtn.prop('disabled', true);
        spinner.removeClass('d-none');

        // Simulate form submission (replace with actual AJAX submission)
        setTimeout(function() {
          spinner.addClass('d-none');
          form[0].reset();
          form.find('input, select, textarea').removeClass('is-valid');
          submitBtn.prop('disabled', true);
          confirmationModal.show();
        }, 1500);
      }
    });
  });