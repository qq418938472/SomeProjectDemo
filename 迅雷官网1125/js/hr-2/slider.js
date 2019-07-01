function Slider(opt) {
	this.$ele        = $('#' + opt.id);							//容器
	this.$slider     = this.$ele.find('.' + opt.sliderClass);	//内容	
	this.$pages      = this.$slider.find('.' + opt.pageClass);  //单页
	this.delta       = opt.delta  || 60;						//鼠标滚动距离
	this.width       = opt.width  || 0;							//容器宽度，可不设置，默认为窗口宽度
	this.height      = opt.height || 0;							//容器高度，可不设置，默认为窗口高度
	this.transition  = opt.transition || .5;     				//内容滚动transition，可不设置，默认.5s
	this.callback    = opt.callback;							//回调
	this.initPage    = opt.initPage || 0;						//初始化开始页面

	this._delta      = 0;										//滚轮每次滚动距离
	this._curPos     = 0;										//变量，内容当前滚动位置
	this._curPercent = 0;										//变量，内容当前滚动位置百分比
	this._isEnd      = false;									//变量，滚动到尾部了

	this._init();
}        
// 初始化
Slider.prototype._init = function() {
	var that = this;
	that.$ele.css({
		'overflow': 'hidden'
	});

	that.$pages.css({
		'float': 'left',
		'height': '100%'
	});

	that._setSize();
	that._bindHandler();
	that.gotoPage(that.initPage);
	
}

// 绑定事件
Slider.prototype._bindHandler = function() {

	var that = this;

	//窗口重置事件
	$(window).resize(function(e) {
		that._setSize();
	});

	//鼠标滚轮事件
	that.$ele.on('mousewheel DOMMouseScroll', function (e, delta) {
		var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail * 40,
			pos = that._curPos + that.delta * Math.abs(delta) / delta;	

		that.setPosition(pos);


	});

	// 鼠标左右翻页
	$('body').on('keyup', function(e) {
		var key = e.keyCode;
		that._jumpPage(key - 38);
	});
}

Slider.prototype.gotoPage = function(page) {
	var that = this;
	that.setPosition(-page * that.$ele.width(), .001);
}

//整屏滚动，dir 方向，1向前，-1后退
Slider.prototype._jumpPage = function(dir) {

	var that = this,
		oriW = that.$ele.width(),
		pastpage = Math.floor(Math.abs(that._curPos) / oriW) ,	//已跳过页数
		leave = that._curPos % oriW;				//当前页已移动距离

	var pos = that._curPos;
	if(1 === dir) {
		pos = -oriW * (pastpage + 1)
	}
	else {
		pos = -oriW * (pastpage - 1)
	}

	that.setPosition(pos, .8);
}


// 设置容器与内容尺寸
Slider.prototype._setSize = function() {

	var that = this,
		oriW = that.$ele.width(),
		sliW = that.$slider.width();

	// 重置，防止滚动条宽度影响
	that.$ele.css({
		'width': 0,
		'height': 0
	});
	that.$slider.css({
		'height': 0
	});


	var	w = that.width || $(window).outerWidth(),
		h = that.height || $(window).outerHeight();

	that.$ele.css({
		'width': w,
		'height': h
	});
	that.$slider.css({
		'width': w * that.$pages.length,
		'height': h
	});
	that.$pages.css({
		'width': w,
	});

	

	if(that._isEnd && oriW < w) {
		var pos = w -sliW;
		that.setPosition(pos, .001);
	}
	
	
	if(that._curPos + sliW < w) {
		that.setPosition(w - sliW, .001);
	}
	
}

// 设置内容位置
Slider.prototype.setPosition = function(pos, transition) {

	var that = this;
	
	var max = 0,
		min = -that.$ele.width() * (that.$pages.length - 1),
		lastpos = that._curPos;
	
	//判断是否首尾
	if(pos <= min) {
		that._curPos = min;
		that._isEnd = true;
	}
	else if(pos >= max) {
		that._curPos = max;
		that._isEnd = false;
	}
	else {
		that._curPos = pos;
		that._isEnd = false;
	}



	var element = document.createElement('div');
	if('transform' in element.style) {
		that.$slider.css({
			'transform': 'translateX(' + that._curPos + 'px)',
			'transition': 'transform ' + (transition || that.transition) + 's'
		});
	}
	else {
		that.$slider.css({
			'margin-left': that._curPos + 'px'
		});
	}

	that._curPercent = Math.abs(that._curPos) / that.$slider.width() * 100;

	if('function' === typeof that.callback) {
		that.callback({
			percent: that._curPercent,
			pos: -that._curPos,
			paging: Math.floor(Math.abs(that._curPos) / that.$ele.width()),
			direction: (lastpos - pos) / Math.abs(lastpos - pos),
			pagesInfo: that._getpagesInfo(),
			delta: that._delta
		})
	}
}

Slider.prototype._getpagesInfo = function() {
	var that = this,
		pos = -that._curPos,
		oriW = that.$ele.width(),
		sliW = that.$slider.width();


	var info = [];	
	for(var i = 0, len = that.$pages.length; i < len; i += 1) {
		info[i] = {};
		info[i].pos = pos - oriW * i + oriW;
		info[i].percent = info[i].pos / oriW * 100;
	}	
	return info;

}


