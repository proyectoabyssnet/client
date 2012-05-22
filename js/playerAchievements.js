/*
* Player achievements (elemental souls, habilities,...)
*/
var PlayerAchievements = Object.create( Panel );

Object.defineProperties( PlayerAchievements, {

	habilities: 		{ value: [], writable: true},
	souls:				{ value: [], writable: true },
	habilityImage: 		{ value: null, writable: true },
	soulImage: 			{ value: null, writable: true },
	panelPadding:		{ value: 4, writable: true },
	labelWarriorSoul:	{ value: "WS", writable: true }, // Warrior soul
	labelElementalSoul:	{ value: "ES", writable: true }, // Elemental soul
	labelHabilities: 	{ value: "H:", writable: true }, // Habilities
	
	init: {
	
		value: function() {
		
			this.initPanel();
			this.container.setFillStyle("#ccf");
			//this.habilityImage = window['director'].getImage("hability");
			//this.soulImage = window['director'].getImage("soul");
			
			this.labelWarriorSoul = new CAAT.TextActor()
				.setFont(this.titleFont)
				.setText("WS")
				.setTextAlign("left")
				.setTextFillStyle("#fff")
				.setTextBaseline("bottom")
				.setLocation(1,25);
				
			this.labelElementalSoul = new CAAT.TextActor()
				.setFont(this.titleFont)
				.setText("ES")
				.setTextAlign("center")
				.setTextFillStyle("#fff")
				.setTextBaseline("bottom")
				.setLocation(1,45);
				
			this.labelHabilities = new CAAT.TextActor()
				.setFont(this.titleFont)
				.setText("H")
				.setTextAlign("center")
				.setTextFillStyle("#fff")
				.setTextBaseline("bottom")
				.setLocation(1,65);				
							
			
			this.container.addChild(this.labelWarriorSoul);
			this.container.addChild(this.labelElementalSoul);
			this.container.addChild(this.labelHabilities);
			
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
