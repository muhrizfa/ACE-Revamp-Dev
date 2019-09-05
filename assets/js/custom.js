$(".pub-slider-owl").owlCarousel({
  margin: 15,
  nav: true,
  navText: [
    "<span class='ico-arrow-left'></span>",
    "<span class='ico-arrow-right'></span>"
  ],
  responsive: {
    0: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});

// $('.perspective-slider-owl').owlCarousel({
//     loop:true,
//     margin:24,
//     nav:true,
//     navText: ["<span class='ico-arrow-left'></span>","<span class='ico-arrow-right'></span>"],
//     responsive:{
//         0:{
//             stagePadding: 0,
//             items:2
//         },
//         1000:{
//             stagePadding: 200,
//             items:1
//         }
//     }
// });

$(".event-slider-owl").owlCarousel({
  loop: true,
  nav: true,
  navText: [
    "<span class='ico-arrow-left-red'></span>",
    "<span class='ico-arrow-right-red'></span>"
  ],
  items: 1
});

$(".testi-list-slider").owlCarousel({
  loop: true,
  nav: true,
  navText: [
    "<span class='ico-arrow-left-red'></span>",
    "<span class='ico-arrow-right-red'></span>"
  ],
  items: 1
});

$(".perspective-page-slider").owlCarousel({
  margin: 15,
  nav: true,
  navText: [
    "<span class='ico-arrow-left'></span>",
    "<span class='ico-arrow-right'></span>"
  ],
  responsive: {
    0: {
      items: 2
    },
    1000: {
      items: 2
    }
  }
});

// mega menu
$(".mega-menu .sub-menu li > a").on("mouseenter", function() {
  $(".mega-menu .sub-menu li > a").removeClass("active");
  $(".content-menu-wrap").removeClass("active");
  var dataTarget = $(this).attr("data-target");
  $(".content-menu-wrap" + dataTarget + "").addClass("active");
  $(this).addClass("active");
});

// click menu hamburger
$(".hamburger-menu").on("click", function() {
  $(this)
    .parent()
    .find(".main-nav")
    .slideToggle();
});

// Rizky JQuery
$(document).ready(function() {
  $("#open-modal").click(function(e) {
    $("#myModal").modal("toggle");
  });

  $(window).on("resize", function(e) {
    checkScreenSize();
  });

  checkScreenSize();

  function checkScreenSize() {
    const newWindowWidth = $(window).width();
    if (newWindowWidth < 481) {
      $(".paginations li:nth-child(4)").replaceWith(
        '<li><a href="#">...</a></li>'
      );
      $(".paginations li:nth-child(5)").addClass("d-none");
    } else {
      $(".paginations li:nth-child(5)").removeClass("d-none");
    }

    if (newWindowWidth < 768) {
      $(".container h1").addClass("d-none");
      $(".pub-sec").addClass("d-none");
      $(".pub-sec-mobile").removeClass("d-none");
      $(".nav.nav-tabs").addClass("d-none");
    } else {
      $(".container h1").removeClass("d-none");
      $(".pub-sec").removeClass("d-none");
      $(".pub-sec-mobile").addClass("d-none");
      $(".nav.nav-tabs").removeClass("d-none");
    }
  }
});
