$(document).ready(function() {


  $(".title a").hover(function() { 
    $(".title a").addClass("activetitle");
  }, function() {
    $(".title a").removeClass("activetitle");
  });

  $("#gtresume a").hover(function() {
    $("#gtresume a").addClass("hovres");
  }, function() {
    $("#gtresume a").removeClass("hovres");
  });

  $("#gtartwork a").hover(function() {
    $("#gtartwork a").addClass("hovart");
  }, function() {
    $("#gtartwork a").removeClass("hovart");
  });

  $("#gtdesign a").hover(function() {
    $("#gtdesign a").addClass("hovdes");
  }, function() {
    $("#gtdesign a").removeClass("hovdes"); 
  });

  $("#gtcontact a").hover(function() {
    $("#gtcontact a").addClass("hovcon");
  }, function() {
    $("#gtcontact a").removeClass("hovcon");
  });


  $(".jeff").hover(function() {
    $("#nhov").addClass("nhov");
  }, function() {
    $("#nhov").removeClass("nhov");
  });



  $(".title a").focus(function() { 
    $(".title a").addClass("activetitle");
  });
  $(".title a").focusout(function() {
    $(".title a").removeClass("activetitle");
  });



  $("#gtresume a").focus(function() {
    $("#gtresume a").addClass("hovres");
  });
  $("#gtresume a").focusout(function() {
    $("#gtresume a").removeClass("hovres");
  });

  $("#gtartwork a").focus(function() {
    $("#gtartwork a").addClass("hovart");
  });
  $("#gtartwork a").focusout(function() {
    $("#gtartwork a").removeClass("hovart");
  });

  $("#gtdesign a").focus(function() {
    $("#gtdesign a").addClass("hovdes");
  });
  $("#gtdesign a").focusout(function() {
    $("#gtdesign a").removeClass("hovdes"); 
  });

  $("#gtcontact a").focus(function() {
    $("#gtcontact a").addClass("hovcon");
  });
  $("#gtcontact a").focusout(function() {
    $("#gtcontact a").removeClass("hovcon");
  });




  $(".jeff").click(function(event) {
    $(".jeff").toggleClass("rotated");
  });
  
  $(".fa-code").click(function(event) {
    $(".fa-code").toggleClass("rotated2");
  });
  
  $(".email").click(function(event) {
    $(".email").toggleClass("rotated2");
  });




  $(".title a").click(function(event) {
    event.preventDefault();
    $("html,body").animate({scrollTop: $("#top").offset().top}, 'slow');
  });

  $("#gtresume a").click(function(event) {
    event.preventDefault();
    $("html,body").animate({scrollTop: $(".resumeC").offset().top-100}, 'slow');
  });

  $("#gtartwork a").click(function(event) {
    event.preventDefault();
    $("html,body").animate({scrollTop: $(".artworkC").offset().top-100}, 'slow');
  });

  $("#gtdesign a").click(function(event) {
    event.preventDefault();
    $("html,body").animate({scrollTop: $(".designC").offset().top-100}, 'slow');
  });

  $("#gtcontact a").click(function(event) {
    event.preventDefault();
    $("html,body").animate({scrollTop: $(".contactC").offset().top-100}, 'slow');
  });



  $(window).scroll(function() { 
    var sPos = $(window).scrollTop();
    if ($("#resume").position().top <= sPos && $("#resume").position().top + $("#resume").height()+114 > sPos) {
      $("#gtresume").addClass("activeres");
    } else {
      $("#gtresume").removeClass("activeres");
    }
  });


  $(window).scroll(function() { 
    var sPos = $(window).scrollTop();
    if ($("#artwork").position().top <= sPos && $("#artwork").position().top + $("#artwork").height()+114 > sPos) {
      $("#gtartwork").addClass('activeart');
    } else {
      $("#gtartwork").removeClass("activeart");
    }
  });

  $(window).scroll(function() { 
    var sPos = $(window).scrollTop();
    if ($("#design").position().top <= sPos && $("#design").position().top + $("#design").height()+114 > sPos) {
      $("#gtdesign").addClass('activedes');
    } else {
      $("#gtdesign").removeClass("activedes");
    }
  });

  $(window).scroll(function() { 
    var sPos = $(window).scrollTop();
    if ($("#contact").position().top <= sPos && $("#contact").position().top + $("#contact").height()+114 > sPos) {
      $("#gtcontact").addClass('activecon');
    } else {
      $("#gtcontact").removeClass("activecon");
    }
  });








  $(window).scroll(function() { 
    var sPos = $(window).scrollTop();
    if ($("#resume").position().top+248 <= sPos && $("#resume").position().top + $("#resume").height()+144 > sPos) {
      $("#topbar").addClass("yline");
    } else {
      $("#topbar").removeClass("yline");
    }
  });


  $(window).scroll(function() { 
    var sPos = $(window).scrollTop();
    if ($("#artwork").position().top+248 <= sPos && $("#artwork").position().top + $("#artwork").height()+144 > sPos) {
      $("#topbar").addClass('rline');
    } else {
      $("#topbar").removeClass("rline");
    }
  });

  $(window).scroll(function() { 
    var sPos = $(window).scrollTop();
    if ($("#design").position().top+248 <= sPos && $("#design").position().top + $("#design").height()+144 > sPos) {
      $("#topbar").addClass('gline');
    } else {
      $("#topbar").removeClass("gline");
    }
  });

  $(window).scroll(function() { 
    var sPos = $(window).scrollTop();
    if ($("#contact").position().top+248 <= sPos && $("#contact").position().top + $("#contact").height()+144 > sPos) {
      $("#topbar").addClass('pline');
    } else {
      $("#topbar").removeClass("pline");
    }
  });



});