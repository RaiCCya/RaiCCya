// Apply dark mode on load if saved
document.addEventListener("DOMContentLoaded", () => {
  const isDark = localStorage.getItem("darkMode") === "true";
  document.body.classList.toggle("dark", isDark);
});

// Toggle dark mode and save preference
document.getElementById("toggle-dark").addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", isDark);
});
