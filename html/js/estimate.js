// JavaScript Document
require(['jquery','main','swal'],function($,main,swal) {
	$(function() {
		// 分页加载效果
		$(window).on("scroll",function() {
				if (main.scrollLoading("mainBox","l_NewScroll")) {
					alert("加载后续页面")
				}
		})

	})
})
