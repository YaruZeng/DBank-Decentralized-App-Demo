import {dbank} from "../../declarations/dbank";

window.addEventListener("load", async function () {
  // once the page is refreshed, update the current balance through the func update()
  update(); 
});

document.querySelector("form").addEventListener("submit", async function(event) {
  event.preventDefault(); // prevent the default refreshing of the form

  const button = event.target.querySelector("#submit-btn"); // to control the state of the button

  const inputAmount = parseFloat(document.getElementById("input-amount").value); // get the topup amount from user
  const outputAmount = parseFloat(document.getElementById("withdraw-amount").value); // get the withdraw amount from user

  button.setAttribute("disabled", true); // the button turns disabled after the user hits "submit"

  if (document.getElementById("input-amount").value.length != 0) {
    await dbank.topUp(inputAmount); // topup the amount through dbank when the input value is not null
  }

  if (document.getElementById("withdraw-amount").value.length != 0) {
    await dbank.withDraw(outputAmount); // withdraw the amount through dbank the input value is not null
  }

  await dbank.compound(); // compound every submit

  update(); // update the balance 
  document.getElementById("input-amount").value = ""; // clear the input after every update
  document.getElementById("withdraw-amount").value = "";
  button.removeAttribute("disabled"); // enable the button after every update

});

async function update() {
  const currentAmount = await dbank.checkBalance(); // check current value from ICP
  document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100; // update the frontend balance
};