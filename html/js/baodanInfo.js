// JavaScript Document
$(function(){
	//选择省市区
	var city_picker = new mui.PopPicker({layer:3});
	city_picker.setData(init_city_picker);
	$("#city").on("tap", function(){
		setTimeout(function(){
			city_picker.show(function(items){console.log(items);
				//$("#city_id").val((items[0] || {}).value + "," + (items[1] || {}).value + "," + (items[2] || {}).value);//该ID为接收城市ID字段
				$("#city").html((items[0] || {}).text + " " + (items[1] || {}).text + " " + (items[2] || {}).text);
			});
		},200);
	});

	//获取、失去焦点的图片切换
	$(document).on({
	    focus: function(){
	    	$(this).next().attr("src","images/icon/online_04.jpg");
	    },
	    blur: function(){
	    	$(this).next().attr("src","images/icon/online_03.jpg"); 
	    }
	},'#jiekMoney,#jiekLilv,#address,#floornum,#architecture');

	$(document).on({
	    focus: function(){
	    	$(this).next().attr("src","images/icon/online_02.jpg");
	    },
	    blur: function(){
	    	$(this).next().attr("src","images/icon/online_01.jpg");
	    }
	},'#jiekdy,#jiekTime,#city,#house,#plan,#houseinfor');

	//在线房产评估非空验证
	$(function(){
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
			
			var	jiekMoney = $("#jiekMoney").val(),  //借款金额
				jiekdy = $("#jiekdy").val(),        //抵押类型
				jiekTime = $("#jiekTime").val(),    //借款期限
				jiekLilv = $("#jiekLilv").val(),    //成单月利率
				jiekYongjin = $("#jiekYongjin").val(),  //借款佣金
				city = $("#city").html(),    //城市/区县
			    houseinfor = $("#houseinfor").val(),  //房本信息
				address = $("#address").val(),   //地址
				floornum = $("#floornum").val(),  //楼牌号
				architecture = $("#architecture").val(),  //建筑面积
				house = $("#house").val(), //房产性质
				plan = $("#plan").val();   //规划用途
 
			if(jiekMoney == ""){
				Maskbox();
				$("#tips").text("请输入借款金额");
			}else if(jiekTime == "请选择抵押类型"){
				Maskbox();
				$("#tips").text("请选择抵押类型");
			}else if(jiekTime == "请选择借款期限"){
				Maskbox();
				$("#tips").text("请选择借款期限");
			}else if(jiekLilv == ""){
				Maskbox();
				$("#tips").text("请输入成单月利率");
			}else if(jiekYongjin == ""){
				Maskbox();
				$("#tips").text("输入完借款信息后自动计算");
			}else if(houseinfor == "请选择有无房本"){
				Maskbox();
				$("#tips").text("请选择有无房本");
			}else if(city == ""){
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
			}else if(house == "请选择房产性质"){
				Maskbox();
				$("#tips").text("请选择房产性质");
			}else if(plan== "请选择规划用途"){
				Maskbox();
				$("#tips").text("请选择规划用途");
			}else{
				 window.location.href="https://www.baidu.com/";   
			}
		})

		//上传图片
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

	