$(document).ready(function () {
    const $grid = $('.row[data-masonry]');

    $grid.imagesLoaded(function () {
        $grid.masonry({
            itemSelector: '.masonry-item',
            percentPosition: true,
            columnWidth: '.grid-sizer'
        });
    });

    $('.filter-btn').on('click', function () {
        const filter = $(this).data('filter');

        $('.filter-btn').removeClass('btn-primary').addClass('btn-outline-primary');
        $(this).removeClass('btn-outline-primary').addClass('btn-primary');

        if (filter === 'todos') {
            $('.masonry-item').show();
        } else {
            $('.masonry-item').hide();
            $('.masonry-item.' + filter).show();
        }

        $grid.masonry('layout');
    });
});

// Hover and focus effect for class cards
$('.class-card-2').on('mouseenter focus', function () {
    // On mouse enter or focus
    $(this).find('.card-overlay').css({
        'display': 'flex',
        'opacity': '1'
    });
}).on('mouseleave blur', function () {
    // On mouse leave or blur
    $(this).find('.card-overlay').css({
        'display': 'none',
        'opacity': '0'
    });
});

// Keyboard navigation for class cards
$('.class-card-2').on('keydown', function (e) {
    // Enter or Space key to trigger hover effect
    if (e.which === 13 || e.which === 32) {
        e.preventDefault();
        $(this).find('.card-overlay').css({
            'display': 'flex',
            'opacity': '1'
        });
    }
});