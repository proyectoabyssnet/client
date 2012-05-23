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
	cellCover:	{ value: null, writable: true },
	butSprite:	{ value: null, writable: true },
	
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
				card.container.setLocation(0,0);
				card.oldPosition[0] = 0;
				card.oldPosition[1] = 0;
				
				if (this.cards.length == 2) {
							
					// Move second card 5 units on x and y
					this.cards[1].container.setLocation(5,5);	
					this.cards[1].oldPosition[0] = 5;
					this.cards[1].oldPosition[1] = 5;
					
					// Find cardDisplayer belonging to slotElement (cell's parent)
					var cardDisplayer = this.container.parent.findActorById(
						"slot-card-" + card.elementType + "-elements-cd"
					);

					// ...and make it visible
					if (cardDisplayer != null) {
						cardDisplayer.setVisible(true);
					}
				}
						
		
		}, enumerable: true
	}
	
});
