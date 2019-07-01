/*自适应	*/
	function topShow(){
		var h = $(window).height(),
			w = $(window).width(),
			$wpTop = $("#wpTop"),
			$person = $("#person"),
			$title = $(".title"),
			i = h /950 ;
			i = i.toFixed(2)
		
		$wpTop.css("height",h)
		if(h < 950){
			
			$person.css("-webkit-transform","scale(" + i +")")
			$person.css({
				"-webkit-transform":"scale(" + i +")",
				"transform":"scale(" + i +")"
			})
			$title.css({
				"-webkit-transform":"scale(" + i +")",
				"transform":"scale(" + i +")"
			})
			$(".wp-top .btn-com").css({
				"-webkit-transform":"scale(" + i +")",
				"transform":"scale(" + i +")"
			})
		}  
	}
		
	if(navigator.userAgent.indexOf("MSIE")>0){   
	    if( navigator.userAgent.indexOf("MSIE 8.0")>0 || navigator.userAgent.indexOf("MSIE 9.0")>0){   
				 $person.css({
				"top":"77px",
				"height":"1000px"
			})
	    }
	}else{
		topShow();
	  	$(window).resize(function() {
			topShow()
		});
	}
  	
