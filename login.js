import { MDCTextField } from "@material/textfield";
import { MDCRipple } from "@material/ripple";

const username = new MDCTextField(document.querySelector(".username"));
const password = new MDCTextField(document.querySelector(".password"));
const cancelButton = new MDCRipple(document.querySelector(".cancel"));
const nextButton = new MDCRipple(document.querySelector(".next"));

const nextButtonAction = document.querySelector(".next");

nextButtonAction.addEventListener("click", routeToHomePage);

const routeToHomePage = (event) => {
  location.href("/home.html");
};
