const formEl = document.querySelector("#my-form")

//function to redirect page after form is submitted
function redirecting(bSize, importanceIndicator){
  if (bSize == "1-10" || importanceIndicator == "Document Storage" || importanceIndicator == "Full Text Search" || importanceIndicator == "Price"){
    window.location.href = "/unqualifiedLead.html"
  } else{
    window.location.href = "/qualifiedLead.html"
  }
}

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
  let validEmailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  //regex to check if email is gmail, hotmail, or yahoo
  let personalEmail = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@(gmail|hotmail|yahoo|)([\.])com/g.test(email)
  let qualified = false
  // if (validEmailFormat && !personalEmail){
  //
  //   alert("email is valid")
  // } else {
  //   alert("email is not valid")
  // }

  redirecting(bSize, importanceIndicator);

});
