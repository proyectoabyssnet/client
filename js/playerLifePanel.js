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
		var step = 0.5;
		var width = this.container.width;
		var height = this.container.height;
		
		
		for(var lifeImageIndex = 0; lifeImageIndex < 5; lifeImageIndex++) {
			
			var positionX = centerX + Math.cos(step) * 90;
			var positionY = centerY + Math.sin(step) * 90;
			
			var lifeImage = new CAAT.Actor()
				.setBounds(positionX, positionY, 26, 24)
				.setBackgroundImage(director.getImage("life"));
				
			this.container.addChild(lifeImage);
			
			step += -0.4;
		}
	}
	
	this.setPlayerImage = function(director, imageName) {
		
		var image = director.getImage(imageName);		
		var playerAvatarPosition = [this.container.x, this.container.y + 20];
		console.log(playerAvatarPosition);
		
		// Add player image as an Actor
		this.playerAvatar = new CAAT.Actor()
			.setBounds(1, 1, playerAvatarPosition[0], playerAvatarPosition[1])
			.setBackgroundImage(image)
			.setAlpha(0.50);
		
		this.container.addChild(this.playerAvatar);		
	}

}

PlayerLifePanel.prototype = new Panel;
