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
		
		console.log("Creating " + this.MAX_CARDS_ON_HAND + " cells");
		
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
		
		var cell = this.container.findActorById("coh_cell_" +
			this.lastUpdatedCell);

		if (cell && this.cells[cell.id] == true) {
			
			console.log(cell.id + " is free");
			cell.addChild( card.container );
			this.lastUpdatedCell++;			
		} 
		
	}
	
	this.getFreeCell = function() {
		
		var freeCell = null;
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
