TweenMax.from(".header__logo", 1, {
  delay: 0.8,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
});

TweenMax.from(".header__left", 1, {
  delay: 1,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
});


TweenMax.from("#buy", 1, {
  delay: 1.2,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.to('.about__right_img',1,{
  scaleX:1,
  delay: 0.9,
  ease: Expo.easeInOut
});
TweenMax.to('.about__left',1,{
  scaleX:1,
  delay: 1.1,
  ease: Expo.easeInOut
});

$(window).scroll(function () {
  if ($(this).scrollTop() != 0)
     $('#toTop').fadeIn();
  else
     $('#toTop').fadeOut();
});
$('#toTop').click(function () {
  $('body,html').animate({
     scrollTop: 0
  }, 800);
});



