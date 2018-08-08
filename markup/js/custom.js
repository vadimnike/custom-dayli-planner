;(function($){
  'use strict';


  //Img to Svg
  var $imgSvg = $('img.img-svg');
  // img to svg converter
  $imgSvg.each(function() {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(
      imgURL,
      function(data) {
        var $svg = jQuery(data).find('svg');

        if (typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
        }

        if (typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass + ' svg');
        }

        $svg = $svg.removeAttr('xmlns:a');
        $img.replaceWith($svg);
      },
      'xml'
    );
  });


//Password-wrap
  let passWrap = $('.password-wrap');
  let inputPassword = $('.password-wrap .input-wrap input');


  $.each(inputPassword, function(){
    $(this).change(function () {
      if ($(this).val()) {
        $(this).parent().parent().addClass('active');
      } else {
        $(this).parent().parent().removeClass('active');
      }
    })
  });


  $(document).on('click', '.password-wrap.active .icon-wrap i', function () {
    if ($(this).hasClass('ic-eye-closed')) {
      $(this).removeClass('ic-eye-closed');
      $(this).addClass('ic-eye');
      $(this).closest('.password-wrap').find('.input-wrap input').prop("type", "text");
    } else {
      $(this).removeClass('ic-eye');
      $(this).addClass('ic-eye-closed');
      $(this).closest('.password-wrap').find('.input-wrap input').prop("type", "password");
    }
  });
})(jQuery);
