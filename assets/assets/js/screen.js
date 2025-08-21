let selectedSeats = [];
let bookings = [];

const checkoutBtn = document.getElementById("checkoutBtn");
const seatElements = document.querySelectorAll(".seat");
const toastLiveExample = document.getElementById('liveToast');
const AtleastOneSeat = document.getElementById('seatSelect');

// Bill section elements
const billSection = document.getElementById("billSection");
const billSeats = document.getElementById("billSeats");
const billTotal = document.getElementById("billTotal");

seatElements.forEach(seat => {
  seat.addEventListener("click", () => {
    const seatNumber = seat.getAttribute("data-seat");
    const seatPrice = parseInt(seat.getAttribute("data-price"));

    if (seat.classList.contains("selected")) {
      seat.classList.remove("selected");
      selectedSeats = selectedSeats.filter(s => s.seat !== seatNumber);
    } else {
      seat.classList.add("selected");
      selectedSeats.push({ seat: seatNumber, price: seatPrice });
    }
    updateBill();
  });
});

function updateBill() {
  billSeats.innerHTML = selectedSeats.map(s => `${s.seat} (₹${s.price})`).join(", ");
  const total = selectedSeats.reduce((sum, s) => sum + s.price, 0);
  billTotal.textContent = `₹${total}`;
}

checkoutBtn.addEventListener("click", () => {
  if (selectedSeats.length === 0) {
    AtleastOneSeat.style.display = "block";
    return;
  }
  bookings.push(...selectedSeats);
  selectedSeats = [];
  seatElements.forEach(seat => seat.classList.remove("selected"));
  updateBill();

  // show toast
  const toast = new bootstrap.Toast(toastLiveExample);
  toast.show();
});
