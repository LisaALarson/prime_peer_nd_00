var randomNumber= function(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

var randomLimits = function (){
    var randomResult = randomNumber(100, 1000000);
    return randomResult;
}

module.exports = randomLimits;