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
		var str ="";
		$('input[type="file"]').each(function(i,ele){
			$(ele).on("change",function(){
				console.log(ele)
				upload.GetPicturesUrl($(this));
			})
		})
		
		$(".Deposit").on("click","p",function(){
			upload.delectImgBox($(this));
		})

		function Upload(){
			var self = this;
			self.GetPicturesUrl = function($this){
				var fileUrl = $this.val();//获取图片路径
				console.log(fileUrl)
				str+='<img src="'+fileUrl+'" alt="" /><p class="close" id="close">×</p>';				
				$this.next("div.Deposit").css({
					"z-index":1
				}).html(str)
				str="";		
				$this.val("");			
			},
			self.delectImgBox = function($this){
				$this.parent("div.Deposit").css({
					"z-index":-1
				}).html("");
			}					
		}
		var upload = new Upload();
	})

})
