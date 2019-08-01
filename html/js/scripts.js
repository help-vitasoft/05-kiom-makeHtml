
/*
$( ".gnb_open" ).click(function() {
  $( "#gnb" ).toggle( );
});
*/
/* btn toggle */
$(".btn-toggle").click(function(){
		$(".reply-box").toggle();
	});

	$(document).ready(function(){
	$(".btn-toggle-close").click(function(){
		$(".reply-box").toggle();
	});
});

$(".btn-side-top").click((function() {
		return function() {
		$('.ideaConcept-wrap > ul').toggle('fast');
		$('.btn-side-top i').toggleClass('hidden');					
		}
})());


$(".btn-toggle").click(function(){
		$(".cmt-reply-box").toggle();
	});

	$(document).ready(function(){
	$(".btn-toggle-close").click(function(){
		$(".cmt-reply-box").toggle();
	});
});

$(".btn-side-left").click((function() {
			return function() {
			$('#sp-sidebar').toggleClass('hide-spL');
			$('.btn-side-left .fa').toggleClass('hidden');					
			}
	})()); 

$(".btn-side-right").click((function() {
			return function() {
			$('#sp-sidebar').toggleClass('hide-spR');
			$('.btn-side-right .fa').toggleClass('hidden');					
			}
	})()); 



/* inner both*/
var maxItemHeight = 0; // Default max height value

    function itemResize() {
        // Find the biggest (in height) item
        $(".inner-both").each(function () {
            if ($(this).height() > maxItemHeight) {
                maxItemHeight = $(this).height();
            }
        });

        // Set each item to the biggest item's height
        $(".inner-both").each(function () {
            $(this).height(maxItemHeight);
        });
    }

 // Initial resize in window.load as the content in each item may contain images
    $(window).load(function () {
        // Resize all items
        itemResize();
    });

 // Since content size may change during window resizing, perform resize on window.resize
    $(window).resize(function () {
        maxItemHeight = 0; // Reset max height value

       // Reset all items to default height
        $(".inner-both").each(function () {
            $(this).css("height", "auto");
        });
     // Resize all items
        itemResize();
    });

/*
$(document).ready(function() {
	   var maxHeight = -1;

	   $('.inner-both').each(function() {
		 maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
	   });

	   $('.inner-both').each(function() {
		 $(this).height(maxHeight);
	   });
	 });
*/
$(document).ready(function() {
	   var maxHeight = -1;

	   $('.keyword-both').each(function() {
		 maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
	   });

	   $('.keyword-both').each(function() {
		 $(this).height(maxHeight);
	   });
	 });

$(document).ready(function() {
	   var maxHeight = -1;

	   $('.trend-notice-both').each(function() {
		 maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
	   });

	   $('.trend-notice-both').each(function() {
		 $(this).height(maxHeight);
	   });
	 });

$(document).ready(function() {
	   var maxHeight = -1;

	   $('.trend-notice-both2').each(function() {
		 maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
	   });

	   $('.trend-notice-both2').each(function() {
		 $(this).height(maxHeight);
	   });
	 });

