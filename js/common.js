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

	$(".main_mnu ul a").mPageScroll2id();

	var $menu = $(".top_line_wrapper");

	$(window).scroll(function(){
		if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
			$menu.removeClass("default").addClass("fixed");
		} else if($(this).scrollTop() === 0 && $menu.hasClass("fixed")) {
			$menu.removeClass("fixed").addClass("default");
			if($(this).width()<992 )
			$(".top_mnu ul").slideUp();
		}
	});


});