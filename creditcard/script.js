const theForm = document.querySelector("#cardForm");

function displayError(msg) {
  document.querySelector(".errors").textContent = msg;
}

function isCardNumberValid(number) {
  return number === "1234123412341234";
}

function submitHandler(event) {
  event.preventDefault();
  displayError("");

  let errorMsg = "";

  const cardNum = document.querySelector("#cardNumber").value.trim();
  const expMonth = Number(document.querySelector("#month").value);
  const expYear = Number(document.querySelector("#year").value);
  const cvc = document.querySelector("#cvc").value.trim();

  if (!/^\d{16}$/.test(cardNum)) {
    errorMsg += "Card number must be 16 digits\n";
  } else if (!isCardNumberValid(cardNum)) {
    errorMsg += "Card number is not valid\n";
  }

  if (!/^\d{2}$/.test(String(expMonth).padStart(2, "0")) || expMonth < 1 || expMonth > 12) {
    errorMsg += "Expiration month must be 01-12\n";
  }

  if (!/^\d{2}$/.test(String(expYear).padStart(2, "0"))) {
    errorMsg += "Expiration year must be 2 digits\n";
  }

  if (!/^\d{3}$/.test(cvc)) {
    errorMsg += "CVC must be 3 digits\n";
  }

  if (errorMsg === "") {
    const currentDate = new Date();
    const fullYear = 2000 + expYear;

    const currentMonth = currentDate.getMonth() + 1;

    if (
      fullYear < currentDate.getFullYear() ||
      (fullYear === currentDate.getFullYear() && expMonth < currentMonth)
    ) {
      errorMsg += "Card is expired\n";
    }
  }

  if (errorMsg !== "") {
    displayError(errorMsg);
    return;
  }

  const form = document.getElementById("cardForm");
  form.innerHTML = "<h2>Payment accepted. Thanks!</h2>";
}

theForm.addEventListener("submit", submitHandler);