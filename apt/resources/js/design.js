function hasJqueryObject($elem) { return $elem.length > 0 }
var UI = UI || {};




// 브라우저 확인 (pc vs mobile)
function chkDevive() {
	window.mobilecheck = function () {
		var check = false;
		(function (a) {
			if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
		})(navigator.userAgent || navigator.vendor || window.opera);

		if (navigator.userAgent.match(/Android/i) ||
			navigator.userAgent.match(/webOS/i) ||
			navigator.userAgent.match(/iPhone/i) ||
			navigator.userAgent.match(/iPad/i) ||
			navigator.userAgent.match(/iPod/i) ||
			navigator.userAgent.match(/BlackBerry/i) ||
			navigator.userAgent.match(/Windows Phone/i)
		) {
			check = true;
		}
		return check;
	};
	window.browsercheck = function () {
		var agent = navigator.userAgent,
			match;
		var app, version;
		if ((match = agent.match(/MSIE ([0-9]+)/)) || (match = agent.match(/Trident.*rv:([0-9]+)/))) app = 'Internet Explorer';
		else if (match = agent.match(/Chrome\/([0-9]+)/)) app = 'Chrome';
		else if (match = agent.match(/Firefox\/([0-9]+)/)) app = 'Firefox';
		else if (match = agent.match(/Safari\/([0-9]+)/)) app = 'Safari';
		else if ((match = agent.match(/OPR\/([0-9]+)/)) || (match = agent.match(/Opera\/([0-9]+)/))) app = 'Opera';
		else app = 'Unknown';
		if (app !== 'Unknown') version = match[1];
		if (app == 'Internet Explorer') {
			$('body').addClass('ie');
		}
		if (app == 'Internet Explorer' && version == 9) {
			$('body').addClass('ie9');
		}
	};


	if (mobilecheck()) {
		// console.log('mobile');
		$('html').removeClass("pc").addClass('mobile');
	} else {
		// console.log('pc');
		$('html').removeClass("mobile").addClass('pc');
		browsercheck();
	}
}

function tableTrade(){
	var table = $(".table_trade").find(".tb");
	var btn = $(".table_trade").find(".btn_area").find('.btn');

	if (table.find("tbody").find("tr").length > 6 ) {
		table.find("tbody").find("tr:gt(5)").addClass('hide');
	}

	$(btn).on('click', function() {
		table.find('tr').removeClass('hide');
		btn.addClass('hide')
	});
}


var isVisible = false;
function checkVisible( elm, eval ) {
	eval = eval || "object visible";
	var viewportHeight = $(window).height(),
		scrolltop = $(window).scrollTop(),
		y = $(elm).offset().top,
		elementHeight = $(elm).height();   
	
	if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
	if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}

// ready
UI.header = {
	init:function() {
		var _li = $('#header li'),
			_header = $('#header');
			_headerOn = $('#header.off');
		_li.mouseover(function(){
			_header.removeClass('off');
		}),_headerOn.mouseleave(function(){
			_header.stop().addClass('off');
		})
		_li.on('click', function (){
			$(this).parents('.allMenuWrap').find('a').removeClass('on');
			$(this).find('> a').addClass('on')
		});
	}
}
UI.depOpenFirst = {
	init:function(){
		$(this).each(function(idx){
			var _dep =  $('.panel_st1 .btn_basic'),
				_depPrent = _dep.parents('.apt_wrap');

			_dep.on('click', function (){
				_depPrent.addClass('_2dep');
				_dep.parents('div[class^=panel_]').find('.btn_fold').addClass('none');
			});
		})
	}
}
UI.depOpenSec = {
	init:function(){
		$(this).each(function(idx){
			var _dep =  $('.apt_wrap .btn_apt'),
				_depPrent = _dep.parents('.apt_wrap');

			_dep.on('click', function (){
				_depPrent.find('.panel_st2').css('z-index','5');
				_dep.parents('div[class^=panel_]').find('.btn_fold').addClass('none');
				setTimeout( function() {
					_depPrent.addClass('_3dep');
				});
			});
		})
	}
}
UI.depClose = {
	init: function(){
		var _dep = $('div[class^=panel_st] .btn_close'),
			_depPrent = $('div[class^=panel_st] .btn_close').closest('.apt_wrap');
		_dep.on('click', function (){
			if(_depPrent.hasClass('_3dep')) {
				_depPrent.removeClass('_3dep');
				_dep.parents('div[class^=panel_]').find('.btn_fold').removeClass('none');
				setTimeout( function() {
					_depPrent.find('.panel_st2').css('z-index','2');
				},410);
			} else {
				_depPrent.removeClass('_2dep');
				_dep.parents('div[class^=panel_]').prev().find('.btn_fold').removeClass('none');
				_depPrent.find('.panel_st2').css('z-index','2');
			}
		});
	}
}

