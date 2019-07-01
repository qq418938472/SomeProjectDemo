(function(){
	window.preLoad=function(config){
		if(!config.lid||!config.pid||!config.nid||!config.srcs)
			return;
		config.time=config.time||0;
		var lpage=document.getElementById(config.lid),
			pBar=document.getElementById(config.pid),
		    nBar=document.getElementById(config.nid);
		var rate=0;
		var setProgress=function(){
			if(rate==100)
				setTimeout(function(){		
					lpage.className=lpage.className+" done";		
					if(config.callback&& typeof(config.callback)=="function")
						config.callback();				
				},100);
			var r=rate+"%";
			if(pBar)
				pBar.style.width=r;
			if(nBar)
				nBar.innerHTML=r;
		};
		var done=0,
			dt=Math.ceil(config.time/config.srcs.length),
			idx=-1,
			isTime=true,
			isLoad=true;
		var doneImg=function(){
			done++;
			rate=parseInt(done/config.srcs.length*100);
			setProgress();
			if(done<config.srcs.length)
				loadImg();
		};
		var loadImg=function(){
			isTime=isLoad=false;
			idx++;
			var img=new Image();
			setTimeout(function(){
				isTime=true;
				if(isLoad)
					doneImg();
			},dt);
			img.onerror=img.onload=function(){
				isLoad=true;
				if(isTime)
					doneImg();
			};
			img.src=config.srcs[idx];
		};
		loadImg();
	}
})();