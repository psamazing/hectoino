function hasJqueryObject($elem) { return $elem.length > 0 }
var UI = UI || {};



function counting(tar,delay){
    var _this = $('.count_'+tar),
        per = _this.attr('per');

	_this.attr('per',0);
	setTimeout(function(){
		$({animatedValue:0}).animate({animatedValue:per},{
			duration: 900,
			step: function(){
				_this.attr('per',Math.floor(this.animatedValue));
			},
			complete: function() {
				_this.attr('per',Math.floor(this.animatedValue));
			}
		});
	}, delay*100);
}
//--[2022-04-01] web mobile용 js 추가 --
//모바일웹 가입,해지 탭
function joinTab(tab) {
	$('.tabBtn').removeClass('now');
	$('.tabBtn.btn' + tab).addClass('now');
	$('.tabSec').removeClass('tabOn');
	$('#tab' + tab).addClass('tabOn');
	if(!$('.skt').hasClass('on')){
		$('.choice button').removeClass("on");
	}
	$('.skt').addClass('on');
}
//--[2022-04-01] web mobile용 js 추가 --
//위로가기버튼
function goToTop(){
	$('html,body').animate({ scrollTop: $('#sec0').offset().top }, 350);
}
//--[2022-04-01] web mobile용 js 추가 --
//모바일웹스크롤이벤트	
function mainMbScroll() {
	
	var mWebSwiper = new Swiper(".visualSwiper", {
		spaceBetween: 0,
		slidesPerView:1.5,
		slidesOffsetBefore:-30,
		centeredSlides: true,
		roundLengths: false,
		loop: true,
		loopAdditionalSlides: 10,
		autoplay: {
			delay:2500,
			disableOnInteraction : false, 
		},
	});
	
	mWebSwiper.autoplay.stop();

	var secArray = ['sec0', 'sec1', 'sec2', 'sec3'];
		var arrayTop = [];
		var headerH = $('#header').innerHeight();

		secArray.forEach(function (sec, index) {
			if (index > 0) {
				arrayTop.push($('#' + sec).offset().top - (headerH * 4));
			} else {
				arrayTop.push($('#' + sec).offset().top);
			}
		});
	 //모바일 스크롤 이벤트
	 $(window).scroll(function(){
		
		var mwTop = $(this).scrollTop();
		
		//앱다운 
		if (mwTop > arrayTop[0] && mwTop < arrayTop[1]) {
			$('.appdown').addClass('visible');
			
		} 
		if (mwTop > arrayTop[2] && mwTop < arrayTop[3] - 450 ) {
			$('.appdown').removeClass('visible');
		}
		
		if (mwTop > 10){
			$('#header').addClass('backcolor');
		}else{
			$('#header').removeClass('backcolor');
		}
		//header 
		if (mwTop > arrayTop[1]) {
			$('.intro').removeClass('aniMo');
		}else{
			$('.intro').addClass('aniMo');
			
		}

		//위로가기
		if (mwTop > arrayTop[2]){
			$('.gotop').addClass('visible');
		}else{
			$('.gotop').removeClass('visible');
			
		}
		//서비스 기능 소개 슬라이드 
		if (mwTop > arrayTop[1] && mwTop < arrayTop[2]) {
			mWebSwiper.autoplay.start();
		} else{
			mWebSwiper.autoplay.stop();
		}
		
	});
}


