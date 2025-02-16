const quotes = [
    "Your career is your wings – let them fly.",
    "Every small step is part of a bigger journey.",
    "Be proud of how far you’ve come.",
    "You are stronger than you think.",
    "Great things take time – keep going!"
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}
