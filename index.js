//get input in form
document.querySelector('#my-form').addEventListener('submit', e => {
  e.preventDefault()
  //get form values
  const email = document.querySelector('#b-email').value
  const bSizeEl = document.getElementById('b-size')
  const bSize = bSizeEl.options[bSizeEl.selectedIndex].value
  //radio inputs
  let rdEls = [
    document.getElementById("rd1"),
    document.getElementById("rd2"),
    document.getElementById("rd3"),
    document.getElementById("rd4"),
    document.getElementById("rd5"),
    document.getElementById("rd6"),
    document.getElementById("rd7"),
    document.getElementById("rd8")
  ]
  //get checked element
  let checkedRdEl = rdEls.filter(rdEl => rdEl.checked == true)
  const checkedRd = checkedRdEl[0].value


})
