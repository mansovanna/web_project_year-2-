// ./js/app.js

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    perPage: 1,
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    arrows: true,
    pagination: true,
  }).mount();
});

// Block app card_list_menu_information Under List...!
const buttonCardIntrol = document.querySelectorAll(".introl_top");
const appIconOn = document.querySelectorAll(".app_icon_on");
const appIconOff = document.querySelectorAll(".app_icon_off");

const underList = document.querySelectorAll(".under_list");

buttonCardIntrol.forEach((buttons, index) => {
  const appIconON = appIconOn[index];
  const appIconOFF = appIconOff[index];
  const underListParagrap = underList[index];

  //
  buttons.addEventListener("click", () => {
    const isExpanded = underListParagrap.classList.contains("active");

    if (isExpanded) {
      // Collapse
      underListParagrap.style.height = underListParagrap.scrollHeight + "px";
      requestAnimationFrame(() => {
        underListParagrap.style.height = "0px";
      });
      underListParagrap.classList.remove("active");

      // ---------------
      appIconON.classList.remove("active");
      appIconOFF.classList.remove("active");
    } else {
      underListParagrap.style.height = underListParagrap.scrollHeight + "px";
      underListParagrap.classList.add("active");

      // ---------------

      appIconON.classList.add("active");
      appIconOFF.classList.add("active");
    }
  });
});

// wrapper
// Scrollable ---------------
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const appBarMenu = document.querySelector(".app-bar-menu");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const widthScreen = window.screen.width;

    if (scrollY >= 100) {
      if (widthScreen > 768) {
        // Tablet and Desktop
        if (navbar) navbar.classList.add("active");
        if (appBarMenu) appBarMenu.classList.remove("active");
      } else {
        // Mobile
        if (navbar) navbar.classList.remove("active");
        if (appBarMenu) appBarMenu.classList.add("active");
      }
    } else {
      // Optionally remove both active classes when scrolled up < 100
      if (navbar) navbar.classList.remove("active");
      if (appBarMenu) appBarMenu.classList.remove("active");
    }


    // 
    if(scrollY > 300){
      document.querySelector('.Scrollable').style.display='block';
    }else{
      document.querySelector('.Scrollable').style.display='none';
    }
  });
});



// Scroll Top
document.getElementById("scrollable").addEventListener("click", () => {
  //
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

function appbarFull() {
  // do some stuff
  // console.log("JSK");
}

function appbar() {
  // do some stuff
  // console.log("JSK");
}
