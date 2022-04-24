function fredfunction() { // create a function.
    console.log('fredfunction has run');
}

fredfunction();

function maryfun() {
  x = x + 1;
}

var x = 42;

console.log( "x = " + x );

maryfun();

console.log( "x = " + x ); // print the value of x.

function philfun(n) { // create a function.
  console.log("n = " + n);
}

philfun(x); // call a function and send it the value of x.

// console.log("n = " + n); // print the value of n. Fails because n is out of scope.

function sumfun(y) { // a function that multiplies a value by 7.
  y = y * 7;
  return y // and returns it.
}

var i = sumfun(x); // create a var with the value of whatever comes back when you send sumfun the value of x.

console.log('i = ' + i);

console.log("sumfun(x) returns " + sumfun(x)); // we can use the function call directly.

document.getElementById("my_div").innerHTML = sumfun(x); // We can set a div to contain the result of a function.

function addFunc(a,b) { // This function takes two arguments, adds them together and puts them into c.
  var c = a + b;
  return c;
}

function subtractFunc(a,b) { // This function takes two arguments, adds them together and puts them into c.
  var c = a - b;
  return c;
}

function divideFunc(a,b) { // This function takes two arguments, adds them together and puts them into c.
  var c = a / b;
  return c;
}

function multiplyFunc(a,b) { // This function takes two arguments, adds them together and puts them into c.
  var c = a * b;
  return c;
}

console.log(addFunc(6,12)); // Test the addFunc

// Lets hook it into the html. This sends the values in the fields when you press the test button.

document.getElementById("addButton").onclick = function() { // Here it is again but the javascript changes the strings to numbers.
  x = parseInt(document.getElementById("field01").value);
  y = parseInt(document.getElementById("field02").value);
  document.getElementById("my_div").innerHTML = addFunc(x,y);
}

document.getElementById("subtractButton").onclick = function() { // Here it is again but the javascript changes the strings to numbers.
  x = parseInt(document.getElementById("field01").value);
  y = parseInt(document.getElementById("field02").value);
  document.getElementById("my_div").innerHTML = subtractFunc(x,y);
}

document.getElementById("divideButton").onclick = function() {
x = parseInt(document.getElementById("field01").value);
  y = parseInt(document.getElementById("field02").value);
  document.getElementById("my_div").innerHTML = divideFunc(x,y);
}

document.getElementById("multiplyButton").onclick = function() {
x = parseInt(document.getElementById("field01").value);
  y = parseInt(document.getElementById("field02").value);
  document.getElementById("my_div").innerHTML = multiplyFunc(x,y);
}

//document.getElementById("multiplyButton").onclick = function ()
//y = parseInt(document.getElementById("field02").value);
//document.getElementById("my_div").innerHTML = multiplyFunc(x,y);
//}
