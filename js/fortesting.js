/*** TESTING PURPOSES ***/

// Example of closure
/*
(function() {

	var number = 10;
	
	console.log("Executing only once");
	
	function increase() {
		number++;
		return number;
	}
	
	console.log(increase());
})();
*/

function basic(callback) {
	
	var result = "basic: result";
	
	if (callback) {
		callback(result);
	}
}

function callback_with_call(arg1, arg2, callback) {

	var result1 = "callback_with_call: result1";
	var result2 = "callback_with_call: result2";
	
	if (callback) {
		callback.call(this, result1, result2);
	}
}

basic(function("arg1", "arg2") {
	console.log("Executing basic function: " + result);
});
