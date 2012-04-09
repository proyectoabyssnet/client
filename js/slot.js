/*
* SLOT CONTAINING CARD/s
*/
var Slot = {};

Object.defineProperties(Slot, {

	isFree: 	{ value: true, writable: true },
	alphaValue: { value: 0.5, writable: true },
	MAX_CARDS: 	{ value: 0, writable: false },
	cards: 		{ value: [], writable: true },
	
	
	setMaxCards: {
		value: function( numberOfCards ) {
	
		this.MAX_CARDS = numberOfCards;
		
		}, enumerable: true
	},
	
	addCard: { 
		value: function(card) {
		
			// Check if there is space to store cards
			// in this slot
			if (this.cards.length < this.MAX_CARDS) {
			
				this.cards.push(card);
				this.container.addChild(card.container);
			
			} else {
		
				this.isFree = false;
			}
		
		}, enumerable: false
	}
	
});
