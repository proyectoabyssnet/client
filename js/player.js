/*
* Player object
*/
var Player = {};

Object.defineProperties( Player, {

	playerName:			{ value: "", writable: true },
	equipedCards:		{ value: [], writable: true },

	init: {

		value: function(pName) {
		
			this.playerName = pName;
			this.equipedCards = [];
			
		}, enumerable: true
	}
	
});
