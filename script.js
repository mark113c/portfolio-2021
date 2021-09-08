"use strict";

window.addEventListener("DOMContentLoaded", start);

function one(query) {
  return document.querySelector(query);
}

function start() {
  document.addEventListener("scroll", changeLogo);
}

function changeLogo(e) {
  if (window.scrollY > 500) {
    one(".logo").classList.remove("hide");
    one(".logo").classList.add("show");

    one(".splash-logo").classList.add("hide");
    one(".splash-logo").classList.remove("show");
  }
}
