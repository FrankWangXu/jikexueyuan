//全局变量储存器（尽量避免全局污染）
var BDN = {
	newsCode:1,
	newsType:"recommend"
};

// 立即执行函数
(function(){
	showContent();
	chooseNewsType();
	goBack();
	preventA();
})();

// 显示内容函数
// Ajax链接PHP获取数据库中相应数据表的内容并显示在html中
function showContent(){
	// 清空已有内容
	$(".news-box").remove();
	$.ajax({
		type:"GET",
		url:"php/getData.php",
		data:{
			newsType:BDN.newsType
		},
		dataType:"json",
		success:function(data){
			//如果该类新闻列表无新闻或被删除完了，显示列表为空，否则将内容添加在html中
			if (data == "blank") {
				$("<div>").addClass("news-box").attr("style","text-align:center").text($(".type-text-active").text() + "新闻列表为空...").appendTo(".news-container");
			}else{
				// 遍历每一条新闻
				$.each(data,function(index,value){
					// 为每个新闻盒子绑定点击事件，若点击跳转到内容页并显示相应内容
					var newsBox = $("<div>").addClass("news-box").appendTo(".news-container").on("click",function(){
						$(".home-page").hide();
						$(".content-page").show();
						$(".cp-head-title").text($(".type-text-active").text());
						$(".cp-article-title").text(value.title);
						$(".cp-article-date").text(value.date);
						$(".cp-article-img").attr("src",value.pic);
						$(".cp-article-text").text(value.content);
					});
					//判断图片链接是否为空
					if (value.pic) {
						$("<img>").attr("src",value.pic).addClass("news-img").appendTo(newsBox);
					}
					var mainText = $("<div>").addClass("news-maintext").appendTo(newsBox);
					$("<div>").addClass("news-title").text(value.title).appendTo(mainText);
					var description = value.content;
					description = description.substring(1,40) + "...";
					$("<div>").addClass("news-description").text(description).appendTo(mainText);
					var newsBottom = $("<div>").addClass("news-bottom").appendTo(mainText);
					//判断标签是否为空
					if (value.label) {
						$("<div>").addClass("news-label").text(value.label).appendTo(newsBottom);
					}
					$("<div>").addClass("news-date").text(value.date).appendTo(newsBottom);
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
			BDN.typeCode=index+1;
			switch (BDN.typeCode){
				case 1:
					BDN.newsType = "recommend";
					break;
				case 2:
					BDN.newsType = "hundred";
					break;
				case 3:
					BDN.newsType = "local";
					break;
				case 4:
					BDN.newsType = "img";
					break;
				case 5:
					BDN.newsType = "entertainment";
					break;
				case 6:
					BDN.newsType = "social";
					break;
				case 7:
					BDN.newsType = "military";
					break;
				case 8:
					BDN.newsType = "internet";
					break;
				case 9:
					BDN.newsType = "technology";
					break;
				case 10:
					BDN.newsType = "woman";
					break;
				default:
					break;
			}
			//选中的新闻类型变成激活状态
			$(".type-text").removeClass("type-text-active");
			$(this).find(".type-text").addClass("type-text-active");
			showContent();
		});
	});
}

// 阻止默认行为函数
function preventA(){
	$("a").on("click",function(event){
		event.preventDefault();
	});
}

//返回首页页面函数
//点击内容页面左上角返回按钮，返回到首页
function goBack(){
	$(".cp-back").on("click",function(){
		$(".content-page").hide();
		$(".home-page").show();
		$(".cp-head-title").text("");
		$(".cp-article-title").text("");
		$(".cp-article-date").text("");
		$(".cp-article-img").attr("src","");
		$(".cp-article-date").text("");
	});
}

