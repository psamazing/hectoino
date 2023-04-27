$(function () {
  if ($('.subpage').length > 0) {
    var vw = window.innerWidth;
    subMbSet(vw);
    $(window).on('resize', function () {
      vw = window.innerWidth;
      subMbSet(vw);
      // moNavAct();
    });
  }
});
function subMbSet(vw) {
  var subHeader = $('.subpage');
  var subTitle = $('.main_title').text();

  if (vw < 999) {
    if (subHeader.length > 0) {
      subHovScroll(subHeader, subTitle);
    }
    //
  } else {
    subHeader.removeClass('chgfix');
  }
}
function subHovScroll(head, title) {
  $(window).on('scroll', function () {
    var hTop = $(this).scrollTop();
    if (hTop > 0) {
      head.addClass('chgfix');
      $('.mosubtit').text(title);
    } else {
      head.removeClass('chgfix');
      $('.mosubtit').text(title);
    }
  });
}

function moNavAct() {
  var gnb = $('.gnb');
  if (gnb.hasClass('on')) {
    $('html, body').removeClass('hidden');
    gnb.removeClass('on');
    $('.btn_mo_menu').removeClass('active');
  } else {
    $('html, body').addClass('hidden');
    gnb.addClass('on');
    $('.btn_mo_menu').addClass('active');
  }
}

// 공지사항
$('.btn_notice_title').click(function () {
  if ($(this).closest('tr').hasClass('on')) {
    $(this).attr('aria-expanded', 'false');
    $(this).closest('tr').toggleClass('on');
    return;
  }
  $('.notice_table tr').removeClass('on');
  $('.btn_notice_title').attr('aria-expanded', 'false');
  $(this).attr('aria-expanded', 'true');
  $(this).closest('tr').addClass('on');
});

// FAQ
$('.faq_tab').click(function () {
  $('.faq_tab').removeClass('on');
  $(this).addClass('on');
  let selectedPanel = $(this).attr('aria-controls');
  $('.faq_tabpanel').attr('hidden', 'true');
  console.log($('#' + selectedPanel));
  $('#' + selectedPanel).removeAttr('hidden');
});
$('.btn_question').click(function () {
  if ($(this).closest('dt').hasClass('on')) {
    $(this).attr('aria-expanded', 'false');
    $(this).closest('dt').toggleClass('on');
    return;
  }
  $('.faq_tabpanel dt').removeClass('on');
  $('.btn_question').attr('aria-expanded', 'false');
  $(this).attr('aria-expanded', 'true');
  $(this).closest('dt').addClass('on');
});

// 전화번호 input
$('.input_phone_box input').focus(function () {
  $('.input_phone_box').addClass('on');
});
$('.input_phone_box input').blur(function () {
  $('.input_phone_box').removeClass('on');
});
