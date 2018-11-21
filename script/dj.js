


$(document).ready(function(){

	var sub=$('#subList');//指向子菜单
	var activeRow;  //指向当前激活一级菜单中的行
	var activeMenu; //与之对应的二级菜单
	$('#test')
		.on('mouseenter',function(e){ //mouseenter 只有在鼠标指针穿过被选元素时，才会触发事件
			sub.removeClass('none'); //显示二级菜单
		})
		.on('mouseleave',function(e){
			sub.addClass('none');	//隐藏二级菜单

			if(activeRow){   //如果存在激活的行 去掉样式
				activeRow.removeClass('active');
				activeRow=null;
			}

			if(activeMenu){
				activeMenu.addClass('none');
				activeMenu=null;
			}
		})
		.on('mouseenter','li',function(e){  //一级菜单事件代理的方式 给每一个列表项绑定事件
			if(!activeRow){	//移过去没有当前激活二级菜单
				activeRow=$(e.target).addClass('active');  //激活的列表项指向事件目标
				activeMenu=$('#'+activeRow.data('id'));//选中和它对应的二级菜单
				activeMenu.removeClass('none');
				return;
				
			}
			activeRow.removeClass('active'); //上一次状态清除
			activeMenu.addClass('none');//对应的二级菜单隐藏

			activeRow=$(e.target);//指向当前新li
			activeRow.addClass('active');

			activeMenu=$('#'+activeRow.data('id'));
			activeMenu.removeClass('none'); //显示
		})

})