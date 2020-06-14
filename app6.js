// MATH EXPRESSIONS Tasks 6-9.0
// 6-9.1 -task
var a= 10//+prompt("Enter a Number, The Number is ");
document.write("REsult:"+"<br>"+"The Value of a is: "+a+
"<br>"+".............................."+"<br><br>")

document.write("The vlaue of ++a is:"+ ++a +"<br>"+"Now the Value of a is: "+a+"..."+"<br><br>")

document.write("The vlaue of a++ is:"+ a++ +"<br>"+"Now the Value of a is: "+a+"..."+"<br><br>")

document.write("The vlaue of --a is:"+ --a +"<br>"+"Now the Value of a is: "+a+"..."+"<br><br>")

document.write("The vlaue of a-- is:"+ a-- +"<br>"+"Now the Value of a is: "+a+"..."+"<br><br>")

// 6-9.2 -task
// --a means pre decrement and a++ meand preincrement 
// a++ means post increment and a-- means post decrement
var a=2,b=1;
var result= --a - --b + ++b + b--; 
    //here    1 -  0  +  1  + 1 = 3

--a;// here a=0 and b=0
--a - --b; //here( (a=-1) - (b=0) )=-1 
--a - --b + ++b; //here ( (a=-2) - (b=-1) + (b=0) )=-1
--a - --b + ++b + b--; //( (a=-3) - (b=-1) + (b=0) + (b=0) )= -4
document.write("<br><br><br>"+ "a  is "+a +"<br>"+"b is "+b+"<br>"+"result is "+result+"<br><br><br>")

// 6-9.3 -task
var name= prompt("Enter Your Name")
document.write("<br><br><br>"+"Hava a nice day "+name)

// 6-9.4 -task

var num= +prompt("Enter a Number")

if (num==0){
    num=5;
document.write("<br><br><br>"+ "Table of "+num+"<br>"+num+" X 1 ="+num*1+"<br>"+num+" X 2 ="+num*2+"<br>"+num+" X 3 ="+num*3
+"<br>"+num+" X 4 ="+num*4+"<br>"+num+" X 5 ="+num*5+"<br>"+num+" X 6 ="+num*6+"<br>"+num+" X 7 ="+num*7+"<br>"+num+" X 8 ="+num*8+
"<br>"+num+" X 9 ="+num*9+"<br>"+num+" X 10 ="+num*10+"<br><br><br>")
}
else{
document.write("<br><br><br>"+ "Table of "+num+"<br>"+num+" X 1 ="+num*1+"<br>"+num+" X 2 ="+num*2+"<br>"+num+" X 3 ="+num*3
+"<br>"+num+" X 4 ="+num*4+"<br>"+num+" X 5 ="+num*5+"<br>"+num+" X 6 ="+num*6+"<br>"+num+" X 7 ="+num*7+"<br>"+num+" X 8 ="+num*8+
"<br>"+num+" X 9 ="+num*9+"<br>"+num+" X 10 ="+num*10+"<br><br><br>")
}

// 6-9.5 -task
var sub1="English",sub2="Maths",sub3="Urdu";
var total_marks=100;
var obt_Sub1=54,obt_Sub2=54;obt_Sub3=48;
var per1=(obt_Sub1*100)/total_marks, per2=(obt_Sub2*100)/total_marks, per3=(obt_Sub3*100)/total_marks;
var obt=obt_Sub1+obt_Sub2+obt_Sub3;
var per=(obt*100)/300;
document.write("<table><tr><th>"+"Subjects"+"</th><th>"+"Total Marks"+"</th><th>"+"Obtained Marks"+"</th><th>"+"Percentage"+"</th></tr>"+
"<tr><td>"+sub1+"</td><td>"+total_marks+"</td><td>"+obt_Sub1+"</td><td>"+per1+"%"+"</td></tr>"+
"<tr><td>"+sub2+"</td><td>"+total_marks+"</td><td>"+obt_Sub2+"</td><td>"+per2+"%"+"</td></tr>"+
"<tr><td>"+sub3+"</td><td>"+total_marks+"</td><td>"+obt_Sub3+"</td><td>"+per3+"%"+"</td></tr>"+
"<tr><td>"+" "+"</td><td>"+300+"</td><td>"+ obt +"</td><td>"+ per +"%"+"</td></tr>"
+"</table>")

