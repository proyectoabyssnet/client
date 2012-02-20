/*
* SLOT ELEMENT
*/
function Slot(numberOfCells, numberOfCardsPerCell) {
	
	/* PROPERTIES */
	
	this.numberOfCells = numberOfCells; // Number of cells containing cards
	this.maxNumberOfCardsPerCell = numberOfCardsPerCell;
	
	// Cell container 1 or 2 cards (maybe more)	
	this.cells = new Array(numberOfCells); 
	
	this.container = new CAAT.ActorContainer();
	
	/* METHODS */
	
	this.init = function(x,y,width,height) {
		
		this.container.setBounds(x,y,width,height);

	}
	
	this.addCard = function(card) {
		
		this.cells.push(card);
	}
	
}
