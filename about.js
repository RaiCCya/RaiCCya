const blogSection = document.getElementById("blog-section");

// Replace with your actual SheetBest API URL
const blogURL = "https://api.sheetbest.com/sheets/de8ae166-5807-41b6-9692-545e599fdc11/tabs/about";

fetch(blogURL)
  .then(res => res.json())
  .then(data => {
    blogSection.innerHTML = "";
    data.reverse().forEach(entry => {
      const article = document.createElement("article");
      article.className = "blog-entry";
      article.innerHTML = `
        <h2>${entry.title}</h2>
        <p class="blog-date">${entry.date}</p>
        <p>${entry.content}</p>
        <span class="tag">#${entry.tag}</span>
      `;
      blogSection.appendChild(article);
    });
  })
  .catch(err => {
    blogSection.innerHTML = "<p>Could not load entries. Try again later.</p>";
    console.error(err);
  });
