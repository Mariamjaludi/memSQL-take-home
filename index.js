const formEl = document.querySelector(".my-form");
const emailEl = document.querySelector("#b-email");

//function to check email syntax
function checkEmail(){
  let email = emailEl.value
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
  let email = emailEl.value;
  const bSizeEl = document.getElementById("b-size");
  let bSize = bSizeEl.options[bSizeEl.selectedIndex].value;
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
  const checkedRdEl = rdEls.filter(rdEl => rdEl.checked == true);
  let importanceIndicator = checkedRdEl[0].value;
  // check if email is valid
  let emailIsValid = checkEmail();

  if (emailIsValid && bSize && importanceIndicator) {
    redirecting(bSize, importanceIndicator);
  }
});



// ************************** dropdown JS **********************************

let x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
