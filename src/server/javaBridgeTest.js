var java = require("java");

//New instance synched
var list1 = java.newInstanceSync("java.util.ArrayList");

//New instance asynch
console.log("Creating a new array list async...");
java.newInstance("java.util.ArrayList", function(err, list) {
	console.log("A new instance of "+ list.getClassSync().getNameSync() +" was created!");
});

//Syhnch with import
console.log("Creating a new array list from import");
var ArrayList = java.import('java.util.ArrayList');
var list = new ArrayList();
list.addSync('item1');
list.addSync('item2');
list.addSync('item3');
list.addSync('item4');
console.log("The new array list is available");

console.log("list size "+ list.sizeSync());


