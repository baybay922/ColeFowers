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


		//手机验证
		$("#checkCodeB").on("click",function(){
			var phoneVal = $("#phoneNum").val();
			if(phoneVal == ""){
				swal(
					'手机号不能为空',
					'',
					'warning'
				)
			}else if(!(/^1[3|4|5|8|7][0-9]\d{4,8}$/.test(phoneVal))){
				swal(
					'请输入正确的手机格式',
					'',
					'warning'
				)
			}else{
				main.countDown()
			}
		})
		$("#NextStep").on("click",function(){
			var codeVal = $("#Verification").val();
			if(codeVal == ""){
				swal(
					'验证码不能为空',
					'',
					'warning'
				)
			}
		})

		//位数限制
		$(".phoneNum").on("input",function(){
			main.limitNUM(11);
		})
		$(".Verification").on("input",function(){
			main.limitNUM(4);
		})
	})

})
