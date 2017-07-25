// JavaScript Document
//require.js调用的主框架
require.config({
	urlArgs: "bust=" +  (new Date()).getTime(),
	paths:{
		"jquery":["lib/jquery-1.11.0.min"],
		"main":["main"],
		"swal":["lib/sweetalert2"]
	}
})
require(['jquery','main','swal'],function($,main,swal) {
	$(function() {
		var overscroll = function(el) {//阻止浏览量默认滚动
		  el.addEventListener('touchstart', function() {
		    var top = el.scrollTop
		      , totalScroll = el.scrollHeight
		      , currentScroll = top + el.offsetHeight
		    if(top === 0) {
		      el.scrollTop = 1
		    } else if(currentScroll === totalScroll) {
		      el.scrollTop = top - 1
		    }
		  })
		  el.addEventListener('touchmove', function(evt) {
		    if(el.offsetHeight < el.scrollHeight)
		      evt._isScroller = true
		  })
		}
		overscroll(document.querySelector('.l_NewScroll'));
		document.body.addEventListener('touchmove', function(evt) {
		  if(!evt._isScroller) {
		    evt.preventDefault()
		  }
		})
		$(".page").on("touchstart",function(event){
			event.stopPropagation();
		})
		//切换
		$("#tit_list").on("click","li",ComprehensiveSwitch);
		function ComprehensiveSwitch(){
			var ind = $(this).index(),
				page = $("#pages").find("ul");
			$(this).addClass("cur").siblings().removeClass("cur");
			page.eq(ind).animate({
				"opacity":1,
				"left":0
			},300).siblings().animate({
				"opacity":0,
				"left":-1000+"px"
			},300)

		}
	})

})
