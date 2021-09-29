"use strict";

$(document).ready(() => {
  // change year on copyright
  const year = new Date();
  document.querySelector(".js--footer__copyright").innerHTML =
    year.getFullYear();

  // show floating nav whenever leave header
  $(".js--products").waypoint(
    (direction) => {
      if (direction === "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    { offset: "40px" }
  );

  // ------------ element animation
  const animate = (cssQuery, animationType, offset) => {
    $(cssQuery).waypoint(
      (direction) => {
        $(cssQuery).addClass(`animate__animated animate__${animationType}`);
      },
      { offset: `${offset}%` }
    );
  };

  // animate coffee detail
  animate(".js__wp--1", "fadeIn", "60");

  //animate shop picture
  animate(".js__wp--2", "fadeInLeft", "50");

  // animate roastery picture
  animate(".js__wp--3", "fadeInRight", "50");

  // animate first suvscribtion plan
  animate(".js__wp--4", "pulse", "25");
});
