
$(function (){
	
	//$(".side-nav").hide();
	//$(".under-nav").css("padding-left", 0);
	//$(".main-body").css("padding-left", 0);
	//$("footer").css("padding-left", 32);
	$("iframe").attr("src", "https://www.youtube.com/embed/" + + "?controls=1&autoplay=1");

	$("#toggle").click( function(){
		if ( $(".side-nav").is(":visible") ){
			$(".side-nav").hide();
		} else {
			$(".side-nav").show();
		}
	});

})
/*
var localkey = localStorage.namevideo;
var listOfVideos = {
	"AlanWalker-Alone" : "1-xGerv5FOk",
	"Fight Night Denver" : "B7VSlGBg5KQ"
}

var index = -1;
for(var i = 0, len = listOfVideos.length; i < len; i++) {
    if (listOfVideos[i] === localkey) {
        index = i;
        break;
    }
}*/
/*

myArray.map(x => x.hello).indexOf('stevie')

myArray.findIndex(x => x.hello === 'stevie')*/