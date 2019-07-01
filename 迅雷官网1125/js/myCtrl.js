//记事本文件的控制器
myApp.controller('myCtrl',function($scope,$interval){
	// 初始化下标
		
        $scope.index = 0;
        //首页应用

        // dot定义为一个数组
        $scope.dot = ['','','',''];
        $scope.Zindex = ['','','',''];

        // 定义下一页的方法
        $scope.next = function(){
            // $scope.Zindex -= 1;
            $scope.index = (++$scope.index>3)?0:$scope.index;
            $scope.showDot();
            $scope.showImg();
        }

        // 定义上一页的方法
        $scope.pre = function(){
            // $scope.Zindex += 1;
            $scope.index = (--$scope.index<0)?3:$scope.index;
            $scope.showDot();
            $scope.showImg();
        }
        

        // 显示轮播图片的下标位置方法
        $scope.showDot = function(){
            for(var i=0; i<$scope.dot.length; i++){
                $scope.dot[i] = 'off';
            }
            $scope.dot[$scope.index] = 'on';
            console.log( $scope.dot);
        }

        $scope.showDot();

        //显示当前点击图片的方法
        $scope.showImg = function(){
            for(var i=0; i<$scope.Zindex.length; i++){
                $scope.Zindex[i] = 0;
            }
            $scope.Zindex[$scope.index] = 1;
            console.log( $scope.Zindex);
        }

        $scope.showImg();
        // 点击下标来改变图的方法
        $scope.selectDot = function(newIndex){
            
            $scope.left = $scope.left - (newIndex-$scope.index)*1000;
            $scope.index = newIndex;
            $scope.showDot();
            $scope.showImg();
        }

        //自动轮播的方法
       var int;
       int = $interval(function(){
            $scope.next();
       },3000);

       //鼠标移入停止自动轮播
       $scope.mouseover = function(){
            $interval.cancel(int);
       }
       $scope.mouseleave = function(){
            int = $interval(function(){
                $scope.next();
           },3000);
       }

       
       $scope.sites = [
            {site : "360P(300kbps)", url : "300"},
            {site : "480P(600kbps)", url : "600"},
            {site : "720P(1200kbps)", url : "1200"},
            {site : "1080P(2000kbps)", url : "2000"}
        ];
        $scope.selectedSite1=$scope.sites[0].url;

        $scope.numbers = [
            {site : "100", url : "100"},
            {site : "500", url : 500*0.9},
            {site : "1000", url : 1000*0.9},
            {site : "5000", url : 5000*0.8},
            {site : "10000", url : 10000*0.8}
        ];
        $scope.selectedSite2=$scope.numbers[0].url;

        $scope.type = [
            {site : "极速版", url : "0.0007"},
            {site : "旗舰版", url : "0.00035"}
        ];
        $scope.selectedSite3=$scope.type[0].url;


});