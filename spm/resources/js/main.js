// fullpage
function fullPage() {
  $('#fullpage').fullpage({
    autoScrolling: true,
    fitToSection: false,
    navigation: true,
    responsive: true,
    resize: true,
    scrollOverflow: true,
    onLeave: function (index, destination, direction) {
      //FOOTER로 인한 SECTION-TITLE 변경
      if (destination == 5 && direction == 'down') {
        $('.sec3 .interval').addClass('slide_down');
      } else {
        $('.sec3 .interval').removeClass('slide_down');
      }

      // SECTION별 로고, NAV색 변경
      if (destination == 2 || destination == 3) {
        $('.gnb ul li a, .logo a').addClass('active');
        $('#fp-nav ul li a span').addClass('dark');
      } else {
        $('.gnb ul li a, .logo a').removeClass('active');
        $('#fp-nav ul li a span').removeClass('dark');
      }

      //FOOTER PAGINATION STYLE
      if (destination == 5) {
        $('#fp-nav ul li').eq(3).children('a').addClass('show');
        $('#fp-nav').addClass('slide_down');
      } else {
        $('#fp-nav ul li').eq(3).children('a').removeClass('show');
        $('#fp-nav').removeClass('slide_down');
      }

      $('.section [data-aos]').removeClass('aos-animate');
    },
    afterLoad: function (anchorLink, index) {
      $('.section.active [data-aos]').addClass('aos-animate');
    },
    afterResize: function () {
      var win = $(window).width();
      if (win > 865) {
      }
      $.fn.fullpage.setAllowScrolling(true);
    },
  });
}
function moScroll() {
  $(window)
    .on('scroll', function () {
      var sTop = $(this).scrollTop();

      // header
      if (sTop > $('.sec0').offset().top + 50) {
        $('header').addClass('top_active');
      } else {
        $('header').removeClass('top_active');
      }
      // content
      if (sTop > $('.sec0').offset().top - $('.sec0').height() / 1.5) {
        $('.sec0').addClass('active');
      }
      if (sTop > $('.sec1').offset().top - $('.sec1').height() / 1.5) {
        $('.sec1').addClass('active');
      }
      if (sTop > $('.sec2').offset().top - $('.sec2').height() / 1.5) {
        $('.sec2').addClass('active');
      }
      if (sTop > $('.sec3').offset().top - $('.sec3').height() / 1.5) {
        $('.sec3').addClass('active');
      }
    })
    .trigger('scroll');
}
function caseSlide() {
  if (window.matchMedia('(max-width: 768px)').matches) {
    $('.case_li_wrap ul').slick({
      autoplay: false,
      autoplaySpeed: 3000,
      arrows: false,
      dots: true,
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: false,
            dots: false,
          },
        },
        {
          breakpoint: 460,
          settings: {
            infinite: false,
            focusOnSelect: true,
            variableWidth: true,
            autoplay: false,
            autoplaySpeed: 3000,
          },
        },
      ],
    });
  }
}
function mainTop() {
  vw = window.innerWidth;
  if (vw < 1025) {
    $('html, body').animate({ scrollTop: 0 }, '300');
  } else {
    $.fn.fullpage.moveTo(1);
  }
}

$(function () {
  var vw = $(window).width();
  var flag = true;
  fpageSet(vw);
  var noticeSlide = $('.noticeslide');
  noticeSlide.slick({
    // 공지사항슬라이드
    vertical: true,
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    touchMove: false,
    autoplaySpeed: 2000,
  });

  function fpageSet(vw) {
    if (vw < 999) {
      if (!flag) {
        if ($('.fp-enabled').length) {
          // Destroy all
          $.fn.fullpage.destroy('all');
        }
      }
      setTimeout(function () {
        moScroll();
        caseSlide();
      }, 100);

      flag = true;
    } else {
      if (flag) {
        $('.sec0').removeClass('active');
        fullPage();
        $.fn.fullpage.reBuild();
      }
      flag = false;
    }
  }

  $(window).on('resize', function () {
    var win = $(window).width();
    fpageSet(win);
  });
});
