function validateEmail(input) {

    var emailTest = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailTest.test(input);
}

function validatePhonenumber(input) {

    var phoneTest = /^\d{8}$/;

    return phoneTest.test(input);
}


function validateForm(event) {
    //console.log("validateForm");
    var firstname = document.getElementById("firstName").value;
    var lastname = document.getElementById("lastName").value;

    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var formError = document.getElementById("form-error");
    var formSuccess = document.getElementById("form-success");

    formError.style.display = "none";
    formSuccess.style.display = "none";


    if (firstname === "") {
        formError.style.display = "block";
        formError.innerHTML = "First name missing";
        event.preventDefault();
        return false;
    }
    if (lastname === "") {
        formError.style.display = "block";
        formError.innerHTML = "Last name missing";
        event.preventDefault();
        return false;
    }

    if (!validatePhonenumber(phoneNumber)) {
        formError.style.display = "block";
        formError.innerHTML = "Phone number is missing or invalid";
        event.preventDefault();
        return false;
    }

    if (!validateEmail(email)) {
        formError.style.display = "block";
        formError.innerHTML = "Email missing or invalid";
        event.preventDefault();
        return false;
    }

    formSuccess.style.display = "block";

    // TODO: Formdata could be sent using ajax. 

    event.preventDefault();
    return false;
}