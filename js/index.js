$(document).ready(function () {
  $(".bg-hover").on({
    mouseenter: function () {
      $(".bg-hover").css("background-color", "#e5e9ff");
      $(".bg-hover").css("border-radius", "5px");
      $(".icon-css").css("background-color", "#fff");
    },
    mouseleave: function () {
      $(".bg-hover").css("background-color", "#fff");
      $(".icon-css").css("background-color", "#e5e9ff");
    },
  });

  $(".nav-item").click(function () {
    $(this).toggleClass("active");
  });


  $(".b1").on({
    mouseenter: function () {
      $(".d-none-1").css("visibility", "visible");
      $(".a1").css("border-color", "rgb(211 165 48)");
      $(".icon-check1").css("border-color", "rgb(211 165 48)");
      $(".icon-check-1").css("border-color", "rgb(211 165 48)");
    },
    mouseleave: function () {
      $(".d-none-1").css("visibility", "hidden");
      $(".a1").css("border-color", "rgb(234 234 234)");
      $(".icon-check1").css("border-color", "rgb(234 234 234)");
      $(".icon-check-1").css("border-color", "rgb(234 234 234)");

    },
  });


  $(".a1").on({
    mouseenter: function () {
      $(".a1").css("border-color", "rgb(211 165 48)");
      $(".icon-check1").css("border-color", "rgb(211 165 48)");
      $(".d-none-1").css("visibility", "visible");
      $(".b1").css("display", "block");
      $(".icon-css").css("background-color", "#fff");
      $(".icon-check-1").css("border-color", "rgb(211 165 48)");
    },
    mouseleave: function () {
      $(".a1").css("border-color", "rgb(234 234 234)");
      $(".icon-check1").css("border-color", "rgb(234 234 234)");
      $(".d-none-1").css("visibility", "hidden");
      $(".b1").css("display", "block");
      $(".icon-css").css("background-color", "#e5e9ff");
      $(".icon-check-1").css("border-color", "rgb(234 234 234)");

    },
  });


  $(".b2").on({
    mouseenter: function () {
      $(".d-none-2").css("visibility", "visible");
      $(".a2").css("border-color", "rgb(211 165 48)");
      $(".icon-check2").css("border-color", "rgb(211 165 48)");
      $(".icon-check-1").css("border-color", "rgb(211 165 48)");
    },
    mouseleave: function () {
      $(".d-none-2").css("visibility", "hidden");
      $(".a2").css("border-color", "rgb(234 234 234)");
      $(".icon-check2").css("border-color", "rgb(234 234 234)");
      $(".icon-check-1").css("border-color", "rgb(234 234 234)");

    },
  });


  $(".a2").on({
    mouseenter: function () {
      $(".a2").css("border-color", "rgb(211 165 48)");
      $(".icon-check2").css("border-color", "rgb(211 165 48)");
      $(".d-none-2").css("visibility", "visible");
      $(".b2").css("display", "block");
      $(".icon-check-1").css("border-color", "rgb(211 165 48)");
    },
    mouseleave: function () {
      $(".a2").css("border-color", "rgb(234 234 234)");
      $(".icon-check2").css("border-color", "rgb(234 234 234)");
      $(".d-none-2").css("visibility", "hidden");
      $(".b2").css("display", "block");
      $(".icon-check-1").css("border-color", "rgb(234 234 234)");

    },
  });


  $(".b3").on({
    mouseenter: function () {
      $(".d-none-3").css("visibility", "visible");
      $(".a3").css("border-color", "rgb(211 165 48)");
      $(".icon-check3").css("border-color", "rgb(211 165 48)");
      $(".icon-check-1").css("border-color", "rgb(211 165 48)");
    },
    mouseleave: function () {
      $(".d-none-3").css("visibility", "hidden");
      $(".a3").css("border-color", "rgb(234 234 234)");
      $(".icon-check3").css("border-color", "rgb(234 234 234)");
      $(".icon-check-1").css("border-color", "rgb(234 234 234)");

    },
  });


  $(".a3").on({
    mouseenter: function () {
      $(".a3").css("border-color", "rgb(211 165 48)");
      $(".icon-check3").css("border-color", "rgb(211 165 48)");
      $(".d-none-3").css("visibility", "visible");
      $(".b3").css("display", "block");
      $(".icon-check-1").css("border-color", "rgb(211 165 48)");
    },
    mouseleave: function () {
      $(".a3").css("border-color", "rgb(234 234 234)");
      $(".icon-check3").css("border-color", "rgb(234 234 234)");
      $(".d-none-3").css("visibility", "hidden");
      $(".b3").css("display", "block");
      $(".icon-check-1").css("border-color", "rgb(234 234 234)");

    },
  })

  $(".b4").on({
    mouseenter: function () {
      $(".d-none-4").css("visibility", "visible");
      $(".a4").css("border-color", "rgb(211 165 48)");
      $(".icon-check4").css("border-color", "rgb(211 165 48)");
      $(".icon-check-1").css("border-color", "rgb(211 165 48)");
    },
    mouseleave: function () {
      $(".d-none-4").css("visibility", "hidden");
      $(".a4").css("border-color", "rgb(234 234 234)");
      $(".icon-check4").css("border-color", "rgb(234 234 234)");
      $(".icon-check-1").css("border-color", "rgb(234 234 234)");

    },
  });


  $(".a4").on({
    mouseenter: function () {
      $(".a4").css("border-color", "rgb(211 165 48)");
      $(".icon-check4").css("border-color", "rgb(211 165 48)");
      $(".d-none-4").css("visibility", "visible");
      $(".b4").css("display", "block");
      $(".icon-check-1").css("border-color", "rgb(211 165 48)");
    },
    mouseleave: function () {
      $(".a4").css("border-color", "rgb(234 234 234)");
      $(".icon-check4").css("border-color", "rgb(234 234 234)");
      $(".d-none-4").css("visibility", "hidden");
      $(".b4").css("display", "block");
      $(".icon-check-1").css("border-color", "rgb(234 234 234)");

    },
  })

  $(".b5").on({
    mouseenter: function () {
      $(".d-none-5").css("visibility", "visible");
      $(".a5").css("border-color", "rgb(211 165 48)");
      $(".icon-check5").css("border-color", "rgb(211 165 48)");
      $(".icon-check-1").css("border-color", "rgb(211 165 48)");
    },
    mouseleave: function () {
      $(".d-none-5").css("visibility", "hidden");
      $(".a5").css("border-color", "rgb(234 234 234)");
      $(".icon-check5").css("border-color", "rgb(234 234 234)");
      $(".icon-check-1").css("border-color", "rgb(234 234 234)");

    },
  });


  $(".a5").on({
    mouseenter: function () {
      $(".a5").css("border-color", "rgb(211 165 48)");
      $(".icon-check5").css("border-color", "rgb(211 165 48)");
      $(".d-none-5").css("visibility", "visible");
      $(".b5").css("display", "block");
      $(".icon-check-1").css("border-color", "rgb(211 165 48)");
    },
    mouseleave: function () {
      $(".a5").css("border-color", "rgb(234 234 234)");
      $(".icon-check5").css("border-color", "rgb(234 234 234)");
      $(".d-none-5").css("visibility", "hidden");
      $(".b5").css("display", "block");
      $(".icon-check-1").css("border-color", "rgb(234 234 234)");

    },
  })
  $(".accordion").on("click", ".heading", function() {

    $(this).toggleClass("active").next().slideToggle();})
});
