const menuButton = document.getElementById("menu-button");
const sideMenuBackground = document.getElementById("side-menu-background");
const sideMenuNav = document.getElementById("side-menu-nav");
const sideMenuButton = document.getElementById("close-menu-button");

menuButton.addEventListener("click", () => {
  sideMenuBackground.style.width = "100%";
  sideMenuNav.style.width = "50%";
});

sideMenuBackground.addEventListener("click", () => {
  sideMenuBackground.style.width = "0";
  sideMenuNav.style.width = "0";
});

sideMenuButton.addEventListener("click", () => {
  sideMenuBackground.style.width = "0";
  sideMenuNav.style.width = "0";
});
