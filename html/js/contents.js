// 위로 부드럽게 올라가게
$(document).ready(function(){
  var offset = 220;
  var duration = 500;
  $(window).scroll(function(){
    if($(this).scrollTop() > offset){
      $(".scroll_top").fadeIn(duration);
    }
  });
  /*$(".back_to_top").click(function(event){
    event.preventDefault();
    $("html, body").animate({
      scrollTop : 0
    }, duration);
    return false;
  });*/
  
  $("#back_to_top").click(function(e){
    e.preventDefault();
    $("html, body").animate({
      scrollTop : 0
    }, 500);
    return false;
  });
});

// 사용자 기능 Open 버튼 스크롤 따라가게
$(document).ready(
    function(){
      if($(".ctrl_move") && $(".ctrl_move").css("top")){
        var topHeight = parseInt($(".ctrl_move").css("top").substring(0,
            $(".ctrl_move").css("top").indexOf("px")))
        $(window).scroll(function(){
          offset = topHeight + $(document).scrollTop() + "px";
          $(".ctrl_move").animate({
            top : offset
          }, {
            duration : 0,
            queue : false
          });
        });
      }
    });

// 사용자 기능 스크롤 따라가게
var scrollBinderMoon = function(topHeight){
  $(window).on("scroll.moon", function(){
    offset = topHeight + $(document).scrollTop() + "px";
    $(".ctrl_box").animate({
      top : offset
    }, {
      duration : 0,
      queue : false
    });
  });
};

$(document).ready(
  function(){
    if($(".ctrl_box") && $(".ctrl_box").css("top")){
      var topHeight = parseInt($(".ctrl_box").css("top").substring(0,
          $(".ctrl_box").css("top").indexOf("px")));
      scrollBinderMoon(topHeight);
  }
});

// 열람 스크롤시 컨트롤 영역 fixed
$(document).ready(function(){
  var s = $("#book_ctrl");
  if(s && s.size > 0){
    var pos = s.position();
    $(window).scroll(function(){
      var windowpos = $(window).scrollTop() > 100;
      if(windowpos >= pos.top){
        s.addClass("ctrl_pos");
      } else{
        s.removeClass("ctrl_pos");
      }
    });
  }
});

$(document).on("scroll", function(){
  // 열람 스크롤시 width 값 클래스 추가
  if($(document).scrollTop() > 100){
    $("#book_ctrl").addClass("ctrl_pos");
    $(".top_inner").addClass("hidden");
    $("#book_ctrl_width").addClass("ctrl_width");
    $(".scroll_top").fadeIn();
  } else{
    $("#book_ctrl").removeClass("ctrl_pos");
    $(".top_inner").removeClass("hidden");
    $("#book_ctrl_width").removeClass("ctrl_width");
    $(".scroll_top").hide();
  }

  // 열람 스크롤시 사용자 기능 상단 여백 줄임
  if($(document).scrollTop() > 100){
    $("#user_ctrl").addClass("ctrl_height");
  } else{
    $("#user_ctrl").removeClass("ctrl_height");
  }

  // 열람 스크롤시 사용자 기능 상단 여백 줄임
//  if($(document).scrollTop() > 100){
//    $(".box_user_ctrl").addClass("box_user_height");
//  } else{
//    $(".box_user_ctrl").removeClass("box_user_height");
//  }
});

function getLastIndexNumber(str){
  if(str){
    var indexArray = str.split(".");
    return indexArray[indexArray.length - 1];
  }else{
    return;
  }
}
