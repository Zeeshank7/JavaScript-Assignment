//USER INPUT & CONDITIONAL STATEMENT 9-11.0 Tasks
//9-11.1 -tasks
var city=prompt("Enter City Name")
if (city=="karachi"){
    document.write("Welcome to the city of lights"+"<br><br><br>")    
}

//9-11.2 -tasks
var gender=prompt("Type your Gender")
if (gender=="male"){
    document.write("Good Morning Sir"+"<br><br><br>")
}
else if (gender=="female"){
    document.write("Good Morning Ma'am "+"<br><br><br>")
}

//9-11.3 -tasks


//9-11.4 -tasks
var fuel=+prompt("Enter fuel in liters")
if (fuel<0.25){
    document.write("Please refill the fuel in your car!!!")
}

//9-11.5 -tasks
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
    }
//9-11.6 -tasks


//9-11.7 -tasks
var guess_no=5;
var secret_number=+prompt("Guess the Number");
if(guess_no==secret_number){
    document.write("<br><br><br>")
    document.write("Bingo! Correct Answer")
}
else if (secret_number>guess_no){
    document.write("Close Enough to the Correct answer.")
}
else if(secret_number<guess_no){
    document.write("Try a bit harder....")
}

//9-11.8 -tasks
var no= +prompt("Enter a number")
if (no%3==0){
    alert("The number is divisible by 3.")
}

//9-11.9 -tasks
var num= +prompt("Enter a number")
if (num%2==0){
    alert("The number is Even.")
}
else {
    alert("The number is odd.")
}

//9-11.10 -tasks
var T= +prompt("Enter temp:")
if(T>40){
    alert("Its too hot out side.")
}
else if(T>30){
 alert("The weather today is Normal.")
}
else if(T>20){
  alert("Today's weather is cool.")
}
else if(T>10){
  alert("OMG! Today's weather is so cool.")
}


//9-11.11 -tasks
var Firstnum= +prompt("Enter 1st Number ")
var secondnum= +prompt("Enter 2nd Number ")
var Operator = prompt("Enter Operator like... (+,-,*,/,%) ")
if (Operator=="+"){
    document.write(Firstnum + secondnum)
}
else if(Operator=="-"){
    alert(Firstnum - secondnum)
}
else if (Operator=="*"){
    alert(Firstnum * secondnum)
}
else if(Operator=="/"){
    alert(Firstnum / secondnum)
}

else if(Operator=="%"){
    alert(Firstnum % secondnum)
}
else{
    alert("Wrong Operator!!!")
}
