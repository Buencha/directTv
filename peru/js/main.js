

$(document).ready(function(){
  $('.slider').slick();
  
  $('.upperPart').slick({
  	dots: true,
  	arrows: true
  });
  	
	setTimeout(function(){
  		 var firstH = $(".upperPart").first().css("height");
  		$(".voluntarios").css("height", firstH);
  		$(".escuela").css("height", firstH);
  		$(".estrategia").css("height", firstH);
	},3500)
 	 
 	bothSliders();
	
	});

  

function voluntarios() {
	$(".slider")[0].slick.slickGoTo(1);
	scrollDown();
}

function escuela() {
	$(".slider")[0].slick.slickGoTo(2);
	scrollDown();

}

function estrategia() {
	$(".slider")[0].slick.slickGoTo(3);
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


	$('.upperPart').on('beforeChange', function(event, slick ,thisSlide, nextSlide){
	  
	  	$(".slider")[0].slick.slickGoTo(nextSlide);
	  
	 
	});
}