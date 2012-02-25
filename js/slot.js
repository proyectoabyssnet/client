/*
* SLOT TO CONTAIN CARD/s
*/
function Slot(numberOfCards) {
	
	/* PROPERTIES */
	
	this.isFree = true;
	this.cellAlpha = 0.5;
	this.MAX_CARDS = numberOfCards;
	this.cards = new Array(this.MAX_CARDS);

	this.container = new CAAT.ActorContainer();
	
	/* METHODS */
	
	this.addCard = function(card) {
		
		if (this.cards.length < this.MAX_CARDS) {
			
			this.cards.push(card);
			
		} else {
		
			this.isFree = false;
		}
	}
	
}
