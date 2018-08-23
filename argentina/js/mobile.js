$(".menu-bar").on('click', function(event) {
	event.preventDefault();
	$(".menuMobile").toggle();
});

setTimeout(function(){
  		 var firstH = $(".upperMobile").first().css("height");

  		$(".menuHolder.resumenMobTop").css("height", firstH);
  		$(".menuHolder.campanellaMob").css("height", firstH);
  		$(".menuHolder.visorMob").css("height", firstH);
  		$(".menuHolder.handsMob").css("height", firstH);
  		$(".menuHolder.schoolMob").css("height", firstH);
	},3500);
 
sliderMobile();
bothSlidersMob();
	
	


function sliderMobile () {
	if ($(window).width() < 768) {
		 $('.upperMobile').slick({
		  	dots: true,
		  	arrows:true
		  });
   		 
   		 $('.sliderMob').slick();
  
	}
	else {
   		
	}
}


function bothSlidersMob() {
	// $(document).on( 
	// 	"click", ".sliderMob .slick-next.slick-arrow",
	// 	function(e){
	// 	 	$(".upperMobile .slick-next.slick-arrow").click();
	// 	}
	// );

	// $(document).on( 
	// 		"click", ".sliderMob .slick-prev.slick-arrow",
	// 		function(e){
	// 		 	$(".upperMobile .slick-prev.slick-arrow").click();
	// 		}
	// 	);

	$('.upperMobile').on('beforeChange', function(event, slick ,thisSlide, nextSlide){
	  
	  	if (nextSlide === 0) {
	  		$(".sliderMob")[0].slick.slickGoTo(0);
	  	};

	  	if (nextSlide === 1) {
	  		$(".sliderMob")[0].slick.slickGoTo(2);
	  	};
	  	
	  	if (nextSlide === 2) {
	  		$(".sliderMob")[0].slick.slickGoTo(4);
	  	};

	  	if (nextSlide === 3) {
	  		$(".sliderMob")[0].slick.slickGoTo(6);
	  	};

		if (nextSlide === 4) {
			  		$(".sliderMob")[0].slick.slickGoTo(8);
			  	};

		if (nextSlide === 5) {
			  		$(".sliderMob")[0].slick.slickGoTo(10);
			  	};	  	 
	});

	$('.sliderMob').on('beforeChange', function(event, slick ,thisSlide, nextSlide){
	  
	  	if (nextSlide === 0) {
	  		$(".upperMobile")[0].slick.slickGoTo(0);
	  	};

	  	if (nextSlide === 2) {
	  		$(".upperMobile")[0].slick.slickGoTo(1);
	  	};
	  	
	  	if (nextSlide === 4) {
	  		$(".upperMobile")[0].slick.slickGoTo(2);
	  	};

	  	if (nextSlide === 6) {
	  		$(".upperMobile")[0].slick.slickGoTo(3);
	  	};

		if (nextSlide === 8) {
			  		$(".upperMobile")[0].slick.slickGoTo(4);
			  	};

		if (nextSlide === 10) {
			  		$(".upperMobile")[0].slick.slickGoTo(5);
			  	};	  	 
	});
}

