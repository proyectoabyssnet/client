/*
 * CARDS ON HAND PANEL - OBJECT
 */
function CardsOnHandPanel(id) {
	
	/* PROPERTIES */
	
	this.MAX_CARDS = 10;
	
	// Call constructor with parameters
	this.base = Panel;
	this.base(id);
	
	this.cardsOnHand = new Array(5); // Equiped cards 
	this.detachedCards = new Array(5); // Detached cards 
	this.container = new CAAT.ActorContainer()
		.setFillStyle("#967551"); // Brown color by default
	
	// Init slots to store each card
	this.initSlots = function(director) {
		
		var slotBackgroundImage = director.getImage("slot-bg");
		var nextSlotXPosition = 1;
		
		for(var i=0; i < 10; i++) {
			
			// Create 1 slot to contain 1 card
			var newSlot = new Slot(1,1);
			
			newSlot.container.setSize(50,70)
				.setLocation(nextSlotXPosition,1)
				.setBackgroundImage();
				
			nextSlotXPosition += 1; // Calculate next slot position
			
			this.container.addChild(newSlot.container);
		}
	}
	
	this.addCard = function(card) {
		
		this.cardsOnHand.push(card.container.id);
		card.container.setLocation(card.container.x + 5, card.container.y + 5);
		
		this.container.addChild(card.container);
	}
	
	this.detachCard = function(cardId) {
		
		
	}
	
	this.equipCard = function(cardId) {
		
		
	}
}

CardsOnHandPanel.prototype = new Panel;
