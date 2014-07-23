decrement = function() {
	clearTimeout( ct );
	time--;
	$("#memorize span").text(time);
	if( time > 0 ) {
		ct = setTimeout( decrement, 1000 );
	} else {
		$('.name').delay(1000).fadeOut('fast',function(){
			$('.name_field').delay(100).fadeIn();	
		});
		$('#memorize').delay(1000).fadeOut('fast',function(){
			$('#reenter').delay(100).fadeIn();
		});
	}
}

var current_animation = 0;
var scrollPercent = 0, lastScrollPercentage = 0;
var animating = false;
var at;
var ct, time = 3;
$(document).ready(function() {
	function countChecks() {
		var numItems = $('.checked').length;
		
		if (numItems == 6) {
			$('#finish_challenges').hide();
			$('#challenges_finished').show();
			$('h2').removeClass('finish_challenges');

			_gaq.push(['_trackEvent', 'main', 'completed', "all_challenges"]);
		}
	};
	
	countChecks();

	

	$(".itemmark").mouseenter(function() {

		var section = $(this).parents('section');

		if( Math.round(Math.random()) ) {
			if( $(this).css("top") == "26px" ) {
				$(this).css({
					top: $(section).height() - 80
				});
			} else {
				$(this).css({
					top: 26
				});
			}
		} else {
			if( $(this).css("right") == "37px" ) {
				$(this).css({
					right: $(section).width() - 59
				});
			} else {
				$(this).css({
					right: 37
				});
			}
		}

	});
	
	$('h2').on('click', function() {
		_gaq.push(['_trackEvent', 'main', 'opened_header', $(this).parents('section').attr("id")]);

		if( !$(this).parents('section').hasClass("current") ) {

			$('.hide').show();

			$('.content').removeClass('open');
			var current = $(".current");
			$(".current").removeClass("current");
			$(this).parents('section').addClass('current').removeClass("inactive");
			var header = $(this);
			$('html').scrollTo(header, 500, {
				onAfter: function(){
					$(current).addClass("inactive");
				}
			});

			if( $(this).parents('section').attr("id") != "submission" || $('.checked').length != 6 ) {
				setTimeout(function(){
					$('.current .content').addClass('open');
				}, 200);
			}
		} else {
			
			$('.hide').show();

			$('.content').removeClass('open');
			var current = $(".current");
			$(".current").removeClass("current").addClass("inactive");
		}

	});
	
	$('.start_button').on('click', function(){
		$(this).siblings('.instructions').fadeOut(500);
		$(this).fadeOut(500);
		$(this).siblings('.game').delay(600).fadeIn(500);
		$(this).siblings('.next_button').delay(600).fadeIn(500);
	});

	
	

	/* PENCIL GAME */
	$('.color').on('mouseover', function(){
		$(this).addClass('active');
	});
	
	$('.color').on('mouseout', function(){
		$(this).removeClass('active');
	});
		
	$('.sortable').sortable();

	$("#introduction").css({
		top: $(window).height()/2 - $("#introduction").height()/2,
		left: $(window).width()/2 - $("#introduction").width()/2
	});

	$(window).resize(function(){
		$("#introduction").css({
			top: $(window).height()/2 - $("#introduction").height()/2,
			left: $(window).width()/2 - $("#introduction").width()/2
		});
	});

	$('#introduction .arrow').on('click', function(){
		switch (current_animation) {
		case 0:
			$("#introduction .arrow").hide();

			$("#introduction .first").animate({
				top: 190
			});
			$("#introduction .second").animate({
				top: 247,
				opacity: 1
			});

			$("#introduction .arrow").delay(200).fadeIn('slow');

			break;
		case 1:
			$("#introduction .arrow").hide();

			$("#introduction .first").animate({
				top: 0,
				opacity: 0
			});
			$("#introduction .second").animate({
				top: 50,
				opacity: 0
			});
			$("#introduction .third").animate({
				top: 180,
				opacity: 1
			});
			
			$("#introduction .begin").delay(220).fadeIn('slow');

			break;
		}

		current_animation++;
	});

	$('.begin').on('click', function(){
		$("body,html").scrollTop(0);

		_gaq.push(['_trackEvent', 'main', 'click', "begin"]);

		$("#sotd").fadeOut();

		$("#introduction").css("position","relative").animate({
			opacity: 0
		}, function(){
			$("body").css({
				height: 1910
			});

			$('.item').show();

			$("#introduction").animate({
				height: 0
			}, function(){
				$("body").css({
					backgroundColor: "#404040"
				}).addClass("loaded");
			});
		});
		
	});

	setTimeout( function(){
		window.scrollTo(0, 0);
		$(window).scroll(function() {
			var s = $(window).scrollTop(),
			        d = $(document).height(),
			        c = $(window).height();
			        scrollPercent = (s / (d-c)) * 100;

			//console.log( Math.abs( scrollPercent - lastScrollPercentage) );

			if( !animating ) {
				if( scrollPercent > lastScrollPercentage && Math.abs( scrollPercent - lastScrollPercentage) > 7 ) {

					if( current_animation == 0 ) {
						animating = true;
						current_animation++;
						lastScrollPercentage = scrollPercent;
						$("#introduction .arrow").hide();

						$("#introduction .first").animate({
							top: 190
						});
						$("#introduction .second").animate({
							top: 247,
							opacity: 1
						}, function(){
							at = setTimeout( function(){
								animating = false;
							}, 1000 );
						});

						$("#introduction .arrow").delay(200).fadeIn('slow');


					} else if( current_animation == 1 ) {
						animating = true;
						current_animation++;
						lastScrollPercentage = scrollPercent;
						$("#introduction .arrow").hide();

						$("#introduction .first").animate({
							top: 0,
							opacity: 0
						});
						$("#introduction .second").animate({
							top: 50,
							opacity: 0
						});
						$("#introduction .third").animate({
							top: 180,
							opacity: 1
						}, function(){
							at = setTimeout( function(){
								animating = false;
							}, 1000 );
						});
						
						$("#introduction .begin").delay(220).fadeIn('slow');
					}
				}
			}
		});
	}, 250);

	$("#challenges_finished form").submit(function() {
		var data = "firstName=" + $("#first_input").val() + "&lastName=" + $("#last_input").val() + "&email=" + $("#email_input").val() + "&url=" + $("#url_input").val();

		_gaq.push(['_trackEvent', 'main', 'click', "applied"]);

		$.ajax({
		     type: "POST",
		     url: "mail.php",
		     data: data,
		     success: function(phpReturnResult){
		        console.log('Success: ' + phpReturnResult);
		        $("#challenges_finished form").hide();
		        $("#challenges_finished .response").show();
		     },
		     error: function(errormessage) {
		          console.log('Sendmail failed possibly php script: ' + errormessage);
		     }
		});

		return false;
	});
});
