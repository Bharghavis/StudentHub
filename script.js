// Function to show a specific section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');

    document.getElementById(sectionId).style.display = 'block';
    document.querySelector('.landing-page').style.display = 'none';

    // Smooth scroll to the section
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Function to navigate back to the landing page
function backToPortal() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');

    document.querySelector('.landing-page').style.display = 'flex';

    // Smooth scroll to the top of the landing page
    document.querySelector('.landing-page').scrollIntoView({ behavior: 'smooth' });
}

// Get references to DOM elements
const addStudentBtn = document.getElementById('add-student-btn');
const backToPortalBtn = document.getElementById('back-to-portal');
const studentDetailsForm = document.getElementById('student-details-form');

// Event listener for Add Student Details button
addStudentBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior if using <a> tag

    // Call showSection function to display the student form section
    showSection('student-form');
});

// Event listener for Back to portal button
backToPortalBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior if using <a> tag

    // Call backToPortal function to go back to the landing page
    backToPortal();
});

// Event listener for form submission
studentDetailsForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form data
    const formData = new FormData(studentDetailsForm);
    const firstName = formData.get('first-name');
    const lastName = formData.get('last-name');
    const studentId = formData.get('student-id');
    const course = formData.get('course');
    const email = formData.get('email');
    const phone = formData.get('phone');

    // Perform further actions (e.g., add data to list, display confirmation message, etc.)
    console.log('Form submitted with data:');
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Student ID: ${studentId}`);
    console.log(`Course: ${course}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);

    // Clear form fields after submission
    studentDetailsForm.reset();
});
