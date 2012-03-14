/*
 * ATK - DEF PANEL
 */
var AtkDefPanel = Object.create( Panel );
	
Object.defineProperties( AtkDefPanel, {

	atkValue: { value: 0, writable: true },
	defValue: { value: 0, writable: true },
	atkLabel: { value: null, writable: true },
	defLabel: { value: null, writable: true },
	
	initLabels: {
	
		value: function() {
		
			// atk label
			this.atkLabel = new CAAT.TextActor()
				.setFont(this.titleFont)
				.setText("ATK")
				.setTextAlign("left")
				.setTextFillStyle("#fff")
				.setTextBaseline("bottom")
				.setLocation(1,25);

			// def label
			this.defLabel = new CAAT.TextActor()
				.setFont(this.titleFont)
				.setText("DEF")
				.setTextAlign("left")
				.setTextFillStyle("#fff")
				.setTextBaseline("bottom")
				.setLocation(1,50);	
		    
			this.container.addChild(this.atkLabel);
			this.container.addChild(this.defLabel);
			
		}, enumerable: false
		
	},
	
	// Draw images depending on value
	setAtkValue: {
		value: function(value) {
		}, enumerable: false
	
	},
	
	// Draw images depending on value
	setDefValue: {
		value: function(value) {
		}, enumerable: false,
	
	}
	
});

