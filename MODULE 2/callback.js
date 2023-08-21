function greet(name) {console.log("Hello, " + name + "!");
}
function

sayHelloWithDelay(callback) {setTimeout(function() {callback("Josh");
}, 2000);
}
sayHelloWithDelay(greet); // Output: Hello, John!