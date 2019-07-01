$(function(){
	$('.intro_tabs li').on('click',function(){
		$('.intro_tabs li').removeClass('on');
		$(this).addClass('on');
		var checked = $(this).attr('class');
		if(checked == 'item item_super on'){
			$('#l_tabcont .tab_area').attr('style','display:none;');
			$('#intro_super').attr('style','display:block;');
		}else if (checked == 'item item_pt on') {
			$('#l_tabcont .tab_area').attr('style','display:none;');
			$('#intro_pt').attr('style','display:block;');
		}else if (checked == 'item item_k on') {
			$('#l_tabcont .tab_area').attr('style','display:none;');
			$('#intro_k').attr('style','display:block;');
		}else if (checked == 'item item_jsq on') {
			$('#l_tabcont .tab_area').attr('style','display:none;');
			$('#intro_jsq').attr('style','display:block;');
		}
	});
});