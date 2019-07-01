$(document).ready(function(){
	imgLocation();
	var dataImg = {"data":[{"src":"11.jpg"}]};	//模拟一个JSON字符串，模拟数据库		
	window.onscroll = function(){

		if (scrollside()) {	
									//满足条件的时候进行加载
			$.each(dataImg.data,function(index,value){		//遍历数据,需要2个参数，一个是位置，一个是数值
				var box = $("<div>").addClass("box").appendTo($("#container"));//动态创建div，加个class名字，加载到container容器当中										
				var content = $("<div>").addClass("content").appendTo(box);//同样的方式记载到box里面	
				var a1 = $("<a>").attr("href","#").appendTo(content);
				$("<img>").attr("src","./images/guide/"+$(value).attr("src")).appendTo(a1);//动态创建一个img，需要设置他的属性，添加到content里面
				$("<button>").addClass("content_img_buttomL").html("采集").appendTo(a1);
				$("<button>").addClass("content_img_buttomR").appendTo(a1);
				// $("<p>").appendTo(content).html("这是P标签的内容");
				$("<p>").addClass("content_list_top").html("The Water Rat Hotel, South Melbourne | Home").appendTo(content);
				var p1 = $("<p>").addClass("content_list_min").appendTo(content)
				$("<img>").attr("src","./images/scripe/content_list_img1.png").appendTo(p1);
				$("<img>").attr("src","./images/scripe/content_list_img2.png").appendTo(p1);
				var a2 = $("<a>").attr("href","#").appendTo(content);
				$("<img>").addClass("content_list_bottomA").attr("src","./images/magazine/content_list_img3.jpg").appendTo(a2);
				var p2 = $("<p>").addClass("content_list_bottom").appendTo(content);
				$("<a>").attr("href","#").html("月祷雯 采集到").appendTo(p2);
				$("<br>").appendTo(p2);
				$("<a>").attr("href","#").html("杂志").appendTo(p2);
			});
			imgLocation();									//新添加的标签再遵循一遍imgLocation方法添加图片位置
		}
	};
});
function scrollside(){
	var box = $(".box");										//取出box标签对象
	var lastboxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()*2-100);//最后一张图片的高度加上最后一张图片的一半															
	var documentHeight = $(window).height(); 					//当前容器高度
	var scrollHeight = $(window).scrollTop();					//鼠标滚动高度
	return(lastboxHeight < scrollHeight + documentHeight)?true:false;
}
function imgLocation(){
	var box = $('.box');										//取出box标签对象
	var boxWidth = box.eq(0).width();							//取出box的宽
	var num = Math.floor($("#container").width()/boxWidth);			//取出浏览器的宽然后除以box的宽，看看能放几个盒子
	var boxArr = Array();										//创建一个box数组

	box.each(function(index, value){							//遍历每一个box对象需要运行的函数
		var boxHeight = box.eq(index).height();					//取出每一个box的高是多少
		if (index<num) {										//判断当前的选择器的值是否小于第一行的值
			boxArr[index] = boxHeight;							//如果小于，就放进第一行里面
		}else{								
			var minboxHeight = Math.min.apply(null, boxArr);	//否则取出这个box数组的最小盒子那个高度
			var minboxIndex = $.inArray(minboxHeight,boxArr);	//并且取出这个box数组的最小盒子的下标

			$(value).css({										//改变当前传进来元素对象的样式
				"position":"absolute",		
				"top":minboxHeight,								//绝对定位定位到刚刚取出来最小盒子的那个高度下
				"left":box.eq(minboxIndex).position().left		//绝对定位定位到最小盒子下标的那个盒子的左边距
			})
			boxArr[minboxIndex]+=box.eq(index).height();		//然后再重新算那个盒子的最小高度
		}
	});
}