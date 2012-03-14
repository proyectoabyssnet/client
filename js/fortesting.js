/*** TESTING PURPOSES ***/


var LifeForm = {};
	
Object.defineProperties(LifeForm, {

	planet: {
		value: "unknown",
		writable: true
	},
	
	armor: {
		value: 0,
		writable: true
	},
	
	hibernate: {
		value: function() {
			console.log("Hibernating...");
		},
		writable: false
	}
});



var lf1 = Object.create(LifeForm);

lf1.hibernate();

var lf2 = Object.create(lf1, {
	
	language: {
		value: "takrum",
		writable: true
	}
});

console.log( "lf2 planet: " + lf2.planet );
console.log( "lfs language: " + lf2.language );
