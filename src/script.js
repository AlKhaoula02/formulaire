let form = document.querySelector("#formulaire");
let nom = document.getElementById('nom');
let email = document.getElementById('email');
let message = document.getElementById('message');

form.addEventListener("submit", function(e){
  e.preventDefault();
  
  
if(!nom.value.match(/^[a-zA-Z ]+$/))
  {
   alert("tapez un  nom valable");
   nom.style.backgroundColor = "red";
  }

  else if (!email.value.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) 
  {
  alert("Tapez un email valable");
  email.style.backgroundColor = "red";
  }
    else if (!message.value.match(/^[a-zA-Z ]+$/)) 
    {
    alert("Pensez à taper un message !");
    message.style.backgroundColor = "red";
    }
    
      else if ((nom.value.match(/^[a-zA-Z ]+$/))&&(email.value.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))&&(message.value.match(/^[a-zA-Z ]+$/)))
        {
          form.submit();
          console.log("form submitted");
        }
  else
     {
       alert("Veuillez remplir correctement tous les champs");
      };
    });     