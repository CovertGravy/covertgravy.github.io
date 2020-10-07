import "normalize.css";
import "../css/loco-base.css";
import "../css/style.scss";

import topbar from "topbar";

topbar.show();
topbar.config({
  shadowColor: "rgba(0, 0, 0, .1)",
});

const loadingElement = document.querySelector("#loading");
const heroSection = document.querySelector("#hero");
const header = document.querySelector("header");

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    setTimeout(() => {
      loadingElement.style.display = "none";
      topbar.hide();
    }, 1800);
  }
};

const heroSectionObserver = new IntersectionObserver(
  function (entries, heroSectionObserver) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    });
  },
  {
    rootMargin: "-100px 0px 0px 0px",
  }
);

heroSectionObserver.observe(heroSection);
