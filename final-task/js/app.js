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

	if ( location.pathname == "/youtube-mockup/final-task/index.html" || location.pathname == "/youtube-mockup/final-task/index.html#" || location.pathname == "/youtube-mockup/final-task/" || location.pathname == "/youtube-mockup/final-task/#") {
		$(".nav-sections a#main-page-link").css("border-bottom", "3px solid #D61212");
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
    

    $(".video-name").on("click", function(){
    	localStorage.setItem("nameVideo", $(this).text());
    	;
    	localStorage.setItem("nameCut", $(this).text().replace(/\s+/g, ''));
    });

})
