const stack = document.querySelector(".stack");

// Initialize cards
function initializeCards() {
  const cards = Array.from(stack.children)
    .reverse()
    .filter((child) => child.classList.contains("card"));

  // Clear stack safely without removing event listeners
  while (stack.firstChild) {
    stack.removeChild(stack.firstChild);
  }

  cards.forEach((card) => stack.appendChild(card));
}

function moveCard() {
  const lastCard = stack.lastElementChild;
  if (lastCard && lastCard.classList.contains("card")) {
    lastCard.classList.add("swap");
    setTimeout(() => {
      lastCard.classList.remove("swap");
      stack.insertBefore(lastCard, stack.firstElementChild);
    }, 1200);
  }
}

// Initialize on load
document.addEventListener("DOMContentLoaded", initializeCards);

// Start animation
let autoplayInterval = setInterval(moveCard, 4000);

// Click handler
stack.addEventListener("click", function (e) {
  const card = e.target.closest(".card");
  if (card && card === stack.lastElementChild) {
    clearInterval(autoplayInterval);
    moveCard();
    autoplayInterval = setInterval(moveCard, 4000);
  }
});
