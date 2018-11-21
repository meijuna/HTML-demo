
$(document).ready(function(){
	// 全选
	$("input[name=check_all]").click(function(){
		if(this.checked){
			$(".cart_box input[name=check_xz]").prop("checked",true);
		}else{
			$(".cart_box input[name=check_xz]").prop("checked",false);
		}
		GetCount();
	});
	// 点击选择框 改变数量
	$(".cart_box input[name=check_xz]").click(function(){
		GetCount();
	})


	 // 第一列加减按钮
	 var mt = $("#mt1");
	 $("#add1").click(function () {
	 	mt.val(parseInt(mt.val()) + 1);
		 setTotal();
		 GetCount();

	 });

	 $("#minus1").click(function () {
	 	if(parseInt(mt.val() - 1) < 0){
	 		return false;
	 	}else {
	 		mt.val(parseInt(mt.val()) - 1);
		 }
		setTotal();
	 });

	  // 第二列加减按钮
	 var mt2 = $("#mt2");
	 $("#add2").click(function () {
	 	mt2.val(parseInt(mt2.val()) + 1);
		 setTotal();
		 GetCount();

	 });

	 $("#minus2").click(function () {
	 	if(parseInt(mt2.val() - 1) < 0){
	 		return false;
	 	}else {
	 		mt2.val(parseInt(mt2.val()) - 1);
		 }
		setTotal();
	 });

	setTotal();
	function setTotal() {
		 // 小计
	 $("#Small_plan1").html((parseInt(mt.val()) * 35.90).toFixed(2));
	 $("#Small_plan2").html((parseInt(mt2.val()) * 29.9).toFixed(2));


	 // 总价
	  var len=$(".subtotal");
	  var sum=0;

	  for(var i=0;i<len.length;i++){
	  	sum+= parseFloat($(len[i]).text());

	  }
	  $("#money").html(parseFloat(sum).toFixed(2));
	}

	// 选中数量
	function GetCount() {
		var conts = 0;
		var number = 0;
		$("input[name=check_xz]").each(function () {
		 if ($(this).prop("checked")) {
			 for (var i = 0; i < $(this).length; i++) {
				 number += 1;
		 	}
		 }
		});	
		$("#number").text(number);	

	}


	$(".list_tab3 li").click(function(){
     	$(this).addClass("in").siblings().removeClass("in");
     	 var index = $(this).index();  
    	 //根据这个索引切换，下面的展示  
     	$(".produc2").eq(index).show().siblings().hide();  
     })

})