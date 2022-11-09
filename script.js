// For the final project you will be creating an automated version of the classic card game WAR! 
// There are many versions of the game WAR. In this version there are only 2 players.
// You do not need to do anything special when there is a tie in a round. 
// Think about how you would build this project and write your plan down. 
// Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include. 
// You do not need to accept any user input, when you run your code, 
// the entire game should play out instantly without any user input inside of your browser’s console.
// The completed project should, when executed, do the following:
// Deal 26 Cards to each Player from a Deck of 52 cards.
// Iterate through the turns where each Player plays a Card.
// The Player who played the higher card is awarded a point
// Ties result in zero points for both Players
// After all cards have been played, display the score and declare the winner.
// Write a Unit Test using Mocha and Chai for at least one of the functions you write.

class Deck {
    constructor() {
        this.deck = [];
    }
    createDeck(){
        const suits = ['♠', '♣', '♥', '♦']
const values = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
]

const cardValueMap = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14,
}

for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let newCard = { Value: values[x], Suit: suits[i]};
        this.deck.push(newCard);
    }
}
}

    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.deck[newIndex]
            this.deck[newIndex] = this.deck[i]
            this.deck[i] = oldValue
        }

    }
}

let myDeck = new Deck;
myDeck.createDeck()
myDeck.shuffleDeck()
console.log(myDeck);

const deckMidPoint = Math.ceil(myDeck.deck.length / 2);
const playerOneHand = myDeck.deck.splice(0, deckMidPoint);
const playerTwoHand = myDeck.deck.splice(-deckMidPoint);

console.log(playerOneHand);
console.log(playerTwoHand);


let playerOneScore = 0;
let playerTwoScore = 0;

function flipCard() {
 
  for (let i = 0; i < 26 ; i++) {
    let playerOneCard = playerOneHand[i].Value;
    let playerTwoCard = playerTwoHand[i].Value;
      console.log(`Round # ${i + 1}, Player One Card: ${playerOneCard}, Player Two Card: ${playerTwoCard}`);
      if(playerOneCard > playerTwoCard) {
        playerOneScore++;
        console.log(`Player One Wins! Player One Total Points: ${playerOneScore}`);
      } else if(playerTwoCard > playerOneCard) {
        playerTwoScore++;
        console.log(`Player Two Wins! Player Two Total Points: ${playerTwoScore}`);
      } else {
        console.log(`Round # ${i + 1}, Draw`)
      }
  }
  console.log(`----------------------
  Final Scores: Player One: ${playerOneScore}, Player Two: ${playerTwoScore}`);  
}

flipCard();

if(playerOneScore > playerTwoScore) {
  console.log('Player One Wins!');
} else if(playerTwoScore > playerOneScore) {
  console.log('Player Two Wins!')
} else {
  console.log('We Have a Tie!')
}