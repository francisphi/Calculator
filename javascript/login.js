   function login(event) {
      

         let login=document.getElementById("email").value;
               let password=document.getElementById("password").value;

               if((login==="admin") && (password==="admin")){
              window.location.href="calculator.html";
                 
                  
               }
               else if((login!=="admin")&& ( password==="admin"))
               {
                  Swal.fire({
                 title: "Error!",
                 text: "Incorrect UserName!. Plss Try Agian." ,
                 icon: "error"
});
               }
               else if((login==="admin")&& ( password!=="admin"))
               {
                 Swal.fire({
                 title: "Error!",
                 text: "Incorrect Password!. Plss Try Again",
                 icon: "error"
});
               }
               
               else
               {
                 Swal.fire({
                 title: "Error!",
                 text: "Incorrect UserName & Password!. Plss Try Again",
                 icon: "error"
});
               }

               event.preventDefault();
            }
            

function PasswordVisibility() { 
const passwordInput = document.getElementById('password'); 
const eyeIcon = document.querySelector('.password-toggle i');
 if (passwordInput.type === 'password') { 
 passwordInput.type = 'text';
  eyeIcon.classList.remove('fa-eye-slash'); 
 eyeIcon.classList.add('fa-eye'); } 
 else { 
 passwordInput.type = 'password';
  eyeIcon.classList.remove('fa-eye');
   eyeIcon.classList.add('fa-eye-slash');

 } }
