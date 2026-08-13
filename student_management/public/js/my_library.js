console.log("my_library.js loaded");

let heading = document.createElement("div");

heading.className = "my-custom-heading";
heading.innerHTML = "Student Management Form";

document.querySelector(".form-layout").prepend(heading);