// Select all cards
const cards = document.querySelectorAll('.card');

// Add a click event listener to each card
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Toggle the 'flipped' class on the card
        card.classList.toggle('flipped');
    });
});