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
	draggedCardId:		{ value: 0, writable: true }, // Cards being dragged
	cells: 				{ value: [], writable: true },
	lastObjectPosition: { value: [0,0], writable: true },
			
	init: {
	
		value: function() {
		
			this.initPanel();
			this.MAX_CARDS_ON_HAND = 5;
			this.CELL_PADDING = 5;
			this.CELL_LEFT_MARGIN = 5;
			
		}, enumerable: false
	},

	initCells: {
	
		value: function() {
		
			var slotBackgroundImage = window['director'].getImage("slot-bg");
			this.cellWidth = slotBackgroundImage.width;
			this.cellHeight = slotBackgroundImage.height;
			var nextCellXPosition = 1;
			var cell = null;
			
			for(var i=0; i < this.MAX_CARDS_ON_HAND; i++) {
		
				// Create 1 cell to store 1 card
				cell = Object.create( Slot );
				cell.init("coh_cell_" + i);
				cell.setMaxCards(1); // 1 card per cell				
				cell.container.setSize(this.cellWidth, this.cellHeight)
					.setId("coh_cell_" + i)
					.setLocation(
						nextCellXPosition + this.CELL_PADDING,  
						1 + this.CELL_PADDING
						)
					.setFillStyle("#aabb00")
					.setAlpha(0.5);
					
				cell.slotIndex = i;
				
				// Store cell... 	
				this.cells.push(cell);				
		
				// Calculate next cell position				
				nextCellXPosition += cell.container.width +
					this.CELL_LEFT_MARGIN;
		
				this.container.addChild(cell.container);
			}
			
			// This could be used to add more actors to this panel
			this.lastObjectPosition[0] = nextCellXPosition + this.CELL_PADDING;
			this.lastObjectPosition[1] = 1 + this.CELL_PADDING;
			
			
			// Define panel size based on number of cells  and their width
			var slotCellWidth = slotBackgroundImage.width;
			var panelWidth = slotCellWidth * this.MAX_CARDS_ON_HAND +
				(this.CELL_LEFT_MARGIN * this.MAX_CARDS_ON_HAND) +
				this.CELL_PADDING;
			this.container.setSize( panelWidth, this.container.height);
			
		
		}, enumerable: false
	},

	addCard: {
	
		value: function(card) {
				
			if (this.lastUpdatedCell < 0 || 
				this.lastUpdatedCell > 4) {
				
				console.log( "Cannot have more than 5 cards in your hand" );
				return;
			}
			
			// Get access to the last updated cell
			// (added card, removed card,...)
			var cell = this.cells[this.lastUpdatedCell];
			
			// If cell is not null and is free...
			if (cell.isFree == true) {
			
				cell.addCard(card);
				cell.isFree = false;
				this.lastUpdatedCell++;												
			} 
			
		}, enumerable: true
	},
	
	freeCard: {
	
		value: function( cardIndex ) {
		
			// Card index is equal to cell index because
			// we have only 1 card inside each cell
			var cell = this.cells[ cardIndex ];
			
			// Remove parenting between cell and card
			cell.container.removeChild( cell.cards[0].container );
			
			//cell.cards = [];
			//cell.isFree = true;
			cell.lastUpdatedCell = cardIndex;
		
		},
		enumerable: true
		
	}
		
});
	
