/*
 * CARDS ON HAND PANEL - OBJECT
 */
function CardsOnHandPanel(id) {
	
	/* PROPERTIES */
	
	this.MAX_CARDS_ON_HAND = 5;
	this.CELL_PADDING = 5;
	this.CELL_LEFT_MARGIN = 5;
	this.cellWidth = 0;
	this.cellHeight = 0;
	this.lastUpdatedCell = 0; // Cell where a card was added or removed 
	
	// Call constructor with basic parameters
	this.base = Panel;
	this.base(id);
	
	this.container = new CAAT.ActorContainer()
		.setFillStyle("#967551"); // Brown color by default
	
	// Init cells to store each card
	this.initCells = function(director) {
		
		var slotBackgroundImage = director.getImage("slot-bg");
		this.cellWidth = slotBackgroundImage.width;
		this.cellHeight = slotBackgroundImage.height;
		var nextCellXPosition = 1;
		
		for(var i=0; i < this.MAX_CARDS_ON_HAND; i++) {
			
			// Create 1 cell to contain 1 card
			var cell = new Slot(1);
			
			cell.container.setSize(this.cellWidth, this.cellHeight)
				.setId("coh_cell_" + i)
				.setLocation(
					nextCellXPosition + 
					this.CELL_PADDING, 1 + 
					this.CELL_PADDING
					)
				.setFillStyle("#aabb00")
				.setAlpha(this.cellAlpha);
				
			// Calculate next cell position				
			nextCellXPosition += cell.container.width +
				this.CELL_LEFT_MARGIN + 
				this.CELL_PADDING; 
			
			this.container.addChild(cell.container);
		}
		
	}
	
	this.addCard = function(card) {
		
		var cell = this.container.getChildAt(this.lastUpdatedCell);
		
		if (cell && typeof cell.addCard == "function") {
			
			cell.addCard(card);
			
		} else {
		
			console.log("No cell found at " + 
				this.lastUpdatedCell + 
				" position");
			return;
		}
		//this.cardsOnHand.push(card.container.id);
		card.container.setLocation(card.container.x + 5, card.container.y + 5);
		
		this.container.addChild(card.container);
	}
	
	this.getFreeCell = function() {
		
		var freeCell = 0;
		var found = false;
		var cellIndex = 1;
				
		if (this.container.getNumChildren() <= 0) {
		
			console.log("Not cells found");
			return;
		}
		
		do {
		
			var cell = this.container.getChildAt(cellIndex);
			console.log("Checking cell: " + cell.getId());
			
			if (cell && cell.isFree) {
				
				freeCell = cell;
				found = true;
			}

			cellIndex++;
			
		} while(found == false && cellIndex != this.MAX_CARDS_ON_HAND);
		
		return freeCell;
	}
	
}

CardsOnHandPanel.prototype = new Panel;
