//creates a deck class with an empty array to pass in cards (suits + values)
class Deck {
    constructor() {
        this.deck = [];
    }

    // method that creates a 52 card deck
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
// loop that pairs a suit with a value
// each new pair is stored as a separate variable called newCard
// all the newCard variables are pushed to the deck array
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let newCard = { Value: values[x], Suit: suits[i]};
        this.deck.push(newCard);
    }
}
}
// method to shuffle the elements of the deck array
    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.deck[newIndex]
            this.deck[newIndex] = this.deck[i]
            this.deck[i] = oldValue
        }

    }
}

//creates an instance of deck array
let myDeck = new Deck;
myDeck.createDeck()
myDeck.shuffleDeck()
console.log(myDeck);

//creates a variable that is the middle value of the myDeck array
const deckMidPoint = Math.ceil(myDeck.deck.length / 2);

//use splice function to cut from the first index in the myDeck array to the deckMidPoint value, creates variable playerOneHand
const playerOneHand = myDeck.deck.splice(0, deckMidPoint);

//use splice function to cut from the last index in the myDeck array to the deckMidPoint value, creates variable playerTwoHand
const playerTwoHand = myDeck.deck.splice(-deckMidPoint);

console.log(playerOneHand);
console.log(playerTwoHand);

//creates variables to hold score (cannot use const because values change)
let playerOneScore = 0;
let playerTwoScore = 0;

//this function flips a card, or starts the game
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

// invokes the function to start the game
flipCard()

if(playerOneScore > playerTwoScore) {
  console.log('Player One Wins!');
} else if(playerTwoScore > playerOneScore) {
  console.log('Player Two Wins!')
} else {
  console.log('We Have a Tie!')
}