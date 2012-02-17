/*
* EQUIPED CARDS PANEL OBJECT
*/

function EquipedCardsWidget(id) {
	
	/* PROPERTIES */
	
	this.MAX_CARDS = 20;
	
	// Call constructor with parameters
	this.base = Panel;
	this.base(id);
	
	this.cards = []; // Equiped cards
	
	this.addCard = function(card) {
		
		this.cards.push(card.name);
		this.container.addChild(card);
	}
}

EquipedCardsWidget.prototype = new Panel;

