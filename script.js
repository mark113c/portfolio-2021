"use strict";

window.addEventListener("DOMContentLoaded", start);

function one(query) {
  return document.querySelector(query);
}

function start() {
  document.addEventListener("scroll", changeLogo);
}

function changeLogo(e) {
  //   console.log(document.querySelector(".cta").scrollTop);
  if (window.scrollY > 300) {
    one(".logo").classList.remove("hide");
    one(".logo").classList.add("show");

    one(".cta").classList.remove("hide");
    one(".cta").classList.add("show");

    one(".splash-logo").classList.add("hide");
    one(".splash-logo").classList.remove("show");
  } else {
    one(".logo").classList.add("hide");
    one(".logo").classList.remove("show");

    one(".cta").classList.add("hide");
    one(".cta").classList.remove("show");

    one(".splash-logo").classList.remove("hide");
    one(".splash-logo").classList.add("show");
  }
}
