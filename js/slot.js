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

			if (this.cards.length < this.MAX_CARDS) {
		
				this.cards.push(card);
				this.container.addChild(card.container);	
			}	
		
		}, enumerable: true
	}
	
});
