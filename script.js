$(document).ready(function() {
	$("#colors a").click(function() {
		$("body").css('background', $(this).css('background-color'));
	})

	function resize() {
		if($(window).height() >= 600)
		{
			$("#page").height($(window).height() - ($("#bottombar").height() + $("#topbar").height()));
		}
		$("#footClamp").css("padding-bottom", ($(window).height()/2));
		$("#headClamp").css("padding-top", ($(window).height()/2));
	}

	resize();
	$(window).resize(function() {
		resize();
	})

	var pages = ["#home", "#portfolio", "#experiments", "#other"];

	function clamp(page) {
		$(".clamp").slideDown('slow', function() {
			hidePages(page); 
		}).delay(200);
		$(".clamp").slideUp('slow', function() {
		});

	}

	function hidePages(page) {
		$("#home").hide();
		$("#portfolio").hide();
		$("#experiments").hide();
		$("#other").hide();
		$(page).show();
	}

	function arrow(page) {
		$("#arrow").animate({"left" : $(page).position()}, "slow");
	}

	/* Check if on homepage on load */
	var docURL = String(document.URL);
	var page = docURL.substr(docURL.indexOf('#'));
	hidePages(page);
	clamp(page);
	$("#contact").hide();

	/* Hide other pages when given page button clicked */
	$("a[href^='#']").click(function() {
		var buttonURL = String(this);
		var page = buttonURL.substr(buttonURL.indexOf('#'));
		if ($.inArray(page, pages) !== -1) {
			clamp(page);
			arrow("#contact");
		}
	})

	/* Show contact form */
	$("#navbar .contact").click(function() {
		if($("#contact").is(":visible")) {
			$("#contact").hide('slide', {direction: 'up'}, 'fast');
		}
		else {
			$("#contact").show('slide', {direction: 'up'}, 'fast');
			$("#contact").effect('bounce', {times: 1, direction: 'down', distance: 20}, 300);
		}
	});

	/* Hide contact form when user clicks outside it */
	$(document).mousedown(function (e) {
		var container = $("#contact");

		if(container.has(e.target).length === 0)
		{
			$("#contact").hide('slide', {direction: 'up'}, 'slow');
		}
	})
	
})