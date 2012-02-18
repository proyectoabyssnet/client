/*
* PANEL OBJECT
*/
function Panel(id) {

	/* PROPERTIES */
	
	this.hasVisibleTitle = false;
	this.titleFont = "14px sans-serif";
	this.titleColor = "#fdff47";
	
	// Panel title
    this.title = new CAAT.TextActor().
        setFont(this.titleFont).
        setText("panel_title").
        setTextAlign("left").
        setFillStyle(this.titleColor).
        setTextBaseline("bottom");
            	
	// Panel of 1 row x 1 column as default
	this.rowsCount = 1;
	this.columnsCount = 1;
	
	// Panel contains other objects
	this.container = new CAAT.ActorContainer();
	
	/* METHODS */
	
	this.setTitle = function(title) {
		
		this.title.setText(title);
		this.title.setLocation(1,1);
		this.container.addChild(this.title);
	}
}

