/*
* Player object
*/
var Player = {};

Object.defineProperties( Player, {

	playerName:			{ value: "", writable: true },
	cardsOnHand:		{ value: [], writable: true },
	equipedCards:		{ value: [], writable: true },
	atk:				{ value: 0, writable: true },
	def:				{ value: 0, writable: true },

	init: {

		value: function(pName) {
		
			this.playerName = pName;
			this.atk = 0;
			this.def = 0;
			this.equipedCards = [];
			this.cardsOnHand = [];
			
		}, enumerable: true
	}
	
});