// [2021-04-27] 조건 수정
UI.fold = {
	init: function(){
		var _fold = $('div[class^=panel_] .btn_fold');
		$(this).each(function(idx){
			_fold.on('click', function(){
				var _fold = $(this);
				var _topBtn = $('.panel_card .btn_top');
			
				_fold.toggleClass('on');
				// [2021-05-10] 푸터이동 취소 요청
				// $('#footer').toggleClass('left');
				if (!_fold.hasClass('on')) {
					_fold.parents('div[class^=panel_]').addClass('now').siblings().addClass('fold');
				} else {
					_fold.parents('div[class^=panel_]').removeClass('now').siblings().removeClass('fold');
				}

				if (_topBtn.parents('.panel_card').hasClass('fold')) {
					$('.btn_card').hide();
					// $('.apt_wrap').removeClass('dim');
					// _topBtn.hide();
				} else {
					setTimeout( function() {
						// $('.apt_wrap').addClass('dim');
						// _topBtn.show();
						$('.btn_card').show();
					},720);
				}
			})
		});
	}
}
UI.cardTab = {
	init: function() {
		var _close = $(".panel_card .btn_close"),
			_cikBack = $(".apt_card_back"),
			_cik = $(".panel_card div[class^=apt_card]"),
			_move = _cik.parents('div[class^=panel_]'),
			_set = _cik.parents('div[class^=panel_]').width(),
			_panel = $('div[class^=panel_]').width(),
			_open =  $('.btn_card'),
			_topBtn = $('.panel_card .btn_top');

		$(this).each(function(idx){
			_cik.on('click', function(){
				$('div[class^=panel_]').removeClass('on');
				_move.css('left', + -_set);
				_topBtn.hide();
				$('.apt_wrap').removeClass('dim');
				setTimeout(function(){
					_move.prev().css('left', - _panel + -1);
					_move.next().addClass('on');
				},400);
			});
			_cikBack.on('click', function(){
				var _move = _cikBack.parents('div[class^=panel_]');

				_move.removeClass('on');
				_move.prev().prev().css('left', + 0);
				$('.apt_wrap').addClass('dim');
				setTimeout(function(){
					_topBtn.show();
				},900);
				if (_move.offset().left >= -360) {
					setTimeout(function(){
						_move.prev().css('left', + _panel);
					},100);
				}
			});
			_close.on('click', function(){
				var fold = $(this).parents('div[class^=panel_]').find('.btn_fold');
				fold.addClass('none');
				$(this).parents('div[class^=panel_]').prev().find('.btn_fold').removeClass('none');
				$(".btn_card").removeClass('none');
				$('.apt_wrap').removeClass('dim');
				_topBtn.hide();
				if(_move.offset().left >= 0) {
					_move.css('left', + -_set );
					if (_close.hasClass('on')) {
						_close.removeClass('on');
						_move.removeClass('on');
					}
				} else {
					_move.css('left', + 0);
				}
			});
			// 최근청약정보 open btn 추가
			_open.on('click', function(){
				var fold = $(this).parents('div[class^=panel_]').find('.btn_fold');
				fold.addClass('none');
				$('.panel_card').find('.btn_fold').removeClass('none');
				_move.css('left', + 350 );
				$(".btn_card").addClass('none');
				$('.apt_wrap').addClass('dim');
				setTimeout( function() {
					_topBtn.show();
				},750);
			})
			/* _topBtn.on('click', function(){
				$('.content_list .scroll_area, html,body').animate({scrollTop :0}, 200);
			}) */
		});
	}
}
UI.searchVal = {
	init:function() {
		$(this).each(function(idx){
			var _this = $(".ip_search input");
			_this.on('focus', function(){
				_this.siblings('.search_list').addClass('on');
				$(this).parent().addClass('focus');
				$(this).each(function(idx){
					_this.siblings('.search_list').find('li').on('click', function(e) {
						e.preventDefault();
						var _this = $(this).find('a');
						/* if(_this.children().hasClass('core')) {
							// var value = _this.find('i').text();
							// $(this).parents('.search_list').siblings('input').val(value);
						} else {
							var value = $(this).text();
							$(this).parents('.search_list').siblings('input').val(value);
						} */
						$(this).parents('.search_list').removeClass('on');
					});
				});
			}).on('blur', function(e){
				$(this).each(function(idx){
					$(this).parent().removeClass('focus');
				
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

					/* _this.siblings('.search_list').find('li').on('click', function(e) {
						e.preventDefault();
						var _this = $(this).find('a');
						if(_this.children().hasClass('core')) {
							var value = _this.find('i').text();
							$(this).parents('.search_list').siblings('input').val(value);
						} else if(_this.children().has('s')) {
							var value = _this.find('s').text();
							$(this).parents('.search_list').siblings('input').val(value);
						}else {
							var value = $(this).text();
							$(this).parents('.search_list').siblings('input').val(value);
						}
						$(this).parents('.search_list').removeClass('on');
					}); */
				});
				_this.on("keyup", function () {
					if($.trim($(this).val()) == "" ) {
						$(this).parent().find('.lbl').hide();
					}
				});
			});
			

			// search_list box over
			$(document).mouseup(function (e){
				var selList = $(".search_list");
				$(this).each(function(idx){
					if(selList.has(e.target).length === 0){
						if (!$('.search_box').hasClass('focus')) {
							$('.search_list').removeClass('on');
						}
					}
				});
			});
		});
	}
}
UI.calcSelect = {
	init:function() {
		var _this = $(".select_apt .btn_select");
		_this.each(function(idx){
			var _this = $(this);
			_this.on('click', function(){
				$('.select_apt').removeClass('focus');
				if (_this.parents('.select_apt').hasClass('focus')) {
					_this.parents('.select_apt').removeClass('focus');
				} else {
					_this.parent().addClass('focus');
					_this.next().find('li').on('click', function(e) {
						e.preventDefault();
						$(this).parents('.select_apt').addClass('in');
						$(this).parents('.select_apt').removeClass('focus');
					});
				}
			});
		});
		// select box over
		$(document).mouseup(function (e){
			var selBox = $(".select_apt");
			if(selBox.has(e.target).length === 0){
				selBox.removeClass("focus");
			}
		});
	}
}
UI.filter = {
	init: function(){
		$(document).off("click").on("click","[class^='filter_'] > button", function(e) {
			e.preventDefault();
			if($(this).hasClass('_set')) {
				$(this).removeClass('_set');
			} else {
				$(this).addClass('_set');
			}
		});
	}
}
UI.aptToggle = {
	init: function(){
		var tog = $(".content_list .info_list");
		tog.on("click",".info_tit", function(e){
			e.preventDefault();
			if ($(this).parent().hasClass('hold')) {
				
			} else {
				$(this).toggleClass('_on').next().slideToggle(200);
			}
		});
	}
}
UI.costCard = {
	init: function() {
		$(this).each(function(idx){
			var reset = $('.panel_card .btn_close_2, .btn_back_w'),
				list = $('.list_area .apt_item_list'),
				result = $('.filter_wrap_cost .cost_result'),
				close = $('.panel_st2 .btn_close_2');
				
			result.on('click', function(){
				var parent = $(this).parents('.apt_wrap'),
					panel = $(this).parents('div[class^=panel_]');

				parent.addClass('_3dep');
				parent.find('.panel_st2').css('z-index','5');
				panel.find('.step_01').addClass('hide').siblings().removeClass('hide');
			})
			list.on('click', function(){
				var text = $(this).find('h4').text();
				$(this).addClass('_active').siblings().removeClass('_active');
				list.parents('.apt_wrap').addClass('_2dep');
				list.parents('div[class^=panel_]').find('.btn_fold').addClass('none');
				list.parents('div[class^=panel_]').next().find('.header_wrap').find('h3').text(text);
			})
			
			reset.on('click', function(){
				var parent = $(this).parents('.apt_wrap');

				parent.removeClass('_3dep');
				parent.find('.panel_st2').find('.step_01').removeClass('hide').siblings().addClass('hide');
				setTimeout(function(){
					parent.find('.panel_st2').css('z-index','3');
				},450);
			})
			close.on('click', function(){
				var parent = $(this).parents('.apt_wrap');

				parent.removeClass('_2dep');
				parent.find('.panel_st2').css('z-index','2');
			})
		});
	}
}
UI.chartTap = {
	init: function(){
		$(this).each(function(idx){
			var _this = $('.chart_tit li');
			_this.click(function(){
				var tab = $(this).attr('data-tab');
				_this.removeClass('current');
				$('.tab_cont').removeClass('current');
				$(this).addClass('current');
				$('.'+ tab).addClass('current');
			});
		})
	}
}
UI.guideContTab = {
	init: function(){
	var $btnTop = $(".btn_gotop");
	$(window).scroll(function(){
		var st = $(this).scrollTop();
		if(st > 640){
			$btnTop.show();
		}else{
			$btnTop.hide();
		}
	});
	}
}
UI.aptHeader = {
	init: function(){
		var $header = $(".apt_info_header");
			tit = $header.find('.sub_header').find('h3'),
			aptName = $header.find('.apt_name').find('h3').text();
			$scroll = $('div[class^=panel_]').find('.apt_info_header').siblings('.content_list').find('.scroll_area');

		var listTit = $(".apt_wrap .info_list");
		
		$scroll.mCustomScrollbar({
			scrollButtons:{
				enable:true
			},
			callbacks:{
				whileScrolling:function(){
					if (this.mcs.top < -100) {
						$header.addClass('fixed');
						$header.siblings('.content_list').find('.scroll_area').addClass('fixed')
						tit.text($header.find('.apt_name').find('h3').text());
						// tit.text(aptName).addClass('apt_name');
					} else {
						$header.removeClass('fixed');
						$header.siblings('.content_list').find('.scroll_area').removeClass('fixed')
						tit.text(tit.attr('data-tit'));
						// tit.text(tit.attr('data-tit')).removeClass('apt_name');
					}
					accoScollFixd(this);
				},
				onOverflowYNone :function(){
					accoFixdNone(this);
				},
				alwaysTriggerOffsets:false
			},
		});
		function accoScollFixd(el){
			var fixH = $(".apt_info_header").offset().top + 60;
			listTit.each(function(idx){
				var offset = listTit.eq(idx).offset().top;
				var h = listTit.eq(idx).find(".info_tit").outerHeight();
				var b = listTit.eq(idx).find('.info_con').outerHeight();
				if(offset < fixH+(h*idx)) {
					listTit.eq(idx).addClass("_fix").find(".info_tit").css("top",Math.ceil(fixH+(h*idx)));
				}else if(offset > fixH) {
					listTit.eq(idx).removeClass("_fix");
				}

				if (offset+b < fixH+(h*idx)) {
					listTit.eq(idx).find(".info_tit").parent().addClass('hold');
				} else if (offset+b > fixH) {
					listTit.eq(idx).find(".info_tit").parent().removeClass('hold');
				}
			});
			if (el.mcs.top > -fixH ) {
				$(".apt_wrap .info_list").removeClass("_fix");
			}
		};
		function accoFixdNone(el){
			$(".apt_wrap .info_list").removeClass("_fix");
			$(".apt_info_header").removeClass("fixed");
		};
	}
}
UI.mainTab = {
	init: function() {
		$('.main_switch .con_sub').on('click', function () {
			var _this = $('.main_switch .con_sub'),
				_parents = _this.parents('.main_switch');
				
			_parents.find('.on').removeClass('on');
			setTimeout(function(){
				_parents.toggleClass('on');
			});
			
			setTimeout(function(){
				if(_parents.hasClass('on')){
					_parents.find('.switch_01').children('.con_sub').addClass('on');
					_parents.find('.switch_02').children('.con_main').addClass('on');
				} else {
					_parents.find('.switch_01').children('.con_main').addClass('on');
					_parents.find('.switch_02').children('.con_sub').addClass('on');
				}
			},600);
        });
	}
}
UI.moreView = {
	init: function() {
		$('.amenities .amenities_items').each( function() {
			if ( $( 'li', this ).length > 3) {
				$(this).addClass('more');
				$(this).find('li').eq(2).nextAll().addClass('hide');
			}
		});
		$('.ico_more').on("click", function(){
			$(this).parent().toggleClass('show');
			$(this).parent().find('li').eq(2).nextAll().toggleClass('hide');
		});
	}
}
UI.q_outer = {
	init: function(){
		$(this).each(function(idx){
			$(".q_match").mouseover(function() {
				var eq_top = $(this).offset().top;
				if($(this).parents('.total').hasClass('mark')) {
					var eq_left = $(this).offset().left;
					var eq_height = $('.q_match_inr').outerHeight();
					$('.q_match_inr').css('top', eq_top-eq_height-60 ).show();
					$('.q_match_inr').css('left', eq_left-335);
					$('.q_match_inr').mouseover(function() {
						$(this).show();
					}),$('.q_match_inr').mouseleave(function() {
						$(this).hide();
					})
				} else {
					var eq = $(this).parents('li').index();
					var eq_height = $('.q_match_inr').eq(eq).outerHeight();
					$('.q_match_inr').eq(eq).css('top', eq_top-eq_height-60 ).show();
					$('.q_match_inr').mouseover(function() {
						$(this).show();
					}),$('.q_match_inr').mouseleave(function() {
						$(this).hide();
					})
				}
			}),$(".q_match").mouseleave(function(){
				if($(this).parents('.total').hasClass('mark')) {
					$('.q_match_inr').hide();
				} else {
					var eq = $(this).parents('li').index();
					$('.q_match_inr').eq(eq).hide();
				}
			});
		});
	}
}
UI.hideFilter = {
	init: function(){
		$(document).on("click",".choice", function(e){
			var _this = $(this),
				list = _this.parent('.tit_wrap').next().find('.btn_list');
			
			_this.toggleClass('on');
			list.toggleClass('hide');
		})
	}
}
UI.costScroll = {
	init: function(){
		var $header = $(".header_wrap .card_tit"),
			$content = $(".panel_st3.panel_card .content_list").find('.cost_area'),
			$scroll = $('.panel_st3.panel_card').find('.scroll_area');
		
		$scroll.mCustomScrollbar({
			scrollButtons:{
				enable:true
			},
			callbacks:{
				whileScrolling:function(){
					if (this.mcs.top < -50) {
						$header.parent().addClass('fixed');
						$content.addClass('fixed');
					} else {
						$header.parent().removeClass('fixed');
						$content.removeClass('fixed');
					}
				},
				alwaysTriggerOffsets:false
			},
		});
	}
}

