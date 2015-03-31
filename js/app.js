(function($) {



   $("#element").introLoader(); 

       $('.fader').fadeIn(1000);


   $(window).scroll(function () {

    if ($(this).scrollTop() > 200){
    $('.fader').fadeOut('slow');

  }else{
    $('.fader').fadeIn('slow');
  }
     if ($(this).scrollTop() > 600){
    $('.navbar').fadeIn('slow');
    
  }
});

  // create the back to top button
$('footer').prepend('<a href="#" class="back-to-top">Back to Top</a>');

var amountScrolled = 2600;

$(window).scroll(function() {
  if ($(window).scrollTop() > amountScrolled) {
    $('a.back-to-top').fadeIn('slow');
  } else {
    $('a.back-to-top').fadeOut('slow');
  }
});

$('a.back-to-top').click(function() {
  $('body').animate({
    scrollTop: 0
  }, 'slow');
  return false;
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






  
 

