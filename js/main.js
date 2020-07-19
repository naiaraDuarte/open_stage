 //muda a cor da navbar
 $(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 550);
 });
 //parallax
 $('.parallax-window').parallax({imageSrc: 'img/ticket.jpeg'});
 $('.parallax-window1').parallax({imageSrc: 'img/publicidade2.png'});
 $('.parallax-window2').parallax({imageSrc: 'img/corta.jpeg'});
 $('.parallax-window3').parallax({imageSrc: 'img/teatro (5).jpeg'});
//perguntas frequentes
 $('.collapse').collapse()

