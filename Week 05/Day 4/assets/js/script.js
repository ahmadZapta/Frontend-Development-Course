const navbar = document.querySelector(".nav-bar");
const barsBtn = document.querySelector(".bars");
const crossBtn = document.querySelector(".cross");
const navItems = document.querySelectorAll(".header-links");

function toggleMenu() {
  navbar.classList.toggle("show");
}

barsBtn.addEventListener("click", toggleMenu);

crossBtn.addEventListener("click", toggleMenu);

navItems.forEach((item) =>
  item.addEventListener("click", () => {
    navbar.classList.remove("show");
  })
);

const contactForm = document.getElementById("contactForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const message = document.getElementById("message");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (firstName.value === "") {
    document.getElementById("firstNameError").innerText =
      "First name is required";
  } else {
    document.getElementById("firstNameError").innerText = "";
  }

  if (lastName.value === "") {
    document.getElementById("lastNameError").innerText =
      "Last name is required";
  } else {
    document.getElementById("lastNameError").innerText = "";
  }

  if (email.value === "") {
    document.getElementById("emailError").innerText = "Email is required";
  } else {
    document.getElementById("emailError").innerText = "";
  }

  if (phoneNumber.value === "") {
    document.getElementById("phoneNumberError").innerText =
      "Phone number is required";
  } else {
    document.getElementById("phoneNumberError").innerText = "";
  }

  if (message.value === "") {
    document.getElementById("messageError").innerText = "Message is required";
  } else {
    document.getElementById("messageError").innerText = "";
  }
});

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
