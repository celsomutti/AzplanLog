jQuery(function($) {

	//Preloader
	var preloader = $('.preloader');
	$(window).load(function(){
		preloader.remove();
	});

	//#main-slider
	var slideHeight = $(window).height();
	$('#home-slider .item').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#home-slider .item').css('height',slideHeight);
	});
	
	//Scroll Menu
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>slideHeight ){
			$('.main-nav').addClass('navbar-fixed-top');
		} else {
			$('.main-nav').removeClass('navbar-fixed-top');
		}
	});
	
	// Navigation Scroll
	$('.navbar-collapse ul li a').on('click', function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
		return false;
	});

	$('.navbar-rodape ul li a').on('click', function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
		return false;
	});

	// User define function
	$('#tohash').on('click', function(){
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
		return false;
	});

	
	//Initiat WOW JS
	new WOW().init();
	//smoothScroll
	smoothScroll.init();
	
	// Progress Bar
	$('#about-us').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$.each($('div.progress-bar'),function(){
				$(this).css('width', $(this).attr('aria-valuetransitiongoal')+'%');
			});
			$(this).unbind('inview');
		}
	});

	//Countdown
	$('#features').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$(this).find('.timer').each(function () {
				var $this = $(this);
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});
			$(this).unbind('inview');
		}
	});

	// Portfolio Single View
	$('#portfolio').on('click','.folio-read-more',function(event){
		event.preventDefault();
		var link = $(this).data('single_url');
		var full_url = '#portfolio-single-wrap',
		parts = full_url.split("#"),
		trgt = parts[1],
		target_top = $("#"+trgt).offset().top;

		$('html, body').animate({scrollTop:target_top}, 600);
		$('#portfolio-single').slideUp(500, function(){
			$(this).load(link,function(){
				$(this).slideDown(500);
			});
		});
	});

	// Close Portfolio Single View
	$('#portfolio-single-wrap').on('click', '.close-folio-item',function(event) {
		event.preventDefault();
		var full_url = '#portfolio',
		parts = full_url.split("#"),
		trgt = parts[1],
		target_offset = $("#"+trgt).offset(),
		target_top = target_offset.top;
		$('html, body').animate({scrollTop:target_top}, 600);
		$("#portfolio-single").slideUp(500);
	});

	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),
			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Enviando mensagem...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success">Obrigado por entrar em contato conosco .<br>O mais breve possível entraremos em contato com você.</p>').delay(3000).fadeOut();
		});
	});
	


jQuery("#carousel").owlCarousel({
  autoplay: true,
  rewind: true, /* use rewind if you don't want loop */
  margin: 20,
  /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 3500,
  smartSpeed: 200,
  nav: true,
  responsive: {
    0: {
      items: 2 },


    600: {
      items: 3 },


    1024: {
      items: 4 },


    1366: {
      items: 6 } } });


/* CONFIG BTN ZAP E TOP FLUTUANTE */

const backToTopButton = document.querySelector('.back-to-top')

const backToTop = () => {
 if (window.scrollY >= 250) {
  backToTopButton.classList.add('show')
 } else {
  backToTopButton.classList.remove('show')
 }
}

window.addEventListener('scroll', function () {
 backToTop()
});

const fadezapButton = document.querySelector('.fade-zap')

const fadezap = () => {
 if (window.scrollY >= 250) {
  fadezapButton.classList.add('show')
 } else {
  fadezapButton.classList.remove('show')
 }
}

window.addEventListener('scroll', function () {
 fadezap()
});



});

