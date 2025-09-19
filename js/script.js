// List of problems
const problems = [
  {
    name: "Two Sum",
    mdPath: "cake/problems/phase_02_arrays_strings/arr_two_sum/statement.md",
  },
  {
    name: "Majority Element",
    mdPath:
      "cake/problems/phase_02_arrays_strings/arr_majority_elements/statement.md",
  },
];

const problemList = document.getElementById("problem-list");
const container = document.getElementById("markdown-container");

// Populate sidebar
problems.forEach((problem) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.textContent = problem.name;
  a.addEventListener("click", () => loadMarkdown(problem.mdPath));
  li.appendChild(a);
  problemList.appendChild(li);
});

// Simple Markdown parser (supports headings, bold, italics, lists, code)
function parseMarkdown(md) {
  let html = md
    // Headings
    .replace(/^###### (.*$)/gim, "<h6>$1</h6>")
    .replace(/^##### (.*$)/gim, "<h5>$1</h5>")
    .replace(/^#### (.*$)/gim, "<h4>$1</h4>")
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    // Bold
    .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>")
    // Italic
    .replace(/\*(.*)\*/gim, "<i>$1</i>")
    // Inline code
    .replace(/`(.*?)`/gim, "<code>$1</code>")
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>')
    // Lists
    .replace(/^\s*\- (.*)$/gim, "<li>$1</li>")
    .replace(/(<li>.*<\/li>)/gim, "<ul>$1</ul>")
    // Paragraphs
    .replace(/\n/g, "<br>");

  return html;
}

// Fetch and render Markdown
function loadMarkdown(path) {
  fetch(path)
    .then((response) => response.text())
    .then((md) => {
      container.innerHTML = parseMarkdown(md);
    })
    .catch((err) => {
      container.innerHTML = `<p style="color:red;">Failed to load Markdown: ${err}</p>`;
    });
}
