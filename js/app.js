(function($) {



   $("#element").introLoader({

   animation: {
        name: 'simpleLoader',
        options: {
            exitFx:'fadeOut',
            ease: "linear",
            style: 'dark',
            delayBefore: 0, //delay time in milliseconds
            exitTime: 300
        }
    },    

    spinJs: {}
  }); 




       $('.fader').fadeIn(1000);
        $('.pattern').fadeIn(1000);

         setTimeout(function(){
      $('.fx').addClass('pulse');

   }, 400);


   $(window).scroll(function () {

    if ($(this).scrollTop() > 200){
    $('.fader').fadeOut(1000);
    $('.pattern').removeClass('pulse');
     $('.pattern').fadeOut('slow');

  }else{
    $('.fader').fadeIn(1000);
     $('.fx').addClass('pulse');
     $('.pattern').fadeIn('slow');
  }
     if ($(this).scrollTop() > 900){
    $('.navbar').fadeIn(1000);
    
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

 



 $('.navbar-collapse').click('li', function() {
    if ($(window).width() < 770){
  $('.navbar-collapse').collapse('hide');

}

});

})(jQuery);






  
 

