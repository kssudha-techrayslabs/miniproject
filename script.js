const email = document.getElementById('email').value.trim();
const mobileNumber=document.getElementById('mobileNumber').value.trim();
const password=document.getElementById("password").value;
const password2=document.getElementById("password2").value;

  

document.getElementById("myForm").addEventListener("submit",function(event){
    if(document.getElementById("name").value.trim()===""){
        alert("please enter your name.");
        event.preventDefault();
    }
//  let nemail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
//     if (!nemail.test(email)){
//         alert("please enter valid email id")
//         event.preventDefault();
//     }else{
//       console.log("The email is validate.")
//     }
    

if (email === '') {
  // document.getElementById('email-error').innerText = 'Email address is required';
  // isValid = false;
} else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
  document.getElementById('email-error').innerText = 'Invalid email format';
  isValid = false;
} else {
  document.getElementById('email-error')
}

    let expr=/^(\+91|91|0)[0-9]{9,10}$/;
    if(!expr.test(mobileNumber)){
        console.log("The number is invalid");
        event.preventDefault();
    }else{
      document.getElementById('mobileNumber-error').innerText='Phone number is valid.'
    }


     // function validatePassword(password) {
    //     const passwordRegex = /.{6,}/;
    //     return passwordRegex.test(password);
    //   }

      if (!validatePassword(password)) {
        alert("Password must be at least 6 characters long");
        event.preventDefault();
      }
    
      if (password !== password2) {
        alert("Passwords do not match");
        event.preventDefault();}
      
        if (!document.getElementById("terms").checked) {
          alert("Please check the box to agree to the terms and conditions.");
          event.preventDefault();
        }
    
      
     
});

