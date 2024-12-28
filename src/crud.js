const form = document.getElementById('crudForm');
const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
let editingIndex = -1;

// Add or Update Data
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if (editingIndex === -1) {
        // Create
        const newRow = dataTable.insertRow();
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${age}</td>
            <td><button onclick="editRow(this)">Edit</button> <button onclick="deleteRow(this)">Delete</button></td>`;
    } else {
        // Update
        const row = dataTable.rows[editingIndex];
        row.cells[0].innerText = name;
        row.cells[1].innerText = age;
        editingIndex = -1; // Reset editing index
    }

    form.reset();
});

// Edit Row
function editRow(button) {
    editingIndex = button.parentNode.parentNode.rowIndex - 1; // Adjust for header row
    const row = dataTable.rows[editingIndex];

    document.getElementById('name').value = row.cells[0].innerText;
    document.getElementById('age').value = row.cells[1].innerText;
}

// Delete Row
function deleteRow(button) {
    const rowIndex = button.parentNode.parentNode.rowIndex - 1; // Adjust for header row
    dataTable.deleteRow(rowIndex);
}
