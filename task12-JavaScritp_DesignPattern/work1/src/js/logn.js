/**
 * js设计模式：单例模式，又被称为单体模式，是只允许实例化一次的对象类
 * 功能:API接入天气信息
 **/
//天气信息获取
var findWeather = {
    init: function (){
        //获取天气
        this.getWeather();
        that = this;
        $('#city').on('click',function(event){
        event.preventDefault();
        $(this).html('正在获取天气数据...');
        that.getWeather();
        })
    },
   getWeather:function(){
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
};
/**
 * js设计模式：单例模式，又被称为单体模式，是只允许实例化一次的对象类
 * 功能:更换首页皮肤功能，并使用localStorage保存上次更换的背景图片信息
 */
var i = 1;
var peeling = {
     init:function(){
        //网页加载时取出localStorage中储存的背景图片信息
        $("body").css({
            "background": window.localStorage.getItem("bg")
        });
        // 换肤
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
     }
}
/**
 * js设计模式：单例模式，又被称为单体模式，是只允许实例化一次的对象类
 * 功能:设置菜单和用户下拉菜单的展示与取消
 */
//
var setting_menu = {
    init: function() {
        this.render();
        this.bind();
    },
    render: function() {
        var me = this;
        me.settingMouseOver = $(".pf");
        me.settingMouseOut = $(".pf");
        me.menu2MouseOver = $(".pf1");
        me.menu2MouseOut = $(".pf1");
    },
    bind: function() {
        var me = this;
        me.settingMouseOver.mouseenter(function() {
            $(".bdpfmenu").show();
            $(".bdnuarrow").show();
        });
        me.settingMouseOut.mouseleave(function() {
            $(".bdpfmenu").hide();
            $(".bdnuarrow").hide();
        });
        me.menu2MouseOver.mouseenter(function() {
            $(".bdpfmenu1").show();
            $(".bdnuarrow1").show();
        });
        me.menu2MouseOut.mouseleave(function() {
            $(".bdpfmenu1").hide();
            $(".bdnuarrow1").hide();
        });
    }
};
/**
 * js设计模式：单例模式，又被称为单体模式，是只允许实例化一次的对象类
 * 功能:更多产品
 */
var moreProduct = {
    init: function() {
        this.render();
        this.bind();
    },
    render: function() {
        var me = this;
        me.mpMouseEnter = $(".list");
        me.mpMouseleave = $(".s_bdmainlink");
    },
    bind: function() {
        var me = this;
        me.mpMouseEnter.mouseenter(function() {
           $(".s_bdmainlink").show();
        });
        me.mpMouseleave.mouseleave(function() {
           $(".s_bdmainlink").hide();
        });
    }
};
/**
 * js设计模式：单例模式，又被称为单体模式，是只允许实例化一次的对象类
 * 功能:鼠标滚动时出现 回到顶部 按钮 点击回到顶部
 */
var topScroll = {
    init: function() {
        //鼠标滚动时出现 回到顶部 按钮
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 50) {
                $('#btn_top').fadeIn();
            } else {
                $('#btn_top').fadeOut();
            }
        });
        //点击回到顶部
        $('#btn_top').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 500);
        });
    }
};
/**
 * js设计模式：单例模式，又被称为单体模式，是只允许实例化一次的对象类
 * 功能:下面橱窗的控制代码
 */
var showCaseControl = {
    init: function() {
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
    }
};
/**
 * js设计模式：外观模式，为一组复杂的子系统接口提供一个更高级的统一接口，通过这个接口使得对子系统接口的访问更容易
 * 功能:程序开始
 * 作用：网页加载依赖项在此统一载入，方便管理调度
 */
var start = (function() {
    //API接入天气信息
    findWeather.init();
    //换肤
    peeling.init();
    //更多产品
    moreProduct.init();
    //用户和设置下拉菜单
    setting_menu.init();
    //回到顶部
    topScroll.init();
    //页面展示橱窗控制代码
    showCaseControl.init();
})();