(function ($) {
    "use strict";
    $(document).ready(function () {
        /*==Left Navigation Accordion ==*/
        if ($.fn.dcAccordion) {
            $('#nav-accordion').dcAccordion({
                eventType: 'click',
                autoClose: true,
                saveState: true,
                disableLink: true,
                speed: 'fast',
                showCount: false,
                autoExpand: true,
                classExpand: 'dcjq-current-parent'
            });
        }
				
        if ($.fn.dcAccordion) {
            $('#tree-accordion').dcAccordion({
                eventType: 'click',
                autoClose: true,
                saveState: true,
                disableLink: true,
                speed: 'fast',
                showCount: false,
                autoExpand: true,
                classExpand: 'dcjq-current-parent'
            });
        }
        /*==Slim Scroll ==*/
        if ($.fn.slimScroll) {
            $('.event-list').slimscroll({
                height: '305px',
                wheelStep: 20
            });
            $('.conversation-list').slimscroll({
                height: '360px',
                wheelStep: 35
            });
            $('.to-do-list').slimscroll({
                height: '300px',
                wheelStep: 35
            });
        }
        /*==Nice Scroll ==*/
        if ($.fn.niceScroll) {


            $(".leftside-navigation").niceScroll({
                cursorcolor: "#0057bb",
                cursorborder: "0px solid #fff",
                cursorborderradius: "0px",
                cursorwidth: "3px"
            });

            $(".leftside-navigation").getNiceScroll().resize();
            if ($('#sidebar').hasClass('hide-left-bar')) {
                $(".leftside-navigation").getNiceScroll().hide();
            }
            $(".leftside-navigation").getNiceScroll().show();

            $(".right-stat-bar").niceScroll({
                cursorcolor: "#0057bb",
                cursorborder: "0px solid #fff",
                cursorborderradius: "0px",
                cursorwidth: "3px"
            });
						$(".scroll-bar-ideaGroup").niceScroll({
                cursorcolor: "rgba(0,0,0,0)",
                cursorborder: "0px solid #fff",
                cursorborderradius: "5px",
                cursorwidth: "5px"
            });		
						$(".scroll-bar").niceScroll({
                cursorcolor: "rgba(0,0,0,0.3)",
                cursorborder: "0px solid #fff",
                cursorborderradius: "5px",
                cursorwidth: "5px"
            });		
            
                        $(".scroll-bar-white").niceScroll({
                cursorcolor: "rgba(255,255,255,0.3)",
                cursorborder: "0px solid #fff",
                cursorborderradius: "5px",
                cursorwidth: "5px"
            });		
					
						$(".form-texarea").niceScroll({
                cursorcolor: "rgba(0,0,0,0.3)",
                cursorborder: "0px solid #fff",
                cursorborderradius: "5px",
                cursorwidth: "5px"
            });		
					
						$(".scroll-bar-ideaGroup-wrap").niceScroll({
                cursorcolor: "rgba(0,0,0,0.3)",
                cursorborder: "0px solid #fff",
                cursorborderradius: "5px",
                cursorwidth: "10px"
            });		
					 
						
        }



        /*==Collapsible==*/
        $('.widget-head').click(function (e) {
            var widgetElem = $(this).children('.widget-collapse').children('i');

            $(this)
                .next('.widget-container')
                .slideToggle('slow');
            if ($(widgetElem).hasClass('ico-minus')) {
                $(widgetElem).removeClass('ico-minus');
                $(widgetElem).addClass('ico-plus');
            } else {
                $(widgetElem).removeClass('ico-plus');
                $(widgetElem).addClass('ico-minus');
            }
            e.preventDefault();
        });




        /*==Sidebar Toggle==*/
//
//        $(".leftside-navigation .sub-menu > a").click(function () {
//            var o = ($(this).offset());
//            var diff = 80 - o.top;
//            if (diff > 0)
//                $(".leftside-navigation").scrollTo("-=" + Math.abs(diff), 500);
//            else
//                $(".leftside-navigation").scrollTo("+=" + Math.abs(diff), 500);
//        });



        $('.sidebar-toggle-box .fa-angle-right').click(function (e) {

//            $(".leftside-navigation").niceScroll({
//                cursorcolor: "#0057bb",
//                cursorborder: "0px solid #fff",
//                cursorborderradius: "0px",
//                cursorwidth: "3px"
//            });
//			

            $('#sidebar').toggleClass('hide-left-bar');
            if ($('#sidebar').hasClass('hide-left-bar')) {
                $(".leftside-navigation").getNiceScroll().hide();
            }
            $(".leftside-navigation").getNiceScroll().show();
            $('#main-content').toggleClass('merge-left');
            e.stopPropagation();
            if ($('#container').hasClass('open-right-panel')) {
                $('#container').removeClass('open-right-panel')
            }
            if ($('.right-sidebar').hasClass('open-right-bar')) {
                $('.right-sidebar').removeClass('open-right-bar')
            }

            if ($('.header').hasClass('merge-header')) {
                $('.header').removeClass('merge-header')
			}
					
					
			/*==Sidebar Toggle icon==*/
			if ($(this).hasClass("fa-angle-left")) {
                $(this).removeClass("fa-angle-left").addClass("fa-angle-right");
            } else {
                $(this).removeClass("fa-angle-right").addClass("fa-angle-left"); 		  
		  }
        });
			
			
			/*== tree icon==*/
			 $('.icon-new-add-02').click(function (e) {
				if ($(this).hasClass("icon-new-minus-02")) {
									$(this).removeClass("icon-new-minus-02").addClass("icon-new-add-02");
							} else {
									$(this).removeClass("icon-new-add-02").addClass("icon-new-minus-02"); 		  
				}
        });
			
						
			
			// 좌측 토글 버튼 사라짐		
			$('.sidebar-toggle-box .fa-angle-right-hide').click(function (e) {
				
            $('#sidebar').toggleClass('hide-left-bar');
            if ($('#sidebar').hasClass('hide-left-bar')) {
                $(".leftside-navigation").getNiceScroll().hide();								
								$('.sidebar-toggle-box').removeClass('sidebar-toggle-box')// 버튼 사라짐								
								$('.headBox').addClass('left')// 패딩조정								
            }
						$('#headBox').hasClass('hide-left-bar');				
            $(".leftside-navigation").getNiceScroll().show();
            $('#main-content').toggleClass('merge-left');
            e.stopPropagation();
            if ($('#container').hasClass('open-right-panel')) {
                $('#container').removeClass('open-right-panel')
            }
            if ($('.right-sidebar').hasClass('open-right-bar')) {
                $('.right-sidebar').removeClass('open-right-bar')
            }

            if ($('.header').hasClass('merge-header')) {
                $('.header').removeClass('merge-header')
						}
//					
//			/*==Sidebar Toggle icon==*/
//			if ($(this).hasClass("fa-angle-left")) {
//                $(this).removeClass("fa-angle-left").addClass("fa-angle-right");
//            } else {
//                $(this).removeClass("fa-angle-right").addClass("fa-angle-left"); 		  
//		  }
        });
			
				
			/*==DB Infra Toggle==*/
				$(".btn-db").click((function() {
					return function() {
					$('.dbInfra-wrap').toggleClass('open-dbInfra');
					$('.btn-db i').toggleClass('hidden');	
					}

			})()); 
			
			
			
			
			
        $('.panel .tools .fa').click(function () {
            var el = $(this).parents(".panel").children(".panel-body");
            if ($(this).hasClass("fa-chevron-down")) {
                $(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
                el.slideUp(200);
            } else {
                $(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
                el.slideDown(200); }
        });
        
        $('.panel .toolsplus .fa').click(function () {
            var el = $(this).parents(".panel").children(".panel-body");
            if ($(this).hasClass("fa-minus-square")) {
                $(this).removeClass("fa-minus-square").addClass("fa-plus-square");
                el.slideUp(200);
            } else {
                $(this).removeClass("fa-plus-square").addClass("fa-minus-square");
                el.slideDown(200); }
        });
		
		

        $('.panel .tools .fa-times').click(function () {
            $(this).parents(".panel").parent().remove();
        });

        // tool tips

        //$('.tooltips').tooltip();

        // popovers

        //$('.popovers').popover();


    });


})

(jQuery);
$(function () {
    $(".tab_content").hide();
    $(".tab_content:first").show();

    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn("fast")
    });
});

