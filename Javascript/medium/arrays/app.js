// Syntax for creating arrays

let shoppingList =['Mutton Briyani','Chicken 65','Coke/pepsi'];

let mixing = [08,'Vishanthan',true];

//  Array index

// console.log(shoppingList);
// console.log(shoppingList[0]);
// console.log(shoppingList[1]);
// console.log(shoppingList[2]);

// // modyfying arrays

// // strings are immutabble and arrays are mutable

// shoppingList[1] = "Grill chicken";
// console.log(shoppingList);
// console.log(shoppingList[1]);
// // add  a new item

// shoppingList[shoppingList.length] = "mojito!!";
// console.log(shoppingList);

// // Array methods

// mixing.push("Shree");
// console.log(mixing);
// let last = mixing.pop();
// // return the value

// console.log(mixing);
// console.log(last);

// // Shift and unshift
// // unsfit adds at first-like stack
// // remove and return the first item

// console.log(shoppingList);
// shoppingList.unshift("I am first");
// console.log(shoppingList);
// let first = shoppingList.shift();
// console.log(shoppingList);
// console.log(first);

// //  follows the order per unshift
// shoppingList.unshift('Chicken rice',"Halfboil");
// console.log(shoppingList);

// concatinating

let meats = ['chest','leg piece','a','b','c',123];
// console.log(mixing.concat(shoppingList));
// console.log(shoppingList.concat(mixing));
// console.log(shoppingList.concat(mixing,meats));

// includes and indexOf

// if(meats.includes('chest')){
//     console.log("Its non veg bro!!!!!!!!!!");
// }
// let ind = meats.indexOf('leg piece');
// console.log(ind);

// // array reverse --> in place - changes the array
// // combine all the value of an array

// console.log(meats);
// meats.reverse();
// console.log(meats);
// console.log(meats.join());
// console.log(meats.join('$'));
// console.log(meats.join(''));
// console.log(meats.join('  '));

//  slice

// let food = meats.slice(0,2);
// console.log(food);
// let copy = meats.slice(); //not pass means return a copy
// console.log(copy);

// console.log(meats);

// // splice.(start_pos, delete_item, replace_itm)

// meats.splice(1,0,'gravy')
// console.log(meats);
// meats.splice(3,2); //from 3 remove 2 elements
// console.log(meats);

// sort cant work in numbers

let people = ['vishanthan','anie','cathrine','bob','aangel','xavier'];
console.log(people.sort());