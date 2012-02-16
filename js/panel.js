/*
* PANEL OBJECT
*/
function Panel(id) {

	/* PROPERTIES */
	
	// Pass arguments to parent object
	this.base = UIWidget;
	this.base(id);
	
	// Panel of 1 row x 1 column as default
	this.rowsCount = 1;
	this.columnsCount = 1;
	
	// Panel contains other objects
	this.container = new CAAT.ActorContainer()
		.setBounds(this.x, this.y, this.width, this.height);
		
	/* METHODS */
	
	this.addItem = function(item, row, column) {
	
		item.setBounds(row, column, item.width, item.height);
		
		this.container.addChild( item );
	}
}

Panel.prototype = new UIWidget; // Inherits from UIWidget
