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
	window['director'] = new CAAT.Director()
		.initialize(800,600, canvasObject)
		.setClear(false);
	
	// Load resources (images,...)
	loadImages();
}

/* INIT GAME */

function initGame() {

	var scene_1 = window['director'].createScene()
		.setFillStyle('#000');
		
	/* CREATE GAME UI OBJECTS */
	
	/*
	window['Tag'] = createTag();
	scene_1.addChild(window['Tag'].container);
	*/
	window['equiped_cards_panel'] = createEquipedCardsPanel();
	scene_1.addChild(window['equiped_cards_panel'].container);

	window['player_life_panel'] = createPlayerLifePanel();
	scene_1.addChild(window['player_life_panel'].container);
	
	window['atk_def_panel'] = createAtkDefPanel();
	scene_1.addChild(window['atk_def_panel'].container);
		
	window['cards_on_hand_panel'] = createCardsOnHandPanel();
	scene_1.addChild(window['cards_on_hand_panel'].container);
	
	window['detached_cards_panel'] = createDetachedCardsPanel();
	scene_1.addChild( window['detached_cards_panel'].container );
			
	window['player_achievements_panel'] = createPlayerAchievementsPanel();
	scene_1.addChild( window['player_achievements_panel'].container );
			
	window['roulette_options'] = createRouletteOptions();
	scene_1.addChild(window['roulette_options'].container);
		
	window['player_browser_panel'] = createPlayerBrowserPanel();
	scene_1.addChild(window['player_browser_panel'].container);	
	
	window['card_details_panel'] = createCardDetailsPanel();
	scene_1.addChild(window['card_details_panel'].container);	
	
	/*
	*	Load players
	*/
	var players = initPlayers();
	window['player_browser_panel'].loadPlayers( players );
	
	/*
	* INIT GAME PROCEDURES (giveAwayCards, initPlayers,....)
	*/
	// Create cards
	scene_1.enableInputList(5);	// panel and numberOfCards
		
	var card = null;
	var cardIndex = 1;
	var cardsOnHandCount = 6;
		
	for(; cardIndex < cardsOnHandCount; cardIndex++) {
	
		card = Object.create( Card );	
		card.init("card_on_hand_" + cardIndex);
		card['cName'] = "card" + cardIndex;
		var cardType = "water";//randomCardType();
		card.setElementType(cardType);
		card.setImage("card1-small");

		//window['equiped_cards_panel'].equipCard( card );
		window['cards_on_hand_panel'] .addCard( card );
		
		scene_1.addActorToInputList(card.container, cardIndex);			
	}
	
	scene_1.addActorToInputList(window['cards_on_hand_panel'].container, cardsOnHandCount);
	//scene_1.addActorToInputList(window['equiped_cards_panel'].container, cardsOnHandCount + 1);
		
	//scene_1.setZOrder(window['Tag'].container, Number.MAX_VALUE);
	
	CAAT.loop(60);
}

/* END INIT GAME */

function randomCardType() {

	// Generate random card type (air, land,...)
	var minValue = 1;
	var maxValue = 5;
	var randomCardType = Math.round(minValue + (Math.random() * (maxValue - minValue)) );
	var cardType = "";
	
		
	switch(randomCardType) {
	
		case 1:
			cardType = "land";
		break;
		
		case 2:
			cardType = "water";
		break;
		
		case 3:
			cardType = "fire";
		break;
		
		case 4:
			cardType = "mascot";
		break;
		
		case 5:
			cardType = "air";
		break;
	}
	
	return cardType;
}

function initPlayers() {
	
	var players = [];
	var player = null;
	
	for (var i=0; i < 4; i++) {
		
		player = Object.create( Player );
		player.init("player_" + i);
		
		players[i] = player;
	}
	
	return players;
}

/* ONLY FOR TESTING PURPOSES */
function createEquipedCardsForPlayers(players) {
	
	var card = Object.create( Card );
	var cardType = "";
	var randomCardsCount = 0;
	
	for (var i=0; i < players.length; i++) {
	
		randomCardsCount = Math.round(1 + (Math.random() * (20 - 1)) );	
		
		for (var card = 0; card < randomCardsCount; card++) {
			card.init("equiped_card_" + i);
			card['cName'] = "card" + i;
			cardType = randomCardType();
			card.setElementType(cardType);
			card.setImage("card1-small");
			
			players[i].equipedCards.push(card);
		}	
		
		player
	}
}
/* END TESTING */

function createTag() {

	var tag = Object.create(Tag);
	tag.init("Tag", "Object ID", "Game object description");
	
	return tag;
}

function createCardDetailsPanel() {

	var cardDetailsPanel = Object.create( CardDetails );
	cardDetailsPanel.init();
	cardDetailsPanel.setTitle("Card details")
	cardDetailsPanel.container
		.setId("card_details_panel");
	
	return cardDetailsPanel;
}

