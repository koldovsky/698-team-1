
   /*(function () {
   document.addEventListener('DOMContentLoaded', function () {
  
      const name = document.querySelector("#name");
      const phone = document.querySelector("#phone");
      const email = document.querySelector("#email");
      const datepicker = document.querySelector("#datepicker"); */
  
  function sendEmail() {
      Email.send({
      Host : "smtp.gmail.com",
      Username : "marichkabilo@gmail.com",
      Password : "MariaENTERP2019",
      To : 'marichkapobihushka@gmail.com',
      From : document.querySelector("#email").value,
      Subject : "New Contact Form Enquiry",
      Body : "name: " + document.querySelector("#name").value
             + "<br> email: " + document.querySelector("#email").value
             + "<br> phone: " + document.querySelector("#phone").value
             + "<br> datepicker: " + document.querySelector("#datepicker").value
  }).then(
  message => {
      return alert("Message sent successfully");
    }
  );
  }
