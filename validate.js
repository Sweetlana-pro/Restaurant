
var phoneNumber = document.getElementById("phoneNumber");
var x = document.forms["contactForm"]["name"].value;
var text;
function validate() {
    if (x == "") {
        text = "Name must be filled out";
    } else {
        text = "Information is valid";
    }
    document.getElementById("demo").innerHTML = text;    
    
}