//*头部导航标签样式1*/
function head_nav(){
	var active_timer = null;
	jQuery('.nav >li,.nav_down_list').unbind('mouseover').bind('mouseover',function(){
		jQuery('.nav >li').removeClass('cur');
		jQuery(this).addClass('cur'); 
		clearTimeout(active_timer);
	})
	jQuery('.nav >li').unbind('mouseout').bind('mouseout',function(){
		active_timer = setTimeout("jQuery('.nav >li').removeClass('cur');", 100);
	})
}
$(function(){
	head_nav();
});
//*头部导航标签下滑样式2*/
(function(){
    var wrap=document.getElementById("wrap");
    var isCss3=function(){
        var style=document.createElement("div").style;
        for(var k in style){
          if(k.toLowerCase().indexOf("animation")>=0)
            return true;     
        }
        return false;
    }();
    if(isCss3){
        wrap.className=wrap.className+" css3";
        /*头部导航下划线*/
        var navList=document.getElementById("nav_list"),
            navLinks=navList.getElementsByTagName("a"),
            hLine=document.getElementById("h_line");
        var ws=[32,64,64,64,64],ls=[18,86,186,286,386];
          for(var i=0;i<navLinks.length;i++){
            navLinks[i].addEventListener("mouseenter",function(i){
              return function(){
                hLine.style.display="block";
                hLine.style.width=ws[i]+"px";
                hLine.style.left=ls[i]+"px";
              }
            }(i),false);    
            if(navLinks[i].className.indexOf("cur")!=-1){
                hLine.style.display="block";
                hLine.style.width=ws[i]+"px";
                hLine.style.left=ls[i]+"px";
            }
          }
        navList.addEventListener("mouseleave",function(){
            hLine.style.display="none";
            for(var i=0;i<navLinks.length;i++){
                if(navLinks[i].className.indexOf("cur")!=-1){
                    hLine.style.display="block";
                    hLine.style.width=ws[i]+"px";
                    hLine.style.left=ls[i]+"px";
                    return;
                }
            } 
        },false);
    }
})()

