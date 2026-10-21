// Update the count displayed inside the emoji button that was clicked.
function updateCount(btn) {
  // Find the element that contains the count, for example "3/10".
  const countEl = btn.querySelector(".count");

  // Split at "/" to get the current count, then convert the string to a number.
  const currCount = +countEl.textContent.split("/")[0];

  // Stop once the count reaches the maximum of 10.
  if (currCount === 10) return;

  // Increase the count and show it again in "current/maximum" format.
  const nextCount = currCount + 1;
  countEl.textContent = `${nextCount}/10`;
}

// Select every button with the "emoji-btn" class.
const btns = document.querySelectorAll(".emoji-btn");

// Add a click listener to each button.
// Passing the clicked button to updateCount keeps each button's count independent.
btns.forEach((btn) => {
  btn.addEventListener("click", () => updateCount(btn));
});
