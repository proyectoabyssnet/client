/*
* EQUIPED CARDS PANEL OBJECT
*/

function EquipedCardsPanel(id) {
	
	/* PROPERTIES */
	
	this.MAX_SLOTS = 5;
	this.SLOT_PADDING = 5; // Vertical separation between slots
	
	// Call constructor with parameters
	this.base = Panel;
	this.base(id);
	this.slots = []; // Slots containing cards
	this.slotBackgroundImages = ["card-mascot-elements",
	                             "card-air-elements",
	                             "card-water-elements",
	                             "card-land-elements",
	                             "card-fire-elements"];
	/* METHODS */
	
	this.initSlots = function(director) {
		
		var nextSlotY = this.container.y;
		
		for(var slotIndex = 0; slotIndex < 5; slotIndex++) {
			
			var newSlot = new SlotElement(); // Can contain 4 cards
			
			newSlot.container.setBounds(
					this.container.x,
					nextSlotY,
					178,88
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
		
		this.slots.push(slot.name);
		this.container.addChild(slot.container);
	}
}

EquipedCardsPanel.prototype = new Panel;

