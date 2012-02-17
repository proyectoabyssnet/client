/*
 * DETACHED CARDS PANEL
 */
function DetachedCardsPanel(id) {
	
	/* PROPERTIES */
	
	this.MAX_CARDS = 20;
	
	// Call constructor with parameters
	this.base = Panel;
	this.base(id);
	
	this.cards = []; // Equiped cards array
	
	this.addCard = function(card) {
		
		this.cards.push(card.name);
		this.container.addChild(card);
	}
}

EquipedCardsPanel.prototype = new Panel;