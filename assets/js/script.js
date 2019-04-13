$(function() {

    // Opening
    $("#fadeIn").css("opacity", "1")

    setTimeout(() => {
        $("#fadeIn").css("opacity", "0")
    }, 1000)
    setTimeout(() => {
        $("#fadeIn").css("display", "none")
        $("#header").css("opacity", "1")
        
    }, 1500)
    setTimeout(() => {
        $("#main").css("opacity", "1")
    }, 1750)

    // reveal words
    new RevealFx(document.querySelector(".rev-1"), {
        revealSettings: {
            bgcolor: "#434E6F",
            delay: 1750,
            onCover: function (t, e) {
                t.style.opacity = 1
            }
        }
    }).reveal()
    
    new RevealFx(document.querySelector(".rev-2"), {
        revealSettings: {
            bgcolor: "#434E6F",
            delay: 2000,
            onCover: function (t, e) {
                t.style.opacity = 1
            }
        }
    }).reveal()
    
    new RevealFx(document.querySelector(".rev-3"), {
        revealSettings: {
            bgcolor: "#434E6F",
            delay: 2250,
            onCover: function (t, e) {
                t.style.opacity = 1
            }
        }
    }).reveal()
    
    new RevealFx(document.querySelector(".rev-4"), {
        revealSettings: {
            bgcolor: "#434E6F",
            delay: 2500,
            onCover: function (t, e) {
                t.style.opacity = 1
            }
        }
    }).reveal()

    setTimeout(() => {
        $(".introduction").css("opacity", "1")
        $(".intro-right").css("opacity", "1")
    }, 3000)

    setTimeout(() => {
        $("#menu").css("opacity", "1")
        $("#down").css("opacity", "1")
    }, 3500)

    //set photo slider
    const photos = ["assets/img/photo.JPG","assets/img/photo2.JPG","assets/img/photo3.JPG"]
    let i = 0
    const photoSlider = setInterval(() => {
        $(".box__img").attr("src", photos[i])
        i++
        if (i > 2) {
            i = 0
        }
    }, 5000)


    $(window).scroll(function () {
        $(window).width() < 995 ? ($(".desktop").css("opacity", "0"), $(".tablet").css("opacity", "1")) : ($(".desktop").css("opacity", "1"), $(".tablet").css("opacity", "0"))
        $(this).scrollTop() > 120 ? $("#down").css("opacity", "0") : $("#down").css("opacity", "1")
    })

    //menu
    let menuIsOpen = false
    $('#menu').on('click', function(){
        menuIsOpen ? 
        ($(".nav-open-img").css("opacity", "1"),
        $(".nav-close-img").css("opacity", "0"),
        $(".nav-overlay").css({"opacity": "0", "display": "none", "transform": "translate3d(0px, 90%, 0px)"}),
        menuIsOpen = false) : 
        ($(".nav-open-img").css("opacity", "0"),
        $(".nav-close-img").css({"opacity": "1", "z-index": "999"}),
        $(".nav-overlay").css({"opacity": "1", "display": "flex", "transform": "translate3d(0px, 100%, 0px)","transform-style": "preserve-3d"}),
        menuIsOpen = true)

    });

    //header
    let didScroll,
        lastScrollTop = 0,
        delta =  10,
        navbarHeight = $("header").outerHeight()

    $(window).scroll(function(event){
        didScroll = true;
    }); 

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        let st = $(this).scrollTop();
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }
        
        lastScrollTop = st;
    }



    

    

    

    

})