const doctors = [
    {
        name: "Dr. Smith",
        specialty: "Cardiology",
        patients: ["John Doe", "Alice Johnson"]
    },
    {
        name: "Dr. Lee",
        specialty: "Pediatrics",
        patients: ["Emily White"]
    },
    {
        name: "Dr. Patel",
        specialty: "Neurology",
        patients: ["Michael Brown"]
    },
];

function displayDoctors() {
    const doctorList = document.getElementById('doctor_list');
    doctorList.innerHTML = '';
    
    doctors.forEach(doctor => {
        const doctorItem = document.createElement('div');
        doctorItem.classList.add('doctor_item');
        doctorItem.innerHTML = `
            <h3>${doctor.name} (${doctor.specialty})</h3>
            <h4>Patients:</h4>
            <ul>
                ${doctor.patients.map(patient => `<li>${patient}</li>`).join('')}
            </ul>
        `;
        doctorList.appendChild(doctorItem);
    });
}

// Initially display all doctors
document.addEventListener('DOMContentLoaded', displayDoctors);
