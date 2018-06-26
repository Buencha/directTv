
$(document).ready(function(){
  $('.slider').slick();
  
  $('.upperPart').slick({
  	dots: true,
  	arrows: true
  });
  	
	setTimeout(function(){
  		 var firstH = $(".upperPart").first().css("height");

  		$(".suelo").css("height", firstH);
  		$(".futbol").css("height", firstH);
  		$(".rugby").css("height", firstH);
  		$(".school").css("height", firstH);
	},3500)
 	 
 	bothSliders();
	 // draw();
	});

  

function school() {
	$(".slider")[0].slick.slickGoTo(1);
	scrollDown();
}

function futbol() {
	$(".slider")[0].slick.slickGoTo(2);
	scrollDown();

}

function suelo() {
	$(".slider")[0].slick.slickGoTo(3);
	scrollDown();

}

function rugby() {
	$(".slider")[0].slick.slickGoTo(4);
	scrollDown();

}

function scrollDown() {
	$('html, body').animate({
                    scrollTop: $(".slider").offset().top
                }, 1000);
}

function bothSliders() {
	$(document).on( 
		"click", ".slider .slick-next.slick-arrow",
		function(e){
		 	$(".upperPart .slick-next.slick-arrow").click();
		}
	);

	$(document).on( 
			"click", ".slider .slick-prev.slick-arrow",
			function(e){
			 	$(".upperPart .slick-prev.slick-arrow").click();
			}
		);
}