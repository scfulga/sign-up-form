const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const form = document.getElementById("form");

function checkPassword(){ 
    form.addEventListener("submit", function(event){
        if(password.value !== cpassword.value){ 
            event.preventDefault();
        }
    })

    form.addEventListener('keyup', function() {
        if(password.value !== cpassword.value){
            password.style.borderColor = '#eb6f92';
            cpassword.style.borderColor = '#eb6f92';
        }
        else {
            password.style.borderColor = '#9ccfd8';
            cpassword.style.borderColor = ' #9ccfd8';
        }
    });
}

checkPassword();

