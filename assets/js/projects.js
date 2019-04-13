$(function () {
    // $(this).scrollTop(0);
    let navbg = $("header")
    let scrollTop = $(".scrollTop");

    $(window).scroll(function () {
        $(this).scrollTop() > 100 ? scrollTop.css("opacity", "1") :  scrollTop.css("opacity", "0")
        $(this).scrollTop() > 150 ? navbg.addClass('head-bg') : navbg.removeClass('head-bg')
    });

    $("#ketogether .brand").on("click",() => {
        window.open('https://www.flipsnack.com/savinajia/ketogether_branding_guide.html')
    })

    scrollTop.click(function() {
        $('html, body').animate({
          scrollTop: 0
        }, 800);
        return false;
    });

})