var acc = document.getElementsByClassName("accordion-group");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("accActive");
    var accPanel = this.nextElementSibling;
    if (accPanel.style.maxHeight){
      accPanel.style.maxHeight = null;
    } else {
      accPanel.style.maxHeight = accPanel.scrollHeight + "px";
    } 
  });
}

    var dropdownCheck = document.getElementsByClassName("dropdownCheckBtn");
        var i;
        for (i = 0; i < dropdownCheck.length; i++) {
          dropdownCheck[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
              dropdownContent.style.display = "none";
            } else {
              dropdownContent.style.display = "block";
            }
          });
        }
    function myFunction() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }


/* accordion menu */
(jQuery);
 (function(global, $) {

    var pluginName = 'accordion';

    function Accordion($selector, options) {
        this.$selector = $selector;
        this.config = $.extend({}, this._defaults, options || {});
        this.detect = {
            children: this.$selector.find(this.config.descendant.ul + ', ' + this.config.descendant.div),
            clickTarget: '.' + this.$selector.attr('class') + ' ' + this.config.eventTarget
        };
        this._init();
    }

    Accordion.prototype = {
        '_defaults': {
            descendant: {
                ul: 'ul',
                div: 'li > div'
            },
            dataValue: 'accordiated',
            className: 'active',
            eventTarget: 'a'
        },
        '_init': function() {
            if (!this.$selector.length) return;
            this._menuInit();
            this._initEvent();
        },
        '_menuInit': function() {
            var _self = this;
            if (this.$selector.data(this.config.dataValue)) return false;
            $.each(this.detect.children, function() {
                var $this = $(this);
                _self.$selector.data(_self.config.dataValue, true);
                $this.hide();
            });
        },
        '_initEvent': function() {
            $(document).on('click.acc.ck', this.detect.clickTarget, $.proxy(this._activate, this));
            this._hashCheck();
        },
        '_activate': function(e) {
            var $this = $(e.target);
            $this
                .parent('li')
                .toggleClass(this.config.className)
                .siblings()
                .removeClass(this.config.className)
                .children(this.config.descendant.ul + ', ' + this.config.descendant.div)
                .slideUp('fast');
            this._effect($this);
        },
        '_effect': function(el, effect) {
            $(el)
                .siblings(this.config.descendant.ul + ', ' + this.config.descendant.div)[(effect || 'slideToggle')](!effect ? 'fast' : null);
        },
        '_hashCheck': function() {
            var hash = (location.hash) ? this.$selector.find('a[href="' + location.hash + '"]')[0] : '';
            if (hash) {
                this._effect(hash, 'toggle');
                if (this.$selector) {
                    $(hash).parents('ul').show();
                }
            }
        }
    };

    $.fn[pluginName] = $.fn[pluginName] || function(options) {
        var $this = this; 
        return $.each($this, function(idx, el) {
            var $selector = $this.eq(idx);
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Accordion($selector, options))
            }
            return $selector;
        })
    };

})(window, window.jQuery);
