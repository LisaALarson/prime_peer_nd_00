var convert = function(input){
    input = (input + "").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    return "$"+input;
};

module.exports = convert;







