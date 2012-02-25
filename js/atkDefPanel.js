/*
 * ATK - DEF PANEL
 */
function AtkDefPanel() {
	
	/* PROPERTIES */
	
	this.atkValue = 0;
	this.defValue = 0;
	this.container = new CAAT.ActorContainer();
	
    this.atkLabel = new CAAT.TextActor()
        .setFont(this.titleFont)
        .setText("ATK")
        .setTextAlign("left")
        .setFillStyle("#fff")
        .setTextBaseline("bottom")
        .setLocation(1,25);

    this.defLabel = new CAAT.TextActor()
        .setFont(this.titleFont)
        .setText("DEF")
        .setTextAlign("left")
        .setFillStyle("#fff")
        .setTextBaseline("bottom")
        .setLocation(1,50);
        		
	/* METHODS */
	
	this.initLabels = function() {
	
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
