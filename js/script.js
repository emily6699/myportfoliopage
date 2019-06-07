$(document).ready(function() {
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false
  });

  var typed = new Typed(".typed", {
    strings: ["Software Engineer.", "Web Developer."],
    typeSpeed: 70,
    loop: true,
    strtDelay: 1000,
    showCursor: false
  });
});
