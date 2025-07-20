const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

openMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full");
  mobileMenu.classList.add("translate-x-0");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full");
  mobileMenu.classList.remove("translate-x-0");
});

function closeMobileMenu() {
  mobileMenu.classList.add("translate-x-full");
  mobileMenu.classList.remove("translate-x-0");
}
