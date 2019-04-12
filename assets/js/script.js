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

    // projects
    let controller = new ScrollMagic.Controller();

    

})