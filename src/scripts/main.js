import "normalize.css";
import "../css/style.scss";

const loadingElement = document.querySelector("#loading");
const heroSection = document.querySelector("#hero");
const navbar = document.querySelector("nav");

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    setTimeout(() => {
      loadingElement.style.display = "none";
    }, 1800);
  }
};

const heroSectionObserver = new IntersectionObserver(
  function (entries, heroSectionObserver) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        navbar.classList.add("nav-scrolled");
      } else {
        navbar.classList.remove("nav-scrolled");
      }
    });
  },
  {
    rootMargin: "-100px 0px 0px 0px",
  }
);

heroSectionObserver.observe(heroSection);
