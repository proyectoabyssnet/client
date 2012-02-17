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
}

EquipedCardsWidget.prototype = new Panel;
EquipedCardsWidget.prototype.addCard = function(card) {

	this.cards.push(card.name); // Store in card list
	this.container.addChild(card);
}



