const buttonUnderList = document.querySelectorAll(".button_under_list");
const underList = document.querySelectorAll(".under_list");

// change icon
const addIcon = document.querySelectorAll(".add");
const subIcon = document.querySelectorAll(".sub");

buttonUnderList.forEach((button, index) => {
  const underListParagrap = underList[index];
  const add = addIcon[index];
  const sub = subIcon[index];

  button.addEventListener("click", () => {
    const isExpanded = underListParagrap.classList.contains("active");

    if (isExpanded) {
      // Collapse
      underListParagrap.style.height = underListParagrap.scrollHeight + "px";
      requestAnimationFrame(() => {
        underListParagrap.style.height = "0px";
      });
      underListParagrap.classList.remove("active");

      add.classList.remove("hide"); // show add icon
      sub.classList.add("hide"); 
   

    } else {
      // Expand
      underListParagrap.style.height = underListParagrap.scrollHeight + "px";
      underListParagrap.classList.add("active");

      add.classList.add("hide");    // hide add icon
      sub.classList.remove("hide"); // show sub icon

      underListParagrap.addEventListener("transitionend", function handler() {
        underListParagrap.style.height = "auto";
        underListParagrap.removeEventListener("transitionend", handler);
      });
    }
  });
});
