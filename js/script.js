$(document).ready(function() {
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false
  });

  var typed = new Typed(".typed", {
    strings: ["Software Engineer.", "Web Developer.", "Full Stack."],
    typeSpeed: 100,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 4,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      }
    }
  });

  // how to make the pie chart animated only when scrolling down
  var skillsTopOffset = $(".skillsSection").offset().top;
  //the function gets called everytime where the window scrolls to
  $(window).scroll(function() {
    //window.pageYOffset is how far where scroll position to from the Top
    // console.log("window.pageYOffset", window.pageYOffset);
    // console.log("skillsTopOffset", skillsTopOffset);
    // console.log("window.height", $(window).height());

    if (window.pageYOffset > skillsTopOffset - $(window).height() + 300) {
      $(".chart").easyPieChart({
        easing: "easeInOut",
        barColor: "#fff",
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.el)
            .find(".percent")
            .text(Math.round(percent));
        }
      });
    }

    if (
      !countUpFinished &&
      window.pageYOffset > statsTopOffset - $(window).height() + 200
    ) {
      $(".counter").each(function() {
        var element = $(this);
        var endVal = parseInt(element.text());

        element.countup(endVal);
      });

      countUpFinished = true;
    }
  });

  $("[data-fancybox").fancybox();

  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false
    }
  });
  // explain how does the isotope work for filtering
  $("#filters a").click(function() {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");
    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: "linear",
        queue: false
      }
    });
    return false;
  });
});
