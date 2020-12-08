$(function() {
  $(".top-list").click(function() {
    var $answer = $(this).find(".month ul");
    if ($answer.hasClass("open")) {
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find("span").text("▼");
    } else {
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find("span").text("▲");
    }
  });

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
});
