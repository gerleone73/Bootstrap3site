(function($) {

   setTimeout(function(){
      $('#arrow').css('opacity', '0').addClass('slideDown');
   }, 400);

 $('.navbar-collapse').click('li', function() {
    if ($(window).width() < 770){
  $('.navbar-collapse').collapse('hide');
}

});

})(jQuery);






  
 

