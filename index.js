const formEl = document.querySelector(".my-form");
const emailEl = document.querySelector("#b-email");

//function to check email syntax
function checkEmail(){
  const email = emailEl.value
  //regex to check if email is valid format
  let validEmailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  //regex to check if email is gmail, hotmail, or yahoo
  let personalEmail = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@(gmail|hotmail|yahoo|)([\.])com/g.test(
    email)
  return (!validEmailFormat || personalEmail || email.trim() == "" ? false : true);
}

// function to style email input after validation
function styleEmail(emailIsValid){
  const errorMsgEl = document.querySelector(".error-msg")
  const i = document.querySelector(".input-field-wrapper i");
  i.classList.add("visible");
  if (emailIsValid){
    emailEl.classList.remove("fail");
    i.classList.remove("fa-exclamation-triangle");
    emailEl.classList.add("success");
    i.classList.add("fa-check-circle");

    errorMsgEl.classList.remove("visible")
  } else {
    emailEl.classList.remove("success");
    i.classList.remove("fa-check-circle");
    emailEl.classList.add("fail");
    i.classList.add("fa-exclamation-triangle");
    errorMsgEl.classList.add("visible")
  }
}

//function to redirect page after form is submitted
function redirecting(bSize, importanceIndicator) {
  if (
    bSize == "1-10" ||
    importanceIndicator == "Document Storage" ||
    importanceIndicator == "Full Text Search" ||
    importanceIndicator == "Price"
  ) {
    window.location.href = "/unqualifiedLead.html";
  } else {
    window.location.href = "/qualifiedLead.html";
  }
}

emailEl.addEventListener("change", e => {
  let emailIsValid = checkEmail();
  styleEmail(emailIsValid);
})

formEl.addEventListener("submit", e => {
  e.preventDefault();

  // get form values
  const email = document.querySelector("#b-email").value;
  const bSizeEl = document.getElementById("b-size");
  const bSize = bSizeEl.options[bSizeEl.selectedIndex].value;
  // radio inputs
  let rdEls = [
    document.getElementById("rd1"),
    document.getElementById("rd2"),
    document.getElementById("rd3"),
    document.getElementById("rd4"),
    document.getElementById("rd5"),
    document.getElementById("rd6"),
    document.getElementById("rd7"),
    document.getElementById("rd8")
  ];
  // get checked element
  let checkedRdEl = rdEls.filter(rdEl => rdEl.checked == true);
  const importanceIndicator = checkedRdEl[0].value;
  // check if email is valid
  let emailIsValid = checkEmail();

  if (emailIsValid && bSize && importanceIndicator) {
    redirecting(bSize, importanceIndicator);
  }
});
