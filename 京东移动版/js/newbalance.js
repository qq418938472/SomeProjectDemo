$(function(){
	$('body').on('click','#span_button',function(){
		var $display = $('#jd-header-shortcut').css('display');
		if ($display == 'table') {
			$('#jd-header-shortcut').css('display','none');
		}else{
			$('#jd-header-shortcut').css('display','table');
		}
	})
	/*颜色挑选*/ 
	$('body').on('click','#shoes_color button',function(){
		$('#shoes_color button').attr('class','shoes_btn');
		$(this).addClass("active");
		var $color = $(this).html();
		$('#pick_color').html($color);
		/*图片转换*/ 
		if($color == 'ML574VB/酒红色'){
			var j = 5;
			for (var i = 0; i <= 4; i++) {
				$('#inner img').eq(i).attr('src','./images/new_balance/'+(++j)+'.jpg')
			}
		}else if($color == 'ML574VN/藏蓝色'){
			var j = 10;
			for (var i = 0; i <= 4; i++) {
				$('#inner img').eq(i).attr('src','./images/new_balance/'+(++j)+'.jpg')
			}
		}else if ($color == 'ML574VG/粉灰色') {
			var j = 0;
			for (var i = 0; i <= 4; i++) {
				
				$('#inner img').eq(i).attr('src','./images/new_balance/'+(++j)+'.jpg')
			}
		}
	})
	/*尺码挑选*/ 
	$('body').on('click','#shoes_size button',function(){
		$('#shoes_size button').attr('class','shoes_btn');
		$(this).addClass("active");
		var $size = $(this).html();
		$('#pick_size').html($size);
	})
	/*数量挑选*/ 
	$('body').on('click','#add',function(){
		var $size = $('#num').html();
		$('#num').html(++$size);
		$('#pick_num').html($size+'件');
	})
	$('body').on('click','#reduce',function(){
		var $size = $('#num').html();
		if ($size <= 1) {
			$size = 1;
		}else{
			--$size;
		}
		$('#num').html($size);
		$('#pick_num').html($size+'件');
	})
	$('body').on('click','#comment',function(){
		$('#comment_content').trigger("click");
	})
	$('body').on('click','#comment_nice',function(){
		$('#comment_content').trigger("click");
	})
	$('body').on('click','#detail',function(){
		$('#detail_content').trigger("click");
	})
	$('body').on('click','#circle1',function(){
		var icon_class = $(this).attr('class');
		if (icon_class == 'fa fa-circle-o') {
			$(this).attr('class','fa fa-check-circle')
			$(this).css('color','red');
		}else{
			$(this).attr('class','fa fa-circle-o');
			$(this).css('color','#000');
		}
	})
	$('body').on('click','#circle2',function(){
		var icon_class = $(this).attr('class');
		if (icon_class == 'fa fa-circle-o') {
			$(this).attr('class','fa fa-check-circle')
			$(this).css('color','red');
		}else{
			$(this).attr('class','fa fa-circle-o');
			$(this).css('color','#000');
		}
	})
	$('body').on('click','#inner a',function(){
		var src = $(this).children("img").attr('src');
		$('#modal_big_img').attr('src',src);
	})

	/*
		触摸事件 
		三种在规范中列出并获得跨移动设备广泛实现的基本触摸事件：
		     1. touchstart：手指放在一个DOM元素上。
		     2. touchmove：手指拖曳一个DOM元素。
		     3. touchend：手指从一个DOM元素上移开。
		     每个触摸事件都包括了三个触摸列表：
		     1. touches：当前位于屏幕上的所有手指的一个列表。
		     2. targetTouches：位于当前DOM元素上的手指的一个列表。
		3. changedTouches：涉及当前事件的手指的一个列表。
		     例如，在一个touchend事件中，这就会是移开的手指。
		     这些列表由包含了触摸信息的对象组成：
		     1. identifier：一个数值，唯一标识触摸会话（touch session）中的当前手指。
		     2. target：DOM元素，是动作所针对的目标。
		     3. 客户/页面/屏幕坐标：动作在屏幕上发生的位置。
		     4. 半径坐标和 rotationAngle：画出大约相当于手指形状的椭圆形。
	*/
    var startX,//触摸时的坐标   
        startY,   
        x, //滑动的距离   
        y,   
        aboveX=0; //设一个全局变量记录上一次内部块滑动的位置    

 	var inner=document.getElementById("inner");
 	var bottom_inner=document.getElementById("bottom_inner");      
    
    function touchStart(e){			//触摸   
        e.preventDefault();   		// 取消原本的事件 
        var touch=e.touches[0];  	// 当前位于屏幕上的所有手指 
        startX = touch.pageX;   	// 刚触摸时的坐标               
    }   
    function touchMove(e){//滑动            
         e.preventDefault();      // 取消原本的事件     
         var  touch = e.touches[0];                  
         x = touch.pageX - startX;//滑动的距离   
         if (aboveX+x > 0) {
         	inner.style.left = 0
         	return 0;
         }
         if (aboveX+x < -1283) {
         	inner.style.left = -1283
         	return 0;
         }
        //inner.style.webkitTransform = 'translate(' + 0+ 'px, ' + y + 'px)';  //也可以用css3的方式        
        inner.style.left=aboveX+x+"px"; //这一句中的aboveY是inner上次滑动后的位置                  
    }   
    function touchMove2(e){//滑动            
         e.preventDefault();      // 取消原本的事件     
         var  touch = e.touches[0];                  
         x = touch.pageX - startX;//滑动的距离
         // if(bottom_inner.style.right < 0){
         	console.log(bottom_inner.style.right);
         	console.log(bottom_inner.style.left);
         // }   
         if (aboveX+x > 0) {
         	bottom_inner.style.left = 0
         	return 0;
         }
         if (aboveX+x < -1023) {
         	bottom_inner.style.left = -1023
         	return 0;
         }
        //inner.style.webkitTransform = 'translate(' + 0+ 'px, ' + y + 'px)';  //也可以用css3的方式
        //这一句中的aboveY是inner上次滑动后的位置  
        bottom_inner.style.left = aboveX+x+"px";                    
    }   
    function touchEnd(e){//手指离开屏幕   
      e.preventDefault();                      
      aboveX=parseInt(inner.style.left);//touch结束后记录内部滑块滑动的位置 在全局变量中体现 一定要用parseInt()将其转化为整数字; 
      if (aboveX > -128) {
      	inner.style.left = 0+'px';
      	$('#page').html("1");
      }else if (aboveX < -128 && aboveX > -313) {
      	inner.style.left = -313+'px';
      	$('#page').html("2");
      }else if (aboveX < -313 && aboveX > -644) {
      	inner.style.left = -644+'px';
      	$('#page').html("3");
      }else if (aboveX < -644 && aboveX > -957) {
      	inner.style.left = -957+'px';
      	$('#page').html("4");
      }else if (aboveX < -957 && aboveX > -1282) {
      	inner.style.left = -1282+'px';
      	$('#page').html("5");
      }
    }  
    function touchEnd2(e){//手指离开屏幕   
      e.preventDefault();
      aboveX=parseInt(bottom_inner.style.left); //touch结束后记录内部滑块滑动的位置 在全局变量中体现 一定要用parseInt()将其转化为整数字; 
    }  
    /*
		addEventListener() 为指定元素添加指定的事件
		共3个参数
		event：	必须。字符串，指定事件名。注意: 不要使用 "on" 前缀。 例如，使用 "click" ,而不是使用 "onclick"。 
		function:必须。指定要事件触发时执行的函数。
		useCapture:可选。布尔值，指定事件是否在捕获或冒泡阶段执行。
					可能值:
					true - 事件句柄在捕获阶段执行
					false- false- 默认。事件句柄在冒泡阶段执行
    */
     document.getElementById("outer").addEventListener('touchstart', touchStart,false);     
     document.getElementById("outer").addEventListener('touchmove', touchMove,false);     
     document.getElementById("outer").addEventListener('touchend', touchEnd,false); 
     document.getElementById("bottom_outer").addEventListener('touchstart', touchStart,false);     
     document.getElementById("bottom_outer").addEventListener('touchmove', touchMove2,false);     
     document.getElementById("bottom_outer").addEventListener('touchend', touchEnd2,false);   
})