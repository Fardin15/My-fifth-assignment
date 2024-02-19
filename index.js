const seatButtons = document.querySelectorAll(".seat-name");
let totalSeatNumber = 40;
let seatCount = 0;
for (let i = 0; i < seatButtons.length; i++) {
  const seatButton = seatButtons[i];

  seatButton.addEventListener("click", function () {
    seatButton.classList.add("bg-[#1DD100]");

    const newSeatCount = document.getElementById("seat-count");
    seatCount += 1;
    newSeatCount.innerText = seatCount;

    totalSeatNumber -= 1;
    document.getElementById("total-seat").innerText = totalSeatNumber;

    // total price
    const totalPrice = document.getElementById("total-price");
    const newTotalPrice = seatCount * 550;
    totalPrice.innerText = newTotalPrice;
    // coupon input
    const apply = document.getElementById("apply");
    apply.addEventListener("click", function () {
      // get value from input
      const coupon = document.getElementById("coupon-input").value;
      const couponValue = coupon.split(" ").join("").toUpperCase();
      const grandTotal = document.getElementById("grand-total");
      if (newSeatCount.innerText === "4" && couponValue === "NEW15") {
        const discountPrice = newTotalPrice - (newTotalPrice * 15) / 100;
        grandTotal.innerText = parseInt(discountPrice);
      } else if (newSeatCount.innerText === "4" && couponValue === "COUPLE20") {
        discountPrice = newTotalPrice - (newTotalPrice * 20) / 100;
        grandTotal.innerText = parseInt(discountPrice);
      } else {
        alert("buy four ticket for using coupon");
      }
    });
  });
}

const number = document.getElementById("number").value;
const takenNumber = parseInt(number);
if (typeof takenNumber === "number") {
  const nextBtn = document.getElementById("next-btn");
  nextBtn.classList.remove("hidden");
}
