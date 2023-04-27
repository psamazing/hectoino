function hasJqueryObject($elem) { return $elem.length > 0 }
var UI = UI || {};

mobileChk();
function mobileChk(){
	$(window).resize(function(){
		var win = $(window).width();
		
		if(win < 865){
			$('body').addClass('mo');
			$('header').removeClass('active');
		} else {
			$('body').removeClass('mo');
		}
	}).resize()
}

menuClick();
function menuClick(){
    $(".header-btn").on('click', function(){
        var sTop = $(window).scrollTop();

        if($(this).hasClass("open")){
            $(".header-menu-mo").show();
            $(".header-menu-mo").show();
            $('body').css('overflow','hidden');

            if (sTop <= 50) {
                $('#header').removeClass('main');
            }
        }else{
            $(".header-menu-mo").hide();
            $('body').css('overflow','unset');

            if (sTop <= 50 && $('.subpage').length == 0) {
                $('#header').addClass('main');
            }
        }
    })
}


UI.header = {
	init: function(){
		var _this = this;
			_this.$header = $('body').find('#header'),
			_this.$nav = _this.$header.find('.header-menu')
			_this.$bg = _this.$header.find('.header-bg');

		_this.addEvents();
	},
	addEvents: function() {
		var _this = this;

		_this.$nav.mouseover(function(){
			_this.$header.addClass('active');
		});
		_this.$bg.mouseout(function(){
			_this.$header.removeClass('active');
		});
		
	}
}

UI.footerMO = {
	init: function(){
		var _this = this;
			_this.$footer = $('body').find('.footer-mo'),
			_this.$slider = _this.$footer.find('.footer-slider'),
			_this.$target = _this.$footer.find('.call'),

		_this.addEvents();
	},
	addEvents: function() {
		var _this = this;

		_this.$slider.on('click', function(){
			if (_this.$slider.hasClass('on')) {
				_this.$slider.removeClass('on')
				_this.$target.slideDown(300);
			} else {
				_this.$slider.addClass('on')
				_this.$target.slideUp(300);
			}
		});
	}
}

UI.menu = {
	init: function(){
		$('.header-item').off("click").on("click", function(e){
			e.preventDefault();
			if($(this).hasClass('on')){
				$('.header-menu-mo-sub').slideUp(200);
				$(this).removeClass('on');
			}else{
				$('.header-menu-mo-sub').slideUp(200);
				$('.header-item').removeClass('on');

				$(this).addClass('on').next().slideToggle(
					200, function () {
				});
			}
		});
	}
}

UI.acc = {
	init: function(){
		$('.acco-list-q').off("click").on("click", function(e){
			e.preventDefault();
			if($(this).hasClass('on')){
				$('.acco-list-a').slideUp(200);
				$(this).removeClass('on');
			}else{
				$('.acco-list-a').slideUp(200);
				$('.acco-list-q').removeClass('on');
				$(this).addClass('on').next().slideToggle(
					200, function () {
					$('html,body').animate({
						// scrollTop: $(this).offset().top - 120
					}, 200)
				});
			}
		});
	}
}

UI.join = {
	init: function(){
		var _this = this;
			_this.$joinWrap = $('body').find('.join-form'),
			_this.$ip = _this.$joinWrap.find('input');

		_this.addEvents();
	},
	addEvents: function() {
		var _this = this;
		_this.$ip.on('click', function (){
			$(this).parents('.radio-item').addClass("active").siblings().removeClass('active');
		});

	}
}

UI.selTab = {
	init: function() {
        this.$inputWrap = UI.$body.find(".nav-select");
        this.$select = this.$inputWrap.find("select");
        this.addEvents();
    },
    addEvents: function() {
        var _this = this;
        _this.$select.each(function(idx){
            var _input = $(this),
				_par = $(this).parent();
			_input.on("focus", function () {
                _par.removeClass('in');
                _par.addClass('focus');
			}).on("blur", function (e) {
                _par.addClass('in');
            }).blur();
            _input.on("change", function () {
                _par.addClass('in');
                if(_par.hasClass('in') & _par.hasClass('focus')) {
                    _par.removeClass('in');
                }
            });
        });
    }
}

UI.selFocus = {
    init: function() {
        this.$inputWrap = UI.$body.find(".ip-box");
        this.$select = this.$inputWrap.find("select");
        this.addEvents();
    },
    addEvents: function() {
        var _this = this;
        _this.$select.each(function(idx){
            if($(document).find("#container").hasClass("qna")) {
                $(this).val();
            } else  {
                $(this).val(-1);
            } 
            var _input = $(this),
				_par = $(this).parent().parent();
			_input.on("focus", function () {
                _par.removeClass('in');
                _par.addClass('focus');
			}).on("blur", function (e) {
				if(!$(this).val() == "" ) {
                    _par.find('.lbl').removeClass('show');
                    _par.find('.lbl').hide();
                }else{
                    _par.find('.lbl').addClass('show');
                    _par.find('.lbl').show();
                }
                _par.addClass('in');
            }).blur();
            _input.on("change", function () {
                _par.find('.lbl').addClass('hide');
                _par.addClass('in');
                if(_par.hasClass('in') & _par.hasClass('focus')) {
                    _par.removeClass('in');
                }
            });
        });
    }
}

UI.input = {
	init: function(){
		$(this).each(function(idx){
			var _input = $('.ip-box .ip');
			_input.on("focus", function () {
				if ($('body').hasClass('mo')) {
					$(this).parent().parent().addClass('focus');
				}
				$(this).parent().addClass('focus');
			}).on("blur", function (e) {
				if ($('body').hasClass('mo')) {
					$(this).parent().parent().removeClass('focus');

					if(!$.trim($(this).val()) == "" ) {
						$(this).parent().parent().addClass('in');
						
					}else{
						$(this).parent().parent().removeClass('in');
					}
				}

				$(this).parent().removeClass('focus');
				if($(this).parent().children('textarea').length){
					$(this).parent().addClass('textarea-box');
				}

				if(!$.trim($(this).val()) == "" ) {
					$(this).parent().find('.lbl').hide();
					$(this).parent().addClass('in');
					setTimeout(function(){
						$(e.target).parent().find("button.pen").show();
					},250);
				}else{
					$(this).parent().removeClass('in');
					$(this).parent().find('.lbl').show();
				}
			}).blur();
			_input.on("keyup", function () {
				if($.trim($(this).val()) == "" ) {
					$(this).parent().find('.lbl').hide();
				}
			});
		})
	}
}

$(function(){
	UI.$window = $(window);
	UI.$body = $("body");

	hasJqueryObject(UI.$body.find("#header")) && UI.header.init();
	hasJqueryObject(UI.$body.find(".radio-item")) && UI.join.init();
	hasJqueryObject(UI.$body.find(".join-form input")) && UI.input.init();
	hasJqueryObject(UI.$body.find(".qna select")) && UI.selFocus.init();
	hasJqueryObject(UI.$body.find(".nav-select select")) && UI.selTab.init();
	hasJqueryObject(UI.$body.find(".acco")) && UI.acc.init();
	hasJqueryObject(UI.$body.find(".footer-slider")) && UI.footerMO.init();
	hasJqueryObject(UI.$body.find(".header-item")) && UI.menu.init();
});

