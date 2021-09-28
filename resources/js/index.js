"use strict";

$(document).ready(function () {
  // change year on copyright
  const year = new Date();
  document.querySelector(".js--footer__copyright").innerHTML =
    year.getFullYear();

  //Show floating nav
  $(".js--products").waypoint(
    function (direction) {
      if (direction === "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    { offset: "40px" }
  );
});