UI.saleScroll = {
	init: function(){
		var $header = $(".header_wrap"),
			$content = $(".panel_card .content_list").find('.card_area'),
			$scroll = $('.card_area').find('.scroll_area');
		
		$scroll.mCustomScrollbar({
			scrollButtons:{
				enable:true
			},
			callbacks:{
				whileScrolling:function(){
					if (this.mcs.top < -10) {
						$header.addClass('fixed');
						$content.addClass('_scroll');
					} else {
						$header.removeClass('fixed');
						$content.removeClass('_scroll');
					}
				},
				alwaysTriggerOffsets:false
			},
		});
	}
}

UI.recommScroll = {
	init: function(){
		var $header = $(".header_wrap"),
			$content = $(".panel_st1._scroll").find('.recommend_area'),
			$scroll = $('.recommend_area').find('.scroll_area');
		
		$scroll.mCustomScrollbar({
			scrollButtons:{
				enable:true
			},
			callbacks:{
				whileScrolling:function(){
					if (this.mcs.top < -10) {
						$header.addClass('fixed');
						$content.addClass('fixed');
					} else {
						$header.removeClass('fixed');
						$content.removeClass('fixed');
					}
				},
				alwaysTriggerOffsets:false
			},
		});
	}
}


UI.footer = {
	init: function() {	
		if($('#footer').hasClass('icon_footer')) {
			$('.icon_footer').addClass('on');
			setTimeout(function(){
				$('.icon_footer').removeClass('on');
			},2800);
		}
	}
}


