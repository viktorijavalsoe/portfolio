
$(document).ready(function() {
  $("#hamburger").on("click", function(){
      $("#menu").slideToggle(100);
  })

  $("#toggle_wrapper").on("click", function(){
     $(".toggle__icon").toggleClass("close");
  })

    //Navigation links

  $("#about_link").on("click", function() {
    $('html, body').animate({
      scrollTop: $("div.about").offset().top
    }, 1000)
  })

  $("#work_link").on("click", function() {
    $('html, body').animate({
      scrollTop: $("div.portfolio").offset().top
    }, 1000)
  })


  $("#contact_link").on("click", function() {
    $('html, body').animate({
      scrollTop: $("div.contact").offset().top
    }, 1000)
  })

  // Scroll buttons
  $("#scroll_one").on("click", function() {
    $('html, body').animate({
      scrollTop: $("div.about").offset().top
    }, 1000)
  })

  $("#scroll_two").on("click", function() {
    $('html, body').animate({
      scrollTop: $("div.portfolio").offset().top
    }, 1000)
  })

  $("#scroll_three").on("click", function() {
    $('html, body').animate({
      scrollTop: $("div.contact").offset().top
    }, 1000)
  })

  $(".back_button").on("click", function() {
    $('html, body').animate({
      scrollTop: $("header").offset().top
    }, 1000)
  })

// Text typing

  $("[data-typer]").attr("data-typer", function(i, txt) {

    var $typer = $(this),
      tot = txt.length,
      pauseMax = 300,
      pauseMin = 30,
      ch = 0;
  
    (function typeIt() {
      if (ch > tot) return;
      $typer.text(txt.substring(0, ch++));
      setTimeout(typeIt, ~~(Math.random() * (pauseMax - pauseMin + 1) + pauseMin));
    }());
  
  });
    
});
