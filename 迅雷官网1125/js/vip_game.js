$(function(){
    $('.game_allnav li').mouseover(function(){
        
        $('.game_allnav li').attr('class','');
        $(this).attr('class','on');
        var index = $(this).index();
        $('.game_linkcon p').attr('style','display:none;');
        $('.game_linkcon p').eq(index).attr('style','display:block;');
    });

    
});
$(function(){

    $('#scroll-right').click(function(){
        next();
    });

    $('#scroll-left').click(function(){
        prev();
    });

    var int = setInterval(function(){
            $('#scroll-right').click();
        },3000);

    function next( ){
        var index = $('#showPic').attr('index');
        if(index==0){
            $('#showPic').attr('index','1');
            $('#showPic').attr('title','蓝月传奇');
            $('#showPic img').attr('src','./images/vip_game/201604281800025746.jpg');
            $('.bsid01').attr('index','0');
            $('.bsid01').attr('title','范伟打天下');
            $('.bsid01 a').attr('title','范伟打天下');
            $('.bsid01 img').attr('src','./images/vip_game/201609121928528895.jpg');
            $('.bsid02').attr('index','2');
            $('.bsid02').attr('title','游戏特权春夏季福利来袭');
            $('.bsid02 a').attr('title','游戏特权春夏季福利来袭');
            $('.bsid02 img').attr('src','./images/vip_game/201607011600327168.jpg');

        }else if(index==1){
            $('#showPic').attr('index','2');
            $('#showPic').attr('title','游戏特权春夏季福利来袭');
            $('#showPic img').attr('src','./images/vip_game/201607011600327168.jpg');
            $('.bsid01').attr('index','1');
            $('.bsid01').attr('title','蓝月传奇');
            $('.bsid01 a').attr('title','蓝月传奇');
            $('.bsid01 img').attr('src','./images/vip_game/201604281800025746.jpg');
            $('.bsid02').attr('index','0');
            $('.bsid02').attr('title','范伟打天下');
            $('.bsid02 a').attr('title','范伟打天下');
            $('.bsid02 img').attr('src','./images/vip_game/201609121928528895.jpg');
        }else if(index==2){
            $('#showPic').attr('index','0');
            $('#showPic').attr('title','范伟打天下');
            $('#showPic img').attr('src','./images/vip_game/201609121928528895.jpg');
            $('.bsid01').attr('index','2');
            $('.bsid01').attr('title','游戏特权春夏季福利来袭');
            $('.bsid01 a').attr('title','游戏特权春夏季福利来袭');
            $('.bsid01 img').attr('src','./images/vip_game/201607011600327168.jpg');
            $('.bsid02').attr('index','1');
            $('.bsid02').attr('title','蓝月传奇');
            $('.bsid02 a').attr('title','蓝月传奇');
            $('.bsid02 img').attr('src','./images/vip_game/201604281800025746.jpg');
        }
    }
     function prev( ){
        var index = $('#showPic').attr('index');
        if(index==0){
           $('#showPic').attr('index','2');
            $('#showPic').attr('title','游戏特权春夏季福利来袭');
            $('#showPic img').attr('src','./images/vip_game/201607011600327168.jpg');
            $('.bsid01').attr('index','1');
            $('.bsid01').attr('title','蓝月传奇');
            $('.bsid01 a').attr('title','蓝月传奇');
            $('.bsid01 img').attr('src','./images/vip_game/201604281800025746.jpg');
            $('.bsid02').attr('index','0');
            $('.bsid02').attr('title','范伟打天下');
            $('.bsid02 a').attr('title','范伟打天下');
            $('.bsid02 img').attr('src','./images/vip_game/201609121928528895.jpg');

        }else if(index==1){
            $('#showPic').attr('index','0');
            $('#showPic').attr('title','范伟打天下');
            $('#showPic img').attr('src','./images/vip_game/201609121928528895.jpg');
            $('.bsid01').attr('index','2');
            $('.bsid01').attr('title','游戏特权春夏季福利来袭');
            $('.bsid01 a').attr('title','游戏特权春夏季福利来袭');
            $('.bsid01 img').attr('src','./images/vip_game/201607011600327168.jpg');
            $('.bsid02').attr('index','1');
            $('.bsid02').attr('title','蓝月传奇');
            $('.bsid02 a').attr('title','蓝月传奇');
            $('.bsid02 img').attr('src','./images/vip_game/201604281800025746.jpg');
        }else if(index==2){
            $('#showPic').attr('index','1');
            $('#showPic').attr('title','蓝月传奇');
            $('#showPic img').attr('src','./images/vip_game/201604281800025746.jpg');
            $('.bsid01').attr('index','0');
            $('.bsid01').attr('title','范伟打天下');
            $('.bsid01 a').attr('title','范伟打天下');
            $('.bsid01 img').attr('src','./images/vip_game/201609121928528895.jpg');
            $('.bsid02').attr('index','2');
            $('.bsid02').attr('title','游戏特权春夏季福利来袭');
            $('.bsid02 a').attr('title','游戏特权春夏季福利来袭');
            $('.bsid02 img').attr('src','./images/vip_game/201607011600327168.jpg');
        }
    }
    $('.huodongban').hover(function(){
        clearInterval(int);
    }, function(){
       int = setInterval(function(){
                $('#scroll-right').click();
            },3000);
    });
});
