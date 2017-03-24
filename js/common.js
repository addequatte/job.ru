$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	$('.course-block').on('click',function () {
        $('.course-block').not(this).removeClass('current');
		$(this).addClass('current');
		$('.blur-back').remove();
        $('.s_main').prepend('<img class="blur-back" src="'+$(this).css('background-image').substr(5,$(this).css('background-image').length - 2)+'">');
        $('.info-block').remove();
        $('.section-back').prepend('<div class="info-block">'+$(this).attr('data-content')+'</div>');
    });
	var num_slide = 0;
	$('.adv-left').on('click',function () {
		$('.adv-slide:eq('+num_slide+')').addClass('hidden');
		if(num_slide == 0) num_slide = $('.adv-slide').length - 1;
		else num_slide--;
        $('.adv-slide:eq('+num_slide+')').removeClass('hidden');
    });
    $('.adv-right').on('click',function () {
        $('.adv-slide:eq('+num_slide+')').addClass('hidden');
        if(num_slide == $('.adv-slide').length - 1) num_slide = 0;
        else num_slide++;
        $('.adv-slide:eq('+num_slide+')').removeClass('hidden');
    });
    for (i=1;i<29;i++){
        $('.our-study-photo').append('<div class="photo-block" style=\'background-image: url("img/3101 ('+i+').jpg")\'></div>');
	}
});
