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