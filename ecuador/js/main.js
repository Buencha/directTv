
$(document).ready(function(){
  $('.slider').slick();
  
  $('.upperPart').slick({
  	dots: true,
  	arrows:true
  });
  	
	setTimeout(function(){
  		 var firstH = $(".upperPart").first().css("height");

  		$(".bestplace").css("height", firstH);
  		$(".voluntaries").css("height", firstH);
  		$(".partners").css("height", firstH);
	},3500)
 
 	bothSliders();
	
	});

  

function bestplace() {
	$(".slider")[0].slick.slickGoTo(1);
	scrollDown();
}

function voluntaries() {
	$(".slider")[0].slick.slickGoTo(2);
	scrollDown();

}

function partners() {
	$(".slider")[0].slick.slickGoTo(3);
	scrollDown();

}


function scrollDown() {
	$('html, body').animate({
                    scrollTop: $(".slider").offset().top
                }, 1000);
}

function draw () {
	var line = $('#line');
	var div1 = $('.lower h4');
	var div2 = $('.circulos');

	var x1 = div1.offset().left + (div1.width()/2);
	var y1 = div1.offset().top + (div1.height()/2);
	var x2 = div2.offset().left + (div2.width()/2);
	var y2 = div2.offset().top + (div2.height()/2);

	line.attr('x1',x1).attr('y1',y1).attr('x2',x2).attr('y2',y2);
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