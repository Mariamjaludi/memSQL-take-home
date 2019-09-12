const formEl = document.querySelector(".my-form");
const emailEl = document.querySelector("#b-email");

//function to check Email
function checkEmail(){
  const email = emailEl.value
  //regex to check if email is valid format
  let validEmailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  //regex to check if email is gmail, hotmail, or yahoo
  let personalEmail = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@(gmail|hotmail|yahoo|)([\.])com/g.test(
    email)

  const errorMsgEl = document.querySelector(".error-msg")
  const i = document.querySelector(".input-field-wrapper i");
  if (!validEmailFormat || personalEmail){
    emailEl.classList.remove("success")
    i.classList.remove("visible");
    emailEl.classList.toggle("fail");
    errorMsgEl.classList.toggle("visible")
    i.classList.remove("fa-check-circle")
    i.classList.add("fa-exclamation-triangle");

  } else if (email.trim() == ""){
    emailEl.classList.remove("success")
    i.classList.remove("visible");
    errorMsgEl.classList.remove("visible")
    emailEl.classList.remove("fail")
  }
  else {
    emailEl.classList.remove("fail")
    emailEl.classList.toggle("success");
    i.classList.toggle("visible");
    errorMsgEl.classList.remove("visible")
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

emailEl.addEventListener("change", e => checkEmail())

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

  //regex to check if email is valid format
  let validEmailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  //regex to check if email is gmail, hotmail, or yahoo
  let personalEmail = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@(gmail|hotmail|yahoo|)([\.])com/g.test(email);

  if (validEmailFormat && !personalEmail && bSize && importanceIndicator) {
    redirecting(bSize, importanceIndicator);
  } else if (!validEmailFormat || personalEmail) {
    // add code to change css to email error
    emailEl.style = "border: 1px solid #C41337"
  } else if (!bSize) {
    // add code to change css to no size selected error
  } else if (!importanceIndicator) {
    // add code to change css to no size selected error
  }
});
