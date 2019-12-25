hello = function(){
    console.log("Hello World!");
}

hello();
PREFIX = "!";
let message = "!Test"
console.log(PREFIX.length);
var args = message.substring(PREFIX.length, message.length).split(" ");
console.log(args);
