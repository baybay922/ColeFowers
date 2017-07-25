// JavaScript Document
require(['jquery','main'],function($,main) {
	$(function() {
		$("input:visible").each(function(){
			$(this).val("");
		})

		// 输入框公共方法
		$("input").on("focus",function(){
			main.inpputFocus($(this));
		})
		$("input").on("blur",function(){
			$(this).siblings(".l_del").hide();
		})
		$(".l_del").on("touchend",function(e) {
			e.stopPropagation();
			e.preventDefault(); //阻止浏览器元素默认行为
			$(this).siblings("input").val("");
		})
		//用户名前端验证
		$("#userID").on("blur",function(e){
			e.stopPropagation();
			var name = $("#userID").val(),
					el = $(this);

			//用户名为空
			if(name==""){
				el.css({"border-bottom":"solid 1px #ffc281"}).next().text("请输入用户名").removeClass("pjTip").addClass("pjWrong").fadeOut(1500);
				$("#load").removeClass("test1");

			//用户名不合法
		}else if((/[^0-9]/g.test(name))){
				el.css({"border-bottom":"solid 1px #ffc281"}).next().text("您输入的用户名含有非法字符").removeClass("pjTip").addClass("pjWrong").fadeOut(1500);
				$("#load").removeClass("test1");
			}else{
					el.css({"border-bottom":"solid 1px #1ad8b0"}).next().slideUp();
					$("#load").addClass("test1");
					return false;
			}
			main.inpputBlur($(this));
		})

		//密码前端验证
		$("#passWord").on("blur",function(e){
			e.stopPropagation();
			var el = $(this);
				//密码为空
			if($(this).val()==""){
				el.next().text("请输入密码").removeClass("pjTip").addClass("pjWrong").fadeOut(1500);
				el.css({"border-bottom":"solid 1px #ffc281"});
				$("#load").removeClass("test4");

			}else{
				$("#load").addClass("test4");
				el.css({"border-bottom":"solid 1px #1ad8b0"});
				main.inpputBlur($(this));
				$(".l_regTip").hide();
			}
		})
		// 密码切换按钮
		$(".l_pswBtn").on("click",function(e) {
			e.stopPropagation();
			e.preventDefault(); //阻止浏览器元素默认行为
			$(this).toggleClass("l_pswBtn2");
			$(this).hasClass("l_pswBtn2")?$("#passWord").prop("type","text"):$("#passWord").prop("type","password");
		})
	})
})
