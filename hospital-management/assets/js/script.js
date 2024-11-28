let patients = JSON.parse(localStorage.getItem('patients')) || [];

function toggleForm() {
    const form = document.getElementById('patient_form');
    form.style.display = form.style.display === 'none' || form.style.display === '' ? 'block' : 'none';
}

function addPatient() {
    const name = document.getElementById('Name').value.trim();
    const age = parseInt(document.getElementById('Age').value.trim());
    const gender = document.getElementById('Gender').value;
    const phoneNumber = document.getElementById('Phone_Number').value.trim();
    const description = document.getElementById('Description').value.trim();

    if (!name || !age || !gender || !phoneNumber || !description) {
        alert('All fields are required.');
        return;
    }

    patients.push({ name, age, gender, phoneNumber, description });
    localStorage.setItem('patients', JSON.stringify(patients));
    displayPatients();  // Ensure the patients are displayed after adding a new one
    toggleForm();
}

function displayPatients(filter = '') {
    const patientLog = document.getElementById('patient_log');
    const filteredPatients = patients.filter(patient => 
        patient.name.toLowerCase().includes(filter.toLowerCase())
    );

    patientLog.innerHTML = filteredPatients.map((p, index) => `
        <div class="patient_card">
            <h4>${p.name}</h4>
            <p>Age: ${p.age}</p>
            <p>Gender: ${p.gender}</p>
            <p>Phone: ${p.phoneNumber}</p>
            <p>${p.description}</p>
            <button onclick="deletePatient(${index})">Delete</button>
        </div>
    `).join('');
}

function deletePatient(index) {
    patients.splice(index, 1);
    localStorage.setItem('patients', JSON.stringify(patients));
    displayPatients();  // Refresh the list after deleting a patient
}

function clearAllPatients() {
    if (confirm('Delete all patients?')) {
        patients = [];
        localStorage.setItem('patients', JSON.stringify(patients));
        displayPatients();  // Clear the list after deleting all patients
    }
}

function sortPatients() {
    const sortCriteria = document.getElementById('sort_criteria').value;
    const sortOrder = document.getElementById('sort_order').value;

    patients.sort((a, b) => {
        if (sortCriteria === 'name') {
            return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        } else if (sortCriteria === 'age') {
            return sortOrder === 'asc' ? a.age - b.age : b.age - a.age;
        } else if (sortCriteria === 'gender') {
            return sortOrder === 'asc' ? a.gender.localeCompare(b.gender) : b.gender.localeCompare(a.gender);
        }
    });
    displayPatients();  // Display the patients after sorting
}

function searchPatients() {
    const searchTerm = document.getElementById('search_box').value.trim();
    displayPatients(searchTerm);  // Filter patients as you type
}

document.addEventListener('DOMContentLoaded', () => {
    displayPatients();  // Display the patients initially on page load
});
