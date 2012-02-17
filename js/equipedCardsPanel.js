/*
* EQUIPED CARDS PANEL OBJECT
*/

function EquipedCardsPanel(id) {
	
	/* PROPERTIES */
	
	this.MAX_CARDS = 20;
	
	// Call constructor with parameters
	this.base = Panel;
	this.base(id);
	
	this.slots = []; // Slots containing cards
	
	/* METHODS */
	
	this.initSlots = function() {
		
		var slotAir = new SlotElement();
		slotAir.container.setBounds(
				this.container.x,
				this.container.y,
				178,88
				)
			.setFillStyle("#fbff87");
		
		slotAir.name = "slot air";
		
		this.addSlot(slotAir);
	}
	
	this.addSlot = function(slot) {
		
		this.slots.push(slot.name);
		this.container.addChild(slot.container);
	}
}

EquipedCardsPanel.prototype = new Panel;

