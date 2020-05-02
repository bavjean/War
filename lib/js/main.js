 const suit = ['hearts', 'spades', 'clubs', 'diamonds']
 const rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
 const score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

class Card {
	constructor(suit, rank, score) {
		this.suit = suit
		this.rank = rank
		this.score = score
	}
}

class Deck {
	constructor() {
		this.cards = []
	}

	makeCards() {
		for (let i = 0; i < suit.length; i++) {
			for (let j = 0; j < rank.length; j++) {
				let newCard = new Card(suit[i], rank[j], score[j])
				this.cards.push(newCard)
			}
		}

	}

	draw() {
		return this.cards[Math.floor(Math.random()*this.cards.length)];
	}
}

const deck = new Deck()
deck.makeCards();
let drawnCard = deck.draw()
console.log(drawnCard)