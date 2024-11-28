// Dummy data for patients
let patients = [
    { id: 1, name: "John Doe", age: 35, gender: "Male", phoneNumber: "1234567890", description: "Patient description 1", tests: ["Test A", "Test B"], prescriptions: ["Medicine 1", "Medicine 2"], appointments: ["2024-12-01", "2024-12-10"] },
    { id: 2, name: "Jane Smith", age: 28, gender: "Female", phoneNumber: "9876543210", description: "Patient description 2", tests: ["Test C", "Test D"], prescriptions: ["Medicine 3", "Medicine 4"], appointments: ["2024-12-05", "2024-12-12"] }
];

// Display the list of patients with only the name
function displayPatients() {
    const patientLog = document.getElementById('patient_log');
    patientLog.innerHTML = patients.map(patient => `
        <div class="patient_item">
            <h4>${patient.name}</h4>
            <button onclick="viewProfile(${patient.id})">View Profile</button>
        </div>
    `).join('');
}

// Display the profile of the selected patient
function viewProfile(patientId) {
    const patient = patients.find(p => p.id === patientId);
    const profileContent = document.getElementById('profile_content');

    profileContent.innerHTML = `
        <h2>${patient.name}</h2>
        <p>Age: ${patient.age}</p>
        <p>Gender: ${patient.gender}</p>
        <p>Phone: ${patient.phoneNumber}</p>
        <p>Description: ${patient.description}</p>
        <h3>Tests</h3>
        <ul>
            ${patient.tests.map(test => `<li>${test}</li>`).join('')}
        </ul>
        <h3>Prescriptions</h3>
        <ul>
            ${patient.prescriptions.map(prescription => `<li>${prescription}</li>`).join('')}
        </ul>
        <h3>Future Appointments</h3>
        <ul>
            ${patient.appointments.map(appointment => `<li>${appointment}</li>`).join('')}
        </ul>
    `;
    
    // Show the profile panel
    document.getElementById('profile_panel').classList.remove('hidden');
}

// Close the profile panel
function closeProfile() {
    document.getElementById('profile_panel').classList.add('hidden');
}

// Search patients by name
function searchPatient() {
    const searchQuery = document.getElementById('search_box').value.toLowerCase();
    const filteredPatients = patients.filter(patient => patient.name.toLowerCase().includes(searchQuery));
    
    // Display the filtered patients
    const patientLog = document.getElementById('patient_log');
    patientLog.innerHTML = filteredPatients.map(patient => `
        <div class="patient_item">
            <h4>${patient.name}</h4>
            <button onclick="viewProfile(${patient.id})">View Profile</button>
        </div>
    `).join('');
}

// Initially display all patients
document.addEventListener('DOMContentLoaded', displayPatients);
