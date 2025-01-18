const form = document.querySelector("form");

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    // if(top >= offset && top < offset + height){
    //     navlinks.forEach(links => {
    //         links.classList.remove('active');
    //         document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
    //     })
    // }

    if (top >= offset && top < offset + height) {
      navlinks.forEach((link) => {
        link.classList.remove("active");
      });
      const activeLink = document.querySelector(
        'header nav a[href*="' + id + '"]'
      );
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

function sendEmail() {
  // used smtpj.com website server and app.elasticemail.com
  Email.send({
    Host: "smtp.mailendo.com",
    Username: "cosmiccoderff@gmail.com",
    Password: "65046D93333438D680E071572C750DD4B2AB",
    To: "cosmiccoderff@gmail.com",
    From: "cosmiccoderff@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
