$(function(){
  var timer = null;

  $('.wx').mouseover(function(){
    clearInterval(timer);
    $('.weixin_img').show("slow");
    $('.lb_bt').hide("slow");
  });

  $('.wx').mouseout(function(){
    clearInterval(timer);
    timer = setTimeout(function(){
    $('.weixin_img').hide("slow");
  },0);
  });

  $('.lb').mouseover(function(){
    clearInterval(timer);
    $('.lb_bt').show("slow");
    $('.weixin_img').hide("slow");
  });

  $('.lb').mouseout(function(){
    clearInterval(timer);
    timer = setTimeout(function(){
    $('.lb_bt').hide("slow");
  },0);
  });
});
