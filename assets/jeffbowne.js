$(document).ready(function() {


$(".title").click(function() {
    $('html,body').animate({
        scrollTop: $("body").offset().top},
        'slow');
});


$("#gtresume").click(function() {
    $('html,body').animate({
        scrollTop: $(".resume").offset().top},
        'slow');

    $('#topbar div').each(function () {
            $(this).removeClass('activeres');
            $(this).removeClass('activedes');
            $(this).removeClass('activeani');
            $(this).removeClass('activecon');
        })
        $(this).addClass('activeres');
});


$("#gtdesigns").click(function() {
    $('html,body').animate({
        scrollTop: $(".bardes").offset().top},
        'slow');

    $('#topbar div').each(function () {
            $(this).removeClass('activeres');
            $(this).removeClass('activedes');
            $(this).removeClass('activeani');
            $(this).removeClass('activecon');        
        })
        $(this).addClass('activedes');
});


$("#gtanimals").click(function() {
    $('html,body').animate({
        scrollTop: $(".barani").offset().top},
        'slow');

    $('#topbar div').each(function () {
            $(this).removeClass('activeres');
            $(this).removeClass('activedes');
            $(this).removeClass('activeani');
            $(this).removeClass('activecon');        
        })
        $(this).addClass('activeani');
});


$("#gtcontact").click(function() {
    $('html,body').animate({
        scrollTop: $(".barcon").offset().top},
        'slow');

    $('#topbar div').each(function () {
            $(this).removeClass('activeres');
            $(this).removeClass('activedes');
            $(this).removeClass('activeani');
            $(this).removeClass('activecon');        
        })
        $(this).addClass('activecon');
});








    // $('a[href^="#"]').on('click', function (e) {
    //     e.preventDefault();
    //     $(document).off("scroll");
        
    //     $('a').each(function () {
    //         $(this).removeClass('active');
    //     })
    //     $(this).addClass('active');
      
    //     var target = this.hash,
    //         menu = target;
    //     $target = $(target);
    //     $('html, body').stop().animate({
    //         'scrollTop': $target.offset().top+2
    //     }, 500, 'swing', function () {
    //         window.location.hash = target;
    //         $(document).on("scroll", onScroll);
    //     });
    // });









$(window).scroll(function() { 
  var scrollPos = $(window).scrollTop();
         if ($(".resume").position().top <= scrollPos && $(".resume").position().top + $(".resume").height()+110 > scrollPos) {
    $("#gtresume").addClass('activeres');
} else {
$("#gtresume").removeClass( "activeres" );
}
});


$(window).scroll(function() { 
  var scrollPos = $(window).scrollTop();
         if ($(".designs").position().top <= scrollPos && $(".designs").position().top + $(".designs").height()+110 > scrollPos) {
    $("#gtdesigns").addClass('activedes');
} else {
$("#gtdesigns").removeClass( "activedes" );
}
});

$(window).scroll(function() { 
  var scrollPos = $(window).scrollTop();
         if ($(".animals").position().top <= scrollPos && $(".animals").position().top + $(".animals").height()+110 > scrollPos) {
    $("#gtanimals").addClass('activeani');
} else {
$("#gtanimals").removeClass( "activeani" );
}
});

$(window).scroll(function() { 
  var scrollPos = $(window).scrollTop();
         if ($(".contact").position().top <= scrollPos && $(".contact").position().top + $(".contact").height()+110 > scrollPos) {
    $("#gtcontact").addClass('activecon');
} else {
$("#gtcontact").removeClass( "activecon" );
}
});





});





// function onScroll(event){
//       var scrollPos = $(window).scrollTop();
      
//         if ($(".resume").position().top <= scrollPos && $(".resume").position().top + $(".resume").height() > scrollPos) {
            
//             $('#gtresume').addClass("activeres");
//         }
//         else{
//             $('#gtresume').removeClass("activeres");
//         }
    
// }



