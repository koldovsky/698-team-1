(function () {
  const form = document.querySelector('.form');
  function handleSubmit(event) {
    event.preventDefault();
    const status = document.querySelector('.contact-form-status');
    fetch(form.action, {
      method: form.method,
      body: new FormData(event.target),
      headers: {
          'Accept': 'application/json'
      }
    }).then( () => {
      status.innerHTML = "Thanks for your submission!";
      form.reset();
    }).catch( () => {
      status.innerHTML = "Oops! There was a problem submitting your form"
    });
  }
  form.addEventListener("submit", handleSubmit)
})();

document.querySelector('.btn').addEventListener('click', handleSubmit);
 
/*
      
      const name = document.querySelector("#name");
      const phone = document.querySelector("#phone");
      const email = document.querySelector("#email");
      const datepicker = document.querySelector("#datepicker"); 

  document.querySelector('.btn').addEventListener('click', sendEmail);
  
  function sendEmail() {
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "marichkabilo@gmail.com",
    Password : "4CEE9882CC4DE29B1E2ABC899A23D690B83B",
    To : 'marichkapobihushka@gmail.com',
    From : document.querySelector("#email").value,
    Subject : "New Contact Form Enquiry",
    Body : "name: " + document.querySelector("#name").value
           + "<br> email: " + document.querySelector("#email").value
           + "<br> phone: " + document.querySelector("#phone").value
           + "<br> datepicker: " + document.querySelector("#datepicker").value
}).then(
message => {
    return alert(message);
  }
);
}   

/*

  function sendMSG(e) {

  e.preventDefault();


  const name = document.querySelector("#name"),
  const phone = document.querySelector("#phone"),
  const email = document.querySelector("#email"),
  const datepicker = document.querySelector("#datepicker");

  // Function Send e-mail

  Email.send({
    SecureToken : "3b42acaa-1ae5-45b7-b0a8-a0d531fd5200",
    To : 'marichkablo@gmail.com',
    From : email.value,
    Subject : "New Contact Form Enquiry",
    Body : "name: " + document.querySelector("#name").value
    + "<br> email: " + document.querySelector("#email").value
    + "<br> phone: " + document.querySelector("#phone").value
    + "<br> datepicker: " + document.querySelector("#datepicker").value
}).then(
  message => alert(message)
);
}

//event Listener
document.querySelector('.btn').addEventListener('click', sendMSG);
  
/*form.addEventListener('.btn', sendMSG) */




/* old variant */

/*
const name = document.querySelector("#name");
      const phone = document.querySelector("#phone");
      const email = document.querySelector("#email");
      const datepicker = document.querySelector("#datepicker"); 

  document.querySelector('.btn').addEventListener('click', sendEmail);
  
  function sendEmail() {
      Email.send({
      Host : "smtp.elasticemail.com",
      Username : "marichkabilo@gmail.com",
      Password : "4CEE9882CC4DE29B1E2ABC899A23D690B83B",
      To : 'marichkapobihushka@gmail.com',
      From : email.value,
      Subject : "New Contact Form Enquiry",
      Body : "name: " + document.querySelector("#name").value
             + "<br> email: " + document.querySelector("#email").value
             + "<br> phone: " + document.querySelector("#phone").value
             + "<br> datepicker: " + document.querySelector("#datepicker").value
  }).then(
  message => {
      return alert("Your details are successfully submitted");
    }
  );
  } */
