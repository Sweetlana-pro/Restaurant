
function validate() {
    
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var phone = document.forms["contactForm"]["phoneNumber"].value;
    var phoneno = "/^[0123456789.-]+$/";
    var mail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    

    if (name != "") {
        document.getElementById("nameInfo").innerText = "Name is ok";
        return false;
    }
    

    if (phone.match(phoneno)) {
        document.getElementById("phoneInfo").innerText = "Phone is ok";
        return false;
    } else {
        alert("Invalid input");
    }
    
    if (email.match(mail)) {
        document.getElementById("emailInfo").innerHTML = "Email is ok";
        return true;
    } else {
        alert("incorrect");
        return false;
    }
    
}