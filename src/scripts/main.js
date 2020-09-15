import "normalize.css";
import "../css/style.scss";

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    console.log("loading...");
  }
  console.log(document.readyState);
};
