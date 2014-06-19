(function($){

	"use strict";

	$('#site_nav').find('a[href="#about_me"]').click( function() { window.location.href = SITE_URL; return false; });
	$('#site_nav').find('a[href="#my_expertise"]').click( function() { window.location.href = SITE_URL + '/#my_expertise_sec'; return false; });
	$('#site_nav').find('a[href="#experience"]').click( function() { window.location.href = SITE_URL + '/#experience_sec'; return false; });
	$('#site_nav').find('a[href="#education"]').click( function() { window.location.href = SITE_URL + '/#education_sec'; return false; });
	$('#site_nav').find('a[href="#portfolio"]').click( function() { window.location.href = SITE_URL + '/#portfolio_sec'; return false; });
	$('#site_nav').find('a[href="#blog"]').click( function() { window.location.href = SITE_URL + '/#blog_sec'; return false; })

	// element.find('a[href="#contact"]').click( function() { window.location.href = SITE_URL + '/#contact';return false; });
	
})(jQuery);