 //muda a cor da navbar
 $(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 550);
 });