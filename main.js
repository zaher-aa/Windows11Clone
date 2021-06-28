const taskBar = document.querySelector(".taskbar");
const startMenu = document.querySelector(".taskbar img.start");

taskBar.addEventListener("click", () => {
  startMenu.classList.toggle("clicked");
});
