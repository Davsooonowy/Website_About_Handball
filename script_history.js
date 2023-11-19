$(window).scroll(function(){
    let $window = $(window),
        $body = $('body'),
        $section = $('.container');
    let scroll = $window.scrollTop() + ($window.height() / 3);
    $section.each(function(){
        if($(this).position().top <= scroll && $(this).position().top + $(this).height() > scroll){
            $body.removeClass(function (index, css){
                return (css.match (/(^|\s)color-\s+/g) || [].join(' '));
            });
            $('.container').removeClass('active');
            $(this).addClass('active');

            $(this).find('.section-text h2::before, .section-text h2::after').addClass('start-animation');
            $(this).find('.subtitle').addClass('start-animation');
        }
    });
}).scroll();