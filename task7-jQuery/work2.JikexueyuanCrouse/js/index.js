// 右下部悬浮窗口
$(function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop == 0) {
        $('.gotop span.top').css("display", "none");
    }
    // 回到顶部按钮
    $(window).scroll(function() {
        scrollTop = $(window).scrollTop();
        if (scrollTop == 0) {
            $('.gotop span.top').fadeOut();
        } else {
            $('.gotop span.top').fadeIn();
        }
    });
    $('.gotop span.top').click(function() {
        $('html,body').animate({ scrollTop: '0px' }, 500);
    });
    //二维码部分出现
    $('.jk-app').hover(function() {
        $('.erwma').css('display', 'block')
    }, function() {
        $('.erwma').css('display', 'none');
    })
});
// 导航栏
$('.li-1').mouseover(function(){
    $('.down-1').addClass('anim');
    $(".school-list").fadeIn();
});
$('.li-1').mouseleave(function(){
    $('.down-1').removeClass('anim');
    $(".school-list").fadeOut();
});
$('.li-2').mouseover(function(){
    $('.down-2').addClass('anim');
    $(".huiyuan").fadeIn();

});
$('.li-2').mouseleave(function(){
    $('.down-2').removeClass('anim');
    $(".huiyuan").fadeOut();
});
$('.li-3').mouseover(function(){
    $('.down-3').addClass('anim');
    $(".shequ").fadeIn();
});
$('.li-3').mouseleave(function(){
    $('.down-3').removeClass('anim');
    $(".shequ").fadeOut();
});
// 右侧登陆部分
$('.app-icon').mouseover(function(){
    $(".app-down").fadeIn();
});
$('.app-icon').mouseleave(function(){
    $(".app-down").fadeOut();
});
$('.login-icon').mouseover(function(){
    $(".login-down").fadeIn();
});
$('.login-icon').mouseleave(function(){
    $(".login-down").fadeOut();
});
$(".search-icon").mouseover(function(){
    $(".search-icon").css({
        'background':'url("images/search-icon2.png") 0 0 no-repeat',
        'background-size':' 17px 17px',
        'background-position': '0, 0',
        'height': '17px',
        'width': '17px',
        'display': 'inline-block',
    });
});
$('.search-icon').mouseleave(function(){
    $(".search-icon").css({
        'background':'url("images/search-icon.png") 0 0 no-repeat',
        'background-size':' 17px 17px',
        'background-position': '0, 0',
        'height': '17px',
        'width': '17px',
        'display': 'inline-block',
    });
});
// 点击出现搜索框
$('.search-icon').on('click',function(){
    $('.searchbox').addClass('scale');
});
$('.close-icon').on('click',function(){
    $('.searchbox').removeClass('scale');
});
// 左侧导航栏
$('.lesson-1').mouseover(function(){
    $(".lesson-list-1").fadeIn();
});
$('.lesson-1').mouseleave(function(){
    $(".lesson-list-1").fadeOut();
});
$('.lesson-2').mouseover(function(){
    $(".lesson-list-2").fadeIn();
});
$('.lesson-2').mouseleave(function(){
    $(".lesson-list-2").fadeOut();
});
$('.lesson-3').mouseover(function(){
    $(".lesson-list-3").fadeIn();
});
$('.lesson-3').mouseleave(function(){
    $(".lesson-list-3").fadeOut();
});
$('.lesson-4').mouseover(function(){
    $(".lesson-list-4").fadeIn();
});
$('.lesson-4').mouseleave(function(){
    $(".lesson-list-4").fadeOut();
});
$('.lesson-5').mouseover(function(){
    $(".lesson-list-5").fadeIn();
});
$('.lesson-5').mouseleave(function(){
    $(".lesson-list-5").fadeOut();
});
$('.lesson-6').mouseover(function(){
    $(".lesson-list-6").fadeIn();
});
$('.lesson-6').mouseleave(function(){
    $(".lesson-list-6").fadeOut();
});
$('.lesson-7').mouseover(function(){
    $(".lesson-list-7").fadeIn();
});
$('.lesson-7').mouseleave(function(){
    $(".lesson-list-7").fadeOut();
});
$('.lesson-8').mouseover(function(){
    $(".lesson-list-8").fadeIn();
});
$('.lesson-8').mouseleave(function(){
    $(".lesson-list-8").fadeOut();
});
$('.lesson-9').mouseover(function(){
    $(".lesson-list-9").fadeIn();
});
$('.lesson-9').mouseleave(function(){
    $(".lesson-list-9").fadeOut();
});
$('.lesson-10').mouseover(function(){
    $(".lesson-list-10").fadeIn();
});
$('.lesson-10').mouseleave(function(){
    $(".lesson-list-10").fadeOut();
});
// 二级菜单下拉效果
$('.type-title-one').mouseover(function(){
    $(".type-title-1").css({
        'overflow':'visible',
    });
    $('.type-title-1-down').hide();
});
$('.type-title-one').mouseleave(function(){
    $(".type-title-1").css({
        'overflow':'hidden',
    });
    $('.type-title-1-down').show();
});
$('.type-title-two').mouseover(function(){
    $(".type-title-2").css({
        'overflow':'visible',
    });
    $('.type-title-2-down').hide();
});
$('.type-title-two').mouseleave(function(){
    $(".type-title-2").css({
        'overflow':'hidden',
    });
    $('.type-title-2-down').show();
});
$('.type-title-three').mouseover(function(){
    $(".type-title-3").css({
        'overflow':'visible',
    });
    $('.type-title-3-down').hide();
});
$('.type-title-three').mouseleave(function(){
    $(".type-title-3").css({
        'overflow':'hidden',
    });
    $('.type-title-3-down').show();
});
$('.type-title-four').mouseover(function(){
    $(".type-title-4").css({
        'overflow':'visible',
    });
    $('.type-title-4-down').hide();
});
$('.type-title-four').mouseleave(function(){
    $(".type-title-4").css({
        'overflow':'hidden',
    });
    $('.type-title-4-down').show();
});
// 主体鼠标滑过效果
window.onload=function(){
    var oBoxLi = $(".lesson-li li");
        oBoxLi.each(function(i,el){
            $(el).hover(function(){
                $(el).find(".lesson-infor").stop().animate({"height":185+"px"},250);
                $(el).find(".lesson-infor p").css("display","block").stop().animate({
                    "height":"52px",
                    "opacity":"1"
                },250);
                $(el).find(".lesson-infor .zhongji").css("display","block");
                $(el).find(".learn-namber").css("display","block");
            },function(){
                $(el).find(".lesson-infor").stop().animate({"height":88+"px"},500);
                $(el).find(".lesson-infor p").stop().animate({
                    "height":"0",
                    "opacity":"0",
                },500,function(){
                    $(this).css("display","none")
                });
                $(el).find(".lesson-infor .zhongji").css("display","none");
                $(el).find(".learn-namber").css("display","none");
            });
        });
}
//切换显示方式
$('.list-icon').on('click',function(){
    $('#lesson-list').removeClass("lesson-li");
    $('#lesson-list').addClass("lesson-list2");
});
$('.icon').on('click',function(){
    $('#lesson-list').removeClass("lesson-list2");
    $('#lesson-list').addClass("lesson-li");
});
//底部效果
$('.weixin-icon').mouseover(function(){
    $(".weinxinpop").fadeIn();
});
$('.weixin-icon').mouseleave(function(){
    $(".weinxinpop").fadeOut();
});