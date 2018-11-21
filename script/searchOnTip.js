
$(document).ready(function(){
	var test_list = ["车厘子", "金果", "椰青", "小龙虾", "绿果", "荔枝",  "厄瓜多尔白"];  
		
        var old_value = "";  //保存搜索框中的值 
		
        var highlightindex = -1;   //高亮显示（项的索引） 
		

				// 文本框
		// var search_val=$("#search_text");
		// search_val.focus(function(){
		// 	ipt.val("");
			
		// })

        //自动完成  
        function AutoComplete(auto, search, mylist) {
			//val() 方法返回或设置被选元素的值  
            if ($("#" + search).val() != old_value || old_value == "") {  

                var autoNode = $("#" + auto);   //缓存对象（提示框）  
                var carlist = new Array();  
                var n = 0;  
                old_value = $("#" + search).val();  //文本框的值
                for (i in mylist) {  //此循环是用于实现检查文本框中的内容与测试数组test_list中是否有匹配
                    if (mylist[i].indexOf(old_value) >= 0) { //indexof（string）返回字符中中字串string在父串中首次出现的位置，从0开始。没有返回-1 
                        carlist[n++] = mylist[i];  //匹配项都放入carlist中
                    }  
                }  
                if (carlist.length == 0) {  //无匹配项，则隐藏提示框
                    autoNode.hide();  
                    return;//AutoComplete函数调用到此结束，返回调用者那里  
                }  
                autoNode.empty();  //清空上次的记录  
                for (i in carlist) {  
                    var wordNode = carlist[i];   //弹出框里的每一条内容  
                    var newDivNode = $("<div>").attr("id", i);    //设置每个节点的id值  
                    newDivNode.attr("style", "font:14px/30px arial;height:30px;padding:0 15px;cursor: pointer;");  
                    newDivNode.html(wordNode).appendTo(autoNode);  //追加到弹出框  
                    
					//鼠标移入高亮，移开不高亮  
                    newDivNode.mouseover(function () {  
                        if (highlightindex != -1) {        //原来高亮的节点要取消高亮（是-1就不需要了）  
                            autoNode.children("div").eq(highlightindex).css("background-color", "white");  
                        }  
                        //记录新的高亮节点索引  
                        highlightindex = $(this).attr("id");  
                        $(this).css("background-color", "#8AB700");  
                    });  
                    newDivNode.mouseout(function () {  
                        $(this).css("background-color", "white");  
                    });  
                    
					//鼠标点击提示框中某项，则把该项显示在搜索框中  
                    newDivNode.click(function () {  
                        //取出高亮节点的文本内容  
                        var comText = autoNode.hide().children("div").eq(highlightindex).text();  
                        highlightindex = -1;  
                        //文本框中的内容变成高亮节点的内容  
                        $("#" + search).val(comText);  
                    })  
                    if (carlist.length > 0) {    //如果返回值有内容就显示出来  
                        autoNode.show();  
                    } else {               //服务器端无内容返回 那么隐藏弹出框  
                        autoNode.hide();  
                        //弹出框隐藏的同时，高亮节点索引值也变成-1  
                        highlightindex = -1;  
                    }  
                }  
            }  
            
			//点击页面隐藏自动补全提示框  
            document.onclick = function (e) {  
                var e = e ? e : window.event;  
                var tar = e.srcElement || e.target;  
                if (tar.id != search) {  
                    if ($("#" + auto).is(":visible")) {  
                        $("#" + auto).css("display", "none")  
                    }  
                }  
            }  
        }  
		
		
        $(function () {  
            old_value = $("#search_text").val(); //取出搜索框中的值 
            $("#search_text").focus(function () {  //搜索框获得焦点时
            	$("#search_text").val("");
                if ($("#search_text").val() == "") {  //搜索框中无输入时，则自动填充提示框
                    AutoComplete("auto_div", "search_text", test_list);  
                    // alert(1);

                }  
            });  
            $("#search_text").keyup(function () {  //搜索框中有输入时，
                AutoComplete("auto_div", "search_text", test_list);  
            });  
        });  
});