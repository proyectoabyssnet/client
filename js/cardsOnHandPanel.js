/*
 * CARDS ON HAND PANEL - OBJECT
 */
function CardsOnHandPanel() {
	
	/* PROPERTIES */
	
	this.MAX_CARDS_ON_HAND = 5;
	this.CELL_PADDING = 5;
	this.CELL_LEFT_MARGIN = 5;
	this.cellWidth = 0;
	this.cellHeight = 0;
	this.lastUpdatedCell = 0; // Cell where a card was added or removed
	
	/*
	* Cells containing cards
	* Array(["cell1", true], 
	* 		["cell2", true],...)
	*
	* Stores cell id and if it's free (true/false)
	*/
	this.cells = []; 
	

	// Init cells to store each card
	this.initCells = function(director) {
		
		var slotBackgroundImage = director.getImage("slot-bg");
		this.cellWidth = slotBackgroundImage.width;
		this.cellHeight = slotBackgroundImage.height;
		var nextCellXPosition = 1;
		
		for(var i=0; i < this.MAX_CARDS_ON_HAND; i++) {
			
			// Create 1 cell to contain 1 card
			var cell = new Slot(1);
			var cellId = "coh_cell_" + i;
			
			cell.container.setSize(this.cellWidth, this.cellHeight)
				.setId("coh_cell_" + i)
				.setLocation(
					nextCellXPosition + this.CELL_PADDING,  
					1 + this.CELL_PADDING
					)
				.setFillStyle("#aabb00")
				.setAlpha(this.cellAlpha);
			
			this.cells[cellId] = true;		
			
			// Calculate next cell position				
			nextCellXPosition += cell.container.width +
				this.CELL_LEFT_MARGIN + 
				this.CELL_PADDING; 
			
			this.container.addChild(cell.container);
		}
		
	}
	
	this.addCard = function(card) {
		
		// Get access to the last updated cell (container) (added card, removed card,...)
		var cell = this.container.findActorById("coh_cell_" +
			this.lastUpdatedCell);

		// If cell is not null and is free...
		if (cell && this.cells[cell.id] == true) {
			
			cell.addChild( card.container );
			this.cells[cell.id] = false; // Mark cell as not free
			this.lastUpdatedCell++;			
		} 
		
	}
	
}

CardsOnHandPanel.prototype = new Panel;
