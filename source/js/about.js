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
    history.go(-1); //history.back(-1);
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