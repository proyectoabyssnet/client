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
	scene_1.addChild(equipedCardsPanel.container);
	
	var playerLifePanel = createPlayerLifePanel(director);
	scene_1.addChild(playerLifePanel.container);
	
	var cardsOnHandPanel = createCardsOnHandPanel(director);
	scene_1.addChild(cardsOnHandPanel.container);
	
	var atkDefPanel = createAtkDefPanel(director);
	scene_1.addChild(atkDefPanel.container);
	
	
	// Create cards
	var card1 = new Card();
	card1.container.setId("card1_small").enableDrag();
	card1.setImage(director, "card1-small");

	
	var card2 = new Card();
	card2.container.setId("card2_small").enableDrag();
	card2.setImage(director, "card2-small");
	card2.container.enableDrag();
	
	cardsOnHandPanel.addCard(card1);
	cardsOnHandPanel.addCard(card2);
	
	
	CAAT.loop(60);
}

/* END INIT GAME */


function createEquipedCardsPanel(director) {
	
	// Equiped cards panel
	var equipedCards = new EquipedCardsPanel();
	equipedCards.container.setLocation(10,10)
		.setSize(100,400)
		.setAlpha(0.5)
		.setId("equiped_cards_panel");
	
	equipedCards.container.name = "Equiped Cards Panel";
	equipedCards.initSlots(director);
	equipedCards.setTitle("Equiped cards");
	
	return equipedCards;
}

function createPlayerLifePanel(director) {
	
	// Player life panel
	var playerLifePanel = new PlayerLifePanel();
	var canvasWidth = director.canvas.width;
	var canvasHeight = director.canvas.height;

	playerLifePanel.init(director, 10, canvasHeight-100, 100, 100); 
	playerLifePanel.setPlayerImage(director, "player-image");	
	playerLifePanel.initLifeImages(director);
	playerLifePanel.setTitle("Player life");
	playerLifePanel.container.setId("player_life_panel");
		
	return playerLifePanel;
}

function createCardsOnHandPanel(director) {

	var cardsOnHandPanel = new CardsOnHandPanel("cards_on_hand_panel");
	
	cardsOnHandPanel.container.setLocation(230, 500)
		.setSize(500, 200)
		.setAlpha(0.5);
	
	cardsOnHandPanel.setTitle("Cards on hand");
		
	return cardsOnHandPanel;
}

function createAtkDefPanel(director) {
	
	var atkDefPanel = new AtkDefPanel("atk_def_panel");
	atkDefPanel.init();
	atkDefPanel.setTitle("Atk / Def");
	atkDefPanel.container.setLocation(130, director.canvas.height - 100)
		.setSize(100,200)
		.setAlpha(0.5);
		
	
	return atkDefPanel;
}

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
			{id:'slot-bg',					url:'img/slot-bg.jpg'},
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

