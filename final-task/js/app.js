$(function (){

	$("#toggle").click( function(){
		if ( $(".side-nav").is(":visible") ){
			$(".side-nav").hide();
			$(".under-nav").css("padding-left", 0);
			$(".main-body").css("padding-left", 0);
			$("footer").css("padding-left", 32);
		} else {
			$(".side-nav").show();
			$(".under-nav").css("padding-left", 230);
			$(".main-body").css("padding-left", 230);
			$("footer").css("padding-left", 260);
		}
	});

})
