(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });

    $("#why_choose_us").click(function(){
        $("#img_laly_fuerte").addClass("d-none");
        $("#img_brad_fuerte").removeClass("d-none");

    });

    $("#about_us").click(function(){
        $("#img_brad_fuerte").addClass("d-none");
        $("#img_laly_fuerte").removeClass("d-none");
    });

    
})(jQuery);

function read_more(c)
{
    if(c == 1)
    {
        $("#id_c1").removeClass("d-none");
        $("#id_read1").addClass("d-none");

    }

    if(c == 2)
        {
            $("#id_c2").removeClass("d-none");
            $("#id_read2").addClass("d-none");

        }

    if(c == 3)
        {
            $("#id_c3").removeClass("d-none");
            $("#id_read3").addClass("d-none");
        }
        

}

