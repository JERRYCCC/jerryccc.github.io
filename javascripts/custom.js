(function($){

	"use strict";

	$('head').append("<style> .site_header h1:before, .site_header h1:after { width:"+ line_width +"% !important; }; </style>");
	$('head').append("<style> @media only screen and (max-width: 870px) { .site_header h1:before, .site_header h1:after { width:"+ (parseFloat(line_width) / 1.4) +"% !important; } }; </style>");

	//  Additional Description
	if(words_more_check === "true") {
		$(".site_header h3").hide();
		$('head').append("<style>" +
				".site_header { padding-bottom: 15px !important; } .site_header h2 { margin-bottom: 25px !important; }" +
				"@media only screen and (max-width: 767px) { .site_header { padding-bottom: 0px !important; } .site_header h2 { margin-bottom: 25px !important; } }" +
				"@media only screen and (max-width: 630px) { .site_header { padding-bottom: 0px !important; } .site_header h2 { margin-bottom: 25px !important; } }" +
				"@media only screen and (max-width: 480px) { .site_header { padding-bottom: 0px !important; } .site_header h2 { margin-bottom: 17px !important; } }" +
				"</style>");
	}

	//  Profil image
	if(my_picture_display === "true") {
		$(".circle").hide();
	} else {
		$(".circle").show();
	}

	// Contact Info
	if(contact_info_display === "true") {
		$(".cont_info").hide();
		$(".about_me article").removeClass("span6").addClass("span9 about_me_right");
	} else {
		$(".cont_info").show();
		$(".about_me article").removeClass("span9 about_me_right").addClass("span6");
	}
	if(smaller_email_font === "true") {
		$("#emailfont").css({ "font-size" : "1.1em" });
	} else {
		$("#emailfont").css({ "font-size" : "1.4em" });
	}

	//  Soc Icons
	if(contact_info_facebook_check === 'true') { $("#facebook_link").hide(); } else { $("#facebook_link").show(); }
	if(contact_info_twitter_check === 'true') { $("#twitter_link").hide(); } else { $("#twitter_link").show(); }
	if(contact_info_linkedin_check === 'true') { $("#linkedin_link").hide(); } else { $("#linkedin_link").show(); }
	if(contact_info_googleplus_check === 'true') { $("#googleplus_link").hide(); } else { $("#googleplus_link").show(); }
	if(contact_info_rss_check === 'true') { $("#rss_link").hide(); } else { $("#rss_link").show(); }

	if(contact_info_facebook_check === 'true' && contact_info_twitter_check === 'true' &&
		contact_info_linkedin_check === 'true' && contact_info_googleplus_check === 'true' &&
		contact_info_rss_check === 'true') {
			$(".info").css({"margin-top": "5px"});
	}

	//  Skills
	if(my_expertise_display === "true") {
		$(".skill_level").hide(); $(".my_expertise article").removeClass("span4").addClass('span9');
	} else {
		$(".skill_level").show(); $(".my_expertise article").removeClass("span9").addClass('span4');
	}

	if( document.cookie.indexOf('device_pixel_ratio') === -1 && 'devicePixelRatio' in window && window.devicePixelRatio === 2 ) {

			var date = new Date();
			date.setTime( date.getTime() + 3600000 );

			document.cookie = 'device_pixel_ratio=' + window.devicePixelRatio + ';' +  ' expires=' + date.toUTCString() +'; path=/';
			//if cookies are not blocked, reload the page
			if(document.cookie.indexOf('device_pixel_ratio') !== -1) {
				window.location.reload();
			}
		}

	$(window).load(function() {
		$('.bxslider').bxSlider({
			controls: false,
			auto: true,
			pause: 25000,
			autoHover: true
		});
	});

	$(document).ready(function() {

		$('.comment_form').submit(ajaxSubmit);

		function ajaxSubmit() {

			if ( $( '.comment_form' ).parsley('validate') ) {
				
				var form_name            = $("#form_name").val();
				var form_email           = $("#form_email").val();
				var form_message         = $("#form_message").val();
				var send_message_receive = $("#send_message_receive").val();
				
				$.ajax({
					type: "POST",
					url: SITE_URL + "/wp-admin/admin-ajax.php",
					data: {"action" : "mail_action", "name": form_name, "email": form_email, "message": form_message, "recipient_mail": send_message_receive},
					success: function(data) {
						if (data) {
							alert(data);
						} else {
							alert('An error occured');
						}
					},
					error: function(jqXHR, exception) {
						if (jqXHR.status === 0) {
							alert('Not connect.\n Verify Network.');
						} else if (jqXHR.status == 404) {
							alert('Requested page not found. [404]');
						} else if (jqXHR.status == 500) {
							alert('Internal Server Error [500].');
						} else if (exception === 'parsererror') {
							alert('Requested JSON parse failed.');
						} else if (exception === 'timeout') {
							alert('Time out error.');
						} else if (exception === 'abort') {
							alert('Ajax request aborted.');
						} else {
							alert('Uncaught Error.\n' + jqXHR.responseText);
						}
					}
				});

			}

			return false;

		}

		switch ($('#site_nav ul li').length) {

			case 7:
			$('head').append("<style> @media only screen and (max-width: 630px) { .site_nav { height: 184px !important; } } </style>");
			break;

			case 6:
			$('head').append("<style> @media only screen and (max-width: 630px) { .site_nav { height: 159px !important; } } </style>");
			break;

			case 5:
			$('head').append("<style> @media only screen and (max-width: 630px) { .site_nav { height: 134px !important; } } </style>");
			break;

			case 4:
			$('head').append("<style> @media only screen and (max-width: 630px) { .site_nav { height: 109px !important; } } </style>");
			break;

			case 3:
			$('head').append("<style> @media only screen and (max-width: 630px) { .site_nav { height: 84px !important; } } </style>");
			break;

			case 2:
			$('head').append("<style> @media only screen and (max-width: 630px) { .site_nav { height: 59px !important; } } </style>");
			break;

			case 1:
			$('head').append("<style> @media only screen and (max-width: 630px) { .site_nav { height: 34px !important; } } </style>");
			break;

			default:
			// statements_def
			break;

		}

		$("head").append("<!--[if lt IE 9]><style type=\"text/css\">.site_nav { border-bottom: 1px solid #d4d4d4; }</style><![endif]-->");

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
			FastClick.attach(document.body);
		}

		// Form input focus
		$('.comment_form input, .comment_form textarea, #respond input[type=text], #respond textarea').focus(function () { 
			$(this).css({"-webkit-box-shadow": "0px 0px 0px rgba(0, 0, 0, 0)", "-moz-box-shadow": "0px 0px 0px rgba(0, 0, 0, 0)", "box-shadow": "0px 0px 0px rgba(0, 0, 0, 0)", "border": "1px solid #999"}); 
		});

		$('.comment_form input, .comment_form textarea, #respond input[type=text], #respond textarea').blur(function () { 
			$(this).css({"-webkit-box-shadow": "0px 0px 0px rgba(0, 0, 0, 0)", "-moz-box-shadow": "0px 0px 0px rgba(0, 0, 0, 0)", "box-shadow": "0px 0px 0px rgba(0, 0, 0, 0)", "border": "1px solid #e0e0e0"}); 
		});

		// Scrollup button
		$(window).scroll(function(){
			if ($(this).scrollTop() > 400) {
				$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		}); 

		$('.scrollup').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});

		// Show line breaks depending on the width
		$(window).on('load resize', function () {
			var current_width = $(window).width();
			if ( current_width < 767 ) {
				$("br").hide();
			} else {
				$("br").show();
			}
		});

		// Cache selectors
		var lastId, topMenu = $("#site_nav");
		var menuItems = topMenu.find("a"),
			topMenuHeight,
			scrollItems;

		if ( $(window).width() > 940 ) {
			topMenuHeight = topMenu.outerHeight()+40;

			// Anchors corresponding to menu items
			scrollItems = menuItems.map(function(){
				var item = $($(this).attr("href"));
				if (item.length) { return item; }
			});
		} else {
			topMenuHeight = topMenu.outerHeight()-140,

			// Anchors corresponding to menu items
			scrollItems = menuItems.map(function(){
				var item = $($(this).attr("href"));
				if (item.length) { 
					return item; 
				}
			});
		}

		// Bind click handler to menu items so we can get a fancy scroll animation
		menuItems.click(function(e) {
			var href = $(this).attr("href"),
				offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
			$('html, body').stop().animate({ 
				scrollTop: offsetTop
			}, 300);
			e.preventDefault();
		});

		// Bind to scroll
		$(window).scroll(function() {
			// Get container scroll position
			var fromTop = $(this).scrollTop()+topMenuHeight;

			// Get id of current scroll item
			var cur = scrollItems.map(function() {
				if ($(this).offset().top < fromTop) {
					return this;
				}
			});

			// Get the id of the current element
			cur = cur[cur.length-1];
			var id = cur && cur.length ? cur[0].id : "";

			if (lastId !== id) {
				lastId = id;

				// Set/remove active class
				menuItems
				.parent().removeClass("active")
				.end().filter("[href=#"+id+"]").parent().addClass("active");
			}
		});

	});

})(jQuery);