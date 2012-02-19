/*
 * ATK - DEF PANEL
 */
function AtkDefPanel(id) {
	
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
        .setLocation(1,1);

    this.defLabel = new CAAT.TextActor()
        .setFont(this.titleFont)
        .setText("ATK")
        .setTextAlign("left")
        .setFillStyle("#fff")
        .setTextBaseline("bottom")
        .setLocation(1,50);
        		
	/* METHODS */
	
}

AtkDefPanel.prototype = new Panel;
