/*
* PANEL OBJECT
*/
var Panel = {};

Object.defineProperties(Panel, {

	titleIsVisible:  	{ value: true, writable: true },
	titleFont: 			{ value: "14px sans-serif", writable: false },
	titleColor: 		{ value: "#fdff47", writable: false },
	defaultBackgroundcolor: { value: "#967551", writable: false },
	titleObject: 		{ value: null, writable: true },
	container: 			{ value: null, writable: true },
	
	initPanel: {
	
		value: function() {

			this.titleIsVisible = true;
			this.container = new CAAT.ActorContainer()
				.setFillStyle(this.defaultBackgroundcolor);
						
			// Init panel title
			this.titleObject = new CAAT.TextActor()
				.setFont(this.titleFont)
				.setText("panel_title")
				.setTextAlign("left")
				.setTextFillStyle(this.titleColor)
				.setTextBaseline("bottom");
				
        }, enumerable: false
        
	}, // end initPanel

	setTitle: {
	
		value: function(theTitle) {
		
			this.titleObject.setText(theTitle);
			this.titleObject.setLocation(1,1); // Top left position
			this.container.addChild(this.titleObject);
				
		}, enumerable: true
		
	} // end setTitle

}); // end Panel object
