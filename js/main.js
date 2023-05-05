$(function () {

	$('.menu__btn').on('click', function(){
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu__list').toggleClass('menu__list--active');
  });

	$('.level-2').on('click', function(){
		$('.speed-block__circle').toggleClass('.speed-block__circle--active');
	});

	$('.slider-block').slick({
		prevArrow:'<img class="slider-arrows slider-arrows__left" src="images/arrow-left.svg" alt=""></img>',
		nextArrow:'<img class="slider-arrows slider-arrows__right" src="images/arrow-right.svg" alt=""></img>',
		infinite: true,
		fade: true,
		draggable: false,
	});

	$('#fullpage').fullpage({
		licenseKey: 'YOUR_KEY_HERE',
		anchors: ['go','back'],
		keyboardScrolling: false,
		controlArrows: false,
		loopHorizontal: false,
	});

	new WOW().init();

});


