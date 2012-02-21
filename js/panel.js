/*
* PANEL OBJECT
*/
function Panel(id) {

	/* PROPERTIES */
	
	this.hasVisibleTitle = false;
	this.titleFont = "14px sans-serif";
	this.titleColor = "#fdff47";
	this.defaultBackgroundcolor = "#967551";
	
	// Panel title
    this.title = new CAAT.TextActor()
        .setFont(this.titleFont)
        .setText("panel_title")
        .setTextAlign("left")
        .setFillStyle(this.titleColor)
        .setTextBaseline("bottom");
            
	
	// Panel contains other objects
	this.container = new CAAT.ActorContainer()
		.setFillStyle(this.defaultBackgroundcolor);
	
	/* METHODS */
	
	this.setTitle = function(title) {
		
		this.title.setText(title);
		this.title.setLocation(1,1); // Top left position
		this.container.addChild(this.title);
	}
}

