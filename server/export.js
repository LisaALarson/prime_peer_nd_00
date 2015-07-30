var random = require('./random');
var convert = require('./convert');

var message = function(){
    var combineResult = combine();
    return "\nAccount balance: \n" + combineResult+"\n\n";
};

var combine = function(){
    var randomResult = random();
    var number = convert(randomResult);
    return number;
};



module.exports = message;