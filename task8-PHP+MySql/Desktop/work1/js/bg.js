//全局变量储存器（尽量避免全局污染）
var BG = {
	newsCode:1,
	newsType:"recommend"
};

// 立即执行函数
(function(){
	login();
	quit();
	showContent();
	chooseNewsType();
	addNews();
	tc_center();
	closePanel();
	save();
})();

// 显示内容函数
// Ajax链接PHP获取数据库中相应数据表的内容并显示在html中
function showContent(){
	// 清空已有内容
	$(".content-box").remove();
	$.ajax({
		type:"GET",
		url:"php/getData.php",
		data:{
			newsType:BG.newsType
		},
		dataType:"json",
		success:function(data){
			//如果该类新闻列表无新闻或被删除完了，显示列表为空，否则将内容添加在html中
			if (data == "blank") {
				$("<tr>").addClass("content-box").attr("style","text-align:center").text($(".news-type-active").text() + "新闻列表为空...").appendTo(".news-container");
			}else{
				// 遍历每一条新闻
				$.each(data,function(index,value){
					var newsBox = $("<tr>").addClass("content-box").appendTo(".news-container");
					$("<td>").addClass("ch-id").text(value.id).appendTo(newsBox);
					$("<td>").addClass("ch-title").text(value.title).appendTo(newsBox);
					$("<td>").addClass("ch-label").text(value.label).appendTo(newsBox);
					$("<td>").addClass("ch-pic").text(value.pic).appendTo(newsBox);
					$("<td>").addClass("ch-content").text(value.content).appendTo(newsBox);
					$("<td>").addClass("ch-date").text(value.date).appendTo(newsBox);
					var btn=$("<input type='button' value='修改' class='modify' attr-id='"+value.id+"' attr-title='"+value.title+"' attr-label='"+value.label+"' attr-pic='"+value.pic+"' attr-content='"+value.content+"' attr-date='"+value.date+"'>");
            		$("<td>").append(btn).appendTo(newsBox);
					var btn=$("<input type='button' value='删除' class='delete' attr-id='"+value.id+"''>");
            		$("<td>").append(btn).appendTo(newsBox);
				});
			}
		},
		error:function(XMLHttpRequest){
			// 通讯失败提醒并返回状态码
			alert("通讯失败："+XMLHttpRequest.status);
		}
	});
}

//选择新闻类型函数
//判断点击对应的哪个类型码和新闻类型，从而选择相应的数据表显示
function chooseNewsType(){
	$(".news-type").each(function(index){
		$(this).on("click",function(){
			BG.typeCode=index+1;
			switch (BG.typeCode){
				case 1:
					BG.newsType = "recommend";
					break;
				case 2:
					BG.newsType = "hundred";
					break;
				case 3:
					BG.newsType = "local";
					break;
				case 4:
					BG.newsType = "img";
					break;
				case 5:
					BG.newsType = "entertainment";
					break;
				case 6:
					BG.newsType = "social";
					break;
				case 7:
					BG.newsType = "military";
					break;
				case 8:
					BG.newsType = "internet";
					break;
				case 9:
					BG.newsType = "technology";
					break;
				case 10:
					BG.newsType = "woman";
					break;
				default:
					break;
			}
			//选中的新闻类型变成激活状态
			$(".news-type").removeClass("news-type-active");
			$(this).find(".news-type").addClass("news-type-active");
			// $("<div>").addClass("content-news-type").attr("style","text-align:center").text($(".news-type-active").text() + "栏目数据").appendTo(".content-page");
			$(".active").text($(".news-type-active").text() + "栏目数据");
			showContent();
		});
	});
}

// 删除新闻函数
// 通过Ajax与php通信，找到数据库中相应的新闻并删除
setTimeout(function(){
	$(".delete").click(function(){
		var id = $(this).attr('attr-id');
		var data = {
			'id':id,
			'newsType':BG.newsType,
		};
		var url = "php/delete.php";
		$.post(url,data,function(){
			alert("删除成功");
			showContent();
		},"JSON")
	});
}, 2000);