function createPlayerBrowserPanel() {

	var equipedCardsPanel = window['equiped_cards_panel'].container;
	var posX = equipedCardsPanel.x;
	var posY = equipedCardsPanel.y + equipedCardsPanel.height;
	
	var playerBrowserPanel = Object.create( PlayerBrowser );
	playerBrowserPanel.init();
	playerBrowserPanel.setTitle("Player: <none>");	
	playerBrowserPanel.container.setLocation(1,20)
		.setAlpha(0.0)
		.setId("player_browser_panel");
	
	return playerBrowserPanel;
}

function createEquipedCardsPanel() {
	
	var equipedCardsPanel = Object.create( EquipedCardsPanel );
	equipedCardsPanel.init();
	equipedCardsPanel.setTitle("Equiped cards");	
	equipedCardsPanel.container.setLocation(5,65)
		.setSize(160,430)
		.setAlpha(0.0)
		.setId("equiped_cards_panel");

	equipedCardsPanel.initElementSlots();
	
	return equipedCardsPanel;
}

function createPlayerLifePanel() {
	
	// Player life panel
	var playerLifePanel = Object.create( PlayerLifePanel );
	var canvasWidth = window['director'].canvas.width;
	var canvasHeight = window['director'].canvas.height;
	
	playerLifePanel.container.setId("player_life_panel");
	playerLifePanel.init(10, canvasHeight-100, 100, 100); 
	playerLifePanel.setPlayerImage("player-image");	
	playerLifePanel.initLifeImages();
	playerLifePanel.setTitle("Player life");
	
	return playerLifePanel;
}

function createCardsOnHandPanel() {
	
	// Get atk/def panel location and width
	var atkdefPanelWidth = window['atk_def_panel'].container.width;
	var atkdefPanelLocationX = window['atk_def_panel'].container.x;
	var atkdefPanelLocationY = window['atk_def_panel'].container.y;
	
	var cardsOnHandPanel = Object.create( CardsOnHandPanel );
	cardsOnHandPanel.init();
	cardsOnHandPanel.container
		.setLocation(atkdefPanelLocationX + atkdefPanelWidth, atkdefPanelLocationY)
		.setSize(50, 80)
		.setAlpha(0.50);
	
	cardsOnHandPanel.container.setId("cards_on_hand_panel");
	cardsOnHandPanel.setTitle("Cards on hand");
	cardsOnHandPanel.initCells();
		
	return cardsOnHandPanel;
}

function createDetachedCardsPanel() {
	
	var panelPositionY = window['cards_on_hand_panel'].container.x + 
		window['cards_on_hand_panel'].container.width;
	
	var detachedCardsPanel = Object.create( DetachedCardsPanel );
	detachedCardsPanel.init();
	detachedCardsPanel.container.setLocation( panelPositionY, 500)
		.setSize(100, 80)
		.setAlpha(0.50)
		.setId("detached_cards_panel");
	
	detachedCardsPanel.setTitle("Detached cards");
	detachedCardsPanel.initCells();
		
	return detachedCardsPanel;
}

function createPlayerAchievementsPanel() {
	
	var panelPositionY = window['detached_cards_panel'].container.x + 
		window['detached_cards_panel'].container.width;
	
	var playerAchievementsPanel = Object.create( PlayerAchievements );
	playerAchievementsPanel.init();
	playerAchievementsPanel.container.setLocation( panelPositionY, 500)
		.setSize(100, 80)
		.setAlpha(0.50)
		.setId("player_achievements_panel");
	
	playerAchievementsPanel.setTitle("Habilities & souls");
	//playerAchievementsPanel.initCells();
		
	return playerAchievementsPanel;
}


function createAtkDefPanel() {
	
	var atkDefPanel = Object.create( AtkDefPanel );
	atkDefPanel.initPanel();
	atkDefPanel.initLabels();
	atkDefPanel.setTitle("Atk / Def");
	atkDefPanel.container.setLocation(130, window['director'].canvas.height - 100)
		.setSize(80,80)
		.setAlpha(0.0);		
	
	return atkDefPanel;
}

function createRouletteOptions() {

	var roulette = Object.create( RouletteOptions );
	roulette.initRoulette();
	
	return roulette;
}

/* PRELOAD IMAGES */
function loadImages() {
	
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
			{id:'card1-img-big',			url:'img/card-image.png'},
			{id:'card2-big',				url:'img/card2.jpg'},
			{id:'roulette',					url:'img/roulette.png'},
			{id:'cell-cover',				url:'img/cell-cover.jpg'},
			{id:'cell-cover-sprite',		url:'img/cell-cover.png'},	
			{id:'card-displayer-button',	url:'img/right_arrow.png'},	
			{id:'active-hability',			url:'img/active_hability.png'},	
			{id:'pasive-hability',			url:'img/pasive_hability.png'},				
		],
		function(counter,images) {
			
			if (counter == images.length) {
				window['director'].setImagesCache(images);
					
				// Images were loaded. It's time to init scene/s
				initGame();						
			}
		}
	);	
}

