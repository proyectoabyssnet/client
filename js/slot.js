/*
* SLOT TO CONTAIN CARD/s
*/
function Slot(numberOfCards) {
	
	/* PROPERTIES */
	
	this.isFree = true;
	this.alphaValue = 0.5;
	this.MAX_CARDS = numberOfCards;
	this.cards = new Array(this.MAX_CARDS);

	this.container = new CAAT.ActorContainer()
		.setAlpha(this.alphaValue);
	
	/* METHODS */
	
	this.addCard = function(card) {
		
		// Check if there is space to store more cards
		// in this slot
		if (this.cards.length < this.MAX_CARDS) {
			
			this.cards.push(card);
			this.container.addChild(card.container);
			
		} else {
		
			this.isFree = false;
		}
	}
	
}