/************************************* hsw **********************************/
UI.toggleList = {
	init: function(){
		$(document).off("click").on("click",".q", function(e){
			e.preventDefault();
			if($(this).hasClass('on')){
				$('.a').find('.con').slideUp(200);
				$('html,body').animate({scrollTop:0}, 200)
				$(this).removeClass('on');
			}else{
				$('.a').find('.con').slideUp(200);
				$('.q').removeClass('on');
				$(this).addClass('on').next().find('.con').slideToggle(
					200, function () {
					$('html,body').animate({
						scrollTop: $(this).offset().top - 120
					}, 200)
				});
			}
		});
	}
}
UI.inputFocus = {
	init: function(){
		$(this).each(function(idx){
			var _input = $('.ip_box input');
			_input.on("focus", function () {
				$(this).parent().addClass('focus');
			}).on("blur", function (e) {
				$(this).parent().removeClass('focus');
				if($(this).parent().children('textarea').length){
					$(this).parent().addClass('textarea');
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
			$(this).parent().find("button.pen").on("click", function(){
				$(this).parent().find("input").trigger("change").focus();
			});
		})
	}
}
UI.infoToggle = {
	init: function(){
		var tog = $('.toggle_tit');
		tog.on("click",function(e){
			e.stopPropagation();
			if($(this).hasClass('_on')){
				$(this).removeClass('_on').next().slideUp(200);
			}else{
				$(this).addClass('_on').next().slideDown(200);
			}
		});
	}
}
UI.slide = {
	init:function(){
		var $container = $(".inner_wrap_full .swiper-container_apt");
		var sliderLen = $container.find(".swiper-slide").length;
		if($container.find(".swiper-slide").length > 1) {
			var swiper = new Swiper('.swiper-container_apt', {
				spaceBetween: 20,
				slidesPerView: 'auto',
				watchSlidesVisibility: true,
				observer: true,
    			observeParents: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				on: {
					slideChange:function() {
						//$container.find(".swiper-slide").removeClass("prev");
					},
					reachEnd:function () {
						var currentSlide = this.realIndex;
						//$("#content .silder_wrap .silder_con .swiper-container_apt").css("width","100%");
						//swiper.update();
						$container.find(".swiper-slide").last().css("opacity",1);
					}
				}
			});
		}
	}
}

// 최상단으로 이동
$(".btn_gotop").on("click",function(){
	$('html,body').animate({scrollTop :0}, 200);
});



UI.infoPopSwiper01 = {
    init:function(){
        UI.$infoSwiper01 = $(".pop_info_swiper");
        UI.infoSwiper01 = new Swiper('.pop_info_swiper', {
            observer: true,
            observeParents: true,
            centeredSlides: true,
            allowTouchMove: false,
            slidesPerView: 1,
            speed:1000,
			pagination: {
				clickable: true,
                el: '.swiper-pagination',
			},
            on: {
                init: function(){
                    var _this = this;
                    _this.tween01 = new TimelineMax();
                    _this.tween02 = new TimelineMax();
                    _this.tween03 = new TimelineMax();
                    
                    var currentSlide = this.realIndex;

                    //reset
                    UI.$infoSwiper01.find(".swiper-slide").find(".form_ani").removeClass("on");
                    UI.$infoSwiper01.find(".swiper-slide").find(".selet_detail .item").removeClass("on");
                    UI.$infoSwiper01.find(".swiper-slide").find(".form_ani .box").removeClass("on");
					UI.$infoSwiper01.find(".swiper-pagination").addClass("hold");

                    // tween clear
                    _this.tween01.set(".swiper-slide *", {clearProps:"all"});
                    _this.tween02.set(".swiper-slide *", {clearProps:"all"});
                    _this.tween03.set(".swiper-slide *", {clearProps:"all"});

                    setTimeout(function(){
                        UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".form_ani").addClass("on");
                    },800);
                    _this.tween01.to(UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".cursor"), .2, {opacity:.4, delay:1.5, ease:Linear.easeIn, onComplete:function(){
                        _this.tween01.to(UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {x:-50,y:-20,ease:Linear.easeIn, onComplete:function(){
                            _this.tween01.to(UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {opacity:.6,scale:.98,ease:Linear.easeIn, onComplete:function(){
                                _this.tween01.to(UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {opacity:.4,scale:1,ease:Linear.easeIn, onComplete:function(){
									UI.infoSwiper01.slideTo(1,1000,false);
									_this.tween01.to(UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {opacity:0,delay:.3,ease:Linear.easeIn, onComplete:function(){
										_this.tween01.to(UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {x:0,y:0,opacity:0,ease:Linear.easeIn});
									}});
                                }});
                            }});
                        }});
                    }});

					$('.swiper-pagination').on('click', function (){
						if(!$('.swiper-pagination').hasClass('hold')) {
							UI.$infoSwiper01.find('.swiper-pagination').addClass('on');
						}
					});
                },
                slideChange: function() {
                    //reset
                    UI.$infoSwiper01.find(".swiper-slide").find(".form_ani").removeClass("on");
                    UI.$infoSwiper01.find(".swiper-slide").find(".selet_detail .item").removeClass("on");
                    UI.$infoSwiper01.find(".swiper-slide").find(".form_ani .box").removeClass("on");
					UI.$infoSwiper01.find(".swiper-pagination").addClass("hold");

					
                    var _this = this;
                    var currentSlide = this.realIndex;
                    if(currentSlide == 0) {
						_this.tween01.set(".swiper-slide *", {clearProps:"all"});
                        ani_st01();
						function ani_st01() {
							setTimeout(function(){
								UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".form_ani").addClass("on");
							},800);
							_this.tween01.to(UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".cursor"), .2, {opacity:.4, delay:1.5, ease:Linear.easeIn, onComplete:function(){
								_this.tween01.to(UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {x:-50,y:-20,ease:Linear.easeIn, onComplete:function(){
									_this.tween01.to(UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {opacity:.6,scale:.98,ease:Linear.easeIn, onComplete:function(){
										_this.tween01.to(UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {opacity:.4,scale:1,ease:Linear.easeIn, onComplete:function(){
											UI.$infoSwiper01.find(".swiper-pagination").removeClass("hold");
											if (!UI.$infoSwiper01.find(".swiper-pagination").hasClass('on')) {	
												UI.infoSwiper01.slideTo(1,1000,false);
											}
											_this.tween01.to(UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {opacity:0,ease:Linear.easeIn});
											_this.tween01.to(UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {x:0,y:0,opacity:0,delay:.3,ease:Linear.easeIn, onComplete:function(){
											}});
										}});
									}});
								}});
							}});
						}
                    }
                    if(currentSlide == 1) {
                        setTimeout(function(){
                            UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".form_ani .box").addClass("on");
                            UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".selet_detail").slideDown(400);
                        },800);
                        _this.tween02.to(UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".selet_detail .item:eq(0)"), .3, { className: "+=item on",delay:1.5, onComplete:function(){
                            UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".form_ani .box").removeClass("on");
                            UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".selet_detail").slideUp(400,function(){
                                UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".form_ani").addClass("on");
                                _this.tween02.to(UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".cursor"), .2, {opacity:.4, delay:.3, ease:Linear.easeIn, onComplete:function(){
                                    _this.tween02.to(UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {x:-50,y:-20,ease:Linear.easeIn, onComplete:function(){
                                        _this.tween02.to(UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {opacity:.6,scale:.98,ease:Linear.easeIn, onComplete:function(){
                                            _this.tween02.to(UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {opacity:.4,scale:1,ease:Linear.easeIn, onComplete:function(){
												UI.$infoSwiper01.find(".swiper-pagination").removeClass("hold");
												if (!UI.$infoSwiper01.find(".swiper-pagination").hasClass('on')) {	
													UI.infoSwiper01.slideTo(2,1000,false);
												}
												_this.tween01.to(UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {opacity:0,delay:.3,ease:Linear.easeIn});
												_this.tween01.to(UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {x:0,y:0,ease:Linear.easeIn, onComplete:function(){
												}});
                                            }});
                                        }});
                                    }});
                                }});
                            });
                        }});
                    }
                    if(currentSlide == 2) {
                        setTimeout(function(){
                            UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".form_ani .box").addClass("on");
                            UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".selet_detail").slideDown(400);
                        },800);
                        _this.tween03.to(UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".selet_detail .item:eq(1)"), .3, { className: "+=item on",delay:1.5, onComplete:function(){
                            UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".form_ani .box").removeClass("on");
                            UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".selet_detail").slideUp(400,function(){
                                UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".form_ani").addClass("on");
                                _this.tween03.to(UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".cursor"), .2, {opacity:.4, delay:.3, ease:Linear.easeIn, onComplete:function(){
                                    _this.tween03.to(UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {x:-50,y:-20,ease:Linear.easeIn, onComplete:function(){
                                        _this.tween03.to(UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {opacity:.6,scale:.98,ease:Linear.easeIn, onComplete:function(){
											UI.$infoSwiper01.find(".swiper-pagination").removeClass("hold");
                                            _this.tween03.to(UI.$infoSwiper01.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {opacity:.4,scale:1,ease:Linear.easeIn});
                                        }});
                                    }});
                                }});
                            });
                        }});
                    }
                }
            }
        });
    }
}

