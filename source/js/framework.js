//导航栏选中阴影&&平稳滑动效果
var lilist = $(".content-section ul li");
var alist = lilist.find("a");
alist.each(function () {
    $(this).click(function () {
        //增加导航栏选中阴影效果
        for (var i = 0; i < alist.length; i++) {
            $(alist[i]).removeClass("active");
        }
        $(this).addClass("active");
        //增加平稳滑动效果
        _scroll($(this).attr("href"), 1000);
        return false;
    });
});

//随滚动条滚动，相应导航栏发生变化
var offsetlist = []; //用于储存偏移量
for (var i = 0; i < alist.length; i++) {
    var obj = $(alist[i]).attr("href");
    var offset = $(obj).offset().top; //$(obj).scrollTop()
    offsetlist[i] = offset;
}
$(window).scroll(function () {
    var topval = $(window).scrollTop();
    if (topval < offsetlist[1] / 2) {
        for (var i = 0; i < alist.length; i++) {
            $(alist[i]).removeClass("active");
        }
        $(alist[0]).addClass("active");
    } else {

        for (var j = 0; j < offsetlist.length; j++) {

            if (topval > offsetlist[j] + (offsetlist[j + 1] - offsetlist[j]) / 2) {
                for (var i = 0; i < alist.length; i++) {
                    $(alist[i]).removeClass("active");
                }
                $(alist[j + 1]).addClass("active");
            } else {
                continue;
            }
        }
    }
});

//触发图片hover事件,下拉遮罩效果
$("#works img").hover(
    function () {
        $(this).siblings("div").finish().delay(100).animate({
            top: 0
        }, 400);
    },
    function () {
        $(this).siblings("div").finish().delay(100).animate({
            top: '-100%'
        }, 400);
    }

);


//设置点击作品的链接
$(document).ready(function(){
    $("#works .onework a").attr("href","./work.html");
    $("#notes ul li a").attr("href","./note.html");
    
});


