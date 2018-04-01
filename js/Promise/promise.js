
const PEDDING = 'pedding',
			FULFILLED = 'fulfilled',
			REJECTED = 'rejected';

function MyPromise(fn) {
	if (!(this instanceof MyPromise)) {
		return throw new Error("MyPromise must be constructed via new!")
	}
	if (typeof fn !== 'function') {
		return throw new Error("MyPromise's argument must be function!")
	}

	let callbacks = [];

	this.PromiseStatus = PEDDING;
	this.PromiseValue = fn;

	
}

(function(prototype) {
	prototype.resolve = resolve;
	prototype.reject = reject;
	prototype.then = then;
	
	function resolve(onFulfill, onReject) {
		
	}
})(MyPromise.prototype)


MyPromise.all = function() {

}
MyPromise.trace = function() {
	
}
MyPromise.resolve = function() {
	
}
MyPromise.reject = function() {
	
}