/*
* PLAYER LIFE PANEL
*/
function PlayerLifePanel() {
	
	/* PROPERTIES */
	
	this.LIFE_SLOTS = 5;
	this.container = new CAAT.ActorContainer();
	this.bgImage = "life-panel-bg";
	this.playerAvatar = "";
	
	/* METHODS */
	
	this.init = function(director, x, y, width, height) {
		
		this.container.setBounds(x, y, width, height)
		.setFillStyle("#ff0000")
		.setBackgroundImage(director.getImage(this.bgImage));		
	}
	
	this.initLifeImages = function(director) {
		
		var centerX = this.container.width / 2;
		var centerY = this.container.height / 2;
		var paddingCorrection = 5;
		var step = 0.5; // Distance between life images
		var width = this.container.width;
		var height = this.container.height;
		var radius = 45;
		
		// Create five actors representing player lifes
		for(var i = 0; i < 5; i++) {
			
			var positionX = centerX + Math.cos(step) * radius - paddingCorrection;
			var positionY = centerY + Math.sin(step) * radius - paddingCorrection;
			
			var lifeImage = new CAAT.Actor()
				.setBounds(positionX, positionY, 26, 24)
				.setBackgroundImage(director.getImage("life"));
				
			this.container.addChild(lifeImage);
			
			step += -0.4;
		}
	}
	
	this.setPlayerImage = function(director, imageName) {
		
		var image = director.getImage(imageName);	
		var xPosition = this.container.x + image.width / 2;
		var yPosition = this.container.y + image.height / 2;
		
		// Add player image as an Actor
		this.playerAvatar = new CAAT.Actor()
			.setBounds(1, 1, xPosition, yPosition)
			.setBackgroundImage(image)
			.setAlpha(1);
		
		this.container.addChild(this.playerAvatar);		
	}

}

PlayerLifePanel.prototype = new Panel;
