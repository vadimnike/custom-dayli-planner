;(function ($) {
  var hamburger = $('.hamburger'),
    smallMenu = $('.right_corner'),
    closeMenu = $('.close_menu'),
    documentBody = $('body'),
    overlay = $('.overlay'),
    showForm = $('.show_form'),
    topForm = $('.top_form'),
    switcher = $('.switcher'),
    showFilter = $('.show_filter'),
    showModal = $('.show_modal'),
    modal = $('.modal');
  sex = $('.sex');

  hamburger.on('click', function() {
    smallMenu.addClass('active');
    documentBody.addClass('active');
    overlay.show();
  });

  closeMenu.on('click', function() {
    smallMenu.removeClass('active');
    documentBody.removeClass('active');
    overlay.hide();
    topForm.hide();
    modal.hide();
  });

  overlay.on('click', function() {
    smallMenu.removeClass('active');
    documentBody.removeClass('active');
    topForm.hide();
    overlay.hide();
  });

  showForm.on('click', function() {
    topForm.show();
  });

  showFilter.on('click', function() {
    $('.filters').show();
  });

  showModal.on('click', function() {
    documentBody.addClass('active');
  });

  switcher.on('click', function() {
    $(this).closest('.filters_section').toggleClass('active');
    $(this).next('.accordion_content').slideToggle();
  });


  (function ($){
    'use strict';

    var $imgSvg = $('img.img-svg');

    $(document).ready(function () {
      // img to svg converter
      $imgSvg.each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        jQuery.get(imgURL, function (data) {
          var $svg = jQuery(data).find('svg');
          if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
          }
          if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' svg');
          }
          $svg = $svg.removeAttr('xmlns:a');
          $img.replaceWith($svg);
        }, 'xml');
      });
    });

  })(jQuery);


  sex.on('change', function() {
    var checked = $(this).is(':checked');
    var value = $(this).val();
    $(".sex").prop('checked',false);
    if(checked) {
      $(this).prop('checked',true);
      console.log(value);
    }
  });



  var dropItem = $('.drop-down .drop-down-list li');

  $.each(dropItem, function () {
    $(this).on('click touch', function (e) {
      var SortControl = $(this).closest('.drop-down').find('input');
      var currentItem = $(this);
      var eachItems = $(this).closest('.drop-down').find('.drop-down-list li');
      eachItems.removeClass('active');
      currentItem.addClass('active');
      // console.log(SortControl.val(currentItem));
      SortControl.val(currentItem.text());

      if($(this).data('key')==='all'){
        $('.race_table').addClass('show-head');
      } else {
        $('.race_table').removeClass('show-head');
      }
    });
  });

  $('.drop-down').click(function(){
    $(this).toggleClass('active');
  });

  //Expand/collapse tr table

  var trItem = $('.expandable-table tr.main_tr.expand_tr');
  $.each(trItem, function(){
    $(this).on('click touch', function(e){
      console.log('12312312311');
      var currentItem = $(this);
      currentItem.toggleClass('active')
    })
  });

}(jQuery));


