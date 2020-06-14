 //IF…ELSE & ELSE IF STATEMENT,
 //TESTING SET OF CONDITIONS  Tasks 12-13.0

// Tasks 12-13.1
var char= prompt("Enter a single character ")
if( (char=="A") || (char=="B") || (char=="C") || (char=="D") || (char=="E") || (char=="F") 
|| (char=="G") || (char=="H")||(char=="I")||(char=="J")||(char=="K")||(char=="L")||(char=="M")
||(char=="N")||(char=="O")||(char=="P")||(char=="Q")||(char=="R")||(char=="S")||(char=="T")
||(char=="U")||(char=="V")||(char=="W")||(char=="X")||(char=="Y")||(char=="Z")){
    alert("Letter is in upper case")
}
else if((char=="a")||(char=="b")||(char=="c")||(char=="d")||(char=="e")||(char=="f")||
(char=="g")||(char=="h")||(char=="i")||(char=="j")||(char=="k")||(char=="l")||(char=="m")
||(char=="n")||(char=="o")||(char=="p")||(char=="q")||(char=="r")||(char=="s")||(char=="t")
||(char=="u")||(char=="v")||(char=="w")||(char=="x")||(char=="y")||(char=="z")){
    alert("Letter is in lower case")
}
else if((char=="0")||(char=="1")||(char=="2")||(char=="3")||(char=="4")||(char=="5")||(char=="6")
||(char=="7")||(char=="8")||(char=="9")){
    alert("Letter is a Number")
 }
 else
 {
     alert("Letter is other character.")
 }

// Tasks 12-13.2
var a= +prompt("Enter 1st number")
var b=  +prompt("Enter 2nd number")
if ( a == b){
    alert(a+" is equal to "+b)
    
}
else if (b>a){
    alert(b+" is greater")
}
else{
    alert(a+" is greater")
}
// Tasks 12-13.3    
var num=  +prompt("Enter a number")
if ( num == 0){
    alert("Number is Zer0 ")
    
}
else if (num>0){
    alert("Number is positive")
}
else{
    alert("Number is Negative")
}

// Tasks 12-13.4
var vowel= prompt("Enter a sigle character")
if ( (vowel=="a")||(vowel=="e")||(vowel=="i")||(vowel=="o")||(vowel=="u")
   ||(vowel=="A")||(vowel=="E")||(vowel=="I")||(vowel=="O")||(vowel=="U") ){
         alert(true)
     }
     else{
         alert( false )
     }
// Tasks 12-13.5

// Tasks 12-13.6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
alert(greeting)
}
else{
greeting = "Good evening";
alert(greeting)
}
// Tasks 12-13.7
var js="zeeshan"
var pass= prompt("Enter password")
if (pass==js){
    alert("Correct! The password you entered matches the original password")
}
else if(pass!=0){
    alert("You  have entered incorrect password "+pass)
}
else{
    alert("Please Enter password")
}
