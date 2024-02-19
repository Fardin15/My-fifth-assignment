const seats = document.querySelectorAll(".seat");
// console.log(seats);
const totalSeat = document.getElementById("total-seat").innerText;
let totalSeatNumber = 40;
document.getElementById("total-seat").append(totalSeatNumber);
let seatCount = 0;
for (let i = 0; i < seats.length; i++) {
  const seat = seats[i];
  //   console.log(seat);
  seat.addEventListener("click", function () {
    // making seat color green
    seat.classList.add("bg-[#1DD100]");
    // seat count
    seatCount += 1;
    const newSeatCount = document.getElementById("seat-count");
    newSeatCount.innerText = seatCount;
    // reducing seat number
    totalSeatNumber -= 1;
    document.getElementById("total-seat").innerText = totalSeatNumber;

    // total price
    const totalPrice = document.getElementById("total-price");
    const newTotalPrice = seatCount * 550;
    totalPrice.innerText = newTotalPrice;
  });
}

// coupon input
const apply = document.getElementById("apply");
apply.addEventListener("click", function () {
  // get value from input
  const coupon = document.getElementById("coupon-input").value;
  const couponValue = coupon.split(" ").join("").toUpperCase();
  const grandTotal = document.getElementById("grand-total");
  if (couponValue === "NEW15") {
    const discountPrice = newTotalPrice - (newTotalPrice * 15) / 100;
    console.log(discountPrice);
  }
});
