/*
* EQUIPED CARDS PANEL OBJECT
*/

function EquipedCardsPanel(id) {
	
	/* PROPERTIES */
	
	this.MAX_SLOTS = 5;
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
	
	this.initSlots = function(director) {
		
		var nextSlotY = this.container.y;
		
		// Get first image to read it's size
		var image = director.getImage(this.slotBackgroundImages[0]);
		var defaultImageWidth = image.width;
		var defaultImageHeight = image.height;
		
		for(var slotIndex = 0; slotIndex < 5; slotIndex++) {
			
			var newSlot = new Slot(2,2); // 2 cells, max. of 2 cards per cell
			
			newSlot.container.setBounds(
					this.container.x,
					nextSlotY,
					defaultImageWidth,
					defaultImageHeight
					)
				.setFillStyle("#fbff87")
				.setBackgroundImage(
						director.getImage(this.slotBackgroundImages[slotIndex])
						);
			
			newSlot.name = "slot" + slotIndex;
			
			this.addSlot(newSlot);	
			
			
			// Calculate next slot Y position
			nextSlotY += 88 + this.SLOT_PADDING;
		}
	}
	
	
	this.addSlot = function(slot) {
		
		// Add slot object to array
		this.slots[this.lastInsertedIndex] = slot;
		this.lastInsertedIndex++; // Update index to store the next slot
		
		// Add actor to ActorContainer
		this.container.addChild(slot.container);		
	}
}

EquipedCardsPanel.prototype = new Panel;

