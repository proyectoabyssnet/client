/*
* EQUIPED CARDS PANEL OBJECT
*/

function EquipedCardsPanel() {
	
	/* PROPERTIES */
	
	this.MAX_SLOT_ELEMENTS = 5; // Number of elements (land, air,...)
	this.CELL_PADDING = 2; // Separating between cell and borders
	this.CELL_LEFT_MARGIN = 10; // Horizontal separation
	this.SLOT_PADDING = 2; // Vertical separation between slots
	this.slotElementSize = [0,0]; // width, height

	
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
		this.slotElementSize[0] = image.width;
		this.slotElementSize[1] = image.height;
		
		for(var element = 0; element < this.MAX_SLOT_ELEMENTS; element++) {
						
			var maxNumberOfCards = 2; // Cards per slot
			var slotElementBackground = this.slotBackgroundImages[element];
			
			var slotElement = new CAAT.ActorContainer();

			slotElement.setBounds(
					this.container.x,
					nextSlotY,
					this.slotElementSize[0], // width
					this.slotElementSize[1] // height
					)
				.setFillStyle("#fbff87")
				.setBackgroundImage(
						director.getImage(slotElementBackground)
						);
			
			slotElement.setId("slot_" + 
				this.slotBackgroundImages[ element ]);
				
			slotElement.mouseUp = function(event) {;
				
				console.log(event.source.id);
			}
			
			// Create 2 cells at nextSlotY position
			var cells = this.createCells(2);
			
			// Add cells to slot element
			slotElement.addChild(cells[0].container); // Left cell
			slotElement.addChild(cells[1].container); // Right cell		

			
			// Add slot element to panel
			this.addSlotElement(slotElement);							
			
			// Calculate Y position for next slot element
			nextSlotY += this.slotElementSize[1] + this.SLOT_PADDING;
		}
		
	}
	
	// Add slot element to panel
	this.addSlotElement = function(slotElement) {
		
		this.container.addChild(slotElement);	
	}
	
	this.createCells = function(numberOfCells) {
				
		// Array containing cells
		var cells = [];
		var xPosition = 0;
		var yPosition = 0;
		
		// Create slots containing cards inside each slot element
		// p.e.: land element has 2 slots containing 2 cards each slot
		var nextCellXPosition = xPosition + this.SLOT_PADDING;
		yPosition += this.SLOT_PADDING;
		

		for(var slotCell = 0; slotCell < 2; slotCell++) {

			var cell = new Slot(2); // 2 cards per cells
			
			cell.container.setBounds(
				nextCellXPosition,	
				yPosition,
				50, 70)
				.setFillStyle("#aabb00");
				

			// Calculate x position for the cell placed
			// to the right side
			nextCellXPosition += 50 + this.CELL_PADDING + this.CELL_LEFT_MARGIN;

			cells.push(cell);
		}	
		
		return cells;
	}
}

EquipedCardsPanel.prototype = new Panel;

