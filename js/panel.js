/*
* PANEL OBJECT
*/
function Panel() {

	/* PROPERTIES */
	
	this.titleIsVisible = true;
	this.titleFont = "14px sans-serif";
	this.titleColor = "#fdff47";
	this.defaultBackgroundcolor = "#967551";
	this.titleObject = null;
	
	// Panel contains other objects
	this.container = new CAAT.ActorContainer()
		.setFillStyle(this.defaultBackgroundcolor);
	
	/* METHODS */
	
	this.initPanel = function() {
		
		// Init panel title
	    this.titleObject = new CAAT.TextActor()
	        .setFont(this.titleFont)
	        .setText("panel_title")
	        .setTextAlign("left")
	        //.setFillStyle(this.titleColor)
	        .setTextBaseline("bottom");
	}
	
	this.setTitle = function(theTitle) {
		
		if (this.titleIsVisible) {
		
			if (this.titleObject == null) {
			
				console.log("titleObject was not initialized");
				return;
			}
			
			this.titleObject.setText(theTitle);
			this.titleObject.setLocation(1,1); // Top left position
			this.container.addChild(this.titleObject);
			
		} else {
		
			console.log("Panel title is set to invisible");
		}

	}
}

