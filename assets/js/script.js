// Fetch JSON and render categories
fetch("/assets/json/problems.json")
  .then((response) => response.json())
  .then((data) => {
    const contentContainer = document.querySelector(".content-container");

    // Extract unique types
    const types = [...new Set(data.map((item) => item.type))];

    // Create category buttons
    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "category-buttons";
    types.forEach((type) => {
      const btn = document.createElement("button");
      btn.textContent = type;
      btn.addEventListener("click", () => {
        // Remove active from all buttons
        document.querySelectorAll(".category-buttons button").forEach((b) => {
          b.classList.remove("active");
        });

        // Add active to the clicked button
        btn.classList.add("active");

        showProblems(type);
      });
      buttonsDiv.appendChild(btn);
    });
    contentContainer.appendChild(buttonsDiv);

    // Create container for problems
    const problemsDiv = document.createElement("div");
    problemsDiv.className = "problems-list";
    contentContainer.appendChild(problemsDiv);

    // Function to render problems
    function showProblems(type) {
      problemsDiv.innerHTML = ""; // Clear previous
      const filtered = data.filter((item) => item.type === type);
      if (filtered.length === 0) {
        problemsDiv.textContent = "No problems found for this category.";
        return;
      }
      const ul = document.createElement("ul");
      filtered.forEach((problem) => {
        const li = document.createElement("li");
        li.textContent = `${problem.code}: ${problem.title}`;
        ul.appendChild(li);
      });
      problemsDiv.appendChild(ul);
    }

    // Show first category by default
    showProblems(types[0]);
  })
  .catch((err) => console.error("Error loading problems JSON:", err));
