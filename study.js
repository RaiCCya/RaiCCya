document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector("#grammar-table tbody");
  const buttons = document.querySelectorAll("[data-language]");

  fetch("https://api.sheetbest.com/sheets/de8ae166-5807-41b6-9692-545e599fdc11/tabs/grammar")
    .then(res => res.json())
    .then(data => {
      displayRows(data, "all");

      buttons.forEach(btn => {
        btn.addEventListener("click", () => {
          document.querySelectorAll("[data-language]").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          const lang = btn.dataset.language;
          displayRows(data, lang);
        });
      });
    });

  function displayRows(data, lang) {
    table.innerHTML = "";
    data.forEach(entry => {
      if (lang === "all" || entry.Language === lang) {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${entry.Grammar || ""}</td>
          <td>${entry.Explanation || ""}</td>
          <td>${entry.Example || ""}</td>
        `;
        table.appendChild(row);
      }
    });
  }
});
