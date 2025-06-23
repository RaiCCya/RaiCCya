const sheetURL = "https://sheet.best/api/sheets/de8ae166-5807-41b6-9692-545e599fdc11/tabs/study"; // Replace with your link
const studySection = document.getElementById("study-entries");
const filterButtons = document.querySelectorAll(".filter");
let entries = [];

fetch(sheetURL)
  .then(res => res.json())
  .then(data => {
    entries = data;
    displayEntries(entries);
  });

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter.active").classList.remove("active");
    btn.classList.add("active");
    const type = btn.dataset.filter;
    if (type === "all") {
      displayEntries(entries);
    } else {
      displayEntries(entries.filter(e => e.category === type));
    }
  });
});

function displayEntries(data) {
  studySection.innerHTML = "";
  if (data.length === 0) {
    studySection.innerHTML = "<p>No notes found for this category.</p>";
    return;
  }

  data.forEach(entry => {
    const card = document.createElement("div");
    card.className = "study-card";
    card.setAttribute("data-category", entry.category);
    card.innerHTML = `
      <h3>${entry.title}</h3>
      <p><strong>${entry.category}</strong> – ${entry.content}</p>
      <p><em>${entry.example}</em><br><span class="translation">${entry.translation}</span></p>
    `;
    studySection.appendChild(card);
  });
}
