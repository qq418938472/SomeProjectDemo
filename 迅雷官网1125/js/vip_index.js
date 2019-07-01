$(function(){
	var $list = $('#list');             // 因为得到的是JQ对象，所以使用$进行标注
    var index = 1;

    function showDot(){
                // 清除所有dot里面的样式
                $('.dot').attr('class','dot off');

                // 当前的索引元素重新赋上on的样式
                $('.dot').eq(index-1).attr('class','dot on');
            }

    var int = setInterval(function(){
            $('#next').click();
        },3000);

    // 翻下一页
    $('#next').click(function(){
    	
        index = (++index > 5)?1:index;
        anim(index);
       
    });

    // 翻上一页
    $('#prev').click(function(){
    	
        index = (--index < 1)?5:index;

        anim(index);
    });

	function anim( index ){

        if (!$('#list').is(":animated")) {
            $('#list li:not(:hidden)').fadeOut(500);
            $('#list li[index='+index+']').fadeIn(500);
         
           showDot();
           
        }

    }

    $('#pic_guide i').mouseover(function(){
		
		if($('#pic_guide i').is('class')){
	            return;
	        }
	    var my_index = parseInt($(this).attr('index'));
	    index = my_index;
		anim(index)
    
    });

    $('#carousel').hover(function(){
        clearInterval(int);
    }, function(){
       int = setInterval(function(){
                $('#next').click();
            },3000);
    });

    showDot();
});


//=================================================================================

$(function(){
	$(window).scroll(function () {  
    	if($(document).scrollTop()>=10){
			$(".p_getbom").attr('style','display:block;')
		}else{
			$(".p_getbom").attr('style','display:none;')
		}
    });

    $(".p_getbom .goerwei").on('mouseover',function(){
    	$('.p_showma').attr('style','margin: 0;opacity:1;');   	
    });
    $(".p_getbom .goerwei").on('mouseout',function(){
    	$('.p_showma').attr('style','margin: 0 -120px -120px 0;opacity:0;');   	
    });

});

$(function(){
    $('#mission_tabs li').on('click',function(){
        $('#mission_tabs li').removeClass('on');
        $(this).addClass('on');
        var checked = $(this).attr('class');
        if(checked == 'item cash-div on'){
            $('.mission_cont .tab_area').attr('style','display:none;');
            $('#cash-div').attr('style','display:block;');
        }else if (checked == 'item sign-div on') {
            $('.mission_cont .tab_area').attr('style','display:none;');
            $('#sign-div').attr('style','display:block;');
        }else if (checked == 'item fuli-div on') {
            $('.mission_cont .tab_area').attr('style','display:none;');
            $('#fuli-div').attr('style','display:block;');
        }else if (checked == 'item jifen-div on') {
            $('.mission_cont .tab_area').attr('style','display:none;');
            $('#jifen-div').attr('style','display:block;');
        }else if (checked == 'item huodong-div on') {
            $('.mission_cont .tab_area').attr('style','display:none;');
            $('#huodong-div').attr('style','display:block;');
        }
    });
});
