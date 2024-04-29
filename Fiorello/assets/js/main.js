const btn = document.querySelector(".fa-bars");
const menuLeft = document.querySelector(".menu-left");
btn.addEventListener("click", function () {
  menuLeft.classList.toggle("active");
});
