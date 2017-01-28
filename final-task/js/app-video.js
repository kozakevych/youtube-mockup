
$(function (){
	
	//$(".side-nav").hide();
	//$(".under-nav").css("padding-left", 0);
	//$(".main-body").css("padding-left", 0);
	//$("footer").css("padding-left", 32);

	$("#toggle").click( function(){
		if ( $(".side-nav").is(":visible") ){
			$(".side-nav").hide();
		} else {
			$(".side-nav").show();
		}
	});

})
