$('.logo-on-off').each(function() {

  let img_off = $(this).attr('src');
  let img_on = $(this).attr('src').replace('-icon', '-icon-ton');

  $(this).hover(
    function () {
      $(this).attr('src', img_on);
    },
    function () {
      $(this).attr('src', img_off);
    }
  );

});
