function validate() {    
    var fname = document.reg_form.fname;    
    var lname = document.reg_form.lname;    
    var address = document.reg_form.address;    
      
    var email = document.reg_form.email;    
    var mobile = document.reg_form.mobile;    
    var Password = document.reg_form.password;    

    if (fname.value.length <= 0) {    
        alert("Name is required");    
        fname.focus();    
        return false;    
    }    
    if (lname.value.length <= 0) {    
        alert("Last Name is required");    
        lname.focus();    
        return false;    
    }    
    if (address.value.length <= 0) {    
        alert("Address is required");    
        address.focus();    
        return false;    
    }    
      
    if (email.value.length <= 0) {    
        alert("Email Id is required");    
        email.focus();    
        return false;    
    }    
    if (mobile.value.length <= 0) {    
        alert("Mobile number is required");    
        mobile.focus();    
        return false;    
    }    
    if (password.value <=0) {    
        alert("Password is required");    
        password.focus();    
        return false;    
    }    
    return false;    
}    