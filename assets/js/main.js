$(document).ready(function () {
  // preloader
  $(window).on('load', function() {
    $('#preloader').delay(350).fadeOut('slow'); 
    $('body').delay(350).css({'overflow':'visible'});
  })

  // preloader

  // sticky navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".nav").addClass("sticky");
    } else {
      $(".nav").removeClass("sticky");
    }
  });
  // sticky navbar

  $(".logo_slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  $(".project_slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  });


  $(".gellary_slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });

  $(".recent_work_slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });



    // show-more-less
    $(".blog_item").showMoreItems({
      startNum: 6,
      afterNum: 3,
      original: 6,
      responsive: [
        { breakpoint: 1280, settings: { startNum: 3, afterNum: 3 } },
        { breakpoint: 600, settings: { startNum: 3, afterNum: 3 } },
      ],
    }),


      // show-more-less

    $("a[href=#top]").click(function () {
      return $("body,html").animate({ scrollTop: 0 }, 600), 1;
    });

  // $(window).scroll(function () {
  //   $(this).scrollTop() > 50 ? $(".totop a").fadeIn() : $(".totop a").fadeOut();
  // });
  

});

$(document).ready(function (){
  // counter up

  //Check if an element was in a screen
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return elemBottom <= docViewBottom;
  }

  //Count up code
  function countUp() {
    $(".counter").each(function () {
      var $this = $(this), // <- Don't touch this variable. It's pure magic.
        countTo = $this.attr("data-count");
      ended = $this.attr("ended");

      if (ended != "true" && isScrolledIntoView($this)) {
        $({ countNum: $this.text() }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 2500, //duration of counting
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
        $this.attr("ended", "true");
      }
    });
  }
  //Start animation on page-load
  if (isScrolledIntoView(".counter")) {
    countUp();
  }
  //Start animation on screen
  $(document).scroll(function () {
    if (isScrolledIntoView(".counter")) {
      countUp();
    }
  });
  // counter up
})

