
      const name = document.querySelector("#name");
      const phone = document.querySelector("#phone");
      const email = document.querySelector("#email");
      const datepicker = document.querySelector("#datepicker"); 

  document.querySelector('.btn').addEventListener('click', sendEmail);
  
  function sendEmail() {
      Email.send({
      Host : "smtp.elasticemail.com",
      Username : "maria@useo.pl",
      Password : "Recruit@USEO22!",
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

