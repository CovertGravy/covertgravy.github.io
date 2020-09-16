import "normalize.css";
import "../css/style.scss";

const loadingElement = document.querySelector("#loading");

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    setTimeout(() => {
      loadingElement.style.display = "none";
    }, 1800);
  }
};
