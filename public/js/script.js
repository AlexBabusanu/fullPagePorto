$(window).ready(function(){
	$(".pageName").css("display", "none");
	$(".navigation").css("display", "grid");
	$("footer").addClass("fInactive");
	animating = false;
	
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
		
		var navTopScrollHeight = ($(".navTop").height() - scrollSize($(".navTop ul").height() /  ($(".main ul li").length + 1) ) );
		var navBotScrollHeight = (scrollSize($(".navBot ul").height() / ($(".main ul li").length + 1) ));
		$(".main ul").css("top", "-"  + scrollSize($(".main ul").height() / ($(".main ul li").length + 1.5)) + "px");		

		$(".navTop ul").css("top", navTopScrollHeight + "px" );
		$(".navBot ul").css("top", "-" + navBotScrollHeight + "px");
		
		
	})

	// white/black header depending on url
	if(window.location.pathname != "/" && window.location.pathname != "/website") {
		$("header").css("color", "black");
		$(".logo").css("box-shadow", "0 0 0px 0px #000 inset, 0 0 1px 4px #000");
		$(".logo").hover(()=> {
			$(this).css("box-shadow", "inset 0 0 0 2px #fff");
		})
		$("header").find("span").css("background", "#000");
		$(".logo img").attr("src", "public/media/logoBlack.png");
	}

	$(".page:first-child").children(".image").addClass("pActive");
	$(".logo").on("click", function(){
		scrollUp(2);
	});

	//full page scroll down script
	
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
				if($(window).height() < 750){
					$(".navigation").animate({
						top: "-25%"
					}, 1000)
				}
				$("html, body").animate({
					scrollTop: $(document).height()

				}, 1000, "easeInOutQuint", function(){
					animating = false;
				}, 300);
							
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

	// full page scroll up script
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
				if($(window).height() < 750){
					$(".navigation").animate({
						top: "0"
					}, 1000)
				}
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

	//scroll to top script
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

		$(window).on("mousewheel DOMMouseScroll MozMousePixelScroll", function(event){
				event.stopImmediatePropagation();
                event.stopPropagation();
				event.preventDefault();
				var scroll = parseInt( -event.originalEvent.detail || event.originalEvent.wheelDelta);
				if(scroll>=0 && !animating){
					scrollUp(inView);
				}
				else if(!animating){
					scrollDown(inView);			
				}
				
		});


	}

	if(window.location.pathname == "/about" || window.location.pathname == "/website" || window.location.pathname == "/contact") {

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

