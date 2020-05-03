 const suit = ['hearts', 'spades', 'clubs', 'diamonds']
 const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
 const score = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
 let playerOne = []
 let playerTwo = []


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
}

class Game {
	constructor() {
		this.cardsInPlay = []
		this.round = 1

	}

	shuffle(arr) {
		for(let i = 0; i < 52; i++) {
			const swapper = arr[i]
			const j = Math.floor(Math.random() * i)
  			arr[i] = arr[j]
  			arr[j] = swapper
		}
	}

	deal(arr) {
		for(let i = 0; i < 52; i++) {
			let j = arr.shift(i)
			if (i % 2 === 0) {
				playerOne.push(j)
			} else playerTwo.push(j)
		}
	}

	play() {
		while (playerOne.length > 0 && playerTwo.length > 0) {
			console.log(`Round: ${this.round}`)
			let card1 = playerOne[0]
			console.log(`Player one plays ${card1.rank} of ${card1.suit}`)
			let card2 = playerTwo[0]
			console.log(`Player two plays ${card2.rank} of ${card2.suit}`)
			this.cardsInPlay.unshift(playerOne.shift(0), playerTwo.shift(0))
			 

			if (card1.score > card2.score) {
				playerOne.push.apply(playerOne, this.cardsInPlay)
				console.log("Player one wins!")
				this.cardsInPlay = []
				console.log(`Player one has ${playerOne.length} cards.`)
				console.log(`Player two has ${playerTwo.length} cards.`)
			} else if (card1.score < card2.score) {
				playerTwo.push.apply(playerTwo, this.cardsInPlay)
				console.log("Player two wins!")
				console.log(`Player one has ${playerOne.length} cards.`)
				console.log(`Player two has ${playerTwo.length} cards.`)
				this.cardsInPlay = []
			} else {
				console.log("******      WAR IS DECLARED      ******")
				if (playerOne.length > 3 && playerTwo.length > 3) {
				this.goToWar()
				} else if (playerOne.length > playerTwo.length) {
					playerOne.push.apply(playerOne, playerTwo)
					playerOne.push.apply(playerOne, this.cardsInPlay)
					playerTwo = []
					this.cardsInPlay = []
					console.log("Player two does not have enough cards to continue.")
				} else if (playerTwo.length > playerOne.length) {
					playerTwo.push.apply(playerTwo, playerOne)
					playerTwo.push.apply(playerTwo, this.cardsInPlay)
					playerOne = []
					this.cardsInPlay = []
					console.log("Player one does not have enough cards to continue.")
				}

			}

			this.round++
		}

		if (playerOne.length === 0) console.log("Player two is the winner!!!")
		if (playerTwo.length === 0) console.log("Player one is the winner!!!")

	}

	goToWar() {
		// add 3 cards from each players hand to the cardsInPlay, get 1 more card and compare again
		for (let i = 0; i < 3; i++) {
			this.cardsInPlay.push(playerOne.shift())
			this.cardsInPlay.push(playerTwo.shift())
		}

		if (playerOne.length > 3 && playerTwo.length > 3) {
			let card1 = playerOne[0]
			console.log(`Player one plays ${card1.rank} of ${card1.suit}`)
			let card2 = playerTwo[0]
			console.log(`Player two plays ${card2.rank} of ${card2.suit}`)
			this.cardsInPlay.unshift(playerOne.shift(0), playerTwo.shift(0))
			 

			if (card1.score > card2.score) {
				playerOne.push.apply(playerOne, this.cardsInPlay)
				console.log("Player one wins!")
				console.log(`Player one has ${playerOne.length} cards.`)
				console.log(`Player two has ${playerTwo.length} cards.`)
				this.cardsInPlay = []
			} else if (card1.score < card2.score) {
				playerTwo.push.apply(playerTwo, this.cardsInPlay)
				console.log("Player two wins!")
				console.log(`Player one has ${playerOne.length} cards.`)
				console.log(`Player two has ${playerTwo.length} cards.`)
				this.cardsInPlay = []
			} else {
				console.log("******      WAR CONTINUES      ******")
				if (playerOne.length > 3 && playerTwo.length > 3) {
				this.goToWar()
				} else if (playerOne.length > playerTwo.length) {
					playerOne.push.apply(playerOne, playerTwo)
					playerOne.push.apply(playerOne, this.cardsInPlay)
					playerTwo = []
					this.cardsInPlay = []
					console.log("Player two does not have enough cards to continue.")
				} else if (playerTwo.length > playerOne.length) {
					playerTwo.push.apply(playerTwo, playerOne)
					playerTwo.push.apply(playerTwo, this.cardsInPlay)
					playerOne = []
					this.cardsInPlay = []
					console.log("Player one does not have enough cards to continue.")
				}
			}
		}
	}
}


const game = new Game()
console.log('GOING TO WAR')
const deck = new Deck()
deck.makeCards();
game.shuffle(deck.cards)
console.log('Shuffling cards...')
game.deal(deck.cards)
console.log('Dealing cards...')
game.play()

