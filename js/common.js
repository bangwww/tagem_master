$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

$(document).ready(function(){

	$(".logo_big_wrapper").animated("fadeInLeftBig","fadeOut");
	$(".inner_about").animated("fadeInRightBig","fadeOut");
	$(".section_header").animated("fadeInUp","fadeOut");


	$(".header_carousel").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000
	});
	$(".say_carousel").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		autoplay: true,
		autoplayTimeout: 10000
	});

	$(".main_mnu ul a").mPageScroll2id({
		offset: 55
	});

	var $menu = $(".top_line_wrapper");

	if($(window).scrollTop()>100)
	$menu.removeClass("default").addClass("fixed");

	$(window).scroll(function(){
		if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
			$menu.removeClass("default").addClass("fixed");
		} else if($(this).scrollTop() === 0 && $menu.hasClass("fixed")) {
			$menu.removeClass("fixed").addClass("default");
			if($(this).width()<992 )
			$(".main_mnu ul").slideUp();
		}
	});

	$(".main_mnu ul a").click(function(){
		if($(window).width()<992)
			$(".main_mnu ul").slideUp();
	});

	$(".main_mnu_button").click(function(){
		if ($menu.hasClass("default") ){
			$menu.removeClass("default").addClass("fixed");
		} else if($(window).scrollTop() === 0 && $menu.hasClass("fixed")) {
			$menu.removeClass("fixed").addClass("default");
		}
		$(".main_mnu ul").slideToggle();
	});

	$('.video_popup').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});


});