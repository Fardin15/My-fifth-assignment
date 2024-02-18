const seats = document.querySelectorAll(".seat");
// console.log(seats);
const totalSeat = document.getElementById("total-seat").innerText;
const totalSeatNumber = 40;
document.getElementById("total-seat").append(totalSeatNumber);
for (let i = 0; i < seats.length; i++) {
  const seat = seats[i];
  //   console.log(seat);
  seat.addEventListener("click", function () {
    // making seat color green
    seat.classList.add("bg-[#1DD100]");
    const availableSeatNumber = totalSeatNumber - 1;
    document.getElementById("total-seat").innerText = availableSeatNumber;
  });
}
