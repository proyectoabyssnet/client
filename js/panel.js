/*
* PANEL OBJECT
*/
function Panel(id) {

	/* PROPERTIES */
	this.title = "";
	this.hasVisibleTitle = false;
	
	// Panel of 1 row x 1 column as default
	this.rowsCount = 1;
	this.columnsCount = 1;
	
	// Panel contains other objects
	this.container = new CAAT.ActorContainer();
		
	/* METHODS */
	
	this.setTitleVisible = function(value) {
		
		this.hasVisibleTitle = value;
	}
}

