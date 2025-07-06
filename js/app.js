// app.js

import "../splide-4.1.3/dist/js/splide.min.js";
import "./menu_appbar.js";

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    focus: "center",
    perPage: 1,
    gap: "10px",
    autoplay: true,
    // lazyLoad: "sequential",
    interval: 3000,
    pauseOnHover: true,
    pauseOnFocus: false,
    // arrows: true, // show arrows
    // pagination: true,
    speed: 800,
  }).mount();
});
