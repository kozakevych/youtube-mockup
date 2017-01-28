$(function (){

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

	// run test on initial page load
    //checkSize();
    // run test on resize of the window
    $(window).resize(function(){
	  	if ( $(window).width() < 752 ){
		    $(".yt-logo").attr("src", "img/favicon.png");
		    $(".top-right").hide();	
			$(".side-nav").hide();
			$(".under-nav").css("padding-left", 0);
			$(".main-body").css("padding-left", 0);
			$("footer").css("padding-left", 32);
		} else {
		    $(".yt-logo").attr("src", "img/youtube-logo.png");
		    $(".top-right").show();	
		}
	});

})
