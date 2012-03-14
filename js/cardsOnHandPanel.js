/*
 * CARDS ON HAND PANEL - OBJECT
 */
var CardsOnHandPanel = Object.create( Panel );
	
Object.defineProperties( CardsOnHandPanel, {

	MAX_CARDS_ON_HAND: 	{ value: 0, writable: true },
	CELL_PADDING: 		{ value: 0, writable: true },
	CELL_LEFT_MARGIN: 	{ value: 0, writable: true },
	cellWidth: 			{ value: 0, writable: true },
	cellHeight: 		{ value: 0, writable: true },
	lastUpdatedCell: 	{ value: 0, writable: true }, 
	cells: 				{ value: [], writable: true },
			
	init: {
	
		value: function() {
		
			this.initPanel();
			this.MAX_CARDS_ON_HAND = 5;
			this.CELL_PADDING = 5;
			this.CELL_LEFT_MARGIN = 5;
			
		}, enumerable: false
	},

	initCells: {
	
		value: function(director) {
		
			var slotBackgroundImage = director.getImage("slot-bg");
			this.cellWidth = slotBackgroundImage.width;
			this.cellHeight = slotBackgroundImage.height;
			var nextCellXPosition = 1;
			var cell = null;
			var cellId = "";
			
			for(var i=0; i < this.MAX_CARDS_ON_HAND; i++) {
		
				// Create 1 cell to contain 1 card
				cell = Object.create( Slot );
				Object.defineProperty( cell, "container", {
					value: new CAAT.ActorContainer(),
					writable: true
				});
				
				cell.setMaxCards(1);
				cellId = "coh_cell_" + i;
		
				cell.container.setSize(this.cellWidth, this.cellHeight)
					.setId("coh_cell_" + i)
					.setLocation(
						nextCellXPosition + this.CELL_PADDING,  
						1 + this.CELL_PADDING
						)
					.setFillStyle("#aabb00")
					.setAlpha(0.5);
	
				// Cell is free by default
				this.cells[cellId] = true;		
		
				// Calculate next cell position				
				nextCellXPosition += cell.container.width +
					this.CELL_LEFT_MARGIN + 
					this.CELL_PADDING; 
		
				this.container.addChild(cell.container);
			}
		
		}, enumerable: false
	},

	addCard: {
		value: function(card) {
		
			// Get access to the last updated cell
			// (added card, removed card,...)
			var cell = this.container.findActorById("coh_cell_" +
				this.lastUpdatedCell);

			// If cell is not null and is free...
			if (cell != null && this.cells[cell.id] == true) {
		
				cell.addChild( card.container );
				this.cells[cell.id] = false; // Mark cell as not free
				this.lastUpdatedCell++;			
			} 
			
		}, enumerable: false
	}
		
});
	
