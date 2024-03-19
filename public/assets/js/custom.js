(function($)  {
	"use strict"; // Start of use strict

	//SCROLL TOP CLICK EVENT
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scroll-top').fadeIn();
		} else {
			$('.scroll-top').fadeOut();
		}
	});
	$('.scrollToTop').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	$('.contact-scroll').click(function(e) {
     	var targetHref = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(targetHref).offset().top
		}, 1250);
		e.preventDefault();
	 });

	$("#toggle_searchbar").click(function(){
	  $(".toggle-searchbars").slideToggle();
	});

	$("li.mobile-menu-dropdown a.mmd-link").click(function(){
	  $(this).parent("li.mobile-menu-dropdown").find("ul").slideToggle();
	  $(this).find("i").toggleClass("fa-angle-down fa-angle-up");
	});

	$(".add-favBtn").click(function(){
	  $(this).find("i").toggleClass("fa-star-o fa-star");
	});

	$('.bar-toggler').on('click', function () {
		$('.bar-toggler').toggleClass('change');
		$('.mobile-sidebar').addClass('active');
		$('body').addClass('body-overflow-y');
	});

	$('.mobile-sidebar-closeBtn').on('click', function () {
		$('.bar-toggler').removeClass('change');
		$('.mobile-sidebar').removeClass('active');
		$('body').removeClass('body-overflow-y');
	});

	$('.user-droptoggle').on('click', function () {
		$('.user-dropdown').slideToggle();
	});

	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	// We listen to the resize event
	window.addEventListener('resize', () => {
	  // We execute the same script as before
	  let vh = window.innerHeight * 0.01;
	  document.documentElement.style.setProperty('--vh', `${vh}px`);
	});

	new WOW().init();
		
})(jQuery);