/*
 * CARDS ON PLAYERS' HYAND OBJECT
 */
function CardsOnHandPanel(id) {
	
	/* PROPERTIES */
	
	this.MAX_CARDS = 20;
	
	// Call constructor with parameters
	this.base = Panel;
	this.base(id);
	
	this.cardsOnHand = []; // Equiped cards array
	this.detachedCards = []; // Detached cards by player
	this.container = new CAAT.ActorContainer()
		.setFillStyle("#967551"); // Brown color by default
	
	// Init slots to store each card
	this.initSlots = function() {
		
		for(var i=0; i < 5; i++) {
		
			var newSlot = new Slot();
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
