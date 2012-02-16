/*
* EQUIPED CARDS PANEL OBJECT
*/

function EquipedCardsWidget(name, x, y, width, height) {
	
	// Call constructor with parameters
	this.base = Panel;
	this.base(name, x, y, width, height);
	
	this.cards = []; // Equiped cards
}

EquipedCardsWidget.prototype = new Panel;
EquipedCardsWidget.prototype.addCard = function(card) {

	this.addItem(card); 
	this.cards.push(card.name); // Store in card list
}



