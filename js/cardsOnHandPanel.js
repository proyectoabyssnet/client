/*
 * CARDS ON HAND PANEL - OBJECT
 */
function CardsOnHandPanel(id) {
	
	/* PROPERTIES */
	
	this.MAX_CARDS = 10;
	this.CELL_PADDING = 5;
	this.CELL_LEFT_MARGIN = 10;
	
	// Call constructor with parameters
	this.base = Panel;
	this.base(id);
	
	this.cardsOnHand = new Array(5); // Equiped cards 
	this.detachedCards = new Array(5); // Detached cards 
	this.container = new CAAT.ActorContainer()
		.setFillStyle("#967551"); // Brown color by default
	
	// Init cells to store each card
	this.initCells = function(director) {
		
		var slotBackgroundImage = director.getImage("slot-bg");
		var nextCellXPosition = 1;
		
		for(var i=0; i < 8; i++) {
			
			// Create 1 cell to contain 1 card
			var cell = new Slot(1);
			
			cell.container.setSize(50,70)
				.setLocation(nextCellXPosition, 1)
				.setFillStyle("#aabb00");
				
			// Calculate next cell position				
			nextCellXPosition += cell.container.width +
				this.CELL_LEFT_MARGIN + 
				this.CELL_PADDING; 
			
			this.container.addChild(cell.container);
		}
	}
	
	this.addCard = function(card) {
		
		this.cardsOnHand.push(card.container.id);
		card.container.setLocation(card.container.x + 5, card.container.y + 5);
		
		this.container.addChild(card.container);
	}
	
	this.detachCard = function(cardId) {
		
		
	}
	
	this.equipCard = function(cardId) {
		
		
	}
}

CardsOnHandPanel.prototype = new Panel;
