
$(function (){
	
	if (localStorage.videoSrc == "undefined"){
		localStorage.videoSrc = "B7VSlGBg5KQ";
	}

	var videoKey = localStorage.videoSrc;
	$("iframe").attr("src", "https://www.youtube.com/embed/" + videoKey + "?controls=1&autoplay=1");

	$("#toggle").click( function(){
		if ( $(".side-nav").is(":visible") ){
			$(".side-nav").hide();
		} else {
			$(".side-nav").show();
		}
	});

	//for lower than 862 px
  	if ( $(window).width() < 862 ){
	    $("#yt-logo-top").attr("src", "img/favicon.png");
	    $("#video-frame").attr("width","560");
	    $("#video-frame").attr("height","315");
	    $(".top-right").hide();
	} else {
	    $("#yt-logo-top").attr("src", "img/youtube-logo.png");
	    $("#video-frame").attr("width","853");
	    $("#video-frame").attr("height","480");
	    $(".top-right").show();	
	}

	$( $(window).resize(function(){
		if ( $(window).width() < 862 ){
		    $("#yt-logo-top").attr("src", "img/favicon.png");
		    $("#video-frame").attr("width","560");
		    $("#video-frame").attr("height","315");
		    $(".top-right").hide();
		} else {
		    $("#yt-logo-top").attr("src", "img/youtube-logo.png");
		    $("#video-frame").attr("width","853");
		    $("#video-frame").attr("height","480");
		    $(".top-right").show();
		}
	}))


	//for lower than 450 px
	if ( $(window).width() < 450 ){
	    $("#video-frame").attr("width","426");
	    $("#video-frame").attr("height","240");
	} else if ( $(window).width() < 862 ){	
	    $("#video-frame").attr("width","560");
	    $("#video-frame").attr("height","315");
	}

	$( $(window).resize(function(){
		if ( $(window).width() < 450 ){
		    $("#video-frame").attr("width","426");
	    	$("#video-frame").attr("height","240");
		} else if ( $(window).width() < 862 ){
		    $("#video-frame").attr("width","560");
		    $("#video-frame").attr("height","315");
		}
	}))

	//for lower than 400 px
	if ( $(window).width() < 400 ){
	    $("#video-frame").attr("width","300");
	    $("#video-frame").attr("height","169");
	} else if ( $(window).width() < 450 ){	
	    $("#video-frame").attr("width","426");
	    $("#video-frame").attr("height","240");
	}

	$( $(window).resize(function(){
		if ( $(window).width() < 400 ){
		    $("#video-frame").attr("width","300");
	    	$("#video-frame").attr("height","169");
		} else if ( $(window).width() < 450 ){
		    $("#video-frame").attr("width","426");
		    $("#video-frame").attr("height","240");
		}
	}))

	
    $(".video-link").on("click", function(){
    	localStorage.setItem("videoSrc", $(this).attr("data-video-src"));
    });

    $("#lang-toggle").on("click", function(){
		if ( $(".language-menu").is(":visible") ){
			$(".language-menu").fadeOut();
		} else if ( $(".location-menu").is(":visible") ){
			$(".location-menu").fadeOut();
			$(".language-menu").fadeIn();
		} else {
			$(".language-menu").fadeIn();
		}
	});

	 $("#location-toggle").on("click", function(){
		if ( $(".location-menu").is(":visible") ){
			$(".location-menu").fadeOut();
		} else if ( $(".language-menu").is(":visible") ){
			$(".language-menu").fadeOut();
			$(".location-menu").fadeIn();
		} else {
			$(".location-menu").fadeIn();
		}
	});
})

