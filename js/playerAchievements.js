/*
* Player achievements (elemental souls, habilities,...)
*/
var PlayerAchievements = Object.create( Panel );

Object.defineProperties( PlayerAchievements, {

	habilities: 	{ value: [], writable: true},
	souls:			{ value: [], writable: true },
	habilityImage: 	{ value: null, writable: true },
	soulImage: 		{ value: null, writable: true },
	
	init: {
	
		value: function() {
		
			this.initPanel();
			this.container.setFillStyle("#ccf");
			//this.habilityImage = window['director'].getImage("hability");
			//this.soulImage = window['director'].getImage("soul");
			
		}, enumerable: true
	},
	
	addHability: {
		
		value: function( hability ) {
		
			
		}, enumerable: true
	},
	
	addSoul: {
	
		value: function( soul ) {
		
			
		}, enumerable: true
	}
});
