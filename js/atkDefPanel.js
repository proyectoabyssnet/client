/*
 * ATK - DEF PANEL
 */
function AtkDefPanel() {
	
	/* PROPERTIES */
	
	this.atkValue = 0;
	this.defValue = 0;
        		
	/* METHODS */
	
	this.initLabels = function() {
		
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
		
	}
	
	// Draw images depending on value
	this.setAtkValue = function(value) {
	
	}
	
	// Draw images depending on value
	this.setDefValue = function(value) {
	
	}
	
}

AtkDefPanel.prototype = new Panel;
