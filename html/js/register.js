// JavaScript Document
require(['jquery','main','swal'],function($,main,swal) {
	$(function() {
		$("input:visible").each(function(){
			$(this).val("");
		})

		// 输入框公共方法
		$("input").on("focus",function(){
			main.inpputFocus2($(this));
		})
		$("input").on("blur",function(){
			$(this).siblings(".l_del").hide();
		})
		$(".l_del").on("touchend",function(e) {
			e.stopPropagation();
			e.preventDefault(); //阻止浏览器默认行为
			$(this).siblings("input").val("");
		})
		//手机号码格式前端验证
		$("#telNum").on("blur",function(e){
			e.stopPropagation();
			var el = $(this);
			if ($("#telNum").val() == "") {
				el.css({"border":"solid 1px #ffc281"}).next().text("请输入手机号码").removeClass("pjTip").addClass("pjWrong").fadeOut(1500);
				$("#load").removeClass("test2");
			}else if (!(/^1[3|4|5|8|7][0-9]\d{4,8}$/.test($("#telNum").val()))) {
				el.css({"border":"solid 1px #ffc281"}).next().text("请输入正确的手机号码").removeClass("pjTip").addClass("pjWrong").fadeOut(1500);
				$("#load").removeClass("test2");
			}else{
				$("#load").addClass("test2");
				el.css({"border":"solid 1px #1ad8b0"}).next().hide();
				$("#telNum").css({"border":"solid 1px #1ad8b0"});
			};

		});

		// 获取验证码按钮点击验证手机号码
		$("#checkCodeB").on("click",function(e){
			e.stopPropagation();
			var el = $(this);
			if ($("#load").hasClass("test2")) {
				//此处添加向用户手机发送验证码短信功能
				main.countDown(60);
			}else{
				$("#telNum").css({"border":"solid 1px #ffc281"}).next().text("请输入正确的手机号码").removeClass("pjTip").addClass("pjWrong").fadeOut(1500);
				$("#load").removeClass("test2");
			};
		});

		//短信验证码前端验证
		$("#checkCode").on("blur",function(e){
			e.stopPropagation();
			var el = $(this);
				//验证码为空
			if(el.val()==""){
				el.css({"border":"solid 1px #ffc281"}).next().text("验证码不能为空").removeClass("pjTip").addClass("pjWrong").fadeOut(1500);
				$("#load").removeClass("test3");

				//验证码不合法
			}else if((/[^0-9]/g.test(el.val()))){
				el.css({"border":"solid 1px #ffc281"}).next().text("您输入的验证码含有非法字符").removeClass("pjTip").addClass("pjWrong").fadeOut(1500);
				$("#load").removeClass("test3");

				//验证码长度不合法
			}else if(el.val().length>6){
				el.css({"border":"solid 1px #ffc281"}).next().text("您输入的验证码长度不正确").removeClass("pjTip").addClass("pjWrong").fadeOut(1500);
				$("#load").removeClass("test3");
			}else{
				$("#load").addClass("test3");
				$("#checkCode").css({"border":"solid 1px #1ad8b0"}).next().hide();
				main.inpputBlur($(this));
			}
		})

		//密码前端验证
		$("#passWord").on("blur",function(e){
			e.stopPropagation();
			var el = $(this);
				//密码为空
			if($(this).val()==""){
				el.next().text("密码不能为空").removeClass("pjTip").addClass("pjWrong").fadeOut(1500);
				el.css({"border":"solid 1px #ffc281"});
				$("#load").removeClass("test4");
				// console.log(index);

				//密码不合法
			}else if((/[^A-Za-z0-9]/g.test($(this).val()))){
				el.next().text("您设置的密码含有非法字符").removeClass("pjTip").addClass("pjWrong").fadeOut(1500);
				el.css({"border":"solid 1px #ffc281"});
				$("#load").removeClass("test4");

				//密码长度不合法
			}else if($(this).val().length<6||$(this).val().length>16){
				el.css({"border":"solid 1px #ffc281"}).next().text("您设置的密码长度不正确").removeClass("pjTip").addClass("pjWrong").fadeOut(1500);
				$("#load").removeClass("test4");
			}else{
				$("#load").addClass("test4");
				el.css({"border":"solid 1px #1ad8b0"}).next().hide();
				main.inpputBlur($(this));
				$(".l_regTip").hide();
			}
		})

		//登录按钮异步验证
		$("#load").on("click",function() {


		 	//用户名密码都不为空
			if( $("#load").hasClass("test2") && $("#load").hasClass("test3") && $("#load").hasClass("test4") ){
				if ($("input[type='checkbox']").is(":checked")) {
					var name = $("#userID").val(),
					telNum = $("#telNum").val(),
					checkCode = $("#checkCode").val(),
					passWord = $("#passWord").val();
				window.name = name;
				window.location="indexNew.html"; //本地测试样式使用，线上环境请删除此行。
				// $.ajax({
				// 	type:"POST",
				// 	url:"#",
				// 	dataType:"json",
				// 	data:{
				// 		"userID":name,
				// 		"telNum":telNum,
				// 		"checkCode":checkCode,
				// 		"passWord":passWord,
				// 		},
				// 	succsee:function(data){
				// 		if(data.success){
				// 			location.href="#"; //定向到首页
				// 		}else{
				// 			$("body").append("<div class='l_errr'>"
				// 			 + val   //加入错误提示
				// 			 + "</div>");
				// 			$(".l_errr").show();
				// 			$(".l_errr").fadeOut(2000,function(){
				// 			$(".l_errr").remove();
				// 			});
				// 		};
				// 	},
				// 	error:function(){
				// 				alert("发生错误："+jqXHR.status);
				// 	}

				// })
				}else{
					swal(
						'请勾选同意《注册协议》',
						'',
						'warning'
					)
				}
			}else{
				swal(
					'请完善注册信息',
					'',
					'warning'
				)
				return false;
			}
		})

		// 密码切换按钮
		$(".l_pswBtn").on("click",function(e) {
			e.stopPropagation();
			e.preventDefault(); //阻止浏览器元素默认行为
			$(this).toggleClass("l_pswBtn2");
			$(this).hasClass("l_pswBtn2")?$("#passWord").prop("type","text"):$("#passWord").prop("type","password");
		})
		// 密码切换按钮
		$(".l_uncheck").on("click",function(e) {
			e.stopPropagation();
			e.preventDefault(); //阻止浏览器元素默认行为
			$(this).toggleClass("l_checked");
		})
	})
})
