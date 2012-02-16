/*
* PANEL OBJECT
*/
function Panel(name, x, y, width, height) {

	/* PROPERTIES */
	
	this.name = name || "empty"
	this.x = x || 0;
	this.y = y || 0;
	this.width = width || 0;
	this.height = height || 0;
	this.container = new CAAT.ActorContainer()
		.setBounds(this.x, this.y, this.width, this.height);
		
	/* METHODS */
	
	this.addItem = function(item, row, column) {
	
		item.setBounds(row, column, item.width, item.height);
		
		this.container.addChild( item );
	}
}

Panel.prototype = new Widget;
