$(document).ready(function() {
    // Flip card functionality
    $('.trainer-card').on('click', function(e) {
        // Prevent animation if clicking on rating system
        if (!$(e.target).closest('.trainer-rating').length) {
            $(this).toggleClass('flipped');

            const $progressBars = $(this).find('.trainer-skills .progress-bar');
            
            $progressBars.each(function() {
                // Reset width to 0 before animating
                const skillLevel = $(this).data('skill-level');
                
                $(this).css('width', '0%');

                $(this).animate({
                    width: skillLevel + '%'
                }, {
                    duration: 1000,
                    easing: 'swing'
                });
            });
        }
    });

    // Rating system with hover and click effects
    $('.trainer-rating').each(function() {
        const $rating = $(this);
        const $labels = $rating.find('label');
        const $inputs = $rating.find('input');

        // Add rating value display
        $rating.append('<div class="rating-value">0</div>');
        const $ratingValue = $rating.find('.rating-value');

        // Hover effect
        $labels.hover(
            function() {
                const currentIndex = $labels.index(this);
                $labels.slice(0, currentIndex + 1).addClass('hover');
                $ratingValue.text(currentIndex + 1).css('opacity', 1);
            },
            function() {
                $labels.removeClass('hover');
                $ratingValue.text('0').css('opacity', 0);
            }
        );

        // Click effect
        $labels.on('click', function() {
            const currentIndex = $labels.index(this);
            $labels.removeClass('active');
            $labels.slice(0, currentIndex + 1).addClass('active');
            $inputs.prop('checked', false);
            $inputs.eq(currentIndex).prop('checked', true);
            $ratingValue.text(currentIndex + 1).css('opacity', 1);
        });
    });

    // Keyboard accessibility for flip cards
    $('.trainer-card').on('keydown', function(e) {
        // Enter or Space key to toggle card
        if (e.which === 13 || e.which === 32) {
            e.preventDefault();
            $(this).toggleClass('flipped');
        }
    });
});
