$(document).ready(function() {

    // start slider

    $(".slider").slick();

    // 

    // start mixitup

    $("#con").mixItUp(function(event) {
        event.preventDefault();
    });
    // 

    // start slider 2 


    $(".slider-3").slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 374,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // 


    // start slider-4
    $(".slider-4").slick({
        // dots: true,
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 770,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }

            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // 


    // start slider-5

    $(".slider-5").slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // 

    // start scroll-to-top
    var scrollToTop = $(".scroll-to-top i")

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 1000) {
            scrollToTop.fadeIn(500)
        } else {
            scrollToTop.fadeOut(500)
        }
    })


    $(".scroll-to-top i").click(function(e) {
        e.preventDefault()

        $("html,body").animate({
            scrollTop: 0,
        }, 1000)
    })



    // 
    //  34an asabt el nav bar fo2

    var mainNav = $(".main-nav")

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 200) {
            mainNav.addClass("nav-up");
        } else {
            mainNav.removeClass("nav-up");

        }
        if ($(window).scrollTop() >= 400) {
            mainNav.addClass("nav-down");
        } else {
            mainNav.removeClass("nav-down");

        }



    })

    // 



    // 34an el nav yegy mn gamb



    $(".navbar-toggler").click(function() {

        $(".yala").addClass("ro7")
        $(".mobile-overlay").css({
            opacity: "1",
            visibility: "visible",
        })
        $(".icon-bar i").fadeOut(100)

    })
    $(".e2fl i").click(function() {
        $(".yala").removeClass("ro7")
        $(".mobile-overlay").css({
            opacity: "0",
            visibility: "hidden",
        })
        $(".icon-bar i").fadeIn(100)

    })


})