/* 
* @Author: Marte
* @Date:   2016-12-05 10:53:26
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-05 20:27:54
*/

$(document).ready(function(){
    //渐变轮播图
    var index = 0;
    var height = $(window).height();
    var width = $(window).width();
    $('.wrapper').css('height', height-64);  
    $('.wrapper').css('width', width);
    if (width > 1600) {
        $('.detail').css('top','340px')
    }
    //小圆点点击
    $('.switch_list span').click(function(){
        index = $(this).index();
        showDot(index);
        start(index+1);
    })
    start(index+1);
    $('.s_left').click(function() {
        index = --index<0?2:index;
        for (var i = 0; i < 3; i++) {
            $('.color_list').removeClass('color_bg'+i);
        };
        $('.color_list').addClass('color_bg'+index)
        showDot(index);
        start(index+1);
    });
     $('.s_right').click(function() {
        index = ++index>2?0:index;
        for (var i = 0; i < 3; i++) {
            $('.color_list').removeClass('color_bg'+i);
        };
        $('.color_list').addClass('color_bg'+index)
        showDot(index);
        start(index+1);
    });
    setInterval(function(){
        $('.s_right').click();
    },5000)
});
function start(index){
    $('.bgs_box').css('opacity', '0');
    $('.bgs_'+index).css('opacity', '1');
}
function showDot(index){
    $('.switch_list span').removeClass('on')
    $('.switch_list span').eq(index).addClass('on')
}