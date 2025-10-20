let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
      strings: ['a Computer Engineering student', 'Passionate Problem Solver', 'Lover of tech'],
      typeSpeed: 50,
      backSpeed: 80,
      backDelay: 1200,
      loop: true,

    });


/// Initialize EmailJS
emailjs.init("UQbvnaEPqfwsesVC9"); 

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_j414xbu", "template_wxu46wd", form)
      .then(() => {
        alert("Message sent successfully!");
        form.reset(); // Clear form after success
      })
      .catch((error) => {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
      });
  });
});