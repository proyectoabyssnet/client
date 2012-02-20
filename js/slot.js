/*
* SLOT TO CONTAIN CARD/s
*/
function Slot(numberOfCardsPerCell) {
	
	/* PROPERTIES */
	
	this.maxNumberOfCardsPerCell = numberOfCardsPerCell;
	this.container = new CAAT.ActorContainer();
	
	/* METHODS */
	
	this.init = function(x,y,width,height) {
		
		this.container.setBounds(x,y,width,height);

	}
	
}
