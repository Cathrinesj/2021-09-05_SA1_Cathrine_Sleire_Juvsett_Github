function hamburgerNav() {
  var hamburgeMenu = document.querySelector("nav");
  if (hamburgeMenu.style.display === "block") {
    hamburgeMenu.style.display = "none";
  } else {
    hamburgeMenu.style.display = "block";
  }
}

function rollerNav() {
  var hamburgeMenu = document.querySelector(".roller");
  if (hamburgeMenu.style.display === "block") {
    hamburgeMenu.style.display = "none";
  } else {
    hamburgeMenu.style.display = "block";
  }
}
