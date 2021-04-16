

$('.list__item').click(function changeClass(){
	$('.list__item').removeClass('list__active');
	$(this).addClass('list__active');
});

let sliderImage = ['slider.jpg','slider1.jpg','slider2.jpg','slider3.jpg','slider4.jpg'];
let dot = document.getElementsByClassName('dot');
let i = 0;
$('.slider__next').click(function(){
	 	i++;
	 	if (i > sliderImage.length-1){
	 		i = 0;
	 	}
		$('.slider_image').attr({src:"img/"+sliderImage[i]});
		$('.dot').removeClass('active__dot');
		$(dot[i]).addClass('active__dot');
		
	
});

$('.slider__prev').click(function(){
	i--;
	if(i < 0){
		i = sliderImage.length-1;
	}
	$('.dot').removeClass('active__dot');
	$(dot[i]).addClass('active__dot');
	$('.slider_image').attr({src:"img/"+sliderImage[i]});
});

$('.slider').mouseover(function(){
	$('.slider__title').addClass('slider__text_passive');
	$('.slider__text').addClass('slider__title_passive');
})

$('.slider').mouseout(function(){
	$('.slider__title').removeClass('slider__text_passive');
	$('.slider__text').removeClass('slider__title_passive');
})

$('form input,form textarea').focus(function(){
	$(this).addClass('input_active');
})

$('form input,form textarea').focusout(function(){
	$(this).removeClass('input_active');
})