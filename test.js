var test = {
	pow: function (a, b) {
		 var result = a;

		 for (var i = 1; i < b; i++) {
		 	result *=a;
		 }

		 return result;
	}
}

try{
    module.exports = test;
}catch(e){}




