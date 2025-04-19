$(document).ready(function() {
    // Ensure 'Todas' filter is selected by default
    $('#todos').prop('checked', true);
    $('.class-card').show();

    // Hover and focus effect for class cards
    $('.class-card').on('mouseenter focus', function() {
        // On mouse enter or focus
        $(this).find('.card-overlay').css({
            'display': 'flex',
            'opacity': '1'
        });
    }).on('mouseleave blur', function() {
        // On mouse leave or blur
        $(this).find('.card-overlay').css({
            'display': 'none',
            'opacity': '0'
        });
    });

    // Filter functionality
    $('.filter-input').on('change', function() {
        var selectedCategory = $(this).attr('id');
        
        $('.class-card').hide();
        if (selectedCategory === 'todos') {
            $('.class-card').show();
        } else {
            $('.class-card.' + selectedCategory).show();
        }
    });

    // Keyboard navigation for class cards
    $('.class-card').on('keydown', function(e) {
        // Enter or Space key to trigger hover effect
        if (e.which === 13 || e.which === 32) {
            e.preventDefault();
            $(this).focus().trigger('mouseenter');
        }
    });
});