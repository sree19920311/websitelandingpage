function clearErrors(){

    errors=document.getElementsByClassName('fromerror');
    for(let item of errors)
    {
        item.innerHTML="";
    }
}
function seterror(id,error){
//sets error inside tag of id
element=document.getElementById(id);
element.getElementsByClassName('fromerror')[0].innerHTML=error;
}
function validateForm(){
var returnval=true;
clearErrors();
var name=document.forms['myform']["fname"].value;
if(name.length<5){
    seterror("name","Length of name is too short");
    returnval=false;

}

if(name.length==0){
    seterror("name","Enter your name");
    returnval=false;
}
var email=document.forms['myform']["femail"].value;
if(email.length>20){
seterror("email","enter valid email");
returnval=false;
}
var phone=document.forms['myform']["fphone"].value;
if(phone.length!=10){
seterror("phone","enter valid phone number");
returnval=false;
}
var pass=document.forms['myform']["fpass"].value;
if(pass.length<6){

seterror("pass","Password must be atleast 6 charecters");
returnval=false;
}
var cpass=document.forms['myform']["fcpass"].value;
if(cpass!=pass){

seterror("cpass","Password and confirm password should be matched");
returnval=false;
}

return returnval;
}