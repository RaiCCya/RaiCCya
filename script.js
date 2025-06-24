// Dark Mode Toggle with saved preference

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggle-dark");
  const body = document.body;

  // Load saved mode from localStorage or default to light
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark");
  }

  toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });
});
