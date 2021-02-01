function validateName(){
    console.log("any message to check")
   var c=document.getElementById('name').value;
   if(c==""){
       document.getElementById('messageN').innerHTML="**Please enter the name";
       return false;
   }
   /* this code can be used for string validaton but need some changes.
   if( !(c>='a' && c<='z') && !(c>='A' && c<='Z') && !(c==" ") ){
        document.getElementById('messageN').innerHTML="**Please enter the valid input";
        return false;
   }*/
  /* this code works for string validation
   for(i=2; i<c.length; i++)
   {
       ch=c.charAt(i);
       if(!(ch>='a' && ch<='z') && !(ch>='A' && ch<='Z') && !(ch==' '))
       {
           alert('Invalid name');
           return false;
       }
   }
   */
}

function rollno(){
    console.log("any message to check execution")
    var b= document.getElementById("roll").value;
    if(b==""){
        document.getElementById("messageR").innerHTML="**Please enter roll number";
        return false;
    }
    if(isNaN(b)){
        document.getElementById("messageR").innerHTML="**Please enter numeric value";
        return false;
    }
    if(b.length<5){
        document.getElementById("messageR").innerHTML="**Roll number must be of 5 digits";
        return false;
    }
    if(b.length>5){
        document.getElementById("messageR").innerHTML="**Roll number must be of 5 digits";
        return false;
    }
}

function mob(){
    console.log("any message for checking execution")
    var a = document.getElementById("mobile").value;
    if(a==""){
        document.getElementById("messageP").innerHTML="**Please enter mobile number";
        return false;
    }
    if(isNaN(a)){
        document.getElementById("messageP").innerHTML="**Please enter numeric value";
        return false;
    }
    if(a.length<10){
        document.getElementById("messageP").innerHTML="**mobile number must be of 10 digits";
        return false;
    }
    if(a.length>10){
        document.getElementById("messageP").innerHTML="**mobile number must be of 10 digits";
        return false;
    }
}

/*
function mail(){
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
}
*/
