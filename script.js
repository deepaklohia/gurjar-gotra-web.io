// Fetch data and render table
async function loadData() {
  const response = await fetch('data.json');
  const data = await response.json();
  renderTable(data);
}

// Render table rows from JSON
function renderTable(data) {
  const tbody = document.querySelector("#dataTable tbody");
  tbody.innerHTML = "";

  data.forEach(person => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${person.name}</td>
      <td>${person.email}</td>
      <td>${person.role}</td>
      <td>${person.status}</td>
    `;
    tbody.appendChild(row);
  });
}

// Filter table rows
document.getElementById("searchInput").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const rows = document.querySelectorAll("#dataTable tbody tr");

  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(filter) ? "" : "none";
  });
});

loadData();
