//平稳滑动函数
function _scroll(obj, time) {

    $("html,body").animate({
        scrollTop: $(obj).offset().top
    }, time,'swing');

}
