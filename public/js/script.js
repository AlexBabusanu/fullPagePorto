$(window).ready(function(){
	$(".pageName").css("display", "none");
	$(".navigation").css("display", "flex");
	$("footer").addClass("fInactive");
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
      c = $(window).height();
  var scrollPercent = (s / (d - c)) * 100;

  function scrollSize(num) {
  		var height =  num * $(".front").children().length;
  		return scrollPercent * height / 100;
  } 

  var navTopScrollHeight = (200 - scrollSize(55));
  var navBotScrollHeight = (90 + scrollSize(55));

  $(".navTop ul").css("margin-top", navTopScrollHeight );
  $(".navBot ul").css("margin-top", "-" + navBotScrollHeight + "px");
  $(".main ul").css("margin-top", "-"  + scrollSize(66) + "px")
  
})
if(window.location.pathname != "/") {
	$("header").css("color", "black");
	$("header").find("span").css("background", "#000")
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
				scrollDown();
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

if(window.location.pathname == "/about") {
	$("header").css("position", "absolute");
	 $(document).on("scroll", function() {
	 	if($(window).scrollTop() >= 100) {

	 	}
	 })
}

});

