/* 
* @Author: Marte
* @Date:   2016-11-30 21:06:08
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-04 14:07:47
*/

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(document).scrollTop();
        //第一块动画
        if (scroll > 700) {
            for (var i = 1; i < 6; i++) {
                $('.i-live-'+i).removeClass('paused').addClass('ani');
            };
        }
        if(scroll > 1220){
            console.log(1)
            for (var i = 1; i < 8; i++) {
                $('.i-exp-'+i).addClass('ani');
                $('.i-exp-cdn').addClass('ani');
            };
        }
        if (scroll > 1740) {
            $('.beta-picbox-3').addClass('ani');
            $('.beta-rotatebox').addClass('ani');
            for (var i = 1; i < 5; i++) {
                $('.i-protect-'+i).addClass('ani');
            };
        };
        if (scroll > 2340) {
            $('.beta-picbox-4').addClass('ani');
            $('.i-compare-1 em').addClass('ani');
            $('.i-compare-2 em').addClass('ani');
        };
        if (scroll > 2840) {
            $('.beta-picbox-5').addClass('ani');
            $('.i-beta-file').addClass('ani');
        };
        if (scroll > 4240) {
            for (var i = 1; i < 4; i++) {
                $('.beta-exa-pic-'+i).addClass('ani');
            };
            
        };

    });
});