function login() {
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;
    var errorMessage = document.getElementById('login-error-message');

  
    var users = JSON.parse(localStorage.getItem('users')) || [];

  
    var user = users.find(u => u.username === username && u.password === password);

    if (user) {
        errorMessage.innerText = 'Login successful!';
        window.location.href = 'index2.html';
   
    } else {
        errorMessage.innerText = 'Invalid username or password';
    }
}


function signup() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var errorMessage = document.getElementById('error-message');

 
    var users = JSON.parse(localStorage.getItem('users')) || [];

    if (password !== confirmPassword) {
        errorMessage.innerText = 'Passwords do not match';
    } else {
    
        var existingUser = users.find(u => u.username === username);

        if (existingUser) {
            errorMessage.innerText = 'Username already exists. Please choose another.';
        } else {
        
            users.push({ username: username, password: password });
            localStorage.setItem('users', JSON.stringify(users));

            errorMessage.innerText = 'Registration successful!';

            window.location.href = "login.html";
        }
    
}

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
    username: '',
    email: '',
    fullName: '',
    address:''
};

localStorage.setItem('userData', JSON.stringify(userData));


}

function logout(){
    window.location.href = "index.html";
}



