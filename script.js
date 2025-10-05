document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-up, .scale-in, .reveal, .service-card").forEach((el) => observer.observe(el));

  // Contact form
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get("name");
      const email = data.get("email");
      const message = data.get("message");
      if (!name || !email || !message) {
        status.textContent = "Please fill in all fields.";
        return;
      }
      status.textContent = "Sending...";
      setTimeout(() => {
        status.textContent = "Message sent successfully!";
        form.reset();
      }, 800);
    });
  }
});