// 修改新闻函数
setTimeout(function(){
	$(".modify").click(function(){
	var id = $(this).attr('attr-id');
	var title= $(this).attr('attr-title');
	var label= $(this).attr('attr-label');
	var pic = $(this).attr('attr-pic');
	var content = $(this).attr('attr-content');
	var date = $(this).attr('attr-date');
	$("#gray").show();
	$(".news-panel").show();
	$("#title").val(title);
	$("#label").val(label);
	$("#pic").val(pic);
	$("#content").val(content);
	$("#date").val(date);
	BG.saveCode=2;
	BG.thisId=id;
    });
}, 1000);

//添加新闻函数
//点击添加按钮，呼出添加新闻面板
function addNews(){
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
}

//关闭面板函数
function closePanel(){
	$(".closePanel").on("click",function(){
		$("#gray").hide();
		$(".news-panel").hide();
		$(".news-panel input").val("");
		$(".news-panel textarea").val("");
	});
}

// 保存函数
// 控制新闻添加和修改面板保存按钮的功能，当必填项为空时提示，当保存码为1时进行添加新闻操作，保存码为2时进行新闻修改操作
function save(){
	$(".save-btn").on("click",function(){
		if (!$("#title").val()) {
			//标题为必填
			alert("新闻标题不能为空");
			$("#title").focus();
		}else if (!$("#content").val()) {
			//内容必填
			alert("新闻内容不能为空");
			$("#content").focus();
		}else if (!$("#date").val()) {
			//时间必填
			alert("新闻时间不能为空");
			$("#date").focus();
		}else{
			if (BG.saveCode == 1) {
				//保存码为1.添加新闻
				$.ajax({
					type:"POST",
					url:"php/add.php",
					data:{
						newsType:BG.newsType,
						title:$("#title").val(),
						label:$("#label").val(),
						pic:$("#pic").val(),
						content:$("#content").val(),
						date:$("#date").val()
					},
					success:function(data){
						alert("保存成功");
						showContent();
						closePanel();
					},
					error:function(XMLHttpRequest){
						alert("通讯失败：" + XMLHttpRequest.status);
					}
				});
			}else if (BG.saveCode == 2) {
				// 保存码为2,修改新闻
				$.ajax({
					type:"POST",
					url:"php/modify.php",
					data:{
						newsType:BG.newsType,
						id:BG.thisId,
						title:$("#title").val(),
						label:$("#label").val(),
						pic:$("#pic").val(),
						content:$("#content").val(),
						date:$("#date").val()
					},
					success:function(data){
						alert("保存成功");
						showContent();
						closePanel();
					},
					error:function(XMLHttpRequest){
						alert("通讯失败：" + XMLHttpRequest.status);
					}
				});
			}
		}
	});
}

// 登录界面登录函数
function login(){
	$(".login-btn").on("click",function(){
		//判断输入框是否为空
		if (!$("#account").val()) {
			alert("请输入用户名");
			$("#account").focus();
		}else if (!$("#password").val()) {
			alert("请输入密码");
			$("#password").focus();
		}else{
			//输入框输入正常则与php通讯
			$.ajax({
				type:"POST",
				url:"php/login.php",
				dataType:"json",
				data:{"username":$("#account").val(),"password":$("#password").val()},
				success:function(data){
					//通过num值来检验是否输入的账号密码与数据库中所存的一致
					if (data.code == 'success') {
						alert("登录成功");
						$(".login-page").hide();
						$(".bg-page").show();
					}else if (data.code == 'error') {
						alert("用户名密码错误");
					}
				},
				error:function(XMLHttpRequest){
					alert("通讯失败" + XMLHttpRequest.status);
				}
			})
		}
	});
}

// 退出管理系统函数
// 点击管理系统右上角退出按钮，退出后台管理系统并返回到登陆界面
function quit(){
	$(".quit-btn").on("click",function(){
		$("#password").val("");
		$(".login-info").text("");
		$("bg-page").hide();
		$(".login-page").show();
	});
}

//窗口水平居中
function tc_center() {
    var _top = ($(window).height() - $(".popup").height()) / 2;
    var _left = ($(window).width() - $(".popup").width()) / 2;
    $(".popup").css({ top: _top, left: _left });
}