/*
* EQUIPED CARDS PANEL OBJECT
*/

function EquipedCardsPanel(id) {
	
	/* PROPERTIES */
	
	this.MAX_SLOT_ELEMENTS = 5; // Number of elements (land, air,...)
	this.CELL_PADDING = 2; // Horizontal separation between cards (cells)
	this.SLOT_PADDING = 2; // Vertical separation between slots
	
	// Call constructor with parameters
	this.base = Panel;
	this.base(id);
	this.lastInsertedIndex = 0;
	
	// Slots containing cards
	this.slots = new Array(
				[0,0], 
				[0,0],
				[0,0],
				[0,0],
				[0,0]
	); // 0 = free, 1 = full
	
	this.slotBackgroundImages = ["card-mascot-elements",
	                             "card-air-elements",
	                             "card-water-elements",
	                             "card-land-elements",
	                             "card-fire-elements"];
	/* METHODS */
	
	this.initElementSlots = function(director) {
		
		var nextSlotY = this.container.y;
		
		// Get first image to read it's size
		var image = director.getImage(this.slotBackgroundImages[0]);
		var defaultImageWidth = image.width;
		var defaultImageHeight = image.height;
		
		for(var element = 0; element < this.MAX_SLOT_ELEMENTS; element++) {
						
			var maxNumberOfCards = 2; // Cards per slot
	
			var slotElement = new CAAT.ActorContainer();
			
			slotElement.setBounds(
					this.container.x,
					nextSlotY,
					defaultImageWidth,
					defaultImageHeight
					)
				.setFillStyle("#fbff87")
				.setBackgroundImage(
						director.getImage(this.slotBackgroundImages[element])
						);
			
			slotElement.setId("slot_element_" + element);

			// Create cells containing cards
			var cells = this.createCells(2, nextSlotY);
						
			// Add cells to slot element
			slotElement.addChild(cells[0].container); // Left cell
			slotElement.addChild(cells[1].container); // Right cell
			
			// Add slot element to panel
			this.addSlotElement(slotElement);							
			
			// Calculate next slot Y position
			nextSlotY += 88 + this.SLOT_PADDING;
		}
	}
	
	// Add slot element to panel
	this.addSlotElement = function(slot) {
		
		this.container.addChild(slot);		
	}
	
	this.createCells = function(numberOfCells, slotElementYPosition) {
	
		// Array containing cells
		var cells = [];
		
		// Create slots containing cards inside each slot element
		// p.e.: land element has 2 slots containing 2 cards each slot
		var nextCellXPosition = 1;
		
		for(var slotCell = 0; slotCell < 2; slotCell++) {
		
			var cell = new Slot(2); // 2 cards per cells
			
			cell.container.setBounds(nextCellXPosition, 
									slotElementYPosition, 
									50, 
									70)
				.setFillStyle("#aabb00");
				
			// Calculate x position for the cell placed
			// to the right side
			nextCellXPosition += cell.container.width + this.CELL_PADDING;
			
			cells.push(cell);
		}	
		
		return cells;
	}
}

EquipedCardsPanel.prototype = new Panel;

