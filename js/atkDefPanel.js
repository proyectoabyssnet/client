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
				
			this.atkValue = new CAAT.TextActor()
				.setFont(this.titleFont)
				.setText("0")
				.setTextAlign("center")
				.setTextFillStyle("#fff")
				.setTextBaseline("bottom")
				.setLocation(1,45);
				

			// def label
			this.defLabel = new CAAT.TextActor()
				.setFont(this.titleFont)
				.setText("DEF")
				.setTextAlign("left")
				.setTextFillStyle("#fff")
				.setTextBaseline("bottom")
				.setLocation(1,65);	
		    
				
			this.defValue = new CAAT.TextActor()
				.setFont(this.titleFont)
				.setText("0")
				.setTextAlign("center")
				.setTextFillStyle("#fff")
				.setTextBaseline("bottom")
				.setLocation(1,85);
						    
			this.container.addChild(this.atkLabel);
			this.container.addChild(this.atkValue);
			this.container.addChild(this.defLabel);
			this.container.addChild(this.defValue);
			
		}, enumerable: false
		
	},
	
	// Draw images depending on value
	setAtkValue: {
		value: function(value) {
		
			this.atkValue.setText( value );
			
		}, enumerable: false
	
	},
	
	// Draw images depending on value
	setDefValue: {
		value: function(value) {
		
			this.defValue.setText( value );
			
		}, enumerable: false,
	
	}
	
});

