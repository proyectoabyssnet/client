/*
* PLAYER LIFE PANEL
*/
function PlayerLifePanel() {
	
	/* PROPERTIES */
	
	this.LIFE_SLOTS = 5;
	this.container = new CAAT.ActorContainer();
	
	/* METHODS */
	
	this.init = function(x, y, width, height) {
		
		this.container.setBounds(x, y, width, height)
		.setFillStyle("#ff0000");		
	}
	
	this.setPlayerImage = function(imageName, director) {
		
		this.container.setBackgroundImage(
					director.getImage(imageName)
		);
	}

}

PlayerLifePanel.prototype = new Panel;