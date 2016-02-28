;(function($){
  $.fn.floatSquare=function(options){
      var defaults={
        contentClass:null,
        floatClass:null,
        direction:"next",
        speed:800,
        autoFloat:false,
        autoInterval:2000
      };
      var opts=$.extend({},defaults,options);
      var $btn=$(this);
      function FloatSquare(){
        var $parts=$(opts.floatClass),
            partStyles=[],
            width,
            height,
            background,
            left,
            top;
        if(!$parts.is(":animated")){
          for(var i=0,length=$parts.length;i<length;i++){
                  width=$($parts[i]).css("width");
                  height=$($parts[i]).css("height");
                  background=$($parts[i]).css("background");
                  left=$($parts[i]).css("left");
                  top=$($parts[i]).css("top");
                  partStyles[i]={
                    "top":top,
                    "left":left,
                    "width":width,
                    "height":height,
                    "background":background
                  };
              }
          if(opts.direction=="next"){
              for (var i = 0; i < length; i++) {
                if(i==0){
                  width=partStyles[length-1].width;
                  height=partStyles[length-1].height;
                  background=partStyles[length-1].background;
                  top=partStyles[length-1].top;
                  left=partStyles[length-1].left;
                  $($parts[i]).appendTo(opts.contentClass).animate({
                    "top":top,
                    "left":left,
                    "width":width,
                    "height":height,
                    "background":background
                  },opts.speed,"swing");
                }else{
                  width=partStyles[i-1].width;
                  height=partStyles[i-1].height;
                  background=partStyles[i-1].background;
                  top=partStyles[i-1].top;
                  left=partStyles[i-1].left;
                  $($parts[i]).animate({
                    "top":top,
                    "left":left,
                    "width":width,
                    "height":height,
                    "background":background
                  },opts.speed,"swing");
                }   
              }
          }else if (opts.direction=="prev") {
            for (var i = 0; i < length; i++) {
              if(i==length-1){
                  width=partStyles[0].width;
                  height=partStyles[0].height;
                  background=partStyles[0].background;
                  top=partStyles[0].top;
                  left=partStyles[0].left;
                  $($parts[i]).prependTo(opts.contentClass).animate({
                    "top":top,
                    "left":left,
                    "width":width,
                    "height":height,
                    "background":background
                  },opts.speed,"swing");
                }else{
                  width=partStyles[i+1].width;
                  height=partStyles[i+1].height;
                  background=partStyles[i+1].background;
                  top=partStyles[i+1].top;
                  left=partStyles[i+1].left;
                  $($parts[i]).animate({
                    "top":top,
                    "left":left,
                    "width":width,
                    "height":height,
                    "background":background
                  },opts.speed,"swing");
                }   
              }
          }
        }
      }

      $btn.click(opts,FloatSquare); 

     //设置是否自动运行 
     if(opts.autoFloat==true){
      setInterval(FloatSquare,opts.autoInterval,{opts:{
        contentClass:opts.contentClass,
        floatClass:opts.floatClass,
        direction:opts.direction,
        speed:opts.speed
      }});
  }
}
})(jQuery);