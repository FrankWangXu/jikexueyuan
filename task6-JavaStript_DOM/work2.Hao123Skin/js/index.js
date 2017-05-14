//当窗口刷新的时候获取localstorage的值并且设置颜色
window.onload = function() {
        $(".menus .menu").css({
            "border-top-color": window.localStorage.getItem("color")
        })
        $(".menus .link:hover").css({
            "color": window.localStorage.getItem("color")
        })
        $(".menus .link .active").css({
            "background-color": window.localStorage.getItem("color")
        })
        $(".govsite-inner").css({
            "border-color": window.localStorage.getItem("color")
        })
        $(".govsite-inner .title").css({
            "color": window.localStorage.getItem("color")
        })
        $(".g_tips-r .g_icon,.g_tips-l .g_icon").css({
            "color": window.localStorage.getItem("color")
        })
        $(".tc-green").css({
            "color": window.localStorage.getItem("color")
        })
        $(".s-br21,.g-br21,.s-br21h:hover,.g-br21h:hover").css({
            "border-color": window.localStorage.getItem("color")
        })
    }
    // 获取点击的li标签的颜色，并将颜色存入到localStorage
$("#ul").on("click", function(e) {
    console.log(e.target);
    var li = e.target;
    var color = $(li).css("background-color");
    window.localStorage.setItem("color", color);
    $(".menus .menu").css({
        "border-top-color": window.localStorage.getItem("color")
    })
    $(".menus .link:hover").css({
        "color": window.localStorage.getItem("color")
    })
    $(".menus .link .active").css({
        "background-color": window.localStorage.getItem("color")
    })
    $(".govsite-inner").css({
        "border-color": window.localStorage.getItem("color")
    })
    $(".govsite-inner .title").css({
        "color": window.localStorage.getItem("color")
    })
    $(".g_tips-r .g_icon,.g_tips-l .g_icon").css({
        "color": window.localStorage.getItem("color")
    })
    $(".tc-green").css({
        "color": window.localStorage.getItem("color")
    })
    $(".s-br21,.g-br21,.s-br21h:hover,.g-br21h:hover").css({
        "border-color": window.localStorage.getItem("color")
    })
})
