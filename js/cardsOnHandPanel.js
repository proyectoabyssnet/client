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
	this.container = new CAAT.ActorContainer();
	
	this.addCard = function(card) {
		
		this.cardsOnHand.push(card.name);
		this.container.addChild(card);
	}
	
	this.detachCard = function(cardIndex) {
		
		
	}
	
	this.equipCard = function(cardIndex) {
		
		
	}
}

CardsOnHandPanel.prototype = new Panel;