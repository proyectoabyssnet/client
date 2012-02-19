/*
* SLOT ELEMENT
*/
function Slot(numberOfCells, numberOfCardsPerCell) {
	
	/* PROPERTIES */
	
	this.numberOfCells = numberOfCells; // Number of cells containing cards
	this.maxNumberOfCardsPerCell = numberOfCardsPerCell;
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
