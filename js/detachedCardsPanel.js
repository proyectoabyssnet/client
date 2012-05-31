/*
* Detached cards panel
*/

var DetachedCardsPanel = Object.create( Panel );

Object.defineProperties( DetachedCardsPanel, {

	maxCards:			{ value: 0, writable: true },
	cellWidth:			{ value: 0, writable: true },
	cellHeight:			{ value: 0, writable: true },
	cellPadding:		{ value: 4, writable: true },
	panelPadding:		{ value: 4, writable: true },
	cells:				{ value: [], writable: true },
	lastUpdatedCell: 	{ value: 0, writable: true },
	
	init: {
	
		value: function() {
		
			this.initPanel();
			var slotBackgroundImage = window['director'].getImage("slot-bg");
			this.cellWidth = slotBackgroundImage.width;
			this.cellHeight = slotBackgroundImage.height;
			this.cellPadding = 4;			
			this.maxCards = 3;
			
		}, enumerable: true
	},
	
	initCells: {
	
		value: function() {
		
			var nextCellXPosition = 1;
			
			for(var i=0; i < this.maxCards; i++) {
		
				// Create 1 cell to store 1 card
				cell = Object.create( Slot );
				cell.init("dc_cell_" + i);
				cell.setMaxCards(1); // 1 card per cell				
				cell.container.setSize(this.cellWidth, this.cellHeight)
					.setLocation(
						nextCellXPosition + this.cellPadding,  
						1 + this.cellPadding
						)
					.setFillStyle("#ccc")
					.setAlpha(0.5);
	
				// Store cell... 	
				this.cells.push( cell );				
		
				// Calculate next cell position				
				nextCellXPosition += cell.container.width +
					this.cellPadding; 
		
				this.container.addChild(cell.container);
			}
			
			// Reset panel width and location
			this.container.setSize(
				this.maxCards * this.cellWidth + (this.maxCards * this.cellPadding) + this.cellPadding, 
				this.container.height
			)
			.setLocation(this.container.x + this.panelPadding, this.container.y);
			
						
		}, enumerable: true
	},
	
	detachCard: {
	
		value: function( card ) {
		
			var foundCell = 0;
			var found = false;
			
			// Look for a free cell and put it in here		
			var cell = this.cells[this.lastUpdatedCell];
			var cardParent = card.container.parent;
			var equipedCardsPanel = window['equiped_cards_panel'];
			//console.log("Got card parent for detaching it: " + cardParent.getId());
			var slotId = "card-" + card.elementType + "-elements";
			//var previousSlot = equipedCardsPanel.slotElements[slotId][0];
			
			if (cell.isFree == true) {
				
				//equipedCardsPanel.unequipCard( card );
				cardParent.removeChild( card.container );
				cell.addCard( card );
				this.lastUpdatedCell++;
			}
			
			
		}, enumerable: true
	}
	
});
