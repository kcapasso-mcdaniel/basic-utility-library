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
function stringLength(input1, input2) {
   input1 = String(input1);
   input2 = Length(input2);
   input1 + input2;
   return input1;
}
