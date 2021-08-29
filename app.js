//setup date
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());
// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const linkClose1 = document.getElementById("nav-close1");
const linkClose2 = document.getElementById("nav-close2");
const linkClose3 = document.getElementById("nav-close3");
const linkClose4 = document.getElementById("nav-close4");
const linkClose5 = document.getElementById("nav-close5");
// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
// close nav when clicking nav links
linkClose1.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
linkClose2.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
linkClose3.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
linkClose4.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
linkClose5.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
// I decided to do it this way: instead of creating pages for the nav links, I connected them to the sections of the website and created the code above to close the nav everytime the user clicks on the link. I'm pretty sure there's an optimized way to do it but I don't know javascript yet so this was my solution haha
