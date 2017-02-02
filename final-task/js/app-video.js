
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


  	if ( $(window).width() < 752 ){
	    $("#yt-logo-top").attr("src", "img/favicon.png");
	    $("#video-frame").attr("width","560");
	    $("#video-frame").attr("height","315");
	    $(".top-right").hide();
	} else {
	    $("#yt-logo-top").attr("src", "img/youtube-logo.png");
	    $(".top-right").show();	
	}



	$( $(window).resize(function(){
		if ( $(window).width() < 752 ){
		    $("#yt-logo-top").attr("src", "img/favicon.png");
		    $("#video-frame").attr("width","560");
		    $(".top-right").hide();
		} else {
		    $("#yt-logo-top").attr("src", "img/youtube-logo.png");
		    $(".top-right").show();
		    $("#video-frame").attr("height","315");
		    $("#video-frame").attr("width","853");
		    $("#video-frame").attr("height","480");
		}
	}))


})


//640 360
//560 315