/* 
* @Author: Marte
* @Date:   2016-11-28 09:18:59
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-06 18:47:50
*/
$(document).ready(function(){
    adaption();
    $(window).resize(function() {
        if ($(document).width()<768) {
            $("#navbar-right").css({
                width: '100%',
            });
            $('.navbar-brand').css({
                width: '100px',
            });
        }else{
            $("#navbar-right").css({
                width: '470px',
            });
             $('.navbar-brand').css({
                width: '150px',
            });
        }
    
    });
    //渐变轮播图
    var number = 1;
    anim(number);
    function adaption () {
        var height = $(window).height()
        $('.content_Af_frame').css('height', height);
        $('.span_xnet').css('margin',height-150+'px 0 0 0 ')
        $('.span_member').css('margin',height-150+'px 0 0 0 ')
        $('.span_xav').css('margin',height-150+'px 0 0 0 ')
    }
    function anim(number){
        for (var i = 1; i < 4; i++) {
            if (i == number) {
               $('.img_'+i).css({opacity:'1'})
               $('.img_'+i+' .title_content .title').css({opacity:'1',transform:'translateY(10px)',})
               $('.img_'+i+' .title_content a').delay(800).animate({opacity:'1',}, 1000);
            }else{
                $('.img_'+i).css({opacity:'0'})
                $('.img_'+i+' .title_content .title').css({opacity:'0',transform:'translateY(-10px)',})
                $('.img_'+i+' .title_content a').css({opacity:'0'})  
                $('.img_'+i+' .title_content a').css({opacity:'0'})
            }
        };
        showDot();
    }
    function showDot(){
        $('#dot span').attr('id','');
        $('#dot span').eq(number-1).attr('id','on');
        var span_text = $('#dot #on').attr('class');
        if (span_text == 'span_xnet') {
            $('.span_xnet').css('background-position','-604px -108px');
        }else{
            $('.span_xnet').css('background-position','-604px 0');
        }
        if (span_text == 'span_member'){
            $('.span_member').css('background-position','-214px -108px');
        }else{
            $('.span_member').css('background-position','-214px 0');
        }
        if (span_text == 'span_xav'){
            $('.span_xav').css('background-position','-398px -108px');
        }else{
            $('.span_xav').css('background-position','-398px 0');
        }
    }
    $('#dot span').hover(function(){
        number = parseInt($(this).attr('index'));
        anim(number);
    })
    var int =setInterval(function(){
         anim(number);
         number = ++number>3?1:number;
    },5000); 
});