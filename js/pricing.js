$(function () {
    // Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Toggle prices
    $("input[name='pricing-toggle']").on('change', function() {
      if ($('#monthly').is(':checked')) {
        $('.monthly-price').removeClass('d-none');
        $('.annual-price').addClass('d-none');
      } else {
        $('.monthly-price').addClass('d-none');
        $('.annual-price').removeClass('d-none');
      }
    });

    // Highlight row and column on hover
    $('#pricing-table tbody tr').hover(
      function() {
        $(this).addClass('table-active');
      },
      function() {
        $(this).removeClass('table-active');
      }
    );

    $('#pricing-table tbody td, #pricing-table thead th').on('mouseenter', function() {
        var idx = $(this).index();
        $('#pricing-table tr').each(function() {
          $(this).find('td, th').eq(idx).addClass('plan-hover');
        });
      }).on('mouseleave', function() {
        var idx = $(this).index();
        $('#pricing-table tr').each(function() {
          $(this).find('td, th').eq(idx).removeClass('plan-hover');
        });
      });
      
  });