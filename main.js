document.addEventListener("click", (e) => {
  if (!e.target.matches(".header__hamburger")) return;

  let nav = e.target.nextElementSibling;

  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    nav.style.transform = "translateY(0)";
  } else {
    nav.style.transform = "translateY(-200%)";
  }
});
