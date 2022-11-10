const cashAmount = document.querySelector(".input_value");
const getAmount = document.querySelector("#output_value");

// console.log(getAmount.value);

function getCash(v) {
  console.log(v);
  getAmount.innerHTML = Math.round(v * 0.7);
  console.log(getAmount);
}
