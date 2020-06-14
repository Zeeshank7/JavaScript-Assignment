//Math Expressions Tasks 5.0
//5.1 -task
var a= 5//+prompt("Enter 1st value")
var b= 3//+prompt("Enter 2nd value")
var c=a+b
document.write("Sum of "+a+" and "+b+" is "+c+"<br><br><br>")
//5.2 -task
var d=a-b
var e=a*b
var f=a/b;
var g=a%b;
document.write("Subtraction of "+a+" and "+b+" is "+d+"<br>"+
"multipication of "+a+" and "+b+" is "+e+"<br>"+
"division of "+a+" and "+b+" is "+f+"<br>"+
"Moduls of "+a+" and "+b+" is "+g+"<br><br> <br>")
//5.3 -task
var x;
document.write("Value after  declartion is"+x+"<br>")
x=5;
document.write("Initial Value: "+ x+"<br>")
++x;
document.write("Value after increment is: "+x+"<br>")
x=x+7;
document.write("Value after addition is: "+x+"<br>")
--x;
document.write("Value after addition is: "+x+"<br>")
var z=x%3;
document.write("The reminder is: "+z+"<br>")

//5.4 -task
var ticket_price=600
document.write("<br><br>"+"Total cost to buy 5 movie tickets is"+5*ticket_price+"PKR"+"<br><br>")
//5.5 -task
document.write("<br>"+ "Table of 4 "+"<br>"+"4 X 1 ="+4*1+"<br>"+"4 X 2 ="+4*2+"<br>"+"4 X 3 ="+4*3
+"<br>"+"4 X 4 ="+4*4+"<br>"+"4 X 5 ="+4*5+"<br>"+"4 X 6 ="+4*6+"<br>"+"4 X 7 ="+4*7+"<br>"+"4 X 8 ="+4*8+
"<br>"+"4 X 9 ="+4*9+"<br>"+"4 X 10 ="+4*10+"<br><br><br>")
//5.6 -task
var c=25;
f=(c*9/5)+32;
document.write(c+"oC is "+f+"oF"+"<br>")
var f=70;
c=(f-32)*5/9;
document.write(f+"oF is "+c+"oC"+"<br><br><br>")
//5.7 -task

var p1=650;
var p2=100;
var o1=3;
var o2=7;
var shipingcharge=100;
var total=(p1*o1)+(p2*o2)+shipingcharge;


document.write("<h1>Shiping Cart</h1><br><br>"+"Price of 1 item is "+p1+"<br>"+
"Quantitty of item 1 is"+o1+"<br>"+"Price of 2 item is "+p2+"<br>"+
"Quantitty of item 2 is"+o2+"<br>"+"Shiping Charges is "+shipingcharge+"<br><br>"+
"total cost of your order is "+total+"<br><br><br><br>")


//5.8 -task
var total_marks=980;
var Obt_marks=804;
var perecnt=(Obt_marks/total_marks)*100;
document.write("<h1>Marks Sheet</h1><br><br>"+"Total Marks:"+total_marks+"<br>"+
"Marks Obatained: "+Obt_marks+"<br>"+"Percentage :"+perecnt+"%"+"<br>"+
"<br><br><br><br>")


// //5.9 -task
// (Exchange rates: 1 US Dollar = 104.80 Pakistani Rupee & 1 Saudi Riyal = 28 Pakistani Rupee)
var us_doller=104.80;
var saudi_riyal=28;
var pkrcurren=(us_doller*10)+(saudi_riyal*25);
document.write("<h1>Currency in PKR</h1><br><br>"+"Total currency in PKR is :"+pkrcurren+
"<br><br><br><br>")

//5.10 -task
var x=31;
x=x+5*10+x/2;
document.write( "task \"5.10\""+"<br>"+" result is "+x+"<br><br><br><br>")

//5.11 -task
var Current_Year=2020;
var Birth_Year=1992;
var Age= Current_Year-Birth_Year;
document.write("<h1>Age calculator</h1><br>"+"Current Year :"+Current_Year+"<br>"+
"Birth Year :"+Birth_Year+"<br>"+"Your age is :"+Age+
"<br><br><br><br>")

//5.12 -task
var radius=20;
const pi=3.142;
var circum=2*pi*radius;
var area=pi*radius*radius;
document.write("<h1>The Geometrizer</h1><br>"+"Radius of Circle:"+radius+"<br>"+
"The Circumference is :"+circum+"<br>"+"The area is :"+area+
"<br><br><br><br>")


//5.13 -task
var snack="chocolate Chip";
var Currnt_Age=15;
var max_age=65;
var skpd=3;
var total_snack=(max_age-Currnt_Age)*skpd;

document.write("<h1>The lifetime supply Calculator</h1><br>"+"Favourite Snack: "+snack+"<br>"+
" Current Age: "+Currnt_Age+"<br>"+"Estimated Maximum age: "+max_age+"<br>"+
"Ammount of Snack per Day: "+skpd+"<br>"+"you will need "+total_snack+" "+snack+" to last you until" 
+" the ripe old age of "+max_age+
"<br><br><br><br>")
