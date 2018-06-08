
$(document).ready(function(){
  $('.slider').slick();
  
  $('.upperPart').slick({
  	dots: true,
  	arrows:false
  });
  	
	setTimeout(function(){
  		 var firstH = $(".upperPart").first().css("height");

  		$(".campanella").css("height", firstH);
	},3500)
 
	 
	});

  



$(".right ul li").click(function(event) {
	
	var selected = event.target;
	var chosenIndex = $(selected).attr("class");

	if (chosenIndex == "school") {
		$(".slider")[0].slick.slickGoTo(0);
	}
	if (chosenIndex == "visor") {
		$(".slider")[0].slick.slickGoTo(1);
	}
	if (chosenIndex == "campanella") {
		$(".slider")[0].slick.slickGoTo(2);
	}
	if (chosenIndex == "hands") {
		$(".slider")[0].slick.slickGoTo(3);
	}

	$('html, body').animate({
                    scrollTop: $(".slider").offset().top
                }, 1000);
});

