document.getElementById('shuffleButton').addEventListener('click', displayRandomCards);

function displayRandomCards() {
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let deck = [];

    suits.forEach(suit => {
        values.forEach(value => {
            deck.push(`${suit}_${value}`);
        });
    });

    shuffleArray(deck);

    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';
    deck.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.style.backgroundImage = `url('cards/${card}.png')`;
        cardContainer.appendChild(cardElement);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
