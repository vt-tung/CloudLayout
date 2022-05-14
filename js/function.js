$(document).ready(function(e) {
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

  $(".overlay").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

  $(function () {
    $(".menu-toggle").click(function (event) {
      event.preventDefault();
      $(".popup").toggleClass("toggled");
    });
    $(".overlay").click(function (event) {
      event.preventDefault();
      $(".popup").toggleClass("toggled");
    });
  });
  /*----------------------Tab Panels---------------------------*/
  $('.cl-tabs-wrapper .tabs.flex-tabs li').click(function(event){
      event.preventDefault();
      var tab_id_cl = $(this).attr('data-toggle-tab');
      $('.cl-tabs-wrapper .tabs.flex-tabs li').removeClass('active');
      $('.cl-tabs-wrapper .tab-content').removeClass('active');
      $(this).addClass('active');
      $("#"+tab_id_cl).addClass('active');
  })

  $('.cl-delete_item').click(function(event) {
    event.preventDefault();
    $(this).parents(".cl-main-page-wrapper .cl-wrapper .cl-lish-items .cl-item").addClass('active');
  });
  /*---------------------------Pop up------------------------*/
  $(function () {
    $(".cl-main-page-wrapper .click-popup").click(function(e){
      e.preventDefault();
      $( ".hidden-scroll-y" ).addClass( "active" );
      dataModal = $(this).attr("data-modal");
      $("#" + dataModal).css({"display":"flex"});
    });

    $(".cl-main-page-wrapper .cl-modal-size-guild.modal .close-modal").click(function(){
      $('#modal-size-guild').fadeOut(150);
      $( ".hidden-scroll-y" ).removeClass( "active" );
    });

    $(".cl-main-page-wrapper .cl-modal-size-guild.modal .x-bt").click(function(e){
      e.preventDefault();
      $('#modal-size-guild').fadeOut(150);
      $( ".hidden-scroll-y" ).removeClass( "active" );
    });

    $('.cl-main-page-wrapper #modal-size-guild ').click(function(){
     $('#modal-size-guild').fadeOut(150);
     $( ".hidden-scroll-y" ).removeClass( "active" );
    })

    $('.cl-main-page-wrapper .cl-modal-size-guild.modal .modal-box').click(function(e){
       e.stopPropagation();
    })

    $(document).on('keyup',function(evt) {
      if (evt.keyCode == 27) {
         $("#modal-size-guild").fadeOut(150);
         $( ".hidden-scroll-y" ).removeClass( "active" );
      }
    });
  });
  /*---------------------------Select tag------------------------*/
    $('.cl-main-page-wrapper .cl-select').each(function(){
      var $this = $(this), numberOfOptions = $(this).children('option').length;

      $this.addClass('select-hidden');
      $this.wrap('<div class="select"></div>');
      $this.after('<div class="select-styled"></div>');

      var $styledSelect = $this.next('div.select-styled');
      $styledSelect.text($this.children('option').eq(0).text());

      var $list = $('<ul />', {
          'class': 'select-options'
      }).insertAfter($styledSelect);

      for (var i = 0; i < numberOfOptions; i++) {
          $('<li />', {
              text: $this.children('option').eq(i).text(),
              rel: $this.children('option').eq(i).val()
          }).appendTo($list);
      }

      var $listItems = $list.children('li');

      $styledSelect.click(function(e) {
          e.stopPropagation();
          $('div.select-styled.active').not(this).each(function(){
              $(this).removeClass('active').next('ul.select-options').hide();
          });
          $(this).toggleClass('active').next('ul.select-options').toggle();
      });

      $listItems.click(function(e) {
          e.stopPropagation();
          $styledSelect.text($(this).text()).removeClass('active');
          $this.val($(this).attr('rel'));
          $list.hide();
      });

      $(document).click(function() {
          $styledSelect.removeClass('active');
          $list.hide();
      });
    });
});



