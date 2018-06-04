
$(document).ready(function(){
  $('.slider').slick();
});

$(".right li").click(function(event) {
	
	var selected = event.target;
	var chosenIndex = $(selected).attr("class");

	if (chosenIndex == "caqueta") {
		$(".slider")[0].slick.slickGoTo(0);
	}
	if (chosenIndex == "mitu") {
		$(".slider")[0].slick.slickGoTo(1);
	}
	if (chosenIndex == "pescadito") {
		$(".slider")[0].slick.slickGoTo(2);
	}

	$('html, body').animate({
                    scrollTop: $(".slider").offset().top
                }, 1000);
});

