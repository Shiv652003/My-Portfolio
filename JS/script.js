// const form = document.querySelector("form");
const certifications= document.getElementById("cert-1")
const achievements= document.getElementById("achieve-1")
const projects= document.getElementById("proj-1")

// Select the menu icon and navbar elements
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// Toggle the hamburger menu on click
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x"); // Toggles the hamburger icon to 'X' and back
  navbar.classList.toggle("active"); // Toggles the visibility of the navbar
};

// Highlight active section in the navbar on scroll
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY; // Current scroll position
    let offset = sec.offsetTop - 150; // Section offset with a buffer
    let height = sec.offsetHeight; // Height of the section
    let id = sec.getAttribute("id"); // Section ID

    // Check if the current scroll position is within the section
    if (top >= offset && top < offset + height) {
      // Remove 'active' class from all navbar links
      navlinks.forEach((link) => {
        link.classList.remove("active");
      });

      // Add 'active' class to the current section's navbar link
      const activeLink = document.querySelector(
        `header nav a[href*="${id}"]`
      );
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });

  // Close the navbar when scrolling
  if (navbar.classList.contains("active")) {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  }
};

// function sendEmail() {
//   // used smtpj.com website server and app.elasticemail.com
//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "cosmiccoderff@gmail.com",
//     Password: "65046D93333438D680E071572C750DD4B2AB",
//     To: "shivpratappatell.com",
//     From: "cosmiccoderff@gmail.com",
//     Subject: "This is the subject",
//     Body: "And this is the body",
//   }).then((message) => alert(message));
// }
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   sendEmail();
// });

certifications.addEventListener("click",() =>{
  window.location.href="pages/certifications.html";
});
achievements.addEventListener("click",() =>{
  window.location.href="pages/achievements.html";
});
projects.addEventListener("click",() =>{
  window.location.href="pages/proj-1.html";
});