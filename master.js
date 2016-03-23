$(document).ready(function(){
	$(".begin-content").niceScroll({cursorcolor:"#333"});


	$(".begin-content").first().css({"display":"block"});



	$("nav ul li a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
        var tab = $(this).attr("href");
        $(".begin-content").not(tab).css("display", "none");
        $(tab).slideDown();
    });

});