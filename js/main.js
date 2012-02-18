window.onload = init;

/*
*	INIT MAIN OBJECTS
*/

function init() {

	var canvasObject = document.getElementById('canvas1');
	
	if (!canvasObject) {		
		alert("Could not found canvas object");
		return;
	}
	
	// Create Director and assign canvas object
	var director = new CAAT.Director()
		.initialize(800,600, canvasObject)
		.setClear(false);

	// Load resources (images,...)
	loadImages(director);
}

/* INIT GAME */

function initGame(director) {

	var scene_1 = director.createScene()
		.setFillStyle('#000');
	
	/* CREATE GAME UI OBJECTS */
	var equipedCardsPanel = createEquipedCardsPanel(director);
	var playerLifePanel = createPlayerLifePanel(director);
	var cardsOnHandPanel = createCardsOnHandPanel(director);
	
	// Create cards
	var card1 = new Card();
	card1.container.setId("card1_small");
	card1.setImage(director, "card1-small");
	card1.container.enableDrag();
	
	var card2 = new Card();
	card2.container.setId("card2_small").enableDrag();
	card2.setImage(director, "card2-small");
	card2.container.enableDrag();
	card2.container.setLocation(400,300);
	//scene_1.addChild(card2.container);
	
	cardsOnHandPanel.addCard(card1);
	cardsOnHandPanel.addCard(card2);
	
	// Add objects to scene
	scene_1.addChild(equipedCardsPanel.container);
	scene_1.addChild(playerLifePanel.container);
	scene_1.addChild(cardsOnHandPanel.container);
	
	CAAT.loop(60);
}

/* END INIT GAME */


function createEquipedCardsPanel(director) {
	
	// Equiped cards panel
	var equipedCards = new EquipedCardsPanel();
	equipedCards.container.setBounds(10,10,100,400)
		.setId("equiped_cards_panel");
	
	equipedCards.container.name = "Equiped Cards Panel";
	equipedCards.initSlots(director);
	equipedCards.setTitle("Equiped cards");
	
	return equipedCards;
}

function createPlayerLifePanel(director) {
	
	// Player life panel
	var playerLifePanel = new PlayerLifePanel();
	var canvas = director.ctx;


	playerLifePanel.init(director, 10, 600-100, 100, 100); // SHOULD BE CHANGED!!!
	playerLifePanel.setPlayerImage(director, "player-image");	
	playerLifePanel.initLifeImages(director);
	playerLifePanel.setTitle("Player life");
	playerLifePanel.container.setId("player_life_panel");
		
	return playerLifePanel;
}

function createCardsOnHandPanel(director) {

	var cardsOnHand = new CardsOnHandPanel("cards_on_hand_panel");
	
	cardsOnHand.container.setBounds(230, 500, 500, 200)
		.setAlpha(0.50);
	
	cardsOnHand.setTitle("Cards on hand");
		
	return cardsOnHand;
}

/*
var mouseMoveHandler = function(mouseEvent) {
	
	var actor = mouseEvent.source;	
	var logInfo = document.getElementById('logInfo');
	
	if (logInfo) {
		logInfo.innerHTML = actor.id;
	}	
}
*/

/* PRELOAD IMAGES */
function loadImages(director) {
	
	// Preload images
	new CAAT.ImagePreloader().loadImages(
		[
			{id:'card-water-elements',		url:'img/card-water-elements.png'},
			{id:'card-fire-elements',		url:'img/card-fire-elements.png'},
			{id:'card-land-elements',		url:'img/card-land-elements.png'},				
			{id:'card-air-elements',		url:'img/card-air-elements.png'},
			{id:'card-mascot-elements',		url:'img/card-mascot-elements.png'},
			{id:'button',					url:'img/buttons.png'},
			{id:'stars',					url:'img/stars.png'},
			{id:'player-image',				url:'img/player-image.jpg'},
			{id:'life-panel-bg',			url:'img/lifePanelBg.png'},
			{id:'life',						url:'img/life.png'},
			{id:'card1-small',				url:'img/card1-small.jpg'},
			{id:'card2-small',				url:'img/card2-small.jpg'},
			{id:'card1-big',				url:'img/card1.jpg'},
			{id:'card2-big',				url:'img/card2.jpg'}												
		],
		function(counter,images) {
			
			if (counter == images.length) {
				director.setImagesCache(images);
					
				// Images were loaded. It's time to init scene/s
				initGame(director);						
			}
		}
	);	
}

/* 
 * TO BE DELETED (ONLY FOR TESTING PURPOSES) 
 */
function testingCAAT(scene_1) {
	
	// Create six squares (actors) 
	for (var i=0; i < 6; i++) {
		
		// 80x80 rectangles
		var s = 80;
		
		// Containers can contain other actors
		var _c1_container = new CAAT.ActorContainer().
			setBounds(i*100+10, 20, s, s).
			setRotation( Math.PI*2*Math.random()).
			setFillStyle('#ff0').
			enableDrag();
					
		_c1_container.name = 'rectangle' + i;
		_c1_container.mouseMove = mouseMoveHandler;
		
		scene_1.addChild(_c1_container);
		
		// White square acting as a container
		var _c1_container_child = new CAAT.Actor()
		        .setBounds(s/2,s/2,s/4,s/4)
		        .setRotation( Math.PI*2*Math.random() )
		        .setFillStyle('#00ff00')
		        .enableDrag();			           

		_c1_container_child.mouseDblClick = function( mouseEvent ) {
			this.setScale(1.2, 1.2);
		}
		
		// FOR TESTING BACKGROUND IMAGES ***
		if (i % 2 == 0) {
		
			var lifeImage = new CAAT.SpriteImage()
				.initialize(director.getImage('stars'), 1, 6);
			
			_c1_container_child.setBackgroundImage(
				lifeImage.getRef(), 
				true
			).setSpriteIndex(3);				
		}		
		
		// Add this container as a child of the previous created
		_c1_container.addChild(_c1_container_child);			
		
		
	}	
}
