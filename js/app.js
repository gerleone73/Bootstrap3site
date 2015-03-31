(function($) {

   $("#element").introLoader(); 

   $(window).scroll(function () {
     if ($(this).scrollTop() > 600){
    $('.navbar').show();
  }
});

   $('.navbar-collapse').collapse('hide'); // here to see if will be default collapse

   setTimeout(function(){
      $('#arrow').addClass('pulse');
   }, 400);

 $('.navbar-collapse').click('li', function() {
    if ($(window).width() < 770){
  $('.navbar-collapse').collapse('hide');
}

});

})(jQuery);






  
 

