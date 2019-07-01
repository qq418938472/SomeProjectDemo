/* 
* @Author: Marte
* @Date:   2016-11-29 14:34:17
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-06 21:49:30
*/

$(document).ready(function(){
    //渐变轮播图
    var number = 0;
    anim(number);
    function anim(number){
        for (var i = 0; i < 5; i++) {
            if (i == number) {
                $('.banner_list a').eq(i).css({opacity:'1'});
            }else{
                $('.banner_list a').eq(i).css({opacity:'0'})
            }
        };
        showDot();
    }
    function showDot(){
        $('.banner_btns a').attr('id','');
        $('.banner_btns a').eq(number).attr('id','on');
    }
    $('.banner_btns a').hover(function(){
        number = parseInt($(this).attr('index'));
        anim(number);
    })
    var int =setInterval(function(){
         anim(number);
         number = ++number>4?0:number;
    },5000); 
    //瀑布流
    //瀑布流开启条件
    function scrollside(){
        var box = $(".box");                                        //取出box标签对象
        var lastboxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()*4);//最后一张图片的高度加上最后一张图片的一半                                                            
        var documentHeight = $(window).height();                    //当前容器高度
        var scrollHeight = $(window).scrollTop();                   //鼠标滚动高度
        return(lastboxHeight < scrollHeight + documentHeight)?true:false;
        console.log(lastboxHeight);
    }
    var dataImg = {
        "data":[
            {
                "h1":"手机迅雷 5.20安卓新版发布，短视频体验升级",
                "p":"财报充分表明，迅雷在主营业务上依旧稳健，在移动端和云计算业务上正高速前进。"
            },
            {
                "h1":"迅雷携手武汉大学开展暑期实践活动",
                "p":"迅雷第三季度总营收4,090万美元，同比增长22.1%，环比增长7.4%。这已经是迅雷连续三个季度，总营收获得20%以上的同比大涨。"
            },
            {
                "h1":"迅雷9发布更新版9.0.11.318，采用全新的“全网搜”结果列表",
                "p":"即日起，全国27省市自治区的电信光纤用户，凡是基础带宽小于百兆的，使用迅雷快鸟服务，均可以提速至100M。"
            },
            {
                "h1":"迅雷9正式发布，亮点功能抢先体验",
                "p":"深圳市迅雷网络技术有限公司凭借在云计算领域的先行布局以及创新技术，获得“2016年度中国众筹云计算最具影响力企业”奖。"
            },
            {
                "h1":"迅雷邹胜龙：未来1-2年是VR的免费体验阶段",
                "p":"迅雷将于美国东部时间2016年11月9日美国股市开盘前发布截至2016年9月30日的2016年第三季度未审计财报。"
            },
            {
                "h1":"迅雷公布2015年第四季度及全年财报 云计算收入大幅上涨33.9%",
                "p":"迅雷大厦位于深圳南山区，建筑面积约6.5万平方米，集研发、办公、休闲于一体，预计2020年完工。"
            },
            {
                "h1":"迅雷宣布新的股票回购计划及管理层变动",
                "p":"“深圳湾·网红投融资峰会暨网红之夜颁奖典礼”在深落幕，迅雷联合今日网红、速途、企拍、够格、凯撒股份等成立中国泛娱乐IP生态联盟，将围绕手机迅雷打造一个新的移动端内容消费生态。"
            },
            {
                "h1":"迅雷领投国内虚拟现实企业-大朋VR",
                "p":"迅雷依托移动端云加速平台的用户下载数据，发布了2016年中迅数榜——手机迅雷上的中国，数据显示全国手机用户下载平均网速已达8Mb/s。"
            },
            {
                "h1":"迅雷联席CEO陈磊获2015年度牛耳杰出人物奖",
                "p":"迅雷依托移动端云加速平台的用户下载数据，发布了2016年中迅数榜——手机迅雷上的中国，数据显示全国手机用户下载平均网速已达8Mb/s。"
            }
        ]
    } //数据
    window.onscroll = function(){
        if (scrollside()) { 
                                    //满足条件的时候进行加载
            $.each(dataImg.data,function(index,value){      //遍历数据,需要2个参数，一个是位置，一个是数值
                var box = $("<div>").addClass("box").appendTo($(".news_wp"));//动态创建div，加个class名字，加载到container容器当中        
                var news_top = $("<div>").addClass("news_top").appendTo(box);                           
                var news_con = $("<div>").addClass("news_con").appendTo(box);                           
                var news_bot = $("<div>").addClass("news_bot").appendTo(box); 
                var h2 = $("<h2>").appendTo(news_top); 
                $("<a>").attr("href","#").html(value.h1).appendTo(h2); 
                var p =   $("<p>").appendTo(news_top);
                var span1 = $("<span>").appendTo(p);  
                $("<a>").attr("href","#").html("官方新闻").appendTo(span1);                  
                $("<span>").addClass('txt_time').html("2016-11-25").appendTo(p);                  
                var span2 = $("<span>").addClass('txt_read').html("1699").appendTo(p);
                $("<i>").addClass('ic_read').appendTo(span2); 
                //top结束
                //con开始
                var p = $("<span>").addClass('txt_news').html(value.p).appendTo(news_con);    
                 $("<a>").attr("href","#").html("阅读全文").appendTo(news_bot);               
            });
            // imgLocation();                                  //新添加的标签再遵循一遍imgLocation方法添加图片位置
        }
    };
});