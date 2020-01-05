// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

   document.getElementById("CloseButton").onclick = function () {
        location.href = "index.html";
    };
    document.getElementById("Sign").onclick = function () {
      var elem = document.getElementById("myBar");   
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width == 100) {
      location.href = "page.html";
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%';  

    }
  }
    };


    function checkForm(form)
{
    if(form.username.value == "") {
        alert("Error: Username cannot be blank!");
          form.username.focus();
          return false;
    }
    // regular expression to match required string format
    re = /^\w+$/;
    if(!re.test(form.username.value)) {
        alert("Error: Username must contain only letters, numbers and underscores!");
          form.username.focus();
          return false;
    }
    //compare both password field value 
    if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
          if(form.pwd1.value.length < 6) {
            alert("Error: Password must contain at least six characters!");
            form.pwd1.focus();
            return false;
        }
      //compare username and password if both are same generate error 
        if(form.pwd1.value == form.username.value) {
            alert("Error: Password must be different from Username!");
            form.pwd1.focus();
            return false;
        }
          // regular expression to match required at least one numeric value in passord field
        re = /[0-9]/;
        if(!re.test(form.pwd1.value)) {
            alert("Error: password must contain at least one number (0-9)!");
            form.pwd1.focus();
            return false;
        }
          // regular expression to match required at least one lowercase letter in passord field
        re = /[a-z]/;
        if(!re.test(form.pwd1.value)) {
            alert("Error: password must contain at least one lowercase letter (a-z)!");
            form.pwd1.focus();
            return false;
        }
          // regular expression to match required at least one uppercase letter in passord field
        re = /[A-Z]/;
        if(!re.test(form.pwd1.value)) {
            alert("Error: password must contain at least one uppercase letter (A-Z)!");
            form.pwd1.focus();
            return false;
        }
    } else {
          alert("Error: Please check that you've entered and confirmed your password!");
          form.pwd1.focus();
          return false;
    }
    alert("You entered a valid password: " + form.pwd1.value);
    return location.href = "page.html";
}
