// JavaScript Document
require(['jquery'],function($) {
	$(function() {
		$("#erCode").on("touchend",function (e) {
			e.preventDefault();
			e.stopPropagation();
			$(this).addClass("l_transition").toggleClass("l_bigImg");
			$(document).on("touchend",function(e){
				e.preventDefault();
				e.stopPropagation();
				$("#erCode").toggleClass("l_bigImg");
				$(this).off("touchend");
			});
		})
	})
})
