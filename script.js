// Dark Mode Toggle + Memory
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-dark");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      localStorage.setItem("darkMode", document.body.classList.contains("dark"));
    });
  }

  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
  }
});const grammarList = document.getElementById("grammar-list");

// Replace this with your SheetBest grammar tab link:
const grammarSheetURL = "https://api.sheetbest.com/sheets/de8ae166-5807-41b6-9692-545e599fdc11/tabs/grammar";

fetch(grammarSheetURL)
  .then(res => res.json())
  .then(data => renderGrammarPoints(data))
  .catch(err => {
    grammarList.innerHTML = `<p>Error loading grammar data. Check your link.</p>`;
    console.error("Grammar fetch error:", err);
  });

function renderGrammarPoints(entries) {
  grammarList.innerHTML = "";
  entries.forEach(entry => {
    const card = document.createElement("div");
    card.className = "grammar-card";
    card.innerHTML = `
      <h3>${entry.grammar} <span class="tag">${entry.language}</span></h3>
      <p><strong>Explanation:</strong> ${entry.explanation}</p>
      <p><em>${entry.example}</em> — ${entry.translation}</p>
    `;
    grammarList.appendChild(card);
  });
}

