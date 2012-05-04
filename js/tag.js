/*
* Tag to show object details (name, description,...)
*/

var Tag = {};

Object.defineProperties(Tag, {

	title: 					{ value: "", writable: true },
	description: 			{ value: "", writable: true },
	container:				{ value: null, writable: true },
	textActorTitle: 		{ value: null, writable: true },
	textActorDescription: 	{ value: null, writable: true },
	
	init: {
	
		value: function(id, title, description) {
		
			this.title = title;
			this.description = description;
			
			this.container = new CAAT.ActorContainer()
				.setId(id)
				.setSize(100,100)
				.setFillStyle("#70684a")
			
			this.textActorTitle = new CAAT.TextActor()
				.setFont("12px sans-serif")
				.setText(this.title)
				.setTextAlign("left")
				.setTextFillStyle("#ffffff")
				.setTextBaseline("bottom")
				.setPosition(0,0);
				
			this.textActorDescription = new CAAT.TextActor()
				.setSize(40,80)
				.setFont("12px sans-serif")
				.setText(this.description)
				.setTextAlign("left")
				.setTextFillStyle("#ffffff")
				.setTextBaseline("bottom")
				.setPosition(0,10);
							
				
			this.container.addChild( this.textActorTitle );
			this.container.addChild( this.textActorDescription );	
			this.container.setVisible(false);
			var numChildren = this.container.getNumChildren();
			this.container.setZOrder(this.textActorTitle, numChildren*2);
			this.container.setZOrder(this.textActorDescription, numChildren*2+1);
				
				
		}, enumerable: true
	},
	
	setTitle: {
		
		value: function(title) {
		
			this.textActorTitle.setText(title);
			
		}, enumerable: true
	},
	
	setDescription: {
		
		value: function(desc) {
		
			this.textActorDescription.setText(desc);
			
		}, enumerable: true
	},
		
	setTagPosition: {
	
		value: function(x,y) {
		
			this.container.x = x;
			this.container.y = y;
			
		}, enumerable: true
	}
	
	
	
});

