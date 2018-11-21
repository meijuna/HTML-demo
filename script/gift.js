	window.onlolad=function(){
		var ipt1 =document.getElementById("ipt1");
		var ipt2=document.getElementById("ipt2");
		var ipt3=document.getElementById("ipt3");
		var checkCode=document.getElementById("checkCode");


		

	}


		function isNumber(){
		
			var ipt1Length=ipt1.value.length;
			
			if(ipt1Length <=0  ){		
				ipt1.focus();
				return false;		
			}else{
				return true;
			}
			
		}

		function isPassword(){
		
			var ipt2Length=ipt2.value.length;
			
			if(ipt2Length <=0  ){		
				ipt2.focus();
				return false;		
			}else{
				return true;
			}
			
		}

	
		


	var code; //在全局 定义验证码
	function createCode() {
	    code = new Array();
	    var codeLength = 4; //验证码的长度
	    
	    checkCode.value = "";
	    var selectChar = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9');
	    for (var i = 0; i < codeLength; i++) {
	        var charIndex = Math.floor(Math.random() * 62);
	        code += selectChar[charIndex];
	    }
	    if (code.length != codeLength) {
	        createCode();
	    }
	    checkCode.value = code;
	}

	function validate() {
	    var inputCode = ipt3.value.toUpperCase();
	   
	    if (inputCode.length <= 0) {
	        alert("请输入验证码！");
	        return false;
	    } else if (inputCode != (code.toUpperCase())) {
	   
	        alert("验证码输入错误！");
	        createCode();
	        return false;
	    } else {
	        alert("成功！");
	        return true;
	    }
	}

function checkForm(){
		var check=isNumber() && isPassword() && validate();

		if(!check){
			alert("请输入输入项！")
		}else{
			alert("兑换成功！！！")
		}
		return check;
}
	$(document).ready(function(){
		// / 大图
		 var arrPic=["images/轮播/轮播01.jpg","images/轮播/轮播02.jpg","images/轮播/轮播03.jpg"];
	   	 $(".banner_img img").attr("src", arrPic[0]);

	   	 var timer=null;
	   	 $(".round").click(function() {
	        clearInterval(timer);

	        index = $(this).index();
	         $(".round_list a").eq(index).addClass("opt").siblings().removeClass("opt");
	        $("banner_img img").attr("src", arrPic[index]).css('opacity', 0.5).stop().animate({
	            'opacity': 1
	        }, 500);
   		 });

	   	 auto();
	    function auto(){
	        var index=0;
	        var timer=null;
	        timer = setInterval(function() {
	            index++;
	            if (index ==3) {
	                index = 0;
	            }
	 			 $(".round_list a").eq(index).addClass("opt").siblings().removeClass("opt");
	            $(".banner_img img").attr("src", arrPic[index]).css('opacity', 0.5).animate({
	                'opacity': 1
	            }, 1500);
	        }, 3000);
	    }
		
	})
   	
   	

