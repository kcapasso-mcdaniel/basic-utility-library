function add(input1, input2) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   return input1 + input2;
}
function subtract(input1, input2) {
   // A1: any Javascript value
   // A2: any Javascript value
   // R: a single JavaScript value
   return input1 - input2;
}
function multiply(input1, input2) {
   // A1: any Javascript value
   // A2: any Javascript value
   // R: a single JavaScript value
   return input1 * input2;
}
function divide(input1, input2) {
   // A1: any Javascript value
   // A2: any Javascript value
   // R: a single JavaScript value
   return input1 / input2;
}
function increment(input) {
   // A1: any Javascript numeric value
   // R: a single JavaScript numeric value plus one
   input++;
   return input;
}
function decrement(input) {
   // A1: any Javascript numeric value
   // R: a single Javascript numeric value minus one
   input--;
   return input;
}
function decimalMultiply(input1, input2) {
   // A1: any Javascript numeric decimal value
   // A2: any Javascript numeric decimal value
   // R: a single JavaScript numeric decimal value
   return input1 * input2;
}
function decimalDivide(input1, input2) {
   // A1: any Javascript numeric decimal value
   // A2: any Javascript numeric decimal value
   // R: a single JavaScript numeric decimal value
   return input1 / input2;
}
function concatenatePlus(input1, input2) {
   // A1: indicates input1 is the beginning of a string
   // R: returns two strings together with proper spacing
   input1 = String(input1);
   return input1 + " " + input2;
}
function concatenatePlusEquals(input1, input2) {
   // A1: indicates input1 is the beginning of a string
   // A2: uses the plusequals operator to combine the strings
   // R: one line with both strings
   input1 = String(input1);
   input1 += " " + input2;
   return input1;
}
function concatenateVariable(input1, input2, input3) {
   // A1: indicates input1 is the beginning of a string
   // A2: input1 and input2 concatenate
   // R: input1 and input1 concatenated with an additional variable
   input1 = String(input1);
   return input1 + " " + input2 + " " + input3;
}
function stringLength(input) {
   // A1: any JavaScript string
   // R: the length of the string
   return input.length;
}
function findFirstCharacter(input) {
   // A1: any JavaScript string !important! JavaScripts index begins at 0
   // R: the first character of string
   return input[0];
}
function findNthCharacter(input1, input2) {
   // A1: any Javascript string
   // A2: a number used to find a index location in the string
   // R: the letter associated with the number within the string
   input1 = String(input1);
   input2 = Number(input2);
   return input1[input2 - 0];
}
function findLastCharacter(input) {
   // A1: any JavaScript string !important! JavaScripts index begins at 0
   // R: the last character of the string
   return input[input.length - 1];
}
function findNthLastCharacter(input) {
   // A1: any Javascript string
   // R: the nth to last letter of the string
   // This is alternate code that I believe is more accurate
   // input1 = String(input1);
   // input2 = Number(input2);
   // return input1[input.length - input2];
   return input[input.length - 3];
}
function push(array, item) {
   // A1: new Array is pushed to the end of the array
   // R: array now has the new array at the end
   array.push(item);
   console.log(array);
   return array;
}
function pop(array) {
   // A1: target the end of the array to pop off
   // R: array with end popped off
   array.pop();
   console.log(array);
   return array;
}
function shift(array) {
   // A1: remove first element of the array
   // R: new array with new first element
   array.shift();
   console.log(array);
   return array;
}
function unshift(array, addedValue) {
   // A1: the array
   // A2: the value we want to add at the beginning of the array
   // R: new array with new first element
   array.unshift(addedValue);
   console.log(array);
   return array;
}

var shoppingList = [];

function makeshoppingList(item, quantity) {
   // A1: a new item and quantity begins the shopping list(var shopping list declared above=array)
   // A2: each new item and quantity is added to the end of the list
   // R: a shopping list with items and quantities
   shoppingList.push([item, quantity]);
   console.log(shoppingList);
   return shoppingList;
}

function nextInLine(arr, item) {
   // A1: a new item is pushed to the end of the array
   // A2: the first item in the array is shifted off the array
   // R: a new array less the original first element
   arr.push(item);
   console.log(arr);
   arr.shift();
   return arr;
}
