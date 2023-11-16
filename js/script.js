var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];

//console.log(stuff);

//log out index items
// stuff.forEach(function (item, index) {
// log out items with even index
// if (index % 2 === 0) {
//   console.log(item);
//  }
// });

//EXERCISE #2

//create function that will remove element from array
//  var removeItem = function (array, item) {
//   var index = array.indexOf(item);

//  if (index === -1) {
//    console.log(`sorry no such item in array`);
//  } else {
//    array.splice(index, 1);
//    console.log(`removing ${item}`);
//  }
//  };

//  removeItem(stuff, "perfume");
//  console.log(stuff);
//  removeItem(stuff, "sunflowers");
//  console.log(stuff);
//  removeItem(stuff, "cars");
//  console.log(stuff);

//EXERCISE# 3

//using filter
var filterStuff = stuff.filter(function (item) {
  return item.includes("s");
});
//console.log(filterStuff);

//using an empty array and for...of loop
var newArray = [];
for (var item of stuff) {
  if (item.includes("s")) {
    newArray.push(item);
  }
}
console.log(newArray);
