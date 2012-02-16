/*
* PANEL OBJECT
*/
function Panel(name, x, y, width, height) {

	/* PROPERTIES */
	
	this.name = name || "empty";
	this.x = x || 0;
	this.y = y || 0;
	this.width = width || 0;
	this.height = height || 0;
	
	// Panel of 1 row x 1 column as default
	this.rowsCount = 1;
	this.columnsCount = 1;
	
	// Property to contain other Actors (cards,..)
	this.container = new CAAT.ActorContainer()
		.setBounds(this.x, this.y, this.width, this.height);
		
	/* METHODS */
	
	this.addItem = function(item, row, column) {
	
		item.setBounds(row, column, item.width, item.height);
		
		this.container.addChild( item );
	}
}

Panel.prototype = new Widget;
