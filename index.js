
function arrDiff() {
	var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));

	var concatArr = [];

	if(!(Object.prototype.toString.call( args[0] ) === '[object Array]')) {
		console.error('Invalid type for first argument. Requrired : [object Array], Found : ' + 
			Object.prototype.toString.call(args[0]));

		return;
	}

	for(var i = 1; i < args.length; i++) {
		if( Object.prototype.toString.call( args[i] ) === '[object Array]' ) {
			concatArr = concatArr.concat.apply(concatArr, args[i]);
		}
	}

	var onlyInFirst = [];

	onlyInFirst = args[0].filter(function(ele) {
		if(concatArr.indexOf(ele) === -1)
			return true;
	});

	//Helps in GC
	args      = null;
	concatArr = null;

	if('gc' in global)
		global.gc();

	return onlyInFirst;
}

module.exports = arrDiff;