document.addEventListener('DOMContentLoaded', function () {
    const userInfoDiv = document.getElementById('userInfo');

    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem('userData')) || {};

    // Display user information
    userInfoDiv.innerHTML = `
        <p><strong>Username:</strong> ${userData.username || 'N/A'}</p>
        <p><strong>Email:</strong> ${userData.email || 'N/A'}</p>
        <p><strong>Full Name:</strong> ${userData.fullName || 'N/A'}</p>
        <p><strong>Date of Birth:</strong> ${userData.dateOfBirth || 'N/A'}</p>
    `;
});

// Save user data to localStorage
const userData = {
    username: 'john_doe',
    email: 'john.doe@example.com',
    fullName: 'John Doe',
    dateOfBirth: '1990-01-01',
};

localStorage.setItem('userData', JSON.stringify(userData));
