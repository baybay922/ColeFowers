// JavaScript Document
//require.js调用的主框架
require.config({
	urlArgs: "bust=" +  (new Date()).getTime(),
	paths:{
		"jquery":["lib/jquery-1.11.0.min"],
		"main" : ["main"]
	}
})
require(['jquery',"main"],function($,main) {
	$(function(){
		//倒计时
		$("#checkCodeB").on("click",function(){
			main.countDown();
		});

		function Maskbox(){
			var Top = document.documentElement.clientHeight/2-(parseInt($(".tipsBox").height())/2) +'px',
				Left = document.documentElement.clientWidth/2-(parseInt($(".tipsBox").width()))/2 +'px';
				$('.Maskbox').fadeIn(300);
				$('.tipsBox').css("top",Top);
				$('.tipsBox').css("left",Left);
				$('.tipsBox').slideDown(500);
		}

		$(".Determine").click(function(){
			$('.Maskbox').fadeOut(500);
			$('.tipsBox').slideUp(200);
		})
		$(".Maskbox").click(function(){
			$('.Maskbox').fadeOut(500);
			$('.tipsBox').slideUp(200);
		})
		//添加银行卡验证
		$("#addCardBtn").on("click",function(){
			
			var	khBank = $("#khBank").text(),
				idCard = $("#idCard").val(),
				bankName = $("#bankName").val();
				code = $("#code").val();

			// if(khBank == "请选择开户银行"){
			// 	Maskbox();
			// 	$("#tips").text("请选择开户银行");
			// }else 
			if(idCard == ""){
				Maskbox();
				$("#tips").text("请输入卡号");
			}
			else if(bankName == ""){
				Maskbox();
				$("#tips").text("请输入支行名称");
			}else if(code == ""){
				Maskbox();
				$("#tips").text("请输入验证码");
			}else{
				 window.location.href="https://www.baidu.com/";   
			}
			
		})

		//提现验证
		$("#tixCardBtn").on("click",function(){
			var	money = $("#money").val(),
				code2 = $("#code2").val();
			if(money == ""){
				Maskbox();
				$("#tips").text("请输入金额");
			}
			else if(money < 100){
				Maskbox();
				$("#tips").text("请输入大于100元的金额");
			}else if(code2 == ""){
				Maskbox();
				$("#tips").text("请输入验证码");
			}else{
				 window.location.href="https://www.baidu.com/";   
			}
			
		})
	})
})
