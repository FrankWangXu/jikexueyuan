$("#add-btn").on("click",function(){
	// 日期自动检测当前日期并显示在面板中
	$("#gray").show();
	$(".news-panel").show();
	var myDate = new Date();
	var year = myDate.getFullYear();
	var month = myDate.getMonth();
	var date = myDate.getDate();
	$(".news-panel input").val("");
	$(".news-panel textarea").val("");
	$(".input-date").val(year+"-"+month+"-"+date);
	BG.saveCode=1;
});
