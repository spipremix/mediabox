(function($){
	$(function(){
		// poser le cookie au callback de la box chargee
		var set_cookie = function() {
			$.cookie("modalsplash", box_settings.splash_url, { expires: 7 });
		}

		$.modalboxsplash = function(href, options) {
			$.fn.mediabox($.extend({
				href:href,
				onComplete:set_cookie,
				overlayClose:true,
				iframe: true,
				minHeight: box_settings_splash_width,
				minWidth: box_settings_splash_height
			},options));
		};
		// ouvrir la splash page si pas deja vue
		if ($.cookie("modalsplash") != box_settings.splash_url)
			$.modalboxsplash(box_settings.splash_url);

	});
})(jQuery);