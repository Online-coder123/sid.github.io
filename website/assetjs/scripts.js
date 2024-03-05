$(function() {

	// scroll body to 0px on click
    $('.back-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
	
	$("input, textarea").focus(function() {
		$(this).addClass("curFocus");
	});
	$("input, textarea").blur(function() {
		$(this).removeClass("curFocus");
	});
	
    function windowSize() {
		var h = $(window).height() - 450;
		$('.login-wrap').css({ "height" : h });
    };
	$(window).resize(function() {windowSize();});
	windowSize();
	
	
    $(".menu-button").click(function() {
        $(".menu").switchClass("menu", "menu-show", 600);
        $(".menu-show").switchClass("menu-show", "menu", 1600);
        return false;
    });

    $(".js-menu-trigger").on("click", function() {
        $(".jsa_content-wrap").toggleClass("jsa_mobile-nav-open");
    });

});
