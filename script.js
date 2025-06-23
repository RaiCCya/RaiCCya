const toggle = document.getElementById("toggle-dark");

// On page load, check saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});
function setupFilters(entries) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderDictionary(entries, btn.getAttribute('data-type'));
    });
  });
}
function renderDictionary(entries, type = "all") {
  const filtered = type === "all"
    ? entries
    : entries.filter(e => e.type.toLowerCase() === type);
  dictionary.innerHTML = "";
  filtered.forEach(entry => {
    const card = document.createElement("div");
    card.className = "entry";
    card.innerHTML = `
      <div class="header">${entry.japanese} — ${entry.filipino}</div>
      <div class="sub">${entry.english}</div>
      <div class="meaning">Kanji: ${entry.japanese.split(" ")[0]}</div>
      <div class="grammar">${entry.grammar}</div>
      <div class="example">${entry.example_jp} — ${entry.example_en}</div>
    `;
    dictionary.appendChild(card);
  });
}