UI.infoPopSwiper02 = {
    init:function(){
        UI.$infoSwiper02 = $(".pop_info_swiper02");
        UI.infoSwiper02 = new Swiper('.pop_info_swiper02', {
            observer: true,
            observeParents: true,
            centeredSlides: false,
            allowTouchMove: false,
            speed:1000,
            pagination: {
				clickable: true,
                el: '.swiper-pagination',
			},
            on: {
                init: function(){
                    var _this = this;
                    _this.tween01 = new TimelineMax();
                    _this.tween02 = new TimelineMax();
                    _this.tween03 = new TimelineMax();

                    var currentSlide = this.realIndex;
                    
                    //reset
                    UI.$infoSwiper02.find(".swiper-slide").find(".form_ani").removeClass("on");
                    UI.$infoSwiper02.find(".swiper-slide").find(".selet_detail .item").removeClass("on");
                    UI.$infoSwiper02.find(".swiper-slide").find(".form_ani .box").removeClass("on");
                    UI.$infoSwiper02.find(".swiper-slide").find(".ani_wrap").removeClass("on_ani");
					UI.$infoSwiper02.find(".swiper-pagination").addClass("hold");

                    // tween clear
                    _this.tween01.set(".swiper-slide *", {clearProps:"all"});
                    _this.tween02.set(".swiper-slide *", {clearProps:"all"});
                    _this.tween03.set(".swiper-slide *", {clearProps:"all"});

					UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani_wrap").addClass('on_ani');
                    setTimeout(function(){
                        UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".form_ani").addClass("on");
                    },800);
					if (UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani_wrap").hasClass('on_ani')) {	
						_this.tween01.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".cursor"), .2, {opacity:.4, delay:3, ease:Linear.easeIn, onComplete:function(){
							_this.tween01.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {x:-50,y:-20,ease:Linear.easeIn, onComplete:function(){
								_this.tween01.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {opacity:.6,scale:.98,ease:Linear.easeIn, onComplete:function(){
									_this.tween01.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {opacity:.4,scale:1,ease:Linear.easeIn, onComplete:function(){
										UI.infoSwiper02.slideTo(1,1000,false);
										_this.tween01.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {opacity:0,delay:.3,ease:Linear.easeIn, onComplete:function(){
											_this.tween01.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {x:0,y:0,opacity:0,ease:Linear.easeIn});
										}});
									}});
								}});
							}});
						}});
					}
					$('.swiper-pagination').on('click', function (){
						if(!$('.swiper-pagination').hasClass('hold')) {
							UI.$infoSwiper02.find('.swiper-pagination').addClass('on');
						}
					});
                },
                slideChange: function() {
                    //reset
                    UI.$infoSwiper02.find(".swiper-slide").find(".form_ani").removeClass("on");
                    UI.$infoSwiper02.find(".swiper-slide").find(".selet_detail .item").removeClass("on");
                    UI.$infoSwiper02.find(".swiper-slide").find(".form_ani .box").removeClass("on");
                    UI.$infoSwiper02.find(".swiper-slide").find(".ani_wrap").removeClass("on_ani");
					UI.$infoSwiper02.find(".swiper-pagination").addClass("hold");

                    var _this = this;
                    var currentSlide = this.realIndex;


                    if(currentSlide == 0) {
						_this.tween01.set(".swiper-slide *", {clearProps:"all"});

						setTimeout(function(){
							UI.$infoSwiper02.find(".swiper-slide").eq(0).find(".form_ani").addClass("on");
							UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani_wrap").addClass('on_ani');

							if (UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani_wrap").hasClass('on_ani')) {	
								_this.tween01.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".cursor"), .2, {opacity:.4, delay:2, ease:Linear.easeIn, onComplete:function(){
									_this.tween01.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {x:-50,y:-20,ease:Linear.easeIn, onComplete:function(){
										_this.tween01.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {opacity:.6,scale:.98,ease:Linear.easeIn, onComplete:function(){
											_this.tween01.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {opacity:.4,scale:1,ease:Linear.easeIn, onComplete:function(){
												UI.$infoSwiper02.find(".swiper-pagination").removeClass("hold");
												UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani_wrap").removeClass('on_ani');
												if (!UI.$infoSwiper02.find(".swiper-pagination").hasClass('on')) {	
													UI.infoSwiper02.slideTo(1,1000,false);
												}
												_this.tween01.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {opacity:0,delay:.3,ease:Linear.easeIn, onComplete:function(){
													_this.tween01.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {x:0,y:0,opacity:0,ease:Linear.easeIn});
												}});
											}});
										}});
									}});
								}});
							}
						},800);
                    }
                    if(currentSlide == 1) {
						_this.tween02.set(".swiper-slide *", {clearProps:"all"});

						ani_st01();
						function ani_st01() {
							setTimeout(function(){
								UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani01 .box").addClass("on");
								UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani01 .selet_detail").slideDown(400);
							},800);
							_this.tween02.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani01 .selet_detail .item:eq(0)"), .3, { className: "+=item on",delay:1.5, onComplete:function(){
								UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani01 .box").removeClass("on");
								UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani01 .selet_detail").slideUp(400,function(){
									UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani_wrap").addClass('on_ani');
									ani_st02();
								});
							}});
						}
						function ani_st02() {
							_this.tween02.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani01 .form_ani"), .2, { className: "+=form_ani on",onComplete:function(){
								UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani02 .box").addClass("on");
								UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani02 .selet_detail").slideDown(400);
								_this.tween02.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani02 .selet_detail .item:eq(1)"), .3, { className: "+=item on",delay:.5,onComplete:function(){
									UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani02 .selet_detail").slideUp(400,function(){
										UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani02 .box").removeClass("on");
										UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani_wrap").removeClass('on_ani').addClass('on_ani');
										if (UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani_wrap").hasClass('on_ani')) {	
											_this.tween02.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani02 .form_ani"), .2, { className: "+=form_ani on",onComplete:function(){
												_this.tween02.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".cursor"), .2, {opacity:.4, delay:.1, ease:Linear.easeIn, onComplete:function(){
													_this.tween02.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {x:-50,y:-20,ease:Linear.easeIn, onComplete:function(){
														_this.tween02.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {opacity:.6,scale:.98,ease:Linear.easeIn, onComplete:function(){
															_this.tween02.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {opacity:.4,scale:1,ease:Linear.easeIn, onComplete:function(){
																UI.$infoSwiper02.find(".swiper-pagination").removeClass("hold");
																if (!UI.$infoSwiper02.find(".swiper-pagination").hasClass('on')) {	
																	UI.infoSwiper02.slideTo(2,1000,false);
																}
																_this.tween02.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {opacity:0,delay:.3,ease:Linear.easeIn,  onComplete:function(){
																	UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani_wrap").removeClass('on_ani');
																	_this.tween02.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {x:0,y:0,ease:Linear.easeIn});
																}});
															}});
														}});
													}});
												}});
											}});
										}
									});
								}});
							}});
						}
					}
                    if(currentSlide == 2) {
						_this.tween03.set(".swiper-slide *", {clearProps:"all"});

                        setTimeout(function(){
                            UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani01 .box").addClass("on");
                            UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani01 .selet_detail").slideDown(400);
                        },800);
                        _this.tween03.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani01 .selet_detail .item:eq(0)"), .3, { className: "+=item on",delay:1.5, onComplete:function(){
                            UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani01 .box").removeClass("on");
                            UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani01 .selet_detail").slideUp(400,function(){
                                _this.tween03.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani01 .form_ani"), .2, { className: "+=form_ani on",onComplete:function(){
                                    UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani02 .box").addClass("on");
                                    UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani02 .selet_detail").slideDown(400);
                                    _this.tween03.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani02 .selet_detail .item:eq(1)"), .3, { className: "+=item on",delay:.5,onComplete:function(){
                                        UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani02 .selet_detail").slideUp(400,function(){
                                            UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani02 .box").removeClass("on");
                                            _this.tween03.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".ani02 .form_ani"), .2, { className: "+=form_ani on",onComplete:function(){
                                                _this.tween03.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".cursor"), .2, {opacity:.4, delay:.1, ease:Linear.easeIn, onComplete:function(){
                                                    _this.tween03.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {x:-50,y:-20,ease:Linear.easeIn, onComplete:function(){
                                                        _this.tween03.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {opacity:.6,scale:.98,ease:Linear.easeIn, onComplete:function(){
															UI.$infoSwiper02.find(".swiper-pagination").removeClass("hold");
                                                            _this.tween03.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {opacity:.4,scale:1,ease:Linear.easeIn, onComplete:function(){
                                                                _this.tween03.to(UI.$infoSwiper02.find(".swiper-slide").eq(currentSlide).find(".cursor"),.25, {opacity:0,delay:.3,ease:Linear.easeIn});
                                                            }});
                                                        }});
                                                    }});
                                                }});
                                            }});
                                        });
                                    }});
                                }});
                            });
                        }});
                    }
                }
            }
        });
    }
}

