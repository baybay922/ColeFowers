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
		
		//滚动加载
		$(document).on("scroll",function(){
			if(main.scrollLoading("kaiCard","l_NewScroll")) {
				alert("加载后续列表");
				// 此处写加载列表的方法
			}
			
		})
	})
})
