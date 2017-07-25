// JavaScript Document
//require.js调用的主框架
require.config({
	urlArgs: "bust=" +  (new Date()).getTime(),
	paths:{
		"jquery": ["lib/jquery-1.11.0.min"],
		"swiper": ["lib/swiper.min"]
	}
})
require(['jquery', 'swiper'],function($,swiper) {
	$(function() {
		var overscroll = function(el) {//阻止浏览量默认滚动
		  el.addEventListener('touchstart', function() {
		    var top = el.scrollTop
		      , totalScroll = el.scrollHeight
		      , currentScroll = top + el.offsetHeight
		    //If we're at the top or the bottom of the containers
		    //scroll, push up or down one pixel.
		    //
		    //this prevents the scroll from "passing through" to
		    //the body.
		    if(top === 0) {
		      el.scrollTop = 1
		    } else if(currentScroll === totalScroll) {
		      el.scrollTop = top - 1
		    }
		  })
		  el.addEventListener('touchmove', function(evt) {
		    //if the content is actually scrollable, i.e. the content is long enough
		    //that scrolling can occur
		    if(el.offsetHeight < el.scrollHeight)
		      evt._isScroller = true
		  })
		}
		overscroll(document.querySelector('.l_NewScroll'));
		document.body.addEventListener('touchmove', function(evt) {
		  //In this case, the default behavior is scrolling the body, which
		  //would result in an overflow.  Since we don't want that, we preventDefault.
		  if(!evt._isScroller) {
		    evt.preventDefault()
		  }
		});


		var swiper = new Swiper('.swiper-container', {//首页焦点图调用
				pagination : '.swiper-pagination',
				paginationClickable : true,
				autoplay : 3000,
				loop : true
		});

		function navTab(el) {
		  el.children("span").addClass("checked").siblings("p").addClass("pjBlue");
		  el.siblings().children("span").removeClass("checked").siblings("p").removeClass("pjBlue");;
		}
		$("footer li").on("touchend",function () {
		    navTab($(this));
		})

		
	})

})
