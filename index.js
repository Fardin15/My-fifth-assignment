const seatButtons = document.querySelectorAll(".seat-name");
let totalSeatNumber = 40;
let seatCount = 0;
for (const seatButton of seatButtons) {
  seatButton.addEventListener("click", function () {
    // increase seat count
    seatCount += 1;
    const newSeatCount = document.getElementById("seat-count");
    newSeatCount.innerText = seatCount;
    const convertedSeat = parseInt(newSeatCount.innerText);
    if (seatCount > 4) {
      seatButton.setAttribute("disabled", false);
      alert("you can't select more than four seats");
      return;
    }
    seatButton.classList.add("bg-[#1DD100]");

    totalSeatNumber -= 1;
    document.getElementById("total-seat").innerText = totalSeatNumber;

    // total price
    const totalPrice = document.getElementById("total-price");
    const newTotalPrice = seatCount * 550;
    totalPrice.innerText = newTotalPrice;

    const seatName = seatButton.innerText;

    const listContainer = document.getElementById("list-container");
    const div = document.createElement("div");
    div.classList.add("list-div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerText = seatName;
    p2.innerText = "business";
    p3.innerText = 550;
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    listContainer.appendChild(div);

    const grandTotal = document.getElementById("grand-total");
    grandTotal.innerText = newTotalPrice;

    // coupon input
    const couponDiv = document.getElementById("coupon-div");
    const apply = document.getElementById("apply");
    apply.addEventListener("click", function () {
      // get value from input
      const coupon = document.getElementById("coupon-input").value;
      const couponValue = coupon.split(" ").join("").toUpperCase();

      //  grandTotal = document.getElementById("grand-total");
      if (convertedSeat === 4 && couponValue === "NEW15") {
        const discountPrice = newTotalPrice - (newTotalPrice * 15) / 100;
        grandTotal.innerText = parseInt(discountPrice);
        couponDiv.classList.add("hidden");
      } else if (convertedSeat === 4 && couponValue === "COUPLE20") {
        discountPrice = newTotalPrice - (newTotalPrice * 20) / 100;
        grandTotal.innerText = parseInt(discountPrice);
        couponDiv.classList.add("hidden");
      }

      // else {
      //   alert("Buy only four ticket for using coupon");
      // }
    });
  });
}
