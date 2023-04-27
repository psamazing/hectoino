// fullpage
function fullPage(){
    $('#fullpage').fullpage({
        autoScrolling: true,
        fitToSection: false,
        navigation: true,
        responsive: true,
        resize: true,
        scrollOverflow: true,
        afterLoad: function(index,slideIndex,nextIndex,direction){
            if(slideIndex == 1){
                $('.sec0').addClass('active-main');
                $('header').addClass('main');
                $('.content-ani').addClass('on');
                $('#fp-nav').addClass('hide');
                $('body').addClass('pc');
            }
        },
        onLeave: function(index,slideIndex,nextIndex,direction){
            $('header').removeClass('hide');
            $('.btn-float').removeClass('hide');
            $('.sec0').removeClass('active-main');
            
            if(slideIndex == 1){
                $('.sec0').addClass('active-main');
                $('header').addClass('main');
                $('.content-ani').addClass('on');
                $('#fp-nav').addClass('hide');
            }else if(slideIndex == 2){
                if($('header').hasClass('main')){
                    $('header').removeClass('main');
                }
                if($('header').hasClass('line')){
                    $('header').removeClass('line');
                }
                $('#fp-nav').removeClass('hide');
            }else if(slideIndex == 3){
                if($('header').hasClass('main')){
                    $('header').removeClass('main');
                }
                if($('header').hasClass('line')){
                    $('header').removeClass('line');
                }
                $('#fp-nav').removeClass('hide');
            }else if(slideIndex == 4){
                if($('header').hasClass('main')){
                    $('header').removeClass('main');
                }
                if($('header').hasClass('line')){
                    $('header').removeClass('line');
                }
                $('#fp-nav').removeClass('hide');
            }else if(slideIndex == 5){
                setTimeout(function() {
                    $('header').addClass('line');
                },500);

                $('.sec4').on('mousewheel', function(e) {
                    if(e.originalEvent.wheelDelta < 0) {
                        $('.btn-float').addClass('hide')
                        $('header').addClass('hide')
                    } else {
                        $('.btn-float').removeClass('hide')
                        $('header').removeClass('hide')
                    }
                })
            }
        },
        afterResize: function() {
            var win = $(window).width();
            if(win > 865) {
            }
            $.fn.fullpage.setAllowScrolling(true);
        },
    });
   
}

function moScroll() {
    if($('body.mo').length === 1) {
        $(window).on('scroll', function () {
            var sTop = $(this).scrollTop();
            $(".sec0").addClass("active-main");

            // header
            if (sTop > $("#sec0").offset().top + 50) {
                $('#header').removeClass('main');
                $('.btn-mobile').hide();
                $('.btn-mobile.sub').show();
            }else{
                $('#header').addClass('main');
                $('.btn-mobile').hide();
                $('.btn-mobile.main').show();
            }
            if (sTop <= $(document).height() - ($(window).height() + $(".footer-mo").innerHeight())) {
                $('.btn-mobile').removeClass('fixed');
            } else {
                $('.btn-mobile').addClass('fixed');
            }

            // content
            if (sTop > $(".sec1").offset().top - $(".sec1").height() / 1.5) {
                $(".sec1").addClass("active");
            } 
            if (sTop > $(".sec2").offset().top - $(".sec2").height() / 1.5) {
                $(".sec2").addClass("active");
            } 
            if (sTop > $(".sec3").offset().top - $(".sec3").height() / 1.5) {
                $(".sec3").addClass("active");
            } 
            if (sTop > $(".sec4").offset().top - $(".sec4").height() / 1.5) {
                $(".sec4").addClass("active");
            } 
        }).trigger("scroll");
    }
}

$(function(){
	var win = $(window).width();
    var clear;
    var device = 'pc';
    fpageSet(win);
    function fpageSet(win){
        if(win < 865) {
            if(device == 'mo') {
                $.fn.fullpage.destroy('all');
            }
            clearTimeout(clear);

            setTimeout(function() {
                $("body").addClass("mo");
                $("body").removeClass("pc");
                $(".sec0").removeClass("active-main");
                $(".main").removeClass("active");
                moScroll();
            },100);
            device = 'pc';
        }else{
            if(device == 'pc') {
                clearTimeout(clear);
                device = 'mo';
                fullPage();
                clear = setTimeout(function() {
                    $.fn.fullpage.moveTo(1);
                },2);
                $(".section").removeClass("active");
                setTimeout(function() {
                    $("body").removeClass("mo");
                    $("body").addClass("pc");
                    $(".sec0").removeClass("active-main");
                    $(".main").removeClass("active");
                },100);
            }
        }
    }
    $(window).on('resize', function(){
        var win = $(window).width();
        fpageSet(win);
    });
});
