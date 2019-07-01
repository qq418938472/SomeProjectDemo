(function () {
	Tools.activeNav(0);
	Tools.showUser();
	$(".tipSuccess .pop_close").click(function(){
		$(".tipSuccess").hide();
		$(".cover").hide();
	});
	$(".tipFail .pop_close").click(function(){
		$(".tipFail").hide();
		$(".cover").hide();
	});
	$(".tipAlert .pop_close").click(function(){
		$(".tipAlert").hide();
		$(".cover").hide();
	});
	$(".code_show .pop_close").click(function(){
		$(".code_show").hide();
	});
})();