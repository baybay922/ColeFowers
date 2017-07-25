// JavaScript Document
//require.js调用的主框架
require.config({
	urlArgs: "bust=" +  (new Date()).getTime(),
	paths:{
		"jquery":["lib/jquery-1.11.0.min"],
		"main" : ["main"]
	}
})
require(['jquery',"main"],function($,main){
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
		//在线房产评估的非空验证
		$(".onLineBtn").on("click",function(){
			
			var	city = $("#city").val(),
				// county = $("#county").val(),
				address = $("#address").val();
				floornum = $("#floornum").val();
				architecture = $("#architecture").val();
				house = $("#house").val();
				plan = $("#plan").val();
 
			if(city == ""){
				Maskbox();
				$("#tips").text("请选择城市");
			}else if(address == ""){
				Maskbox();
				$("#tips").text("请输入小区名称／地址");
			}else if(floornum == ""){
				Maskbox();
				$("#tips").text("请输入小区楼牌号");
			}else if(architecture == ""){
				Maskbox();
				$("#tips").text("请输入建筑面积");
			}else if(house == ""){
				Maskbox();
				$("#tips").text("请选择房产性质");
			}else if(plan == ""){
				Maskbox();
				$("#tips").text("请选择规划用途");
			}else{
				 window.location.href="https://www.baidu.com/";   
			}
			
		})

	})
})
