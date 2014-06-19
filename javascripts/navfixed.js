jQuery(document).ready(function($) {
	$(window).scroll(function() {
		var pos = $(window).scrollTop();
		var cur_width = $(window).width();
		if (pos > 55 && cur_width > 940) {
			$(".site_nav").css({
					"position": "fixed",
					"top":    "0",
					"width":    "940px",
					"margin-bottom":    "55px",
			});
			$("#aftermenuspace").css({
					"height":    "55px",
			});
		} else {
			$(".site_nav").css({
					"position": "relative",
					"margin-bottom":    "0",
					"width":    "100%",
			});
			$("#aftermenuspace").css({
					"height":    "0",
			});
		}
	});
});