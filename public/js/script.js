$(window).ready(function(){
	if($(document).width() > 670) {
	$(".pageName").css("display", "none");
	$(".navigation").css("display", "grid");
	$("footer").addClass("fInactive");
}
});
$(window).on("load", function(){

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

var height = $(window).height();
var inView = 1;
var animating = false;

$(window).on('scroll', function(){
	  var s = $(window).scrollTop(),
	      d = $(document).height(),
	      c = $(window).height(),
	      n = $(".navTop > ul > li").length;
	  var scrollPercent = (s / (d - c)) * 100;

	function scrollSize(num) {
	  	var height =  num * $(".front").children().length;
	  	return scrollPercent * height / 100;
	} 
	 var navTopScrollHeight = (100 - scrollSize(15));
	 console.log(navTopScrollHeight)
	 var navBotScrollHeight = (scrollSize(15));
	if($(document).width() >= 800) {
	
	  $(".main ul").css("top", "-"  + scrollSize(70) + "%");
	}
	else if($(document).width() < 800 && $(document).width() >= 670){
	  $(".main ul").css("top", "-"  + scrollSize(83) + "%");
	}
	$(".navTop ul").css("top", navTopScrollHeight + "%" );
	$(".navBot ul").css("top", "-" + navBotScrollHeight + "%");

	  
})
if(window.location.pathname != "/" && window.location.pathname != "/website") {
	$("header").css("color", "black");
	$(".logo").css("border", "2px solid #000");
	$("header").find("span").css("background", "#000");
	$(".logo img").attr("src", "public/media/logoBlack.png");
}

$(".page:first-child").children(".image").addClass("pActive");
$(".logo").on("click", function(){
	scrollUp(2);
});

function scrollDown(val) {
	if(!animating){
		animating = true;
		if(!$("footer").hasClass("fInactive")){
			animating = false;
			console.log("already at end");
			return;
		}
		else if($(window).scrollTop() == $(".page:last-child").offset().top) {
			$("footer").removeClass("fInactive");
			$("html, body").animate({
				scrollTop: $(document).height()
			}, 1000, "easeInOutQuint", function(){
				animating= false
			});			
			return;
		}

		else {			
			val++;
			inView = val;
			$("html, body").animate({
				scrollTop: $(".page:nth-child(" + val +")").offset().top
			}, 1000, "easeInOutQuint", function(){				
				$(".page:nth-child(" + (val- 1) +")").children(".image").removeClass("pActive");
				$(".page:nth-child(" + val +")").children(".image").addClass("pActive");
				animating = false;				
			});
		}
	}
}
function scrollUp(val) {	
	if(!animating){
		animating = true;
		if($(window).scrollTop() == 0) {
			console.log("already at top");
			animating= false;
			return;
		}
		else if(!$("footer").hasClass("fInactive")){
			$("footer").addClass("fInactive");
			setTimeout(function(){
				animating= false;
			}, 300);
		}
		else {
		val--;
		inView = val;
		$("html, body").animate({
			scrollTop: $(".page:nth-child(" + val +")").offset().top
		}, 1000, "easeInOutQuint", function(){			
				$(".page:nth-child(" + (val + 1) +")").children(".image").removeClass("pActive");
				$(".page:nth-child(" + val +")").children(".image").addClass("pActive");
				animating = false;
			});
		}
	}
}

function scrollTop() {
	$("html, body").animate({
		scrollTop: 0
	}, 1000, "easeInOutQuint");
}
$(".navTop > ul").children("li").on("click", function() {
	scrollUp($(this).index() + 2);
	
});
$(".navBot > ul").children("li").on("click", function() {	;
	scrollDown($(this).index());
	
});
if(window.location.pathname == "/") {
	$(".work").on("click", function(event){
		if(!animating){
		animating = true;
		event.preventDefault();
		inView = 0;
		scrollTop();
		setTimeout(function(){
			animating = false;
		}, 100)
		
		}
	})

	$(window).bind("mousewheel", function(event){
			if(event.originalEvent.wheelDelta>=0){			
				scrollUp(inView);
			}
			else {
				scrollDown(inView);			
			}
			event.preventDefault();
	});

	var timer;
	$(document).on("scroll", function(){

		clearTimeout(timer);
		if(!animating){
		timer = setTimeout(function(){
			var offset = $(window).scrollTop();
			if(offset <= height/2) {
				
				scrollUp(2);
				
			}
			else if(offset >= height/2 && offset <= height ){			
				scrollDown(1);
			}
			else if(offset >= height && offset <= height + height/2){
				
				scrollUp(3);
				
			}
			else {
				
				scrollDown(2);
			}
		}, 66)
		}
	})

}

if(window.location.pathname == "/about" || window.location.pathname == "/website") {

	$(window).on("scroll", function(){
		if($(window).scrollTop() >= 100) {
			$(".navLight").addClass("active");
		}
		else {
			$(".navLight").removeClass("active");
		}
});
	
	$("#mainHeader").css("position", "absolute");
}

});

