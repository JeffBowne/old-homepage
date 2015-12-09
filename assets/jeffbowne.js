$(document).ready(function() {

  //  function setUpHover(hoverSelector, toShowSelector) {
  //    $(hoverSelector).hover(function() {
  //      $(this).find(toShowSelector).removeClass('hidden');
  //    }, function() {
  //      $(this).find(toShowSelector).addClass('hidden');
  //    });
  //  };
  //
  //  setUpHover('.nav li', '.subnav');


  // $(".title a").hover(function() { 
  //   $(".title a").addClass("activetitle");
  // }, function() {
  //   $(".title a").removeClass("activetitle");
  // });

  // $("#gtresume a").hover(function() {
  //   $("#gtresume a").addClass("hovres");
  // }, function() {
  //   $("#gtresume a").removeClass("hovres");
  // });

  // $("#gtartwork a").hover(function() {
  //   $("#gtartwork a").addClass("hovart");
  // }, function() {
  //   $("#gtartwork a").removeClass("hovart");
  // });

  // $("#gtdesign a").hover(function() {
  //   $("#gtdesign a").addClass("hovdes");
  // }, function() {
  //   $("#gtdesign a").removeClass("hovdes"); 
  // });

  // $("#gtcontact a").hover(function() {
  //   $("#gtcontact a").addClass("hovcon");
  // }, function() {
  //   $("#gtcontact a").removeClass("hovcon");
  // });




  // function navHoverSet(element, hovStyle) {
  //   $(element).hover(function() {
  //     $(element).addClass(hovStyle);
  //   }, function() {
  //     $(element).removeClass(hovStyle);
  //   });
  // }

  // navHoverSet(".title a", "activetitle");
  // navHoverSet("#gtresume a", "hovres");
  // navHoverSet("#gtartwork a", "hovart");
  // navHoverSet("#gtdesign a", "hovdes");
  // navHoverSet("#gtcontact a", "hovcon");




  // $(".title a").focus(function() { 
  //   $(".title a").addClass("activetitle");
  // });
  // $(".title a").focusout(function() {
  //   $(".title a").removeClass("activetitle");
  // });


  // $("#gtresume a").focus(function() {
  //   $("#gtresume a").addClass("hovres");
  // });
  // $("#gtresume a").focusout(function() {
  //   $("#gtresume a").removeClass("hovres");
  // });

  // $("#gtartwork a").focus(function() {
  //   $("#gtartwork a").addClass("hovart");
  // });
  // $("#gtartwork a").focusout(function() {
  //   $("#gtartwork a").removeClass("hovart");
  // });

  // $("#gtdesign a").focus(function() {
  //   $("#gtdesign a").addClass("hovdes");
  // });
  // $("#gtdesign a").focusout(function() {
  //   $("#gtdesign a").removeClass("hovdes"); 
  // });

  // $("#gtcontact a").focus(function() {
  //   $("#gtcontact a").addClass("hovcon");
  // });
  // $("#gtcontact a").focusout(function() {
  //   $("#gtcontact a").removeClass("hovcon");
  // });

  function navHoverFocus(element, hovStyle) {
    $(element).hover(function() {
      $(element).addClass(hovStyle);
    }, function() {
      $(element).removeClass(hovStyle);
    });      
    $(element).focus(function() {
      $(element).addClass(hovStyle);
    });
    $(element).focusout(function() {
      $(element).removeClass(hovStyle);
    });
  };

  navHoverFocus(".title a", "activetitle");
  navHoverFocus("#gtresume a", "hovres");
  navHoverFocus("#gtartwork a", "hovart");
  navHoverFocus("#gtdesign a", "hovdes");
  navHoverFocus("#gtcontact a", "hovcon");




  // $(".jeff").click(function(event) {
  //   $(".jeff").toggleClass("rotated");
  // });
  
  // $(".fa-code").click(function(event) {
  //   $(".fa-code").toggleClass("rotated2");
  // });
  
  // $(".email a").click(function(event) {
  //   $(".email").toggleClass("rotated2");
  // });

  function crazyRotate(element, roType) {
    $(element).click(function(event) {
      $(element).toggleClass(roType);
    });
  };
  crazyRotate(".jeff", "rotated");
  crazyRotate(".fa-code", "rotated2");
  crazyRotate(".email a", "rotated2");





  // $(".title a").click(function(event) {
  //   event.preventDefault();
  //   $("html,body").animate({scrollTop: $("#top").offset().top}, 'slow');
  // });

  // $("#gtresume a").click(function(event) {
  //   event.preventDefault();
  //   $("html,body").animate({scrollTop: $(".resumeC").offset().top-100}, 'slow');
  // });

  // $("#gtartwork a").click(function(event) {
  //   event.preventDefault();
  //   $("html,body").animate({scrollTop: $(".artworkC").offset().top-100}, 'slow');
  // });

  // $("#gtdesign a").click(function(event) {
  //   event.preventDefault();
  //   $("html,body").animate({scrollTop: $(".designC").offset().top-100}, 'slow');
  // });

  // $("#gtcontact a").click(function(event) {
  //   event.preventDefault();
  //   $("html,body").animate({scrollTop: $(".contactC").offset().top-100}, 'slow');
  // });

  function funZoomScroll(element, destination) {
    $(element).click(function(event) {
      event.preventDefault();
      $("html,body").animate({scrollTop: $(destination).offset().top-100}, 'slow');
    });
  };

  funZoomScroll(".title a", "#top")
  funZoomScroll("#gtresume a",".resumeC")
  funZoomScroll("#gtartwork a",".artworkC")
  funZoomScroll("#gtdesign a",".designC")
  funZoomScroll("#gtcontact a",".contactC")



  // $(window).scroll(function() { 
  //   var sPos = $(window).scrollTop();
  //   if ($("#resume").position().top <= sPos && $("#resume").position().top + $("#resume").height()+114 > sPos) {
  //     $("#gtresume").addClass("activeres");
  //   } else {
  //     $("#gtresume").removeClass("activeres");
  //   }
  // });


  // $(window).scroll(function() { 
  //   var sPos = $(window).scrollTop();
  //   if ($("#artwork").position().top <= sPos && $("#artwork").position().top + $("#artwork").height()+114 > sPos) {
  //     $("#gtartwork").addClass('activeart');
  //   } else {
  //     $("#gtartwork").removeClass("activeart");
  //   }
  // });

  // $(window).scroll(function() { 
  //   var sPos = $(window).scrollTop();
  //   if ($("#design").position().top <= sPos && $("#design").position().top + $("#design").height()+114 > sPos) {
  //     $("#gtdesign").addClass('activedes');
  //   } else {
  //     $("#gtdesign").removeClass("activedes");
  //   }
  // });

  // $(window).scroll(function() { 
  //   var sPos = $(window).scrollTop();
  //   if ($("#contact").position().top <= sPos && $("#contact").position().top + $("#contact").height()+114 > sPos) {
  //     $("#gtcontact").addClass('activecon');
  //   } else {
  //     $("#gtcontact").removeClass("activecon");
  //   }
  // });



  // $(window).scroll(function() { 
  //   var sPos = $(window).scrollTop();
  //   if ($("#resume").position().top+248 <= sPos && $("#resume").position().top + $("#resume").height()+144 > sPos) {
  //     $("#topbar").addClass("yline");
  //   } else {
  //     $("#topbar").removeClass("yline");
  //   }
  // });


  // $(window).scroll(function() { 
  //   var sPos = $(window).scrollTop();
  //   if ($("#artwork").position().top+248 <= sPos && $("#artwork").position().top + $("#artwork").height()+144 > sPos) {
  //     $("#topbar").addClass('rline');
  //   } else {
  //     $("#topbar").removeClass("rline");
  //   }
  // });

  // $(window).scroll(function() { 
  //   var sPos = $(window).scrollTop();
  //   if ($("#design").position().top+248 <= sPos && $("#design").position().top + $("#design").height()+144 > sPos) {
  //     $("#topbar").addClass('gline');
  //   } else {
  //     $("#topbar").removeClass("gline");
  //   }
  // });

  // $(window).scroll(function() { 
  //   var sPos = $(window).scrollTop();
  //   if ($("#contact").position().top+248 <= sPos && $("#contact").position().top + $("#contact").height()+144 > sPos) {
  //     $("#topbar").addClass('pline');
  //   } else {
  //     $("#topbar").removeClass("pline");
  //   }
  // });

  


  // function positionHighlight(yourPos, element, highlight, augmentVal1, augmentVal2) {
  //   $(window).scroll(function() { 
  //     var sPos = $(window).scrollTop();
  //     if ($(yourPos).position().top+augmentVal1 <= sPos && $(yourPos).position().top + $(yourPos).height()+augmentVal2 > sPos) {
  //       $(element).addClass(highlight);
  //     } else {
  //       $(element).removeClass(highlight);
  //     };
  //   });
  // };
  // positionHighlight("#resume", "#gtresume", "activeres", 0, 114);
  // positionHighlight("#artwork", "#gtartwork", "activeart", 0, 114);
  // positionHighlight("#design", "#gtdesign", "activedes", 0, 114);
  // positionHighlight("#contact", "#gtcontact", "activecon", 0, 114);

  // positionHighlight("#resume", "#topbar", "yline", 248, 144);
  // positionHighlight("#artwork", "#topbar", "rline", 248, 144);
  // positionHighlight("#design", "#topbar", "gline", 248, 144);
  // positionHighlight("#contact", "#topbar", "pline", 248, 144);



  function positionHighlight(options) {

    // var yourPos = options.yourPos;
    // var element = options.element;
    // var specialClass = options.specialClass;
    // var xOffset = options.xOffset;
    // var yOffset = options.yOffset;

    $(window).scroll(function() { 
      var sPos = $(window).scrollTop();
      if ($(options.yourPos).position().top+options.xOffset <= sPos && $(options.yourPos).position().top + $(options.yourPos).height()+options.yOffset > sPos) {
        $(options.element).addClass(options.specialClass);
      } else {
        $(options.element).removeClass(options.specialClass);
      };
    });
  };

  positionHighlight({ yourPos:"#resume", element:"#gtresume", specialClass:"activeres", xOffset:0, yOffset:114});
  positionHighlight({ yourPos:"#artwork", element:"#gtartwork", specialClass:"activeart", xOffset:0, yOffset:114});
  positionHighlight({ yourPos:"#design", element:"#gtdesign", specialClass:"activedes", xOffset:0, yOffset:114});
  positionHighlight({ yourPos:"#contact", element:"#gtcontact", specialClass:"activecon", xOffset:0, yOffset:114});

  positionHighlight({ yourPos:"#resume", element:"#topbar", specialClass:"yline", xOffset:248, yOffset:144});
  positionHighlight({ yourPos:"#artwork", element:"#topbar", specialClass:"rline", xOffset:248, yOffset:144});
  positionHighlight({ yourPos:"#design", element:"#topbar", specialClass:"gline", xOffset:248, yOffset:144});
  positionHighlight({ yourPos:"#contact", element:"#topbar", specialClass:"pline", xOffset:248, yOffset:144});
  

                // $(".jeff").hover(function() {
                //   $("#nhov").addClass("nhov");
                // }, function() {
                //   $("#nhov").removeClass("nhov");
                // });

});