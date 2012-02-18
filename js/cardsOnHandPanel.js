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
		
		this.cardsOnHand.push(card.container.id);
		//card.container.enableDrag();
		this.container.addChild(card.container);
	}
	
	this.detachCard = function(cardId) {
		
		
	}
	
	this.equipCard = function(cardId) {
		
		
	}
}

CardsOnHandPanel.prototype = new Panel;