// ready
UI.calcSelect2 = {
	init:function() {
		var _this = $(".select_apt .btn_select");
		_this.each(function(idx){
			var _this = $(this);
			_this.on('click', function(){
				if (_this.parent().hasClass('focus')) {
					_this.next().find('li').on('click', function(e) {
						e.preventDefault();
						var value = $(this).find('span:first').text();
						$(this).parents('.select_wrap').prev('.btn_select').text(value);
					});
				}
			});
		});
	}
}
UI.pointCalc = {
	init: function(){
		$(this).each(function(idx){
			// [22.01.20] JQ 변경
			$('.calc_list_wrap .btn_inner button').on('click', function() {
				var index = $(".calc_list_wrap").find('.on').index(); 
				var list = $(".calc_item").length; 
				var max = --list;
				if ($(this).hasClass('btn_next')) {
					counting('point',.3);
					$('.calc_item').eq(++index).addClass('on').siblings().removeClass('on');
					$('.result .item').eq(index).addClass('focus').prev().addClass('done').removeClass('focus');
					$('.btn_prev').removeClass('disabled');
					if (index == max) {
						$('.result_wrap .btn_second').text('다시 계산하기');
					}
				} else if ($(this).hasClass('btn_prev')) {
					counting('point',.3);
					$('.calc_item').eq(--index).addClass('on').siblings().removeClass('on');
					$('.result .item').eq(index).addClass('focus').removeClass('done').next().removeClass('done').removeClass('focus');
					if (index == 0) {
						$('.btn_prev').addClass('disabled');
					}
					if (index < max) {
						$('.result_wrap .btn_second').text('선택값 초기화');
					}
				}
				$('.result_wrap .btn_second').on('click', function() {
					index == 0;
					counting('point',.3);
					$('.result').find('.item').eq(0).addClass('focus').siblings().removeClass('focus').removeClass('done');
					$('.calc_list_wrap').find('.calc_item').eq(0).addClass('on').siblings().removeClass('on');
					$('.btn_prev').addClass('disabled');
					$('.result_wrap .btn_second').text('선택값 초기화');
				});
			})
			
		});
	}
}
UI.cardScroll = {
	init: function(){
		$(window).load(function(){
			var scroll = $('.card_area .scroll_area');
			var height = $('.card_area .scroll_area ul').innerHeight();
			scroll.on("scroll", function(){
				if(scroll.scrollTop() + scroll.height() >= height - 50) {
					scroll.parent().addClass('dim');
				} else {
					scroll.parent().removeClass('dim')
				}
			}).trigger("scroll");;
		}); 
	}
}
UI.pointPer_btn = {
	init: function(){
		var $this = $('.dep_analyze');
		var scroll = $('html, body');
		var st1 = $('.point_calculator');
		var tit = $('.con_tit_wrap');
		var tit2 = $('.info_inner');

		st1.parents('.bbs_wrap').addClass('pointPer');
		$this.on('click', function(e){
			// [21.07.14] JIRA 이슈 수정 [APC-276]
			$("body").find(".multi").find('.point').not('.my').each(function(idx){
				var num = $(this).attr("data-point");
				TweenMax.to($(this), .0, {left:$(this).attr("data-point") / 84*100 +"%"});
				$(this).find('span').find('s').text(num);
			});
			if($(this).hasClass('btn_close')) {
				console.log('a');
				$this.parents('.point_calculator').next().slideUp(400);
				tit.removeClass('per_upper');
				scroll.animate({scrollTop: $('.bbs_wrap').offset().top}, 600);
				tit2.parent().removeClass('fixed');
			} else {
				$this.parents('.point_calculator').next().slideDown(300);
				tit.addClass('per_upper');
				st1.parents('.bbs_wrap').addClass('pointPer');
				setTimeout(function(){
					scroll.animate({scrollTop: $('.analyze_wrap').offset().top - 100}, 400);
				}, 0);
			}
		});
		tit2.on('click', function(e){
			$this.parents('.point_calculator').next().slideUp(400);
			tit.removeClass('per_upper');
			scroll.animate({scrollTop: $('.bbs_wrap').offset().top}, 600);
			tit2.parent().removeClass('fixed');
		});
	}
}
UI.acc = {
	init: function(){
		var _this = this;
			_this.$accWrap =$("body").find(".acc_wrap"),
			_this.$accTit =_this.$accWrap.find(".tit"),
			_this.$accCont =_this.$accWrap.find(".cont"),
			_this.$accBtn =_this.$accTit.find(".btn");
			_this.addEvents();
	},
	addEvents: function() {	
        var _this = this;
		function handleToggle() {
			if($(this).hasClass('on')){
				$(this).removeClass('on').next().slideUp(600);
				$(this).find('.btn').removeClass('on');
				$(this).parent('.acc_wrap').removeClass('on');
			}else{
				$(this).find('.btn').addClass('on');
				$(this).addClass('on').next().slideDown(600);
				$(this).parent('.acc_wrap').addClass('on');
			}
        }
        _this.$accTit.off('click.toggle').on('click.toggle', handleToggle);
	}
}

