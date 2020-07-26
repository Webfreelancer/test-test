$(document).ready(function() {
	$('.tab-item').click(function(e) {
		e.preventDefault();
		$(this)
			.parent()
			.find('.tab-item')
			.removeClass('active');
		$(this).addClass('active');

		var dataItem = $(this).attr('data-item');
		$(this)
			.closest('.white-wrap')
			.find('.tab-content-first')
			.removeClass('active');
		$(this)
			.closest('.white-wrap')
			.find('.tab-content-first[data-item="' + dataItem + '"]')
			.addClass('active');
	});

	// $('input[name="phone"]').mask('+375 (99) 999-99-99');

	// $('input[name="phone"]').focusout(function() {
	// 	if ($(this).val() == '+375 (___) ___-__-__') {
	// 		$(this).val('');
	// 	}
	// 	return false;
	// });

	$('.form-default').submit(function() {
		var el = $(this);
		var formPrice = $(this).attr('id');
		var link = document.createElement('a');
		link.setAttribute('href', 'price.pdf');
		link.setAttribute('download', 'price');

		$.ajax({
			type: 'POST',
			url: 'mail.php',
			data: $(this).serialize(),

			success: function(data) {
				if (formPrice === 'form-1' || formPrice === 'form-3' || formPrice === 'form-5') {
					setTimeout(function() {
						link.click();
					}, 1000);
				}
			},
		}).done(function() {
			$('.hide-thank-page').show();
			el.find('.btn').addClass('hide-before');
			setTimeout(function() {
				$('.hide-thank-page').hide();
				el.find('.btn').removeClass('hide-before');
			}, 3000);
		});
		return false;
	});

	$('.formsfile').submit(function() {
		var el = $(this);

		$.ajax({
			type: 'POST',
			url: 'mailfile.php',
			data: new FormData(this),
			processData: false,
			contentType: false,
		}).done(function() {
			$(this)
				.find('input')
				.val('');
			$('.formsfile').trigger('reset');

			$('.hide-thank-page').show();
			el.find('.btn').addClass('hide-before');
			setTimeout(function() {
				$('.hide-thank-page').hide();
				el.find('.btn').removeClass('hide-before');
			}, 3000);
		});
		return false;
	});

	$('#form-1 a.btn').on('click', function() {
		$('#form-1 input.btn').trigger('click');
		return false;
	});

	$('#form-2 a.btn').on('click', function() {
		$('#form-2 input.btn').trigger('click');
		return false;
	});

	$('#form-3 a.btn').on('click', function() {
		$('#form-3 input.btn').trigger('click');
		return false;
	});

	$('#form-4 a.btn').on('click', function() {
		$('#form-4 input.btn').trigger('click');
		return false;
	});

	$('#form-5 a.btn').on('click', function() {
		$('#form-5 input.btn').trigger('click');
		return false;
	});

	$('#form-6 a.btn').on('click', function() {
		$('#form-6 input.btn').trigger('click');
		return false;
	});

	$('#form-7 a.btn').on('click', function() {
		$('#form-7 input.btn').trigger('click');
		return false;
	});

	$('.btn-1').click(function() {
		$('#popup-form-1').arcticmodal();
		return false;
	});

	$('.js-btn-2').click(function() {
		$('#popup-form-2').arcticmodal();
		return false;
	});

	$('.btn-3').click(function() {
		$('#popup-form-3').arcticmodal();
		return false;
	});

	$('.btn-4').click(function() {
		$('#popup-form-4').arcticmodal();
		return false;
	});

	$('.btn-5').click(function() {
		$('#popup-form-5').arcticmodal();
		return false;
	});

	$('.btn-video-wrap').click(function() {
		$('#popup-video').arcticmodal();
		return false;
	});

	$('.btn-comment').click(function() {
		$('#popup-video').arcticmodal();
		return false;
	});

	$(document).ready(function() {
		$('.fancybox').fancybox({
			openEffect: 'none',
			closeEffect: 'none',
		});
	});
});

var $status = $('.pagingInfo');
var $slickElement = $('.main-slider-wrap');
var $statusSec = $('.pagingInfoSec');

$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
	//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
	var i = (currentSlide ? currentSlide : 0) + 1;
	$status.text(i);
	$statusSec.text(slick.slideCount);
});

$slickElement.slick({
	slidesToShow: 1,
	slide: '.main-slider-item',
	arrows: false,
	dots: true,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
});

$(document).ready(function() {
	$('.false-input').click(function() {
		$('.real-input-file').click();
	});

	$('.real-input-file').change(function() {
		$('.false-input').text($('.real-input-file')[0].files[0].name);
	});

	var nam = 1;

	var elTop = $('#section-1 h3').offset().top - 30;
	$(window).scroll(function() {
		if (nam === 1) {
			var the_top = $(document).scrollTop();
			if (the_top >= elTop) {
				$('#tab-2.tab-content-first').addClass('active');
				$('#tab-1.tab-content-first').removeClass('active');
				$('#section-1 .tab-item').removeClass('active');
				$('#section-1 .tab-item[data-item="2"]').addClass('active');
				nam = 2;
			} else {
				$('#tab-2.tab-content-first').removeClass('active');
				$('#tab-1.tab-content-first').addClass('active');
				$('#section-1 .tab-item').removeClass('active');
				$('#section-1 .tab-item[data-item="1"]').addClass('active');
			}
		}
	});
});

$('.top-navigation a').bind('click', function(e) {
	var anchor = $(this);
	$('html, body')
		.stop()
		.animate(
			{
				scrollTop: $(anchor.attr('href')).offset().top - 90,
			},
			1000
		);
	e.preventDefault();
});

$('.js-menu-toggle').click(function(e) {
	e.preventDefault();
	$('body').toggleClass('navigation-open');
});

$('.top-navigation a').click(function() {
	$('body').removeClass('navigation-open');
});
