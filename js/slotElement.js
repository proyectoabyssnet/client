/*
* SLOT ELEMENT
*/
function SlotElement() {
	
	/* PROPERTIES */
	
	this.MAX_CARDS_COUNT = 4;
	this.cards = [];
	this.container = new CAAT.Actor();
	
	/* METHODS */
	
	this.init = function(x,y,width,height) {
		
		this.container.setBounds(x,y,width,height);
	}
	
	this.addCard = function(card) {
		
		this.cards.push(card.id);
	}
	
}