// Function to validate the form
function validateForm() {
  // Get form input values
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  // Validate name
  if (username === "") {
    document.getElementById("nameerror").innerHTML = "name is required";
    document.getElementById("username").style.borderColor = "red";
  }

  // Reset previous error messages
  else {
    document.getElementById("nameerror").innerHTML = "";
    document.getElementById("username").style.borderColor = "";
  }

  // Validate email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailerror").innerHTML =
      "Enter a valid email address.";
    document.getElementById("email").style.borderColor = "red";
  } else {
    document.getElementById("emailerror").innerHTML = " ";
    document.getElementById("email").style.borderColor = "";
  }
  // Validate phone number
  var phoneRegex = /^\d{8,12}$/;
  if (!phoneRegex.test(phone)) {
    document.getElementById("phoneerror").innerHTML = "enter valid phone no";
    document.getElementById("phone").style.borderColor = "red";
  } else {
    document.getElementById("phoneerror").innerHTML = " ";
    document.getElementById("phone").style.borderColor = "";
  }
  // Validate subject
  if (subject === "") {
    document.getElementById("subjecterror").innerHTML = "Subject is required.";
    document.getElementById("subject").style.borderColor = "red";
  } else {
    document.getElementById("subjecterror").innerHTML = " ";
    document.getElementById("subject").style.borderColor = "";
  }
  return false;
}
