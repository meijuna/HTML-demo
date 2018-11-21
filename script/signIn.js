
	window.onlolad=function(){
		var account =document.getElementById("account");
		var userPassword=document.getElementById("userPassword");
		var tell=document.getElementById("tell");
		var userName=document.getElementById("userName");
	


		var span1=document.getElementById("span1");
		var span2=document.getElementById("span2");
		var span3=document.getElementById("span3");
		var span4=document.getElementById("span4");
		var span5=document.getElementById("span5");

	}



		function isAccount(){
	
			var idLength=account.value;

			if(idLength==""){		
				span1.innerHTML="×";
				span1.className="no";	
				account.className="eorr";
				account.focus();
				return false;		
			}else{
				span1.innerHTML="√";
				span1.className="yes";
				account.className="";	
				return true;
			}
			
		}

		function isUserPassword(){
			var password1=userPassword.value;

			if(password1==""){		
				span2.innerHTML="×";
				span2.className="no";	
				userPassword.className="eorr";
				userPassword.focus();
				return false;		
			}else{
				span2.innerHTML="√";
				span2.className="yes";
				userPassword.className="";	
				return true;
			}
		}

		function isPhone(){
			var regPhone=/^(((1[3456789][0-9]{1})|(15[0-9]{1}))+\d{8})$/;
			if(tell.value==""){
				span3.innerHTML="×";
				span3.className="no";
				tell.className="eorr";
				userName.focus();
				return false;
			}else if(!regPhone.test(tell.value)){
				span3.innerHTML="×";
				tell.className="eorr";
				span3.className="no";
				userName.focus();
				return false;
			}else{
				span3.innerHTML="√";
				span3.className="yes";
				tell.className="";
				return true;
			}
		}

		function isUserName(){
		
			var idLength=userName.value.length;
			
			if(idLength <=0  ){		
				span4.innerHTML="×";
				span4.className="no";	
				userName.className="eorr"	;
				userName.focus();
				return false;		
			}else{
				span4.innerHTML="√";
				span4.className="yes";
				userName.className="";	
				return true;
			}
			
		}


	$(document).ready(function(){
		$(".tab_menu ul li").click(function(){
			$(this).addClass("on").siblings().removeClass("on");
			var index=$(this).index();
			$(".tab_box > div").eq(index).show().siblings().hide();
		})
	})

	var code; //在全局 定义验证码
	function createCode() {
	    code = new Array();
	    var codeLength = 4; //验证码的长度
	    var checkCode = document.getElementById("checkCode");
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
	    var inputCode = document.getElementById("incode").value.toUpperCase();
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
	var check=isAccount() && isUserPassword();

	if(!check){
		alert("请确认输入项是否正确！")
	}
	return check;
}


$(document).ready(function(){
  // 登陆页菜单隐藏
	$(".header_tit").mouseover(function(){
		$(".header_nav2").show();

	});
	$(".header_tit").mouseout(function(){
		$(".header_nav2").hide();
		
	});
	$(".header_nav").mouseover(function(){
		$(".header_nav2").show();
		
	});
	$(".header_nav").mouseout(function(){
		$(".header_nav2").hide();
		
	});
});