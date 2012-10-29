$(document).ready(function() {
	$("#navbar a").click(function() {
		var buttonURL = String(this);
		var page = buttonURL.substr(buttonURL.indexOf('#'));
		bgColor(this);
		tabShadow(this);
		hidePages(page);
	});


	function resize() {
		if($(window).height() >= 600)
		{
			$("#page").height($(window).height() - ($("#bottombar").height() + $("#topbar").height()));
		}
	}

	resize();
	$(window).resize(function() {
		resize();
	})

	var pages = ["#home", "#portfolio", "#experiments", "#other", "#contact"];

	function hidePages(page) {
		$("#home").hide();
		$("#portfolio").hide();
		$("#experiments").hide();
		$("#other").hide();
		$("#contact").hide();
		$(page).show();
	}

	function bgColor(page) {
		var color = $(page).css('background-color');
		$("body").css('background', color);
		$("body").css('box-shadow', '0px -1px 0px');
	}

	function tabShadow(page) {
		$(page).css('box-shadow', '-3px 0px 5px -3px #111, inset 0 0 0 #111');
		$("#navbar").css('box-shadow', 'inset 2px -2px 5px -2px #111');
	}

	/* Check if on homepage on load */
	var docURL = String(document.URL);
	var page = docURL.substr(docURL.indexOf('#'));
	hidePages(page);
	$("#contact").hide();
})