//--[2022-04-01] web mobile용 js 추가 --
// 통신사 버튼 
UI.choiceButton = {
	init: function(){
		$('.choice button').on('click', function() {
			var body = document.querySelector('body');
			var agency = this.getAttribute('class');
			
			body.setAttribute('class', agency );

			$('.choice button').removeClass('on');
			$(this).addClass('on');
    	});
	}
}
//--[2022-04-07] 해지탭 이벤트 추가
UI.choiceButton2 = {
	init: function(){
		$('.choice2 button').on('click', function() {
			var body = document.querySelector('body');
			var agency = this.getAttribute('class');
			
			body.setAttribute('class', agency );

			$('.choice2 button').removeClass('on');
			$(this).addClass('on');
    	});
	}
}

//--[2022-04-01] web mobile용 js 추가 --
//인증번호요청 클릭이벤트
UI.confrimButton = {
	init: function(){
		$('.confirm').on('click', function() {
			$('.confirmCheck').show();
			if (!$('.skt').hasClass('on')) {
				$('.confirm').addClass('hide');
				$('.termsBtn').show();
				$('.form_terms').hide();
				$('.ip_terms.hide').removeClass('hide').find('.ip_item').removeClass('hide');
				$('.ip_terms.captcha').css('margin-bottom','2.2rem');
				
			} else {
				$('.choice').hide();
				$('.cvType2').hide();
				$('.termsBtn').hide();
				$('.type_skt').show();
				$('.ip_terms.captcha').css('margin-bottom','2.2rem');
			}
		});
	}
}
//인증번호확인 클릭이벤트
UI.confrimChkButton = {
	init: function(){
		$('.termschk').hide(); //인증번호,전화번호 input 태그
		$('.confirmCheck').hide(); //인증번호 확인버튼
		$('.confirmCheck').on('click', function() {
			$('.ip_btn.target').removeClass('disabled');
		});
	}
}


//해지탭인증번호요청 클릭이벤트
UI.confrimButton2 = {
	init: function(){
		$('.confirm_expire').on('click', function() {
			if (!$('.skt2').hasClass('on')) {
				$('.cvType_expire').css('min-height','17rem');
				$('.confirm_expire').addClass('hide');
                $('.ip_terms.hide').removeClass('hide').find('.ip_item').removeClass('hide');
				$('.cvType_expire').show();
				$('.cvType_expire.type_skt').hide();
			} else {
				$('.cvType_expire').hide();
				$('.cvType_expire.type_skt').show();
				$('.choice2').hide(); 
			}
		});
	}
}


//약관숨기기
UI.termsButton = {
	init: function(){
		$('.termsBtn').hide(); //약관숨기기버튼
		$('.termsBtn').on('click', function(){
			$('.form_terms').show();
			$('.termsBtn').hide();
		});
	}
}

$(function(){
	UI.$window = $(window);
	UI.$body = $("body");

	hasJqueryObject(UI.$body.find(".select_apt .btn_select")) && UI.calcSelect2.init();
	hasJqueryObject(UI.$body.find(".point_calculator .btn_inner button")) && UI.pointCalc.init();
	hasJqueryObject(UI.$body.find(".panel_card .card_area")) && UI.cardScroll.init();
	hasJqueryObject(UI.$body.find(".dep_analyze")) && UI.pointPer_btn.init();
	hasJqueryObject(UI.$body.find(".acc_wrap")) && UI.acc.init();
	hasJqueryObject(UI.$body.find(".choice button")) && UI.choiceButton.init();
	hasJqueryObject(UI.$body.find(".choice2 button")) && UI.choiceButton2.init();
	hasJqueryObject(UI.$body.find(".confirm")) && UI.confrimButton.init();
	hasJqueryObject(UI.$body.find(".confirm_expire")) && UI.confrimButton2.init();
	hasJqueryObject(UI.$body.find(".confirmCheck")) && UI.confrimChkButton.init();
	hasJqueryObject(UI.$body.find(".confirmCheck_expire")) && UI.confrimChkButton2.init();
	hasJqueryObject(UI.$body.find(".termsBtn")) && UI.termsButton.init();
});




