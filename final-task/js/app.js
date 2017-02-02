$(function (){

  	if ( $(window).width() < 752 ){
	    $("#yt-logo-top").attr("src", "img/favicon.png");
	    $(".top-right").hide();	
		$(".side-nav").hide();
		$(".under-nav").css("padding-left", 0);
		$(".main-body").css("padding-left", 0);
		$("footer").css("padding-left", 32);
	} else {
	    $("#yt-logo-top").attr("src", "img/youtube-logo.png");
	    $(".top-right").show();	
	}


	$("#toggle").click( function(){
		if ( $(".side-nav").is(":visible") ){
			$(".side-nav").hide();
			$(".under-nav").css("padding-left", 0);
			$(".main-body").css("padding-left", 0);
			$("footer").css("padding-left", 32);
		} else if ( ( $(window).width() < 768 )) {
			$(".side-nav").show();
		} else {
			$(".side-nav").show();
			$(".under-nav").css("padding-left", 230);
			$(".main-body").css("padding-left", 230);
			$("footer").css("padding-left", 260);
		}
	});


	$( $(window).resize(function(){
		if ( $(window).width() < 752 ){
		    $("#yt-logo-top").attr("src", "img/favicon.png");
		    $(".top-right").hide();	
			$(".side-nav").hide();
			$(".under-nav").css("padding-left", 0);
			$(".main-body").css("padding-left", 0);
			$("footer").css("padding-left", 32);
		} else {
		    $("#yt-logo-top").attr("src", "img/youtube-logo.png");
		    $(".top-right").show();
			$(".side-nav").show();
			$(".under-nav").css("padding-left", 230);
			$(".main-body").css("padding-left", 230);
			$("footer").css("padding-left", 260);
		}
	}))
	// run test on initial page load
    //checkSize();
    // run test on resize of the window
    

    $(".video-link").on("click", function(){
    	localStorage.setItem("videoSrc", $(this).attr("data-video-src"));
    });

    $("#lang-toggle").on("click", function(){
		if ( $(".language-menu").is(":visible") ){
			$(".language-menu").fadeOut();
		} else {
			$(".language-menu").fadeIn();
		}
	});
})
