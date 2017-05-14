// 登录界面登录函数
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
})
