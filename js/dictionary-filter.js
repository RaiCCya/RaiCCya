// Filters dictionary table entries based on button clicked

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("#dictionary-table tbody");
  const filterButtons = document.querySelectorAll(".filter-buttons button");

  // Function to render entries
  function renderEntries(type = "all") {
    tableBody.innerHTML = "";

    const filtered = type === "all" ? dictionaryEntries : dictionaryEntries.filter(e => e.type === type);

    filtered.forEach(entry => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${entry.word}</td>
        <td>${capitalize(entry.type)}</td>
        <td>${entry.meaning}</td>
        <td>${entry.example}</td>
      `;
      tableBody.appendChild(row);
    });
  }

  // Capitalize helper
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Initial render all
  renderEntries();

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderEntries(btn.dataset.type);
    });
  });
});
