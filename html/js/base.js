  var admin = false;
    var contextPath = '';
    var book_nm_chi = '\u6771\u91AB\u5BF6\u9451';	// 서적명 한문
    var book_nm_kor = '\uB3D9\uC758\uBCF4\uAC10';	// 서적명 한글
    var book_id = 8;
    var volume_id = 1;
    var loginContext = null;
    var sessionVolumeSettings = null;
    var global_mouse_down = false;
    var volumeImages = [{'attach_seq':1600,'book_id':8,'content_seq':133,'description':'\u8EAB\u5F62\u85CF\u5E9C\u5716','image_seq':'1','is_inline':0,'lang_code':'OR','logical_file_name':'A001_1001.png','physical_name':null,'volume_id':1},{'attach_seq':1600,'book_id':8,'content_seq':133,'description':'\uC2E0\uD615\uC7A5\uBD80\uB3C4','image_seq':'2','is_inline':0,'lang_code':'KO','logical_file_name':'A001_1001.png','physical_name':null,'volume_id':1},{'attach_seq':1600,'book_id':8,'content_seq':133,'description':'Picture of the overall body, viscera, and bowels','image_seq':'3','is_inline':0,'lang_code':'EN','logical_file_name':'A001_1001.png','physical_name':null,'volume_id':1}];
    var volumeLangCodeList = [{'bookCode':'BOOK_15_02','dbBookCodeColumnName':'LANG_CODE_2','dbBookCodeLowerColumnName':'lang_code_2','dbLangDataColumnName':'TRANS_2','dbLangDataLowerColumnName':'trans_2','languageCode':'KO','languageEnglishName':'ko','languageKoreanName':'\uD55C\uAD6D\uC5B4','lowerLanguageCode':'ko'},{'bookCode':'BOOK_15_01','dbBookCodeColumnName':'LANG_CODE_1','dbBookCodeLowerColumnName':'lang_code_1','dbLangDataColumnName':'TRANS_1','dbLangDataLowerColumnName':'trans_1','languageCode':'EN','languageEnglishName':null,'languageKoreanName':'\uC601\uC5B4','lowerLanguageCode':'en'}];
    var sndLevel = 'X';
    
    var quote_curr_seq ;
    var iframe_curr_seq ;
    
    var volume_sympathetic = '\uAD50\uAC10\uAE30'; //교감기
    var volume_frequently = '\uC5ED\uC790\uC8FC'; //역자주
    var volume_setting_lang_message = '\uD558\uB098 \uC774\uC0C1\uC758 \uC5B8\uC5B4\uAC00 \uC120\uD0DD\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.';
    var common_modify = '\uC218\uC815';
    var common_delete = '\uC0AD\uC81C';
    var comment_input = '\uB0B4\uC6A9\uC785\uB825';
    var comment_content = '\uB313\uAE00\uB0B4\uC6A9';
    var common_save = '\uC800\uC7A5';
    var common_cancel = '\uCDE8\uC18C';
    var comment_none_message = '\uB4F1\uB85D\uB41C \uB313\uAE00\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.';
    var login_message_use = '\uB85C\uADF8\uC778 \uD6C4 \uC774\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB85C\uADF8\uC778 \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?';
    var comment_none_message = '\uB313\uAE00\uC744 \uC785\uB825\uD55C \uD6C4 \uC800\uC7A5\uD558\uC138\uC694.';
    var clipboard_copy_message = '\uC774 \uC11C\uC801\uC758 \uC8FC\uC18C\uB97C \uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?';
    var clipboard_self_copy_message = '\uC774 \uC11C\uC801\uC758 \uC8FC\uC18C\uC785\uB2C8\uB2E4. Ctrl+C\uB97C \uB20C\uB7EC \uD074\uB9BD\uBCF4\uB4DC\uB85C \uBCF5\uC0AC\uD558\uC138\uC694';
    var common_mediclassicsDb = '\uD55C\uC758\uD559\uACE0\uC804DB'; //한의학고전DB
    var common_kiom = '\uD55C\uAD6D\uD55C\uC758\uD559\uC5F0\uAD6C\uC6D0'; //한국한의학연구원
    var common_daejeon = '\uB300\uC804';
    var common_delete_question  = '\uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?';
    var comment_delete_error_message  = '\uB313\uAE00 \uC0AD\uC81C \uB3C4\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.';
    var title_open_close = '\uD45C\uC81C\uC5B4 \uD3BC\uCE58\uAE30/\uC811\uAE30';
    var common_prescription1 = '\uBCF8\uCD08'; //본초
    var common_prescription2 = '\uACBD\uD608'; //경혈
    var common_prescription3 = '\uBC29\uC81C'; //방제
    var comment_input_error_message = '\uB313\uAE00 \uC785\uB825 \uB3C4\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.';
    var comment_message_none = '\uB4F1\uB85D\uB41C \uB313\uAE00\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.';
    var comment_modify_error_message = '\uB313\uAE00 \uC218\uC815 \uB3C4\uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4.';
    var content_array = [];

    var isMobile = {
        Android : function(){
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry : function(){
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS : function(){
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera : function(){
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows : function(){
          return navigator.userAgent.match(/IEMobile/i);
        },
        any : function(){
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS()
              || isMobile.Opera() || isMobile.Windows());
        }
      };
    


  
    /*$(document).ready(function(){
      if(sndLevel != 'Z' 
        && sndLevel != 'X'
        && sndLevel != 'T'
        && sndLevel != 'S'
        && sndLevel != 'P'
        ) $("#content_1").addClass("no-child");
      onReady();
       $("#in_sch")
       .on("keydown", function (event) {
           if (event.keyCode === $.ui.keyCode.TAB
             && $(this).data("autocomplete")
              && $(this).data("autocomplete").menu.active) {
             event.preventDefault();
           }
       })
      .autocomplete({
          minLength: 2,
          source: function (request, response) {
            $.getJSON("/search/autocomplete?search=" + encodeURI($('#in_sch').val()), response);
          },
          focus: function () {
              return false;
          }
      });
    });*/

    //마우스 오버 이벤트 등록
    var hoverTimer;
    var secDivHandlerIn = function() {
      var that = $(this);
      var thatSeq = that.attr("seq");
      if(thatSeq != $("#comment_content_seq").val()){
	      hoverTimer = setTimeout(function() {
	          onSection(thatSeq);
	          $("#comment_content_seq").val(thatSeq);
	       }, 1200);
      }
    };
    var secDivHandlerOut = function(){
      if(hoverTimer){
        clearTimeout(hoverTimer);
        hoverTimer = null;
      }
    };

    //댓글 입력시 마우스 호버 이벤트 설정 해제
    var comment_content_on = false;
    var comment_modify_content_on = false;
    var commentHandlerIn = function() {
      if(isMobile.any()){
        $(window).unbind("scroll.moon");
        removeScrollspy();
      }else{
	      comment_content_on = true;
	      $('.sec_div').unbind('mouseenter mouseleave');
      }
    };
    var commentHandlerOut = function(){
      if(isMobile.any()){
        onSection($("#comment_content_seq").val());
        scrollBinderMoon(100);
      }else{
	      comment_content_on = false;
	      $('.sec_div').hover(secDivHandlerIn, secDivHandlerOut);
      }
    };
    var commentModifyHandlerIn = function() {
      if(isMobile.any()){
        $(window).unbind("scroll.moon");
        removeScrollspy();
      }else{
	      comment_modify_content_on = true;
	      $('.sec_div').unbind('mouseenter mouseleave');
      }
    };
    var commentModifyHandlerOut = function(){
      if(isMobile.any()){
        onSection($("#comment_content_seq").val());
        scrollBinderMoon(100);
      }else{
	      comment_modify_content_on = false;
	      $('.sec_div').hover(secDivHandlerIn, secDivHandlerOut);
      }
    };
    
    //window scroll 이동시 댓글 입력창 포커스 해제
    var bodyScrollHandler = function(){
      if(comment_content_on){
        if(isMobile.any()){
	        $('#comment_content').blur();
        }
      }
      if(comment_modify_content_on){
        if(isMobile.any()){
	        $('#comment_modify_content').blur();
        }
      }
    };
    
    
    var onReady = function(){
      // ready variable
      var hide_set =[];
      
      // util
      var isContains = function(value, array){
        for(var i=0; i<array.length; i++){
          if(array[i] == value) return true;
        }
        return false;
      };
      
      var indexOfArray = function(value, array){
        for(var i=0; i<array.length; i++){
          if(array[i] == value) return i;
        }
        return -1;
      };
      
      var hasHiddenParent = function(array){
        for(var i=0; i<array.length; i++){
          if($('div[seq='+array[i]+']').hasClass('hide')) return true;
        }
        return false;
      };
      
      $.fn.serializeObject = function(){
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
          if (o[this.name]) {
            if (!o[this.name].push) {
              o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
          }else {
            o[this.name] = this.value || '';
          }
        });
        return o;
      };
      
      //--annotation 처리
      $.get(contextPath + "/books/" + book_id + "/volume/" + volume_id + "/annotations", function(data){
        var $annLayer = $("#annotation_layer");
        $.each(data, function(k,v){
          var ann_div = v['comment_sort'] == 1 ? volume_frequently : volume_sympathetic;
          var desc_text = '';
          $.each(v['sub_comment_content'], function(sk, sv){
            desc_text = desc_text + '<p  class="desc">'+sv['desc'];
            if(sv['source']) desc_text = desc_text + ' ※ '+ sv['source'];
            desc_text = desc_text + '</p>';
          });
          var desc_node = '<div id="ann_desc_'+v['comment_seq']+'" class="standalone layer_area layer_exp ann_desc hide">'
          +'<span></span>'
          +'<p class="title">'+ann_div+'</p>';
          if(v['comment_pronounce']){
            desc_node +='<p>';
            desc_node += '(' + v['comment_pronounce'] + ')';
            desc_node += '</p>';
          }
          desc_node += desc_text+'</div>';
          $annLayer.append(desc_node);
        });

        bindAnn($(document));
        $("#st_fre").change(function(e){
          $(".txt_exp01").unbind("click");
          if($(this).is(":checked")){ 
            $(".txt_exp01").removeClass("unchecked");
            $(".txt_exp01").addClass("colored");
            $(".txt_exp01").click(function(e){
              e.preventDefault();
              toggleAnnDesc($(this));
            });
          }else{
            $(".txt_exp01").removeClass("colored");
            $(".txt_exp01").addClass("unchecked");
          }
          changeSessionVolumeSettings();
        });
        $("#st_sym").change(function(e){
          $(".txt_exp02").unbind("click");
          if($(this).is(":checked")){
            $(".txt_exp02").addClass("colored");
            $(".txt_exp02").removeClass("unchecked");
            $(".txt_exp02").click(function(e){
              e.preventDefault();
              toggleAnnDesc($(this));
            });
          }
          else{ 
            $(".txt_exp02").removeClass("colored");
            $(".txt_exp02").addClass("unchecked");
          }
          changeSessionVolumeSettings();
        });
      });
      //annotation 처리--
      
      //--언어별 보기/숨기기
      var checkLanguageSetting = function(){
        var checked_number = $("input[class='st_lang_setting']:checkbox:checked" ).length;
        if(checked_number > 0){
          return true;
        }else{
          return false;
        }
      };
      
      $("#st_or").change(function(e){
        if(checkLanguageSetting()){
          if($(this).is(":checked")){ $(".or").removeClass("hide"); }else{ $(".or").addClass("hide"); }
          var curr_seq = $("#comment_content_seq").val();
          changeSessionVolumeSettings();
          scrollToSec($("#content_"+curr_seq));
        }else{
          $("#st_or").prop("checked", true);
          alert(volume_setting_lang_message);
        }
      });
      
      $.each(volumeLangCodeList , function(key){
        $("#st_"+volumeLangCodeList[key].lowerLanguageCode).change(function(e){
          if(checkLanguageSetting()){
            if($(this).is(":checked")){
              $("." + volumeLangCodeList[key].lowerLanguageCode).removeClass("hide"); 
            }else{ 
              $("." + volumeLangCodeList[key].lowerLanguageCode).addClass("hide");
            }
            var curr_seq = $("#comment_content_seq").val();
            changeSessionVolumeSettings();
            scrollToSec($("#content_"+curr_seq));  
          }else{
            $("#st_"+volumeLangCodeList[key].lowerLanguageCode).prop("checked", true);
            alert(volume_setting_lang_message);
          }  
        });
      });
      //--
      
      
      //--공유 언어별 보기/숨기기
      var checkShareLanguageSetting = function(){
        var checked_number = $("input[class='pub_lang_setting']:checkbox:checked" ).length;
        if(checked_number > 0){
          return true;
        }else{
          return false;
        }
      };
      
      $("#pub_ori").change(function(e){
        if(checkShareLanguageSetting()){
          setIframeShareText();
        }else{
          $("#pub_ori").prop("checked", true);
          alert(volume_setting_lang_message);
        }
      });
      
      $.each(volumeLangCodeList , function(key){
        $("#pub_"+volumeLangCodeList[key].lowerLanguageCode).change(function(e){
          if(checkShareLanguageSetting()){
            setIframeShareText();  
          }else{
            $("#pub_"+volumeLangCodeList[key].lowerLanguageCode).prop("checked", true);
            alert(volume_setting_lang_message);
          }  
        });
      });
    //--공유 언어별 보기/숨기기      
      
      $(document).bind('mousedown keydown', function(e){
        $('.ann_desc').each(function(){
          if(!$(this).hasClass('hide')) $(this).addClass('hide');
        });
        if($("#table_contents").is(":visible") 
            && $(e.target).parents("#table_contents").attr("id") != "table_contents"
            && !$(e.target).parents().hasClass("table_area")
            && !$(e.target).hasClass("view_book")
            ){
          $("#table_contents").hide();
        }
        if($("#settings").is(":visible") 
            && $(e.target).parents("#settings").attr("id") != "settings"
            && !$(e.target).parents().hasClass("view_setting")){
          $("#settings").hide();
        }
        if($("#popup_six_button").is(":visible") 
            && $(e.target).parents("#popup_six_button").attr("id") != "popup_six_button"){
          $("#popup_six_button").addClass("hide");
          $("#popup_six_button a").unbind("click");
        }
      });
      
      $(document).bind('mouseup', function(e){
        global_mouse_down = false;
      });
      $(document).bind('mousedown' , function(e){
        global_mouse_down = true;
      });
      $(document).bind("keydown", function(e){
        switch(e.which){
        //end
        case 35:
          if(content_array[content_array.length-1]){
            onSection(content_array[content_array.length-1]);
          }
          break;
        //home
        case 36:
          if(content_array[0]){
            onSection(content_array[0]);
          }
          break;
        }
      });
       
      //-- 텍스트 드래그 이벤트 처리
      var addUserCommentBinder = function(e){
        e.preventDefault();
        var unbindClicks = e.data["unbindClicks"];
        var selectedText = e.data["selectedText"];
        if(isMobile.any()){
           if(!$("#info_open").hasClass("hide")){
             $("#info_open").addClass("hide");
             $("#info_close").removeClass("hide");
           }
           $(window).unbind("scroll.moon");
           removeScrollspy();
         }

         if($("#user_ctrl").is(":hidden")){
           $("#user_ctrl").show();
         }
         if($('#comment_open').hasClass('hide')){
           toggleOpenClose('comment');
         }
         $("#popup_six_button").addClass("hide");
         if(selectedText){
           $("#comment_content").val('"' + selectedText + '"\n');
         }
         $("#comment_content").focus();
         unbindClicks();
      };
      
      var secDivTouchHandler = function(ev){
         ev.stopPropagation();
         var unbindClicks = function(){
           $("#addUserComment").unbind("click");
           $("#addQuote").unbind("click");
           $("#addShare").unbind("click");
         };
         unbindClicks();
         var curr_content_seq = $(this).attr("seq");
         //var selectedText = userSelection.getSelectedText();
         quote_curr_seq = curr_content_seq;
         iframe_curr_seq = curr_content_seq;
         onSection(curr_content_seq);
         $("#comment_content_seq").val(curr_content_seq);
         
         //console.log(e.originalEvent.touches);
         $("#popup_six_button").removeClass("hide");
         $("#popup_six_button").offset({left:ev.gesture.pointers[0].pageX - 123, top:ev.gesture.pointers[0].pageY + 20});
         
         // 댓글
         if(!$._data($("#addUserComment")[0], 'events')){
           $("#addUserComment").click({unbindClicks : unbindClicks}, addUserCommentBinder);
          }

          // 인용표기
          if(!$._data($("#addQuote")[0], 'events')){
            $("#addQuote").click(
                function(e){
                  e.preventDefault();
                  var action = "/books/" + book_id + "/volume/" + volume_id + "/content/"
                      + curr_content_seq;
                  $.get(action, function(content){
                    if(content && content['up_path_nm']){
                      $("#quote_original > #quote_nav").text(content['up_path_nm']);
                    }
                  });
                  if(book_nm_chi){
                    $("#quote_original > #quote_book_nm").text("《" + book_nm_chi + "》 ");
                  }
                  $('#atype').prop('checked', true);
                  clickQuoteType($('#atype')[0]);
                  $("#popup_six_button").addClass("hide");
                  $("#quote_layer").removeClass("hide");
                  $("#quote_layer").offset({
                    left : (e.pageX - 150),
                    top : (e.pageY - 100)
                  });
                  $("#quote_layer").draggable({
                    cancel : ".exception-el"
                  });
                  var clipboard = new Clipboard('.btn_clipboard', {
                    text : function(trigger){
                      return $.trim($("#quote_text").text());
                    },
                  });
                  clipboard.on('success', function(e){
                    e.clearSelection();
                    $("#quote_layer").addClass("hide");
                  });
                  $("#close_quote_layer").click(function(e){
                    e.preventDefault();
                    if(!$("#quote_layer").hasClass("hide"))
                      $("#quote_layer").addClass("hide");
                  });
                  unbindClicks();
                });
          }
          if(!$._data($("#addShare")[0], 'events')){
            //공유
            $("#addShare").click(
                function(e){
                  e.preventDefault();
                  $("#popup_six_button").addClass("hide");
                  $("#share_layer").removeClass("hide");
                  $("#share_layer").offset({
                    left : (e.pageX - 150),
                    top : (e.pageY - 200)
                  });
                  $("#share_layer").draggable({
                    cancel : ".exception-el"
                  });
                  setIframeShareText();
                  var action = rtnDomainName(location.href) + "/books/" + book_id + "/volume/"
                      + volume_id + "/#content_" + curr_content_seq;
                  $("#share_references").text(action);
                  var clipboard_url = new Clipboard('.btn_clipboard_url', {
                    text : function(trigger){
                      return $.trim($("#share_text").text());
                    },
                  });
                  clipboard_url.on('success', function(e){
                    e.clearSelection();
                    $("#share_layer").addClass("hide");
                  });
                  var clipboard_iframe = new Clipboard('.btn_clipboard_iframe', {
                    text : function(trigger){
                      return $.trim($("#iframeText").html());
                    },
                  });
                  clipboard_iframe.on('success', function(e){
                    e.clearSelection();
                    $("#share_layer").addClass("hide");
                  });
                  $("#btn_iframe_generate").click(function(e){
                    e.preventDefault();
                    setIframeShareText();
                  });
                  $("#close_share_layer").click(function(e){
                    e.preventDefault();
                    if(!$("#share_layer").hasClass("hide"))
                      $("#share_layer").addClass("hide");
                  });
                  unbindClicks();
                });
          }
        };

        if(isMobile.Android()){
          $('.sec_div').hammer().on("panright panleft", secDivTouchHandler);
        }

        var secDivMouseupHandler = function(e){
          var unbindClicks = function(){
            $("#addUserComment").unbind("click");
            $("#addQuote").unbind("click");
            $("#addShare").unbind("click");
          };
          unbindClicks();
          var userSelection = getUserSelection(e);
          if(userSelection.getSI() < 0){
            clearTextSelection();
            return false;
          }
          var curr_content_seq = $(this).attr("seq");
          var selectedText = userSelection.getSelectedText();
          quote_curr_seq = curr_content_seq;
          iframe_curr_seq = curr_content_seq;
          onSection(curr_content_seq);
          $("#comment_content_seq").val(curr_content_seq);
          if(selectedText && selectedText != ''){
            popSixButton(e, selectedText, $(this));
            // 댓글
            $("#addUserComment").click({unbindClicks : unbindClicks, selectedText: selectedText}, addUserCommentBinder);

            // 인용표기
            $("#addQuote").click(
                function(e){
                  e.preventDefault();
                  var action = "/books/" + book_id + "/volume/" + volume_id + "/content/"
                      + curr_content_seq;
                  $.get(action, function(content){
                    if(content){
                      $("#quote_original > #quote_nav").text(content['up_path_nm']);
                    }
                  });

                  $("#quote_original > #quote_book_nm").text("《" + book_nm_chi + "》 ");
                  $("#quote_original > #quote_sentence").text(" \"" + selectedText + "\" ");

                  $('#atype').prop('checked', true);

                  clickQuoteType($('#atype')[0]);

                  $("#popup_six_button").addClass("hide");
                  $("#quote_layer").removeClass("hide");
                  $("#quote_layer").offset({
                    left : (e.pageX - 150),
                    top : (e.pageY - 100)
                  });
                  $("#quote_layer").draggable({
                    cancel : ".exception-el"
                  });
                  var clipboard = new Clipboard('.btn_clipboard', {
                    text : function(trigger){
                      return $.trim($("#quote_text").text());
                    },
                  });

                  clipboard.on('success', function(e){
                    e.clearSelection();
                    $("#quote_layer").addClass("hide");
                  });
                  $("#close_quote_layer").click(function(e){
                    e.preventDefault();
                    if(!$("#quote_layer").hasClass("hide"))
                      $("#quote_layer").addClass("hide");
                  });
                  unbindClicks();
                });

            //공유
            $("#addShare").click(
                function(e){
                  e.preventDefault();
                  $("#popup_six_button").addClass("hide");
                  $("#share_layer").removeClass("hide");
                  $("#share_layer").offset({
                    left : (e.pageX - 150),
                    top : (e.pageY - 200)
                  });
                  $("#share_layer").draggable({
                    cancel : ".exception-el"
                  });
                  setIframeShareText();

                  var action = rtnDomainName(location.href) + "/books/" + book_id + "/volume/"
                      + volume_id + "/#content_" + curr_content_seq;
                  $("#share_references").text(action);

                  var clipboard_url = new Clipboard('.btn_clipboard_url', {
                    text : function(trigger){
                      return $.trim($("#share_text").text());
                    },
                  });

                  clipboard_url.on('success', function(e){
                    e.clearSelection();
                    $("#share_layer").addClass("hide");
                  });

                  var clipboard_iframe = new Clipboard('.btn_clipboard_iframe', {
                    text : function(trigger){
                      return $.trim($("#iframeText").html());
                    },
                  });

                  clipboard_iframe.on('success', function(e){
                    e.clearSelection();
                    $("#share_layer").addClass("hide");
                  });

                  $("#btn_iframe_generate").click(function(e){
                    e.preventDefault();
                    setIframeShareText();
                  });

                  $("#close_share_layer").click(function(e){
                    e.preventDefault();
                    if(!$("#share_layer").hasClass("hide"))
                      $("#share_layer").addClass("hide");
                  });
                  unbindClicks();
                });

          } else{
            $("#popup_six_button").addClass("hide");
          }
        };
      
      $('.sec_div').bind("mouseup",secDivMouseupHandler);
     
      
      //--
      //마우스 오버 이벤트 등록
      $('.sec_div').hover(secDivHandlerIn, secDivHandlerOut);
      //댓글 입력 이벤트
      $('#comment_content').focusin(commentHandlerIn);
      $('#comment_content').focusout(commentHandlerOut);
      
      $(window).on("scroll", bodyScrollHandler);
          
      //-- 목차 접기/펴기
      var partialLoad = function($parent){
        var parentSeq = $parent.attr("seq");
        var $prev_div = $parent;
        var url = "/books/"+book_id+"/volume/"+volume_id+"/content?"+$.param({up_content_seq : parentSeq});
        $.ajax({
          type : "GET",
            url:url,
            async:true,
            success:function(contents){
              if(!contents || contents.length < 1){
                return;
              }else{
                $parent.addClass("loaded");
              }
              
              for(var i=0; i<contents.length; i++){
                var content = contents[i];
                if(parentSeq == 1 && (content["content_level"] == 'B' || content["content_level"] == 'O')){
                	continue;
                }
                var $curr_div = loadContent($prev_div, content);
                if($curr_div.hasClass("title_section")){
                  $curr_div.click(titleClickEventListener);  
                }
                bindAnn($curr_div);
                if(isMobile.Android()){
	                $('.sec_div').hammer().on("panright panleft",secDivTouchHandler);
                }
                $curr_div.bind("mouseup", secDivMouseupHandler);
                $curr_div.hover(secDivHandlerIn, secDivHandlerOut);
                $prev_div = $curr_div;
              }
              //refreshScrollspy();
              curr_volume_settings_apply();
            },
            error : function(msg){
            },
            complete : function(msg){
            }
        });
      }
      
      var hideChildren = function(clicked_section, isFirst){
        $('.sec_div[up_content_seq='+clicked_section.attr('seq')+']').each(function(){
          var curr_section = $(this);
          if( clicked_section.attr('seq') == 1 && curr_section.hasClass("sec_h3")) return;

          if(curr_section.hasClass("bottomCollapseDirectionOpen")){
          	curr_section.removeClass("bottomCollapseDirectionOpen"); 
          	curr_section.addClass("bottomCollapseDirectionClose");
          }
          
          if(isFirst){
            curr_section.toggleClass('hide');
          }else{
            if(!curr_section.hasClass("hide")) curr_section.addClass('hide');  
          }
          $('.sec_div[up_content_seq='+curr_section.attr('seq')+']').each(function(){
            hideChildren(curr_section);
          });
        });
      };

      
      
    function loadingView($parent){
      $parent.animate( { backgroundColor: '#EFEFEF', duration :0} );
      if($parent.hasClass("bottomCollapseDirectionClose")){
        $parent.removeClass("bottomCollapseDirectionClose");
        $parent.addClass("bottomCollapseDirectionOpen");
      }else if($parent.hasClass("bottomCollapseDirectionOpen")){
        $parent.removeClass("bottomCollapseDirectionOpen");
        $parent.addClass("bottomCollapseDirectionClose");
      }
    }
    
    function loadingDestroy($parent){
      $parent.animate( { backgroundColor: '#FFFFFF', duration :100} );
    }      
      
      var titleClickEventListener = function(e){
        e.preventDefault();
        if($(e.target).hasClass("ann")) return; /* 주석 보기 span 일경우 이벤트 처리 제외 */
        var clicked_section = $(this);
        if(!clicked_section.hasClass("loaded")){
          if(!$(this).hasClass("no-child")){
            loadingView($(this));
          }
          partialLoad(clicked_section);
          loadingDestroy($(this));
        }else{
          if(!$(this).hasClass("no-child")){
            loadingView($(this));
          }
          hideChildren(clicked_section, true);
          //refreshScrollspy();
          curr_volume_settings_apply();
          loadingDestroy($(this));
        }
      };
      
      
      $('.title_section').each(function(){
        $(this).click(titleClickEventListener);
      });
      
      $("#toggle_b_level").click(function(e){
        e.preventDefault();
        $(".title_section").each(function(){
          hideChildren($(this));
        });
        $('html, body').animate({
          scrollTop: 0
          }, 250, function(){}
        );
      });
      
      // 폰트 사이즈 조절
      $("#mani-font-larger").click(function(e){
        e.preventDefault();
        var curr_seq = $("#comment_content_seq").val();
        var curr_font_size = $(".section_desc").css("font-size");
        var currentFontSizeNum = parseFloat(curr_font_size, 10);
        var newFontSize = currentFontSizeNum + 1;
        setFontSize(newFontSize);
        changeSessionVolumeSettings();
        scrollToSec($("#content_"+curr_seq));
      });
      $("#mani-font-smaller").click(function(e){
        e.preventDefault();
        var curr_seq = $("#comment_content_seq").val();
        var curr_font_size = $(".section_desc").css("font-size");
        var currentFontSizeNum = parseFloat(curr_font_size, 10);
        var newFontSize = currentFontSizeNum - 1;
        setFontSize(newFontSize);
        changeSessionVolumeSettings();
        scrollToSec($("#content_"+curr_seq));
      });
      
      $("#mani-font-original").click(function(e){
        e.preventDefault();
        var curr_seq = $("#comment_content_seq").val();
        setFontSize(16);
        changeSessionVolumeSettings();
        scrollToSec($("#content_"+curr_seq));
      });
      
      //sessionVolumeSettings 적용
      if(sessionVolumeSettings != null){
        //폰트
        setFontSize(sessionVolumeSettings.font_size);
        //언어설정
        if(sessionVolumeSettings.original == 0){$(".or").addClass("hide");}else{$(".or").removeClass("hide");}
        
        $.each(volumeLangCodeList , function(key){
          if(sessionVolumeSettings[(volumeLangCodeList[key].bookCode).toLowerCase()] == 0){ 
            $("."+volumeLangCodeList[key].lowerLanguageCode).addClass("hide");
          }else{$("."+volumeLangCodeList[key].lowerLanguageCode).removeClass("hide");}
        });
        //----
        //교감기 역자주
        if(sessionVolumeSettings.sympathetic_groups == 0){
          $(".txt_exp02").removeClass("colored");
          $(".txt_exp02").addClass("unchecked");
        }
        if(sessionVolumeSettings.frequently_station == 0){
          $(".txt_exp01").removeClass("colored");
          $(".txt_exp01").addClass("unchecked");
        }
      }
      
      if($("input[class='st_lang_setting']:checkbox:checked").length < 1){
        $("#st_or").prop("checked", true);
        $(".or").removeClass("hide");
      }
      
      var traversePath = function(arr_up_path, hash){
        if(!arr_up_path || arr_up_path < 1 /* || arr_up_path[0] == 1 */) {
          scrollToSec($(hash));
          $("#content_"+$(hash).attr("seq")).css("background-color", "#F0F5FD");
          //setTimeout(scrollToSec, 1000, $(hash));
          return;
        }
        var parentSeq = arr_up_path[0];
        var $parent = $(".sec_div[seq="+parentSeq+"]");
        var $prev_div = $parent;
                
        var url = "/books/"+book_id+"/volume/"+volume_id+"/content?"+$.param({up_content_seq : parentSeq});
        $.get(url, function(contents){

          if(!contents || contents.length < 1){
            return;
          }else{
            $parent.addClass("loaded");
          }
                    
          for(var i=0; i<contents.length; i++){
            var content = contents[i];
            if(parentSeq == 1 
                && (content["content_level"] == 'B'
                || content["content_level"] == 'O')
                ) continue;
            var $curr_div = loadContent($prev_div, content);
            if($curr_div.hasClass("title_section")){
              $curr_div.click(titleClickEventListener);  
            }
            bindAnn($curr_div);
            if(isMobile.Android()){
	            $('.sec_div').hammer().on("panright panleft",secDivTouchHandler);
            }
            $curr_div.bind("mouseup", secDivMouseupHandler);
            $curr_div.hover(secDivHandlerIn, secDivHandlerOut);
            $prev_div = $curr_div;
          }//for
          curr_volume_settings_apply();
          loadingView($parent);
          loadingDestroy($parent);
          traversePath(arr_up_path.slice(1), hash);          
        });
      }

		var firstSection = function(hash){    	  
		if(hash && (""+hash).indexOf("?") > 0){
			hash = hash.substring(0, hash.indexOf("?"));
		}
		if(hash){
			hash = ""+hash;
			var seq = hash.replace("#content_","");
			$.get("/books/"+book_id+"/volume/"+volume_id+"/content/"+seq,
				function(content){
					if(content){
						if(content["up_path"] == 1){
							traversePath([1], hash);
						}else{
							var arr_up_path = content["up_path"].split(",");
							traversePath(arr_up_path/* .slice(1) */, hash);							
						}
					}
				}
			);
        }else{
          refreshScrollspy();
          onSection(1);
        }
      };
      
      firstSection(window.location.hash);
      $(".sec_div").each(function(){
	      content_array.push(Number($(this).attr("seq")));
      });
    };
    //-- onReady
    
    //-- 주석 처리
    function bindAnn($parent){
      $parent.find(".ann").each(function(){
        var ann_span = $(this);
        addAnnotation(ann_span);
      });
    }
    
     function addAnnotation(ann_span){
      var seq = ann_span.attr("seq");
      /* 주석 끝에 !마크 부착 */
       if(!$(".ann[seq="+seq+"]").hasClass("last")){
         $(".ann[seq="+seq+"]").last().addClass("last");
         if($(".ann[seq="+seq+"]").last().is(":empty")){
           var parentSpan = $(".ann[seq="+seq+"]").last().parent("span")
           var parentInnerHtml = parentSpan.html();
           var thisAnn = $('<div>').append($(".ann[seq="+seq+"]").last().clone()).html();
           if(parentInnerHtml != null 
             && parentSpan.hasClass("sec_title")
             && parentInnerHtml.indexOf(thisAnn) === 0){
            $(".ann[seq="+seq+"]").last().html("&nbsp;&nbsp;");
           }
           if(parentInnerHtml != null
             && parentInnerHtml == thisAnn){
             parentSpan.children().remove();
             ann_span = $(thisAnn);
             parentSpan.after(ann_span);
           }
         }
       }
       ann_span.addClass('colored');
       //TODO : tooltip
       if($("#ann_desc_"+seq).html()){
         ann_span.tooltipster({
           content : $($("#ann_desc_"+seq).html()),
           trigger : 'click',
           position : 'bottom',
           multiple : true
         });
       }
    }
    
    function toggleAnnDesc($ann_span){
      var ann_seq = $ann_span.attr("seq"); 
      $("#ann_desc_"+ann_seq).removeClass("hide");
      $("#ann_desc_"+ann_seq).offset({left:$ann_span.offset().left - 130 
        + ($ann_span.innerWidth()/2), top:$ann_span.offset().top + 30});
    }
    
    //--
    
    //-- 스크롤 조작
    function moveTo(that){
      var contentSeq = $(that).attr("href");
      if($(contentSeq) && $(contentSeq).hasClass("sec_div")){
        scrollToSec($(contentSeq));
      }else{
        firstSection(contentSeq);
      }
    }
    
    function refreshScrollspy(){
      removeScrollspy();
      $(".sec_div").each(function(){
        addToScrollspy(this);
      });
    }
    
    var cnt = 0;
    function scrollToSec($sec){    	
      $('html, body').animate({
        scrollTop: $sec.offset().top - 150
        }, 250, function(){
          if($sec.attr("seq")){
            onSection($sec.attr("seq"));
            //setTimeout(refreshScrollspy, 250);
          }
        });
    };
    
    function refreshContentFragment(content_seq, lang_code, html){
      var $content_sec = $("#content_"+content_seq+" ."+lang_code);
      $content_sec.html(html);
      $content_sec.find(".ann").each(function(){
        var ann_span = $(this);
        addAnnotation(ann_span);
        clearTextSelection();
      });
    }
    
    function printComments(content_seq, comment_type){
      
      $(".sec_div").removeClass("on");
      $("#content_"+content_seq).addClass("on");
      if(content_seq == '' || !content_seq){
        content_seq = $("#comment_content_seq").val();
      }
      var action = "/books/" + book_id + "/volume/" + volume_id 
      + "/content/" + content_seq + "/comment";
      $(".comment_category > ul > li").removeClass("on");
      
      if(comment_type && comment_type != '' && comment_type != 'all'){
        action = action + "?comment_type=" + comment_type;
        $("#comments_"+comment_type).addClass("on");
      }else{
        $("#comments_all").addClass("on");
      }
      
      $.ajax(action,{
        async : true,
        method : "GET",
        success : function(comments){
	        $("#comment_list > ul").children().remove();
	        if(comments && comments.length > 0){
	          var typeMap = {"memo":"메모","error":"오류신고","trans":"번역제안"};
	          $.each(comments, function(k,v){
	            var $li = '<li>'
	              +'<span class="user">';
	              if(v["profile_file_id"] && v["profile_file_id"] != ""){
	                $li += '<img src="/file/imageLoad.do?file_id='+v["profile_file_id"]+'" width="60" height="60" alt="" onERROR="this.src=\'/img/common/comment_user.gif\'"/>';
	              }else if(v["user_profile_image_url"] && v["user_profile_image_url"] != ""){
	                $li += '<img src="'+v["user_profile_image_url"]+'" width="60" height="60" alt="" />';
	              }else{
	                $li += '<img src="/img/common/comment_user.gif" width="60" height="60" alt="" />';
	              }
	              $li +='</span>'
	              +'<span class="id">'+v['nick_name']+'</span>'
	              if(v['is_mine'] && v['is_mine'] == 'Y'){
	                $li += '<span class="category"><a href="#modify_comment" onclick="toggleCommnetModify(\''+v['comment_id']+'\', this); return false;" ><i class="fa fa-pencil"></i> '+common_modify+'</a></span>';
	              } 
                if(v['is_mine'] && v['is_mine'] == 'Y' || admin){  
	                $li += '<span class="category"><a href="#delete_comment" onclick="deleteCommnet(\''+v['comment_id']+'\'); return false;"><i class="fa fa-times"></i> '+common_delete+'</a></span>';
	              }
	              $li += '<div class="txt">'+v['comment_content_html'].replace(/\n/gi, "<br>")+'</div>'
	              +'</li>'
	              +'<li id="comment_modify_'+v['comment_id']+'" class="comment_modify hide">'
	              +'<form id="comment_modify_form_'+v['comment_id']+'" name="comment_modify_form">'
	              +'<textarea id="comment_modify_content" name="comment_content" style="width:100%; height:130px;" onfocus=\"commentLoginConfirm(); commentModifyHandlerIn();\" onBlur=\"commentModifyHandlerOut();\" title="'+comment_input+'"></textarea>'
	              +'<textarea name="comment_content_val" style="display:none;" title="'+comment_content+'">'+v['comment_content']+'</textarea>'
	              +'<input name="book_id" type="hidden" value="'+v['book_id']+'">'
	              +'<input name="volume_id" type="hidden" value="'+v['volume_id']+'">'
	              +'<input name="content_seq" value="'+v['content_seq']+'" type="hidden">'
	              +'<input name="comment_id" value="'+v['comment_id']+'" type="hidden">'
	              +'<input name="up_comment_id" value="'+v['up_comment_id']+'" type="hidden">'
	              +'<input name="reply_level" value="'+v['reply_level']+'" type="hidden">'
	              +'<div class="btn_center">'
	              +'<button class="btn_c btn_blue" id="comment_modify" onclick="modifyComment(\''+v['comment_id']+'\');" type="button"><span>'+common_save+'</span></button>&nbsp;'
	              +'<button class="btn_c btn_gray" id="comment_cancel" onclick="resetModifyComment();" type="button"><span>'+common_cancel+'</span></button>'
	              +'</div>'
	              +'</form>'
	              +'</li>';
	            $("#comment_list > ul").append($li);
	          });
	        }else{
	          $("#comment_list > ul").children().remove();
	          $("#comment_list > ul").append('<li class="no_data">'+comment_none_message+'</li>');
	        }
	      }
      });
    }
    
    function bindScrollSpyPrevSection(currentSectionIndex){
      bindScrollSpy(
          currentSectionIndex, 
          function(loopIndex){return loopIndex >= 0;},
          function(loopIndex){return loopIndex-1;});      
    }
    function bindScrollSpyNextSection(currentSectionIndex){
      bindScrollSpy(
          currentSectionIndex, 
          function(loopIndex){return loopIndex < content_array.length;},
          function(loopIndex){return loopIndex+1;});
    }
    
    function bindScrollSpy(currentSectionIndex, loopCondition, afterLoop){
      var loopIndex = currentSectionIndex;
      var bindedCnt = 0;
      for(; loopCondition(loopIndex); loopIndex = afterLoop(loopIndex)){
        if($("#content_"+content_array[loopIndex]).is(":visible")){
          addToScrollspy($("#content_"+content_array[loopIndex]));
          if(bindedCnt++ > 5){
            break;
          }
        }
      }
    }
    
    var printCommentHoverTimer;
    function printCommentHandlerIn(seq) {
      printCommentHoverTimer = setTimeout(function() {
        printComments(seq);
       }, 500);
    }
    function printCommentHandlerOut(){
      if(printCommentHoverTimer){
        clearTimeout(printCommentHoverTimer);
        printCommentHoverTimer = null;
      }
    }
    
    function onSection(seq){
      var currentSectionIndex = content_array.indexOf(Number(seq));
      if(currentSectionIndex != -1){
	      removeScrollspy();
	      bindScrollSpyPrevSection(currentSectionIndex);
	      bindScrollSpyNextSection(currentSectionIndex);
      }
      
      $('#current_sec_nav').html("");
      $("#current_sec_num").text("");
      var $element = $(".sec_div[seq='"+seq+"']");
      $("#comment_content_seq").val(seq);
      $(".sec_div").removeClass("on");
      $("#content_"+seq).addClass("on");
      printCommentHandlerOut();
      printCommentHandlerIn(seq);
      if($element.attr("content_level") == "A"){
        $('#current_sec_nav').html($element.find(".or .sec_title").text());
        return;
      }
      
      /*var nav = $element.attr("up_path_nm").split(">");
      var navLink = $element.attr("upath").split(",");
      if(nav != null){
        for(var nav_index=0; nav_index < nav.length; nav_index++){
          var navHtml = 
            "<a class=\"anchor-button\" onclick=\"moveTo(this); return false;\""
            + " href=\"#content_"+navLink[nav_index]
            + "\" title=\""+nav[nav_index]+"\">"+nav[nav_index]+"</a>";
          if(nav_index == 0){
            $('#current_sec_nav').html(navHtml);
          }else{
            var tmp_html = $('#current_sec_nav').html();
            $('#current_sec_nav').html(tmp_html + "&gt; " + navHtml);
          }
        }
        if($element.hasClass("title_section")){
          if($element.attr("up_content_seq") == 1){
            $('#current_sec_nav').html($('#current_sec_nav').html() + " &gt; " + $element.find(".or .sec_title").text());
          }else{
            $('#current_sec_nav').html($('#current_sec_nav').html() + " &gt; " + $element.find(".or").text());
          }
          //$("#current_sec_num").text($element.find(".sec_num").text());
          $("#current_sec_nav").append(" <span id=\"current_sec_num\" class=\"sec_num\">"+$element.find(".sec_num").text()+"</span>");
        }else{
          var up_index = $("#content_"+$element.attr("up_content_seq")).find(".sec_num").text();
          $("#current_sec_nav").append(" <span id=\"current_sec_num\" class=\"sec_num\">"+up_index+"</span>");
          //$("#current_sec_num").text(up_index); <span id="current_sec_num" class="sec_num"></span>
        }
      }*/
    }
    
    function addToScrollspy(that){
      if($(that).is(":hidden")) return;
      var position = $(that).position();
      $(that).scrollspy({
        min : position.top - 100,
        max : position.top -100 + $(that).height(),
        onEnter: function(element, position) {
          var seq = $(element).attr("seq");
          onSection(seq);
        },
        onLeave: function(element, position) {
        }
      });
    }
    
    function removeScrollspy(){
      $(window).off("scroll.scrollspy");
      $(window).off("scrollspy");
    }
    //--
      
    function toggleOpenClose(sectionType){
      var openId = sectionType+"_open";
      var closeId = sectionType+"_close";
      
      $("#"+openId).toggleClass("hide");
      $("#"+closeId).toggleClass("hide");
      
      if(!$("#"+openId).hasClass("hide")) $("#"+sectionType+"_btn_close").focus();
      if(!$("#"+closeId).hasClass("hide")) $("#"+sectionType+"_btn_open").focus();
    }
    
    //-- 댓글 버튼
    function addComment(up_comment_id){
      if (!$.trim($("#comment_content").val())) {
        alert(comment_none_message);
        return false;
      }
      
      if(!loginContext) {
        if(confirm(login_message_use)){
          location.href = '/user/signin';
        }
        return false;
      }
      var content_seq = $("#comment_content_seq").val();
      var token = $("input[name='_csrf']").val();
      if(up_comment_id){
        $("#up_comment_id").val(up_comment_id);
        $("#reply_level").val(1);
      }else{
        $("#reply_level").val(0);
      }
      $.ajax({
        url: "/books/" + book_id + "/volume/" + volume_id 
         + "/content/" + content_seq + "/comment",
        method: 'POST',
        data: $("#comment_apply_form").serializeObject(),
        beforeSend: function (xhr) {
          xhr.setRequestHeader('X-CSRF-TOKEN', token);
        },
        success: function(result) {
          resetComment();
          printComments(content_seq, selectCommentType());
        },
        error:function(error){
          alert(comment_input_error_message);
        }
      });
    }
    
    function resetComment(){
      $("#comment_content").val('');
      $("#comment_content").focus();
    }
    
    function removeComments(){
      $("#comment_list > ul").children().remove();
      $("#comment_list > ul").append('<li class="no_data">'+comment_message_none+'</li>');
    }
    
    
    function deleteCommnet(comment_id){
      if(!confirm(common_delete_question)) return false; 
      var comment_modify_id = "comment_modify_"+comment_id;
      var $form = $("#"+comment_modify_id + " > form");
      if(!loginContext) {
        if(confirm(login_message_use)){
          location.href = '/user/signin';
        }
        return false;
      }
      var content_seq = $form.children("input[name='content_seq']").val();
      var token = $("input[name='_csrf']").val();
      $.ajax({
        url: "/books/" + book_id + "/volume/" + volume_id 
         + "/content/" + content_seq + "/comment/"+comment_id,
        method: 'DELETE',
        beforeSend: function (xhr) {
          xhr.setRequestHeader('X-CSRF-TOKEN', token);
        },
        success: function(result) {
          printComments(content_seq, selectCommentType());
        },
        error:function(error){
          alert(comment_delete_error_message);
        }
      });
    }
    
    function selectCommentType(){
      var comment_type = null;
      $(".comment_type").each(function(){
        if($(this).hasClass("on")) comment_type = $(this).attr("comment-type");
      });
      return comment_type;
    }
    
    function replyCommnet(comment_id){
      
    }
   
    function modifyComment(comment_id){
      var comment_modify_id = "comment_modify_"+comment_id;
      var $form = $("#"+comment_modify_id + " > form");
      if (!$.trim($form.children("textarea[name='comment_content']").val())) {
        alert(comment_none_message);
        return false;
      }
      
      if(!loginContext) {
        if(confirm(login_message_use)){
          location.href = '/user/signin';
        }
        return false;
      }
      var content_seq = $form.children("input[name='content_seq']").val();
      var token = $("input[name='_csrf']").val();
      $.ajax({
        url: "/books/" + book_id + "/volume/" + volume_id 
         + "/content/" + content_seq + "/comment/"+comment_id,
        method: 'POST',
        data: $form.serializeObject(),
        beforeSend: function (xhr) {
          xhr.setRequestHeader('X-CSRF-TOKEN', token);
        },
        success: function(result) {
          printComments(content_seq, selectCommentType());
        },
        error:function(error){
          alert(comment_modify_error_message);
        }
      });
    }
   
    function resetModifyComment(){
      $("div.book_user div.section div.comment_list li span.category a.on").removeClass("on");
      $(".comment_modify").each(function(){
        if(!$(this).hasClass("hide")) $(this).addClass("hide");
      });
    }
    
    function toggleCommnetModify(comment_id, that){
      var comment_modify_id = "comment_modify_"+comment_id;
      $("#"+comment_modify_id).toggleClass("hide");
      if($("#"+comment_modify_id).is(":visible")){
        resetModifyComment();
        $(that).addClass("on");
        $("#"+comment_modify_id).removeClass("hide");
        var $txtarea = $("#"+comment_modify_id + " > form > textarea[name='comment_content']");
        $txtarea.focus().val("").val($("#"+comment_modify_id + " > form > textarea[name='comment_content_val']").val());
      }else{
        resetModifyComment();
      }
    }
    //--
    
    function popSixButton(event, selectedText, cell){
      var curr_seq = cell.attr("seq");
      $("#popup_six_button").removeClass("hide");
      $("#popup_six_button").offset({left:(event.pageX - 123), top:(event.pageY+20)});
    }
    
    function getUserSelection(e){
      var selection;

      if (window.getSelection == undefined) { 
        var wgS = setInterval(function() {
          if (rangy.initialized) {
            window.getSelection = rangy.getSelection;
            clearTimeout(wgS);
          }
        }, 10);
      }

      if (window.getSelection) {
        selection = window.getSelection();
      } else if (document.selection) {
        selection = document.selection.createRange();
      }
      var $startNode = $(window.getSelection().anchorNode);
      if(!$startNode.hasClass("sec_node")){
        $startNode = $startNode.parents(".sec_node");
      }
      var $endNode = $(window.getSelection().extentNode);
      if(!$endNode.hasClass("sec_node")){
        $endNode = $startNode.parents(".sec_node");
      }
      var selected_text = selection.toString();
      var open_index = $startNode.text().indexOf(selected_text);
      var end_index = $startNode.text().indexOf(selected_text) + selected_text.length
      if(end_index > $startNode.text().length) end_index = -1;
      return {
        getSI : function(){return open_index},
        getEI : function(){return end_index},
        getStartLang :function(){
          if($startNode.hasClass("or")) return "or";
          if($startNode.hasClass("ak")) return "ak";
          if($startNode.hasClass("ko")) return "ko";
          if($startNode.hasClass("en")) return "en";
        },
        getSelectedText : function(){return selected_text}
      };
    }
    
    function clearTextSelection(){
      if (window.getSelection) {
        if (window.getSelection().empty) {  
          window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges) {
          window.getSelection().removeAllRanges();
        }
      } else if (document.selection) {  
        document.selection.empty();
      }
    }
      
    function getSelectedText() {
      if(window.getSelection) {
        return window.getSelection().toString();
      }else if(document.selection) {
        return document.selection.createRange().text;
      }
      return '';
    }
    
    $("#copy_clipboard").click(function(e){
      e.preventDefault();
      var trb = ''+location.href;
      var IE = (document.all) ? true : false;
      if(IE){
        if(confirm(clipboard_copy_message))
          window.clipboardData.setData("Text", trb);
      } else{
        prompt(clipboard_self_copy_message, trb);
      }
    });
    
    //-- ajax load
    function getTableElement(tableString){
      if(!tableString && tableString != 0){
        return "";
      }
      var table = "<table><caption>본문에 삽입된 표</caption>";
      var rows = tableString.split("{n}");
      $.each(rows, function(k1,v1){
        var cols = v1.split("#");
        table += "<tr>"
        $.each(cols, function(k2,v2){
          if(k2 == 0) return;
          if(k1 == 0) table += "<th scope=\"col\">"+v2+"</th>";
          else table += "<td>"+v2+"</td>";
        });
        table += "</tr>"
      });
      table += "</table>";
      return table;
    }
    
    function getImageInfo(curr_book_id, curr_volume_id, curr_content_seq){
      var imagesInfo;
      $.each(volumeImages , function(key){
        if(volumeImages[key].book_id == curr_book_id && volumeImages[key].volume_id == curr_volume_id 
            && volumeImages[key].content_seq == curr_content_seq && volumeImages[key].lang_code == "OR"){
          imagesInfo = volumeImages[key];
          return false;
        }
      });
      return imagesInfo;
    }
    
    function compareNumbers(a, b){
        return a - b;
    }
    
    function pushToContentArray(seq){
      if(content_array.indexOf(seq) == -1){
	      content_array.push(seq);
	      content_array.sort(compareNumbers);
      }
    }

    function loadContent(prev_div, content){
      var prescriptionClass = "";
      var curr_div = $("<div>",{
          id : "content_"+content["content_seq"], 
          upath : content["up_path"],
          up_content_seq : content["up_content_seq"],
          bottom_count : content["bottom_count"], 
          "class": "sec_div" + prescriptionClass,
          seq : content["content_seq"],
          up_path_nm : content["up_path_nm"],
          content_level : content["content_level"],
          content_level_depth : content["content_level_depth"]
          });
      
      pushToContentArray(content["content_seq"]);
      
      if(content["bottom_count"] > 0){
        curr_div.addClass("bottomCollapseDirectionClose");
      }
      var lv = content["content_level"].charCodeAt(0) - 63;
      switch(lv){
      case 4:
      case 5:
      case 6:
      case 7:
        curr_div.addClass("title_section").addClass("sec_h"+lv);
        var hTag = lv == 7 ? "<h6>" : "<h"+lv+">";
        var hDiv = $("<div>",{"class": "h-div"});
        var numDiv = $("<div>",{"class": "num-div"}); 
        hDiv
           .append(
               $(hTag, {"class" : "chinese or sec_node", html: "<a href=\"javascript:;\" role=\"button\" title=\""+title_open_close+"\">&nbsp;"+content["original"]+"</a>"}));
        
        $.each(volumeLangCodeList, function(i){
          var langCode = this;
          var hiddenClassString = langCode["lowerLanguageCode"] == "ko" ? "" : " hide";
          var classString = langCode["lowerLanguageCode"] + " sec_node" + hiddenClassString;
          var htmlString = "<a href=\"javascript:;\" role=\"button\" title=\""
            + title_open_close +"\">&nbsp;"
            + content[langCode["dbLangDataLowerColumnName"]] + "</a>";
          hDiv.append($(hTag, {
            "class": classString, 
            "html": htmlString
          }));
        });
        
        numDiv.append($("<span>", {"class" : "sec_num", html: content["index_num"]}));
        
        if(content["content_level_depth"] == "H"){
          numDiv.append($("<span>", {"class" : "prescription color-h", html: common_prescription1}));
        }else if(content["content_level_depth"] == "K"){
          numDiv.append($("<span>", {"class" : "prescription color-k", html: common_prescription2}));
        }else if(content["content_level_depth"] == "P"){
          numDiv.append($("<span>", {"class" : "prescription color-f", html: common_prescription3}));
        }
        
        curr_div.append(hDiv);
        curr_div.append(numDiv);
        break;
      case 17:
        /* PP */
        curr_div.addClass("sec_txt").addClass("sec_image");
        var imageInfo = getImageInfo(content["book_id"], content["volume_id"], content["content_seq"]);
        var img_explain = content["original"];
        
        $.each(volumeLangCodeList, function(i){
          var langCode = this;
          img_explain += content[langCode["dbLangDataLowerColumnName"]];
        });
        
        if(img_explain){
          img_explain =  img_explain.replace(/(<([^>]+)>)/gi, "");
        }
        
        var img_html = "";
        img_html += "<img";
        img_html += " id=\"content_image_"+content["content_seq"]+"\" ";
        img_html += " class=\"volume_img\"";
        img_html += " src=\""+contextPath+"/file/image/"+imageInfo.attach_seq+"\" "
        img_html += " onclick=\"clickImage(this);\" alt=\""+img_explain+"\" title=\""+img_explain+"\" "; 
        img_html += ">"; 
        
        var dl = $("<dl>")
        .append($("<dt>", {"class": "sec_num", html: getLastIndexNumber(content["index_num"])}))
        .append($("<dd>", {"class": "image sec_node" , "style" : "text-align:center;", html: img_html}));
        $.each(volumeImages , function(key){
          if(volumeImages[key].book_id == content["book_id"] && volumeImages[key].volume_id == content["volume_id"] 
              && volumeImages[key].content_seq == content["content_seq"] && volumeImages[key].lang_code == "OR"){
            dl
            .append($("<dd>", {"class": "chinese or sec_node", html: volumeImages[key].description}));
          }
          $.each(volumeLangCodeList, function(i){
            var langCode = this;
            var hiddenClassString = langCode["lowerLanguageCode"] == "ko" ? "" : " hide";
            img_explain += content[langCode["dbLangDataLowerColumnName"]];
	          if(volumeImages[key].book_id == content["book_id"] 
	           && volumeImages[key].volume_id == content["volume_id"] 
	           && volumeImages[key].content_seq == content["content_seq"] 
	           && volumeImages[key].lang_code == langCode["languageCode"]){
	            dl.append(
	                $("<dd>", {
	                  "class": langCode["lowerLanguageCode"] + " sec_node" + hiddenClassString, 
	                  "html": volumeImages[key].description
	                }));
	          }
          });
        });
        curr_div.append(dl);
        break;
      case 21:
        /* TT */
        curr_div.addClass("sec_txt").addClass("sec_table");
        var dl = 
          $("<dl>")
          .append($("<dt>", {"class": "sec_num", html: getLastIndexNumber(content["index_num"])}))
          .append($("<dd>", {"class": "chinese or sec_node", html: getTableElement(content["original"])}));
        
        $.each(volumeLangCodeList, function(i){
          var langCode = this;
          var hiddenClassString = langCode["lowerLanguageCode"] == "ko" ? "" : " hide";
          dl.append(
              $("<dd>", {
                "class":  langCode["lowerLanguageCode"] + " sec_node" + hiddenClassString, 
                "html": getTableElement(content[langCode["dbLangDataLowerColumnName"]])
                  }));
        });
        curr_div.append(dl);
        break;
      default:
        curr_div.addClass("sec_txt");
        var dl = $("<dl>")
          .append($("<dt>", {"class": "sec_num", html: getLastIndexNumber(content["index_num"])}))
          .append($("<dd>", {"class": "chinese or sec_node", html: content["original"]}));
        
        $.each(volumeLangCodeList, function(i){
          var langCode = this;
          var hiddenClassString = langCode["lowerLanguageCode"] == "ko" ? "" : " hide";
          dl.append(
              $("<dd>", {
                "class":  langCode["lowerLanguageCode"] + " sec_node" + hiddenClassString, 
                "html": content[langCode["dbLangDataLowerColumnName"]]
              }));
        });
        curr_div.append(dl);
        break;
      }
      if( lv != 17){
        var inlineImages = curr_div.find("img.inline-image");
        if(inlineImages){
          $.each(inlineImages, function(){
            var jqThis = $(this);
            var imageSeq = jqThis.attr("seq");
            var imageInfo = getInlineImage(content, imageSeq);
            jqThis.attr("src", ""+contextPath+"/file/image/"+imageInfo.attach_seq);
            //jqThis.attr("onclick", "clickImage(this);");
          });
        }
      }
      curr_div.append($("<div>",{"class" : "clearfix"}));
      prev_div.after(curr_div);
      return curr_div;
    }
    
    function getInlineImage(content, imageSeq){
      var imagesInfo;
      $.each(volumeImages , function(key){
        var thisImg = this;
        if(thisImg["book_id"] == content["book_id"] 
          && thisImg["volume_id"] == content["volume_id"]
          && thisImg["content_seq"] == content["content_seq"]
          && thisImg["image_seq"] == imageSeq){
          imagesInfo = thisImg;
          return false;
        }
      });
      return imagesInfo;
    }
    
    function loadContents(curr_book_id, curr_volume_id, start_index, last_index){
      var url = '/books/'+curr_book_id+'/volume/'+curr_volume_id
      +'/range?start_index='+start_index;
      if(last_index) url = url+ '&last_index='+last_index;
      var prev_div = $("#content_"+start_index);
      $.get(url, function(contents){
        if(!contents || contents.length < 1) return;
        for(var i=0; i<contents.length; i++){
          var content = contents[i];
          prev_div = loadContent(prev_div, content);
        }
      }).done(function(){
        if(!last_index){
          setTimeout(onReady, 1000);
          //onReady();
        }
      }).fail(function(msg){
        if(console) console.log(msg);
        //alert("데이터를 읽어오던 중 오류가 발생했습니다.");
      });
    }
    //--
    
    //세션 설정 갱신
    function changeSessionVolumeSettings(){
      var token = $("input[name='_csrf']").val();
      var dataForm;
      if(sessionVolumeSettings != null){ dataForm = sessionVolumeSettings; }else{ dataForm = new Object();}
      
      if($("#st_or").prop("checked") == true){dataForm["original"] = 1;}else{dataForm["original"] = 0;}
      $.each(volumeLangCodeList , function(key){
        dataForm[(volumeLangCodeList[key].bookCode).toLowerCase()] = 0;
        if($("#st_"+volumeLangCodeList[key].lowerLanguageCode).prop("checked") == true) {
          dataForm[(volumeLangCodeList[key].bookCode).toLowerCase()] = 1;
        }
      });
      if($("#st_sym").prop("checked") == true){ 
        dataForm["sympathetic_groups"] = 1; 
      }else{
        dataForm["sympathetic_groups"] = 0;
      }
      if($("#st_fre").prop("checked") == true){
        dataForm["frequently_station"] = 1;
      }else{
        dataForm["frequently_station"] = 0;
      }
      
      dataForm["font_size"] = getFontSize();
      
      $.ajax({
        type : "POST",
        url : "/user/changeVolumeSettings.do",
        async : true,
        data : dataForm,
        beforeSend: function (xhr) {
          xhr.setRequestHeader('X-CSRF-TOKEN', token);
        },
        success : function(msg) {
        },
        error : function(msg){
          if(console) console.log("changeVolumeSettings : error");
        }
      });
    }
    
    //content 폰트사이즈 변경
    function setFontSize(font_size){
      $('.section_desc').css('font-size', font_size);
    }
    
    function getFontSize(){
      var curr_font_size = $('.section_desc').css('font-size');
      var curr_font_size_num = parseFloat(curr_font_size, 10);
      return curr_font_size_num;
    }
      
      function clickImage(obj){
        $("body").addClass("modal-open");
        var temp = $('#layer01');     //레이어의 id를 temp변수에 저장
        temp.fadeIn();  
        
        var objectId = obj.id;
        var imageContent = "<img src=\" "+$('#'+objectId).attr('src')+" \" class=\"popup_image\" alt=\"\" onclick=\"closeDialog();\">";
        $("#layer01").empty();
        $("#layer01").append(imageContent);
        //$("#layer01").removeClass("hide");
        $("#layer01").offset({left:($(window).width()/2)-($("#layer01").width()/2), top:($(window).height()/2)-($("#layer01").height()/2)+$(window).scrollTop()});
        
        if(!$('.layer_bg').length) {
          $('<div class="layer_bg" onclick="closeDialog();"></div>').appendTo($('body'));
        }
        var oj = $(".layer_bg");
        oj.fadeIn(500); // 불투명 배경 레이어 보이기 속도
         
        temp.find('.cbtn').click(function(e){
          closeDialog();
        });
      }
      function closeDialog() {
        $('#layer01').fadeOut();     //'닫기'버튼을 클릭하면 레이어가 사라진다.
          var oj = $('.layer_bg');
          if(oj.length) {
            oj.fadeOut(500, function() {
             oj.remove();
            });
          }
        $("body").removeClass("modal-open");
      }
      /*function clickQuoteType(obj){
        var quoteTypeBtnId = obj.id;
        var referencesText = ""; 
        var date = new Date();
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        var monthNames = [
                          "January", "February", "March",
                          "April", "May", "June", "July",
                          "August", "September", "October",
                          "November", "December"
                         ];
        var quoteUrl = rtnDomainName(location.href)+"/books/"+book_id+"/volume/"+volume_id+"#content_"+quote_curr_seq
        
        if(quoteTypeBtnId == "atype"){
          referencesText = common_mediclassicsDb+" [homepage on the Internet]. "+common_kiom+"; 2015" + " [cited "+day+" "+monthNames[monthIndex].substring(0, 3)+" "+year+"]. Available from: "+quoteUrl;
        }else if(quoteTypeBtnId == "btype"){
          referencesText = common_kiom+". "+common_mediclassicsDb+". Retrieved "+monthNames[monthIndex]+" "+day+", "+year+", from: "+quoteUrl;
        }else if(quoteTypeBtnId == "ctype"){
          referencesText = "\""+common_mediclassicsDb+"\" "+common_kiom+", accessed "+monthNames[monthIndex]+" "+day+", "+year+", "+quoteUrl;
        }else if(quoteTypeBtnId == "dtype"){
          referencesText = common_mediclassicsDb+" [internet]. "+common_daejeon+":"+common_kiom+". [2015]-. " + book_nm_kor + " [cited " + year + " " + monthNames[monthIndex].substring(0, 3) + " " + day + "]. " + "Available from: " + quoteUrl;
        }
        
        $('#quote_references').text(referencesText);
      }*/
    
    function sendSns(sns) {
      var target;
      var content_seq = $("#comment_content_seq").val();
      var _url = encodeURIComponent(rtnDomainName(location.href) + "/books/" + book_id + "/volume/" + volume_id + "/#content_" + content_seq);
      var _txt = encodeURIComponent("");
    
      switch (sns) {
      case 'FACEBOOK':
        target = {
          method : 'popup',
          url : 'http://www.facebook.com/sharer/sharer.php?u=' + _url
        };
        break;
      case 'TWITTER':
        target = {
          method : 'popup',
          url : 'http://twitter.com/intent/tweet?text=' + _txt + '&url=' + _url
        };
        break;
      case 'GOOGLE':
        target = {
            method : 'popup',
            url : 'https://plus.google.com/share?url=' + _url + '&t=' + _txt
        };
        break;

      default:
        return false;
      }
      
//      setTimeout("checkShareSns('" + sns + "','" + _url + "','" + content_seq + "')", 1000 * 90);
      checkShareSns(sns,"",content_seq);
      window.open(target.url, sns, 'width=626,height=436');
      $("#share_layer").addClass("hide");
      return false;
    }
  
  function checkShareSns(snsType, param_url, content_seq) {
    var token = $("input[name='_csrf']").val();
      var searchForm = {
            book_id : book_id,
            volume_id : volume_id,
            content_seq : content_seq,
            snsType : snsType,
            param_url : param_url
        };
          $.ajax({
          type: "POST",
          url:"/books/checkShareCount",
          async : false,
          data: searchForm,
            beforeSend: function (xhr) {
              xhr.setRequestHeader('X-CSRF-TOKEN', token);
            },
          success: function(msg) {
            // console.log(msg);
          },
          error:function(msg){
            if(console) console.log("commentList : error");
          }
        });
  }
  
  function rtnDomainName(url)
  {
   url = url.split('//');
   var head = url[0];
   url = url[1].substr(0,url[1].indexOf('/'));
   return head + '//' + url;
  }
  
  function closeIframePopup(book_id, volume_id, content_seq) {
    $("body").removeClass("modal-open");
    location.replace(contextPath+"books/"+book_id+"/volume/"+volume_id+"#content_"+content_seq);
    window.location.reload(true);
  }
  
  function mobile_opt(that){
    if(isMobile.any()){
      if($("#user_ctrl").is(":visible")){
        $(window).unbind("scroll.moon");
        removeScrollspy();
      }else{
        onSection($("#comment_content_seq").val());
        scrollBinderMoon(100);
      }
    }
  }
  
  function commentLoginConfirm() {
    if(!loginContext) {
      var content_seq = $("#comment_content_seq").val();

      $('#comment_content').focusout();
      $('#comment_content').blur();
      if(confirm(login_message_use)){
        location.href = '/user/signin?content_seq='+content_seq;
      }else{
        $('#comment_save').focus();
      }
      return false;
    }
  }
  
  function curr_volume_settings_apply(){
    setFontSize(getFontSize());
    
    //언어설정
    if($("#st_or").prop("checked") == true){$(".or").removeClass("hide");}else{$(".or").addClass("hide");}
    
    $.each(volumeLangCodeList , function(key){
      if($("#st_"+volumeLangCodeList[key].lowerLanguageCode).prop("checked") == true){ 
        $("."+volumeLangCodeList[key].lowerLanguageCode).removeClass("hide");
      }else{$("."+volumeLangCodeList[key].lowerLanguageCode).addClass("hide");}
    });
    //----
    //교감기 역자주
    if($("#st_sym").prop("checked") == false){
      $(".txt_exp02").removeClass("colored");
      $(".txt_exp02").addClass("unchecked");
    }
    if($("#st_fre").prop("checked") == false){
      $(".txt_exp01").removeClass("colored");
      $(".txt_exp01").addClass("unchecked");
    }
    //----
    
  }
  
  function setIframeShareText() {
        var iframeWidth = $("#iframeWidth").val();
        var iframeHeight = $("#iframeHeight").val();
        
        $("#framePre").attr("width", Number(iframeWidth) + 20);
        $("#framePre").attr("height", iframeHeight);
        
//         WHEN 'BOOK_15_06' THEN 'ak'
//         WHEN 'BOOK_15_02' THEN 'ko'
//         WHEN 'BOOK_15_01' THEN 'en'
//         WHEN 'BOOK_15_03' THEN 'tk'
//         WHEN 'BOOK_15_04' THEN 'es'
//         WHEN 'BOOK_15_05' THEN 'ru'
//         WHEN 'BOOK_15_07' THEN 'zh'
//         WHEN 'BOOK_15_08' THEN 'ja'

    var languages = "";
    $.each($(".pub_lang_setting") , function(chk){
      //console.log($(this).prop("checked"));
      //console.log($(this).val());
      if($(this).prop("checked") == true){
        languages += (languages==""?"":",")+$(this).val(); 
      }
    });
        
        var iframeUrl = rtnDomainName(location.href) + "/InnerBooks/" + book_id + "/InnerVolume/" + volume_id + "/InnerContent/" + iframe_curr_seq + "?x=" + iframeWidth + "&y=" + iframeHeight+"&lan="+languages;
        $("#framePre").attr("src", iframeUrl);
        $("#iframeText").html('<iframe src="' + iframeUrl + '" width="' + (Number(iframeWidth) + 20) + '"' + ' height="' + iframeHeight + '" frameborder="0"></iframe>');
  }
  
  function frameToggle(){
    
    if($('#frameDiv').css("display").toLowerCase() == "none"){
      
      $("#share_layer").css("width", $("#share_layer").css("width"));
      
      $("#frameOnOff").addClass("frameButtonCommonOpen");
      $("#frameOnOff").removeClass("frameButtonCommonClose");
      $('#frameDiv').slideDown(500);  
    }else{
      $("#frameOnOff").removeClass("frameButtonCommonOpen");
      $("#frameOnOff").addClass("frameButtonCommonClose");
      $('#frameDiv').slideUp(500);
    }
  }
  
  function quoteDownBtn() {
    var token = $("input[name='_csrf']").val();
      var searchForm = {
            "content" : $.trim($("#quote_text").text())
        };
          $.ajax({
          type: "POST",
          url:"/books/quoteDownProc",
          async : false,
          data: searchForm,
            beforeSend: function (xhr) {
              xhr.setRequestHeader('X-CSRF-TOKEN', token);
            },
          success: function(msg) {
            $("#quote_layer").addClass("hide");
			var result = msg.RESULT;
			if(result === "SUCCESS") {
				var file_name = msg.file_name;
				var tempFolder = msg.tempFolder;
				window.location.href = "/books/quoteDown.do?file_name=" + file_name + "&tempFolder=" + tempFolder;
			}
          },
          error:function(msg){
            if(console) console.log("quoteDownBtn : error");
          }
        });
    } 








function changeLanguage(locale){
  var curr_url = location.href;
  var next_url = "";
  var langIndex = curr_url.indexOf("lang=");
  var urlValueIndex = curr_url.indexOf("?");
  var firstChar = "";
  
  if(urlValueIndex > -1){
    firstChar = "&";
  }else{
    firstChar = "?";
  }
  
  if(langIndex > -1){
     var langNextStr = curr_url.substring(langIndex+5, curr_url.length);
     var langNextIndex = langIndex+5+langNextStr.indexOf("&");
     if(langNextStr.indexOf("&") == -1){
       next_url += curr_url.substring(0,langIndex+5);
       next_url += locale;
       console.log(next_url)
     }else{
       next_url += curr_url.substring(0,langIndex+5);
       next_url += locale;
       next_url += curr_url.substring(langNextIndex, curr_url.length);
     }
  }else{
    next_url += curr_url;
    next_url += firstChar+"lang="+locale;
  }
  location.replace(next_url);
}