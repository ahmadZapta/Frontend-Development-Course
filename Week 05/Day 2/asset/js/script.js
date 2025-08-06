const contactForm = document.getElementById("contactForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const message = document.getElementById("message");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (firstName.value === "") {
    document.getElementById("firstNameError").innerText =
      "First name is required";
  } else if (firstName.value.trim().length < 3) {
    document.getElementById("firstNameError").innerText =
      "Enter atleast 3 characters";
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
    document.getElementById("phoneError").innerText = "Phone number is required";
  } else {
    document.getElementById("phoneError").innerText = "";
  }

  if (message.value === "") {
    document.getElementById("messageError").innerText = "Message is required";
  } else {
    document.getElementById("messageError").innerText = "";
  }
});

// $("#contactForm").validate({
//   rules: {
//     first_name: {
//       required: true,
//       minlength: 3,
//       maxlength: 15,
//     },
//     last_name: {
//       required: true,
//       minlength: 3,
//       maxlength: 15,
//     },
//     message: {
//       required: true,
//       minlength: 50,
//       maxlength: 1000,
//     },
//   },
//   messages: {
//     first_name: {
//       required: "First name is required",
//       minlength: "Enter minimum 3 characters",
//       maxlength: "Maximum 15 characters are allowed",
//     },
//     last_name: {
//       required: "First name is required",
//       minlength: "Enter minimum 3 characters",
//       maxlength: "Maximum 15 characters are allowed",
//     },
//     message: {
//       required: "First name is required",
//       minlength: "Enter minimum 3 characters",
//       maxlength: "Maximum 15 characters are allowed",
//     },
//   },
//   submitHandler: function (form, error) {
//     console.log("form", form);
//     form.submit();
//   },
// });