$(function(){
	UI.$window = $(window);
	UI.$body = $("body");
	hasJqueryObject(UI.$body.find(".inner_wrap_full .silder_wrap")) && UI.slide.init();
	hasJqueryObject(UI.$body.find(".toggle_list")) && UI.toggleList.init();
	hasJqueryObject(UI.$body.find(".ip_box input")) && UI.inputFocus.init();
	hasJqueryObject(UI.$body.find(".toggle_tit")) && UI.infoToggle.init();
	hasJqueryObject(UI.$body.find("div[class^=panel_st] .btn_close")) && UI.depClose.init();
	hasJqueryObject(UI.$body.find("#header")) && UI.header.init();
	hasJqueryObject(UI.$body.find(".panel_st1 .btn_basic")) && UI.depOpenFirst.init();
	hasJqueryObject(UI.$body.find(".apt_wrap .btn_apt")) && UI.depOpenSec.init();
	hasJqueryObject(UI.$body.find(".ip_search input")) && UI.searchVal.init();
	hasJqueryObject(UI.$body.find(".select_apt .btn_select")) && UI.calcSelect.init();
	hasJqueryObject(UI.$body.find(".content_list .info_list")) && UI.aptToggle.init();
	hasJqueryObject(UI.$body.find(".chart_tit li")) && UI.chartTap.init();
	hasJqueryObject(UI.$body.find(".btn_gotop")) && UI.guideContTab.init();
	hasJqueryObject(UI.$body.find(".main_switch .con_sub")) && UI.mainTab.init();
	hasJqueryObject(UI.$body.find("div[class^=panel_] .btn_fold")) && UI.fold.init();
	hasJqueryObject(UI.$body.find(".filter_wrap_cost .cost_result", ".panel_st1 .apt_item_list",".cost_result_reset")) && UI.costCard.init();
	hasJqueryObject(UI.$body.find(".panel_card .apt_card", ".apt_card_back", "panel_card .btn_close close", "panel_card .btn_top")) && UI.cardTab.init();
	hasJqueryObject(UI.$body.find(".q_match")) && UI.q_outer.init();
	hasJqueryObject(UI.$body.find(".amenities .amenities_items")) && UI.moreView.init();
	hasJqueryObject(UI.$body.find("div[class^=panel_]")) && UI.aptHeader.init();
	hasJqueryObject(UI.$body.find(".filter_area .choice")) && UI.hideFilter.init();
	hasJqueryObject(UI.$body.find(".panel_st3.panel_card .scroll_area")) && UI.costScroll.init();
	hasJqueryObject(UI.$body.find(".icon_footer")) && UI.footer.init();
	hasJqueryObject(UI.$body.find(".dim .panel_card .scroll_area")) && UI.saleScroll.init();
	hasJqueryObject(UI.$body.find(".panel_st1._scroll .scroll_area")) && UI.recommScroll.init();
	
});




