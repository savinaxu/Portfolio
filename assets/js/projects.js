$(function () {

    let scrollTop = $(".scrollTop");

    $(window).scroll(function () {
        $(this).scrollTop() > 100 ? scrollTop.css("opacity", "1") :  scrollTop.css("opacity", "0")
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

    $("#ketogether .brand").on("click",() => {
        window.open('https://www.flipsnack.com/savinajia/ketogether_branding_guide.html')
    })

    scrollTop.click(function() {
        $('html, body').animate({
          scrollTop: 0
        }, 800);
        return false;
    });
    var $slider = $(".slider"),
    $slideBGs = $(".slide__bg"),
    diff = 0,
    curSlide = 0,
    numOfSlides = $(".slide").length-1,
    animating = false,
    animTime = 500,
    autoSlideTimeout,
    autoSlideDelay = 6000,
    $pagination = $(".slider-pagi");

function createBullets() {
  for (var i = 0; i < numOfSlides+1; i++) {
    var $li = $("<li class='slider-pagi__elem'></li>");
    $li.addClass("slider-pagi__elem-"+i).data("page", i);
    if (!i) $li.addClass("active");
    $pagination.append($li);
  }
};

createBullets();

function manageControls() {
  $(".slider-control").removeClass("inactive");
  if (!curSlide) $(".slider-control.left").addClass("inactive");
  if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive");
};

function autoSlide() {
  autoSlideTimeout = setTimeout(function() {
    curSlide++;
    if (curSlide > numOfSlides) curSlide = 0;
    changeSlides();
  }, autoSlideDelay);
};

autoSlide();

function changeSlides(instant) {
  if (!instant) {
    animating = true;
    manageControls();
    $slider.addClass("animating");
    $slider.css("top");
    $(".slide").removeClass("active");
    $(".slide-"+curSlide).addClass("active");
    setTimeout(function() {
      $slider.removeClass("animating");
      animating = false;
    }, animTime);
  }
  window.clearTimeout(autoSlideTimeout);
  $(".slider-pagi__elem").removeClass("active");
  $(".slider-pagi__elem-"+curSlide).addClass("active");
  $slider.css("transform", "translate3d("+ -curSlide*100 +"%,0,0)");
  $slideBGs.css("transform", "translate3d("+ curSlide*50 +"%,0,0)");
  diff = 0;
  autoSlide();
}

function navigateLeft() {
  if (animating) return;
  if (curSlide > 0) curSlide--;
  changeSlides();
}

function navigateRight() {
  if (animating) return;
  if (curSlide < numOfSlides) curSlide++;
  changeSlides();
}

$(document).on("mousedown touchstart", ".slider", function(e) {
  if (animating) return;
  window.clearTimeout(autoSlideTimeout);
  var startX = e.pageX || e.originalEvent.touches[0].pageX,
      winW = $(window).width();
  diff = 0;
  
  $(document).on("mousemove touchmove", function(e) {
    var x = e.pageX || e.originalEvent.touches[0].pageX;
    diff = (startX - x) / winW * 70;
    if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2;
    $slider.css("transform", "translate3d("+ (-curSlide*100 - diff) +"%,0,0)");
    $slideBGs.css("transform", "translate3d("+ (curSlide*50 + diff/2) +"%,0,0)");
  });
});

$(document).on("mouseup touchend", function(e) {
  $(document).off("mousemove touchmove");
  if (animating) return;
  if (!diff) {
    changeSlides(true);
    return;
  }
  if (diff > -8 && diff < 8) {
    changeSlides();
    return;
  }
  if (diff <= -8) {
    navigateLeft();
  }
  if (diff >= 8) {
    navigateRight();
  }
});

$(document).on("click", ".slider-control", function() {
  if ($(this).hasClass("left")) {
    navigateLeft();
  } else {
    navigateRight();
  }
});

$(document).on("click", ".slider-pagi__elem", function() {
  curSlide = $(this).data("page");
  changeSlides();
});

});