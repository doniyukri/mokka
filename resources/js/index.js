"use strict";

// change year on copyright
const year = new Date();
document.querySelector(".js--footer__copyright").innerHTML = year.getFullYear();

// code with jQuery
$(document).ready(() => {
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
  animate(".js__wp--2", "fadeInLeft", "60");

  // animate roastery picture
  animate(".js__wp--3", "fadeInRight", "60");

  // animate first subscription plan
  animate(".js__wp--4", "pulse", "25");

  // toggle navlink in mobile nav
  $(".js__mobile").click(() => {
    const navItem = $(".header__navitem");
    const mobileIcon = $(".mobile-nav-icon ion-icon");

    navItem.slideToggle(200);

    if (mobileIcon.attr("name") === "menu-outline") {
      mobileIcon.attr("name", "");
      mobileIcon.attr("name", "close-outline");
    } else {
      mobileIcon.attr("name", "");
      mobileIcon.attr("name", "menu-outline");
    }
  });
});
