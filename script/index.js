

$(document).ready(function(){

	
	// 删除顶部广告
	$(".app_download img").click(function(){
		$(".app_download").remove();
	})

	// 掌上来本
	$(".inpone").hover(function(){
		$(".inpone_meun").show();
		
	},function(){
		$(".inpone_meun").hide();
	});

	// 客服服务
	$(".service").hover(function(){
		$(".service_meun").show();
		$(".service>a").css("background-position","65px -13px");
	},function(){
		$(".service_meun").hide();
		$(".service>a").css("background-position","65px 13px");
	});

	// 我的来本
	$(".header_my_box").hover(function(){
		$(".my_menu").show();
		$(".header_my_box >a").css("background-position","98px -9px");
	},function(){
		$(".my_menu").hide();
		$(".header_my_box >a").css("background-position","98px 17px");
	});
	// 购物车
	$(".header_buy_box").hover(function(){
		$(".buy_menu").show();
		$(".header_buy_box >a").css("background-position","98px -9px");
	},function(){
		$(".buy_menu").hide();
		$(".header_buy_box >a").css("background-position","98px 17px");
	});

	

	// nav
	$(".header_list li").hover(function(){
		$(this).addClass("cur");
		
	},function(){
		$(this).removeClass("cur");
	});

	// 菜单箭头控制
	$(".banner").hover(function(){
        $(".control_box").show();
    },function(){
         $(".control_box").hide();
    })

		// 新品上线
     $(".new_box li").mouseover(function(){
     	$(this).addClass("on").siblings().removeClass("on");
     	 var index = $(this).index();  
    	 //根据这个索引切换，下面的展示  
     	$(".list_produc").eq(index).show().siblings().hide();  
     })


     // 时令鲜果

      $(".list_tab li").mouseenter(function(){
     	$(this).addClass("in").siblings().removeClass("in");
     	 var index = $(this).index();  
    	 //根据这个索引切换，下面的展示  
     	$(".produc1").eq(index).show().siblings().hide();  
     })

      	// 水产海鲜
       $(".list_tab1 li").mouseenter(function(){
     	$(this).addClass("in").siblings().removeClass("in");
     	 var index = $(this).index();  
    	 //根据这个索引切换，下面的展示  
     	$(".produc2").eq(index).show().siblings().hide();  
     })


       // 熟食面点
        $(".list_tab2 li").mouseenter(function(){
     	$(this).addClass("in").siblings().removeClass("in");
     	 var index = $(this).index();  
    	 //根据这个索引切换，下面的展示  
     	$(".produc3").eq(index).show().siblings().hide();  
     })

  
    //  右浮动菜单

	// 向上背景
	$(".right_float #go_top").hover(function(){
		$(this).css("background-position","-43px 8px");
	},function(){	
		$(this).css("background-position","-43px -43px");
	});

	// 客服背景
	$(".right_float #service").hover(function(){
		$(this).css("background-position","-60px 0px");
	},function(){
		$(this).css("background-position","0px 0px");
	});
	// 二维码背景
	$(".right_float #two_code").hover(function(){
		$(this).css("background-position","-96px 5px");
	},function(){
		$(this).css("background-position","-96px -46px");
	});

	// 右菜单 箭头
	$("#go_top").click(function() {
	  $("html,body").animate({scrollTop:0}, 500);
	}); 

	// 隐藏
	$(window).bind("scroll", function () {  
	    var sTop = $(window).scrollTop();  
	    var sTop = parseInt(sTop);  
	    if (sTop >= 130) {  
	    	$("#go_top").show();            
	   	}else {  
            $("#go_top").hide();  
	    }  
	    
	});  

	// 二维码
	$("#two_code").click(function(){
		$(".show_code").toggle();
	});


	// 购物车
	$(".list_produc_box .btn").click(function(){
		$("#go_buyCart").css("background","url(images/buyCart2.gif) no-repeat");
		var sum=$("#go_buyCart").html();
		$("#go_buyCart").html(++sum);
	});

   
     
    // 左悬浮菜单

    // 修改背景图片
	$(window).scroll(function(){
		$(".list_box").each(function(){
			st=$(window).scrollTop();//获得滚动条高
			pt=$(this).offset().top;//当前框架高
			if(st>=pt-150){
				idx=$(this).attr('idx');
				if(idx=="fruits"){
					$('#'+idx).css('background-position','-43px -86px');
					$('#fish').css('background-position','-0px -171px');
					$('#food').css('background-position','-0px -602px');

				}
				if(idx=="fish"){
					$('#'+idx).css('background-position','-44px -171px');
					$('#fruits').css('background-position','0px -86px');
					$('#food').css('background-position','-0px -602px');

				}

				if(idx=="food"){
					$('#'+idx).css('background-position','-44px -602px');
					$('#fruits').css('background-position','-0px -86px');
					$('#fish').css('background-position','-0px -171px');

				}
			}
		});
	});

	// 左菜单 箭头
	$("#to_up").click(function() {
	  $("html,body").animate({scrollTop:0}, 500);
	  $(".left_menu").hide();
	}); 

	// 菜单显示隐藏
	$(".left_menu").hide(); 
	$(window).bind("scroll", function () {  
	    var sTop = $(window).scrollTop();  
	    var sTop = parseInt(sTop);  
	    if (sTop >= 2000-100) {  
	    	$(".left_menu").show();  
	          
	   	}else {  
            $(".left_menu").hide();  
	    }  
	    
	});  

 	// 链接位置跳转
	 $(".left_menu a").click(function(event) { 
	      var index=$(this).attr('href');
	      // alert(index);
	     //  alert($(index).offset().top);
	     //  alert($("#fruits").offset().top);
	     //  var val=$(index).offset().top;
	     //  alert("val="+val);
	     //  // var fruitsTop=$()
	   	 // $("html,body").animate({scrollTop: val}, 1000);
	      switch(index){

	      	case ("#fruits"):
	      		 $("html,body").animate({scrollTop: 2600}, 1000);
	      		 break;
	      	case ("#fish"):
	      		 $("html,body").animate({scrollTop: 3388}, 1000);
	      		 break;
	      	case ("#food"):
	      		 $("html,body").animate({scrollTop: 4150}, 1000);
	      		 break;
	      	default:
	     }
    });

   
   


});