/*函数部分*/
//平稳滑动函数
function _scroll(obj, time) {

    $("html,body").animate({
        scrollTop: $(obj).offset().top
    }, time,'swing');

}

/*主页部分*/
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
    //$("#works .onework a").attr("href","./work.html");
    //$("#notes ul li a").attr("href","./note.html");
    
});


/*单页部分*/
//判定何时出现回到顶部按键    
var height = $(window).height() / 2;
$(window).scroll(function () {
    var scrollval = $(window).scrollTop();
    if (scrollval > height) {
        $(".jumptohead").css({
            display: "block"
        });
    } else {
        $(".jumptohead").css({
            display: "none"
        });
    }
});
//返回
function goBack() {
    window.history.back();
    //history.go(-1); //history.back(-1);
}

$(".back a").click(function () {
    goBack();
    return false;
});

//触发图片hover事件,下拉遮罩效果
$(".one-work img").hover(
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

/*主页加载完成后，新增*/
//change button点击更换推荐的文章
$(document).ready(function(){
    
});


/*为每个tag增加背景图*/
$(document).ready(function(){
   var tagspan=document.createElement("span");
    tagspan.setAttribute("class","fui-tag");
     /*文章前部*/
    //$(".article-tag-list").find(".article-tag-list-item").prepend(tagspan);
    $(".article-tag-list").prepend(tagspan);
    
   // $(".article-tag-list").find(".article-tag-list-item").addClass("fui-tag");
    //$(".article-tag-list").find(".article-tag-list-item").find(".article-tag-list-link").prepend(" ");
    
    /*tags列表中*/
    $(".layout-wrap-inner.tag-cloud li").addClass("fui-tag");
});





