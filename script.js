   

// 🔷 MENU TOGGLE
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// 🔷 CLOSE MENU AFTER CLICK
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

// 🔷 CONTACT FORM VALIDATION
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const inputs = form.querySelectorAll("input, textarea");
  let valid = true;

  inputs.forEach(input => {
    if (input.value.trim() === "") {
      input.style.border = "2px solid red";
      valid = false;
    } else {
      input.style.border = "1px solid #ccc";
    }
  });

  if (valid) {
    alert("Message sent successfully!");
    form.reset();
  }
});

// 🔷 SCROLL ANIMATION
const elements = document.querySelectorAll(
  ".bio-container, .services, .projects, .contact"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach((el, index) => {
  el.classList.add("hidden");

  // delay effect
  el.style.transitionDelay = `${index * 0.2}s`;

  observer.observe(el);
});