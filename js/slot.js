/*
* SLOT CONTAINING CARD/s
*/
var Slot = {};

Object.defineProperties(Slot, {

	isFree: 	{ value: true, writable: true },
	alphaValue: { value: 0.5, writable: true },
	MAX_CARDS: 	{ value: 0, writable: false },
	container:	{ value: null, writable: false },
	cards: 		{ value: [], writable: true },
	
	init: {
	
		value: function(id) {
			
			this.container = new CAAT.ActorContainer()
				.setId(id)
				.setAlpha(this.alphaValue);
				
			this.cards = [];
		
		}, enumerable: true
	},
	
	setMaxCards: {
	
		value: function( numberOfCards ) {
	
			this.MAX_CARDS = numberOfCards;
		
		}, enumerable: true
	},
	
	addCard: { 
	
		value: function(card) {

				this.cards.push(card);
				this.container.addChild(card.container);
				
				if (this.cards.length == 2) {
									
					this.container.setFillStyle("#ff0000");
					this.container.setAlpha(250);
				}
		
		}, enumerable: true
	}
	
});
