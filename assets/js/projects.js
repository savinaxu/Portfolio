$(function () {
    let navbg = $("header")

    $(window).scroll(function () {
        $(this).scrollTop() > 150 ? navbg.addClass('head-bg') : navbg.removeClass('head-bg')
    });
})