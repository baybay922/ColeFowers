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
		//验证姓名
		//
		$("#Submit").on("click",function(){
			var nameVal = $("#monicker").val(),
				IdVal = $("#identification").val();
			if(nameVal == "" || IdVal == ""){
				swal(
					'姓名或者身份证不能为空',
					'',
					'warning'
				)
			}
		})

		$("#identification").on("input",function(){
			main.limitNUM(18);
		})
	})

})
