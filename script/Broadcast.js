
$(document).ready(function(){
    // 大图
	 var big_arrPic=["images/轮播/广告1.jpg","images/轮播/广告2.jpg","images/轮播/广告3.jpg",
    "images/轮播/广告4.jpg","images/轮播/广告5.jpg","images/轮播/广告6.jpg"];
    // bar
    var bar_arrImg=["images/广告/gg01.jpg","images/广告/gg02.jpg","images/广告/gg03.jpg",
    "images/广告/gg04.jpg","images/广告/gg05.jpg","images/广告/gg06.jpg"];

    $(".pic img").attr("src", big_arrPic[0]);

    $(".header_bar img").attr("src", bar_arrImg[0]);


  
    // 大图轮播

    var index=0;
    var timer;
    var len=$(".control_nav li").length-1;
    timer = setInterval(auto, 4000);
        
    $(".banner").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(auto, 4000);
    })

    $(".control_nav li").hover(function() {
        clearInterval(timer);

        index = $(this).index();
        $(this).addClass("select").siblings().removeClass("select");
        $(".pic img").attr("src", big_arrPic[index]).css('opacity', 0.5).stop().animate({
            'opacity': 1
        }, 500);
    });
           

    function auto(){
        
        index++;
        if (index == len ) {
            index = 0;
        }
        $(".control_nav li").eq(index).addClass("select").siblings().removeClass("select");
        $(".pic img").attr("src", big_arrPic[index]).css('opacity', 0.5).animate({
            'opacity': 1
        }, 1000);
       
    }

    $('.prev').click(function() {
        clearInterval(timer);
        --index;
        if(index ==-1){
            index=len;
        }
        showImg(index);
    });

     $('.next').click(function() {
        clearInterval(timer);
        ++index;
        if(index > len){
            index=0;
        }
        showImg(index);
    });

    function showImg(index){
       
        $(".control_nav li").eq(index).addClass("select").siblings().removeClass("select");
        $(".pic img").attr("src", big_arrPic[index]).css('opacity', 0.5).stop().animate({
                'opacity': 1
            }, 500);
    }
    

    // bar轮播
   


    auto2();
    function auto2(){
        var index2=0;
        var timer2=null;
        timer2 = setInterval(function() {
            index2++;
            if (index2 > 7) {
                index2 = 0;
            }
 
            $(".header_bar img").attr("src", bar_arrImg[index2]).css('opacity', 0.5).animate({
                'opacity': 1
            }, 1500);
        }, 3000);
    }


  });
