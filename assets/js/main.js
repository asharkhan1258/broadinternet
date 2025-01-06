/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Mobile Menu Js
03. Common Js
04. Menu Controls JS
05. Offcanvas Js
06. Search Js
07. cartmini Js
08. filter
09. Body overlay Js
10. Sticky Header Js
11. Theme Settings Js
12. Nice Select Js
13. Smooth Scroll Js
14. Slider Activation Area Start
15. Masonary Js
16. Wow Js
17. Counter Js
18. InHover Active Js
19. Line Animation Js
20. Video Play Js
21. Password Toggle Js
****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);
	////////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load', function () {
		$("#loading").fadeOut(500);
	});


	// 08. Nice Select Js
	$('select').niceSelect();


	///////////////////////////////////////////////////
	// 07. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 400) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});


	////////////////////////////////////////////////////
	// 09. Sidebar Js
	$(".tp-menu-bar").on("click", function () {
		$(".tpoffcanvas").addClass("opened");
		$(".body-overlay").addClass("apply");
	});
	$(".close-btn").on("click", function () {
		$(".tpoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
	});
	$(".body-overlay").on("click", function () {
		$(".tpoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
	});

	////////////////////////////////////////////////////
	// 03. Search Js
	$(".search-open-btn").on("click", function () {
		$(".search__popup").addClass("search-opened");
	});
		
	$(".search-close-btn").on("click", function () {
		$(".search__popup").removeClass("search-opened");
	});
  

	// $('.tp-hero-2__feature-box .tp-hero-2__feature-item').on('hover', function () {
	// 	$(this).addClass('active').siblings().find('.tp-hero-2__feature-item').removeClass('active');
	// });

	$('.tp-hero-2__feature-item').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.tp-hero-2__feature-item').removeClass('active');
	});

	$('.tp-custom-accordion .accordion-items').on("click", function(){
		$(this).addClass('tp-faq-active').siblings().removeClass('tp-faq-active');
	});  


	// for header
	if ($("#tp-header-top__value-toogle").length > 0) {
		window.addEventListener('click', function(e){
		
			if (document.getElementById('tp-header-top__value-toogle').contains(e.target)){
				$(".tp-header-top__value-submenu").toggleClass("open");
			}
			else{
				$(".tp-header-top__value-submenu").removeClass("open");
			}
		});
	}


	// for header
	if ($("#tp-header-top__lang-toogle").length > 0) {
		window.addEventListener('click', function(e){
		
			if (document.getElementById('tp-header-top__lang-toogle').contains(e.target)){
				$(".tp-header-top__lang-submenu").toggleClass("open");
			}
			else{
				$(".tp-header-top__lang-submenu").removeClass("open");
			}
		});
	}


	///////////////////////////////////////////////////
	// 02. SubMenu Dropdown Toggle
	var header_icon = 
	`<span class="header-icon">
		<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M6.04088 0L0.535156 4.125V11H4.26484V8.59381C4.26484 7.64165 5.05698 6.87506 6.04088 6.87506C7.02477 6.87506 7.81692 7.64165 7.81692 8.59381V11H11.5466V4.125L6.04088 0Z" fill="#FFB302"/></svg>                                
	</span>`;
    $(header_icon).insertBefore('.menu-icon nav ul .menu-icon-2');


	////////////////////////////////////////////////////
	// 03. Common Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$("[data-text-color]").each(function () {
		$(this).css("color", $(this).attr("data-text-color"));
	});

	$(".has-img").each(function () {
		var imgSrc = $(this).attr("data-menu-img");
		var img = `<img class="mega-menu-img" src="${imgSrc}" alt="img">`;
		$(this).append(img);

	});

	////////////////////////////////////////////////////
	// 12. Nice Select Js
	$('.tp-header-search-category select').niceSelect();

	////////////////////////////////////////////////////
	// 13. Smooth Scroll Js
	function smoothSctoll() {
		$('.smooth a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 120
				}, 1500);
			}
		});
	}
	smoothSctoll();

	function back_to_top() {
		var btn = $('#back_to_top');
		var btn_wrapper = $('.back-to-top-wrapper');

		windowOn.scroll(function () {
			if (windowOn.scrollTop() > 300) {
				btn_wrapper.addClass('back-to-top-btn-show');
			} else {
				btn_wrapper.removeClass('back-to-top-btn-show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});
	}
	back_to_top();


	$('.tp-hero__slider-active').slick({	
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		dots:false,
		fade:true,
		autoplay:true,
		prevArrow: `<button type="button" class="slick-prev">
		<svg width="71" height="36" viewBox="0 0 71 36" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M1.00451 19.3396L16.8581 35.1769C17.4276 35.8412 18.4284 35.9186 19.0934 35.3496C19.7584 34.7807 19.8359 33.7809 19.2663 33.1166C19.2132 33.0546 19.1554 32.9968 19.0934 32.9439L5.95079 19.799H68.7155C69.591 19.799 70.3008 19.0899 70.3008 18.2152C70.3008 17.3405 69.591 16.6315 68.7155 16.6315H5.95079L19.0934 3.50255C19.7584 2.93365 19.8359 1.93385 19.2663 1.26954C18.6967 0.605236 17.696 0.527798 17.031 1.09683C16.969 1.14991 16.9111 1.20762 16.8581 1.26954L1.00437 17.1068C0.389786 17.7243 0.389786 18.7219 1.00451 19.3396Z" fill="currentcolor"/>
		</svg></button>`,
		nextArrow: `<button type="button" class="slick-next">
		<svg width="71" height="36" viewBox="0 0 71 36" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M70.1547 16.3908L54.3011 0.553609C53.7316 -0.110699 52.7308 -0.18814 52.0658 0.380897C51.4008 0.949798 51.3233 1.94959 51.8929 2.6139C51.946 2.67583 52.0038 2.73367 52.0658 2.78661L65.2084 15.9315H2.44371C1.56822 15.9315 0.858398 16.6406 0.858398 17.5153C0.858398 18.39 1.56822 19.099 2.44371 19.099H65.2084L52.0658 32.2279C51.4008 32.7968 51.3233 33.7966 51.8929 34.4609C52.4625 35.1252 53.4632 35.2027 54.1282 34.6336C54.1902 34.5806 54.2481 34.5229 54.3011 34.4609L70.1548 18.6237C70.7694 18.0062 70.7694 17.0086 70.1547 16.3908Z" fill="currentcolor"/>
		</svg>
		</button>`,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			}
			
		]
	});


	$('.tp-hero-3__slider-active').slick({	
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots:false,
		fade:true,
		autoplay:true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			}
			
		]
	});

	// testimonial
	$('.tp-testimonial__slider-active').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		asNavFor: '.tp-testimonial__avata-slider-active'
	});
		$('.tp-testimonial__avata-slider-active').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.tp-testimonial__slider-active',
		dots: false,
		arrows: false,
		focusOnSelect: true,
		centerPadding: '0',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					slidesToShow: 1,
				}
			}
		]
	});


	////brand-slider
	var slider = new Swiper('.tp-brand__slider-active', {
		slidesPerView: 5,
		spaceBetween: 30,
		loop: true,
		autoplay:true,
		breakpoints: {
			'1400': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 5,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},

		a11y: false,
	});

	////brand-slider-2
	var slider = new Swiper('.tp-brand-2__active', {
		slidesPerView: 5,
		spaceBetween: 90,
		loop: true,
		autoplay:true,
		breakpoints: {
			'1400': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 5,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},

		a11y: false,
	});


	////brand-slider-2
	var slider = new Swiper('.tp-product__slider-active-2', {
		slidesPerView: 4,
		loop: true,
		autoplay:true,
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},

		a11y: false,
	});

	////brand-slider
	var testimonial = new Swiper('.tp-testimonial-2__active', {
		slidesPerView: 1,
		loop: true,
		autoplay:true,
		// effect:'fade',
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		// Navigation arrows
		navigation: {
			nextEl: '.test-prev',
			prevEl: '.test-next',
		},
		a11y: false,
	});


	////brand-slider
	var testimonial = new Swiper('.postbox__thumb-slider-active', {
		slidesPerView: 1,
		loop: true,
		autoplay:true,
		// effect:'fade',
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		// Navigation arrows
		navigation: {
			nextEl: '.postbox-arrow-next',
			prevEl: '.postbox-arrow-prev',
		},
		a11y: false,
	});


	////////////////////////////////////////////////////
	// 15. Masonary Js
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.grid-item',
			}
		});


		// filter items on button click
		$('.masonary-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$('.masonary-menu button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});

	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});


	if ($('.scene').length > 0) {
		$('.scene').parallax({
			scalarX: 5.0,
			scalarY: 5.0,
		});
	};

	////////////////////////////////////////////////////
	// 16. Wow Js
	new WOW().init();

	function tp_ecommerce() {
		$('.tp-cart-minus').on('click', function () {
			var $input = $(this).parent().find('input');
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});
	
		$('.tp-cart-plus').on('click', function () {
			var $input = $(this).parent().find('input');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
		});

		$("#slider-range").slider({
			range: true,
			min: 0,
			max: 500,
			values: [75, 300],
			slide: function (event, ui) {
				$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
			}
		});
		$("#amount").val("$" + $("#slider-range").slider("values", 0) +
			" - $" + $("#slider-range").slider("values", 1));
	
		

		$('.tp-checkout-payment-item label').on('click', function () {
			$(this).siblings('.tp-checkout-payment-desc').slideToggle(400);
			
		});
		

		$('.tp-color-variation-btn').on('click', function () {
			$(this).addClass('active').siblings().removeClass('active');
		});
		

		$('.tp-size-variation-btn').on('click', function () {
			$(this).addClass('active').siblings().removeClass('active');
		});
	
		////////////////////////////////////////////////////
		// 17. Show Login Toggle Js
		$('.tp-checkout-login-form-reveal-btn').on('click', function () {
			$('#tpReturnCustomerLoginForm').slideToggle(400);
		});
	
		////////////////////////////////////////////////////
		// 18. Show Coupon Toggle Js
		$('.tp-checkout-coupon-form-reveal-btn').on('click', function () {
			$('#tpCheckoutCouponForm').slideToggle(400);
		});
	
		////////////////////////////////////////////////////
		// 19. Create An Account Toggle Js
		$('#cbox').on('click', function () {
			$('#cbox_info').slideToggle(900);
		});
	
		////////////////////////////////////////////////////
		// 20. Shipping Box Toggle Js
		$('#ship-box').on('click', function () {
			$('#ship-box-info').slideToggle(1000);
		});
	}
	tp_ecommerce();

	////////////////////////////////////////////////////
	// 17. Counter Js
	new PureCounter();
	new PureCounter({
		filesizing: true,
		selector: ".filesizecount",
		pulse: 2,
	});

	////////////////////////////////////////////////////
	// 18. InHover Active Js
	$('.hover__active').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.hover__active').removeClass('active');
	});

	$('.activebsba').on("click", function () {
		$('#services-item-thumb').removeClass().addClass($(this).attr('rel'));
		$(this).addClass('active').siblings().removeClass('active');
	});


	////////////////////////////////////////////////////
	// 19. Line Animation Js
	if ($('#marker').length > 0) {
		function tp_tab_line(){
			var marker = document.querySelector('#marker');
			var item = document.querySelectorAll('.menu-style-3  > nav > ul > li');
			var itemActive = document.querySelector('.menu-style-3  > nav > ul > li.active');

			function indicator(e){
				marker.style.left = e.offsetLeft+"px";
				marker.style.width = e.offsetWidth+"px";
			}
				
		
			item.forEach(link => {
				link.addEventListener('mouseenter', (e)=>{
					indicator(e.target);
				});
				
			});

			
			var activeNav = $('.menu-style-3 > nav > ul > li.active');
			var activewidth = $(activeNav).width();
			var activePadLeft = parseFloat($(activeNav).css('padding-left'));
			var activePadRight = parseFloat($(activeNav).css('padding-right'));
			var totalWidth = activewidth + activePadLeft + activePadRight;
			
			var precedingAnchorWidth = anchorWidthCounter();
		
		
			$(marker).css('display','block');
			
			$(marker).css('width', totalWidth);
		
			function anchorWidthCounter() {
				var anchorWidths = 0;
				var a;
				var aWidth;
				var aPadLeft;
				var aPadRight;
				var aTotalWidth;
				$('.menu-style-3 > nav > ul > li').each(function(index, elem) {
					var activeTest = $(elem).hasClass('active');
					marker.style.left = elem.offsetLeft+"px";
					if(activeTest) {
					// Break out of the each function.
					return false;
					}
			
					a = $(elem).find('li');
					aWidth = a.width();
					aPadLeft = parseFloat(a.css('padding-left'));
					aPadRight = parseFloat(a.css('padding-right'));
					aTotalWidth = aWidth + aPadLeft + aPadRight;
			
					anchorWidths = anchorWidths + aTotalWidth;
	
				});
		
				return anchorWidths;
			}
		}
		tp_tab_line();
	}


	if ($('#productTabMarker').length > 0) {
		function tp_tab_line_2(){
			var marker = document.querySelector('#productTabMarker');
			var item = document.querySelectorAll('.tp-product-tab button');
			var itemActive = document.querySelector('.tp-product-tab .nav-link.active');

			// rtl settings
			var tp_rtl = localStorage.getItem('tp_dir');
			let rtl_setting = tp_rtl == 'rtl' ? 'right' : 'left';

			function indicator(e){
				marker.style.left = e.offsetLeft+"px";
				marker.style.width = e.offsetWidth+"px";
			}
				
		
			item.forEach(link => {
				link.addEventListener('click', (e)=>{
					indicator(e.target);
				});
			});
			
			var activeNav = $('.nav-link.active');
			var activewidth = $(activeNav).width();
			var activePadLeft = parseFloat($(activeNav).css('padding-left'));
			var activePadRight = parseFloat($(activeNav).css('padding-right'));
			var totalWidth = activewidth + activePadLeft + activePadRight;
			
			var precedingAnchorWidth = anchorWidthCounter();
		
		
			$(marker).css('display','block');
			
			$(marker).css('width', totalWidth);
		
			function anchorWidthCounter() {
				var anchorWidths = 0;
				var a;
				var aWidth;
				var aPadLeft;
				var aPadRight;
				var aTotalWidth;
				$('.tp-product-tab button').each(function(index, elem) {
					var activeTest = $(elem).hasClass('active');
					marker.style.left = elem.offsetLeft+"px";
					if(activeTest) {
					// Break out of the each function.
					return false;
					}
			
					a = $(elem).find('button');
					aWidth = a.width();
					aPadLeft = parseFloat(a.css('padding-left'));
					aPadRight = parseFloat(a.css('padding-right'));
					aTotalWidth = aWidth + aPadLeft + aPadRight;
			
					anchorWidths = anchorWidths + aTotalWidth;
	
				});
		
				return anchorWidths;
			}
		}
		tp_tab_line_2();
	}

	////////////////////////////////////////////////////
	// 20. Video Play Js
	var play = false;
	$('.tp-video-toggle-btn').on('click', function(){

		if(play === false){
			$('.tp-slider-video').addClass('full-width');
			$(this).addClass('hide');
			play = true;

			$('.tp-slider-video').find('video').each(function() {
				$(this).get(0).play();
			});
		}else{
			$('.tp-slider-video').removeClass('full-width');
			$(this).removeClass('hide');
			play = false;
			$('.tp-slider-video').find('video').each(function() {
				$(this).get(0).pause();
			});
		}

	});

	////////////////////////////////////////////////////
	// 21. Password Toggle Js
	if($('#password-show-toggle').length > 0){
		var btn = document.getElementById('password-show-toggle');
		
		btn.addEventListener('click', function(e){
			
			var inputType = document.getElementById('tp_password');
			var openEye = document.getElementById('open-eye');
			var closeEye = document.getElementById('close-eye');
	
			if (inputType.type === "password") {
				inputType.type = "text";
				openEye.style.display = 'block';
				closeEye.style.display = 'none';
			 } else {
				inputType.type = "password";
				openEye.style.display = 'none';
				closeEye.style.display = 'block';
			 }
		});
	}

	if ($('.tp-header-height').length > 0) {
		var headerHeight = document.querySelector(".tp-header-height");      
		var setHeaderHeight = headerHeight.offsetHeight;	
		
		$(".tp-header-height").each(function () {
			$(this).css({
				'height' : setHeaderHeight + 'px'
			});
		});
	  }
	// Jquery Appear raidal
	if (typeof ($.fn.knob) != 'undefined') {
		$('.knob').each(function () {
		var $this = $(this),
		knobVal = $this.attr('data-rel');

		$this.knob({
		'draw': function () {
			$(this.i).val(this.cv + '%')
		}
		});

		$this.appear(function () {
		$({
			value: 0
		}).animate({
			value: knobVal
		}, {
			duration: 2000,
			easing: 'swing',
			step: function () {
			$this.val(Math.ceil(this.value)).trigger('change');
			}
		});
		}, {
		accX: 0,
		accY: -150,
		});
	});
	}

	if($('.tp-main-menu-content').length && $('.tp-main-menu-mobile').length){
		let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
		let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
		mobileNavContainer.innerHTML = navContent;
	
	
		let arrow = $(".tp-main-menu-mobile .has-dropdown > a");
	
		arrow.each(function () {
			let self = $(this);
			let arrowBtn = document.createElement("BUTTON");
			arrowBtn.classList.add("dropdown-toggle-btn");
			arrowBtn.innerHTML = "<i class='fal fa-angle-right'></i>";
	
			self.append(function () {
			  return arrowBtn;
			});
	
			self.find("button").on("click", function (e) {
			  e.preventDefault();
			  let self = $(this);
			  self.toggleClass("dropdown-opened");
			  self.parent().toggleClass("expanded");
			  self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
			  self.parent().parent().children(".tp-submenu").slideToggle();
			});
	
		});
	}


})(jQuery);