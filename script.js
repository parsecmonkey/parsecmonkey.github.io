// ページ内リンクジャンプ
jQuery(function(){
  var windowWidth = $(window).width();
  var headerHight = 70; // ヘッダーの高さ
  jQuery('a[href^=#]').click(function() { // <a href="#〇〇"> をクリックしたとき
    var speed = 1000; // スクロールのスピード
    var href= jQuery(this).attr("href");
    var target = jQuery(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top-headerHight; // 表示位置=ブラウザTOP-ヘッダーの高さ
    jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
　  return false;
  });
});

$(function() {
  $('.slide').slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    fade: true,
    arrows: false,
  });
});
