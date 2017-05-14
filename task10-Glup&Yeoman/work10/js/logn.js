//网页加载时取出localStorage中储存的背景图片信息
$(document).ready(function() {
    $("body").css({
        "background": window.localStorage.getItem("bg")
    });
    //获取天气
    getWeather();
    $('#city').on('click',function(event){
        event.preventDefault();
        $(this).html('正在获取天气数据...');
        getWeather();
    });
})
//用户的下拉菜单的展示与取消
$(".pf1").mouseenter(function(e) {
    $(".bdpfmenu1").show();
    $(".bdnuarrow1").show();
});
$(".pf1").mouseleave(function(e) {
    $(".bdpfmenu1").hide();
    $(".bdnuarrow1").hide();
});
//设置的下拉菜单的展示与取消
$(".pf").mouseenter(function(e) {
    $(".bdpfmenu").show();
    $(".bdnuarrow").show();
});
$(".pf").mouseleave(function(e) {
    $(".bdpfmenu").hide();
    $(".bdnuarrow").hide();
});
//更多产品下拉菜单的展示与取消
$(".list").mouseenter(function(e) {
    $(".s_bdmainlink").show();
});
$(".s_bdmainlink").mouseleave(function(e) {
    $(".s_bdmainlink").hide();
});
//鼠标滚动时出现 回到顶部 按钮
$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 50) {
            $('#btn_top').fadeIn();
        } else {
            $('#btn_top').fadeOut();
        }
    });
});
//点击回到顶部
$('#btn_top').click(function() {
    $('html,body').animate({ scrollTop: 0 }, 500);
});
// 换肤
var i = 1;
$(".huanfu").click(function() {
    $(".head").animate({ height: "288px" }, 500);
});
$(".p2").click(function() {
    $(".head").animate({ height: "0px" }, 500);
});
$(".bgcon img").hover(function() {
    i = $(this).index();
    $(".bgyl").css("background", 'url(img/bg' + i + '.jpg) no-repeat ');
    $(".bgyl").css("background-size", "264px 180px");
});
$(".bgcon img").click(function(e) {
    $("body").css("background", 'url(img/bg' + i + '.jpg) no-repeat');
    $("body").css("background-size", "cover");
    console.log(e.target);
    var li = e.target;
    var bg = $("body").css("background");
    window.localStorage.setItem("bg", bg);
    $("body").css({
        "background": window.localStorage.getItem("bg")
    })
});
// 内容选项卡
$(".main-page .nav div").mouseenter(function() {
        var $this = $(this);
        var index = $this.index();
    })
    .mouseleave(function() {
        var $this = $(this);
        var index = $this.index();
    })
    .click(function() {
        var $this = $(this);
        var index = $this.index();
        $(".main-page .nav div").removeClass("on");
        $(".main-page .nav div").eq(index).addClass("on");
        $(".content div").hide();
        $("#content_" + index).show();
    });
//天气信息获取
function getWeather(){
    $.ajax({
        url:'php/weather.php',
        type:'POST',
        dataType:'json',
        //城市代码
        data:{
            'cityid':'101010100'
        }
    })
    //成功
    .success(function(data){
        console.log("success");
        $('#city').html(data.cityname + '' + data.weather + " 温度：" + data.temp + '度');
    })
    //失败
    .error(function(){
        console.log("error");
        $('#city').html('数据获取失败，点击重试')
    })
    .always(function(){
        console.log("complete");
    });
}
