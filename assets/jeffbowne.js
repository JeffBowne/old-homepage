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



  $(".title a").click(function(event) {
    event.preventDefault();
    $("html,body").animate({scrollTop: $("#top").offset().top}, 'slow');
  });

  $("#gtresume a").click(function(event) {
    event.preventDefault();
    $("html,body").animate({scrollTop: $("#resume").offset().top}, 'slow');
  });

  $("#gtartwork a").click(function(event) {
    event.preventDefault();
    $("html,body").animate({scrollTop: $("#artwork").offset().top}, 'slow');
  });

  $("#gtdesign a").click(function(event) {
    event.preventDefault();
    $("html,body").animate({scrollTop: $("#design").offset().top}, 'slow');
  });

  $("#gtcontact a").click(function(event) {
    event.preventDefault();
    $("html,body").animate({scrollTop: $("#contact").offset().top}, 'slow');
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