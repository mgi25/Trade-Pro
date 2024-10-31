// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Signup function
function signup(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get user inputs
    const fullName = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Store user details in localStorage (simulate saving to database)
    const user = {
        fullName: fullName,
        email: email,
        password: password
    };

    // Save user to localStorage
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isLoggedIn', true);

    // Redirect to main page after signup
    window.location.href = 'index.html';
}

// Login function
function login(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get user inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if credentials match
    if (storedUser && storedUser.email === email && storedUser.password === password) {
        localStorage.setItem('isLoggedIn', true); // Mark user as logged in
        // Redirect to main page after login
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password.');
    }
}

// Access control for subscription plans
function checkAccessToPlans(planPage) {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        alert('Please log in or sign up to access this plan.');
        window.location.href = 'login.html'; // Redirect to login page
    } else {
        window.location.href = planPage; // Allow access to the plan page if logged in
    }
}

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    alert('You have been logged out.');
    window.location.href = 'index.html';
}

// Check if user is logged in and show/hide relevant options
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
        document.getElementById('login-btn').style.display = 'none'; // Hide login button
        document.getElementById('logout-btn').style.display = 'block'; // Show logout button
    } else {
        document.getElementById('logout-btn').style.display = 'none'; // Hide logout button
        document.getElementById('login-btn').style.display = 'block'; // Show login button
    }
}

// Initialize the login status check on page load
document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us!');
});

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add client-side validation here
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    if (!name || !email || !cardNumber || !expiryDate || !cvv) {
        alert('Please fill in all fields.');
        return;
    }

    // Add more validation as needed

    alert('Payment submitted successfully!');
});

// new

// profile 

document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const activePlan = localStorage.getItem('selectedPlan');

    if (isLoggedIn && activePlan) {
        document.getElementById('profile-link').classList.remove('hidden');
        document.getElementById('logout-btn').classList.remove('hidden');
        document.getElementById('login-btn').classList.add('hidden');
    } else {
        document.getElementById('profile-link').classList.add('hidden');
        document.getElementById('logout-btn').classList.add('hidden');
        document.getElementById('login-btn').classList.remove('hidden');
    }
});

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('selectedPlan');
    localStorage.removeItem('selectedPlanPrice');
    localStorage.removeItem('selectedPlanDetails');
    window.location.href = 'index.html';
}
// Plan selection function
function selectPlan(planName, planPrice, planDetails) {
    localStorage.setItem('selectedPlan', planName);
    localStorage.setItem('selectedPlanPrice', planPrice);
    localStorage.setItem('selectedPlanDetails', planDetails);
    alert(`You have selected the ${planName} plan.`);
}

// Example usage: Call this function when a user selects a plan
document.querySelectorAll('.plan-select-btn').forEach(button => {
    button.addEventListener('click', function() {
        const planName = this.dataset.planName;
        const planPrice = this.dataset.planPrice;
        const planDetails = this.dataset.planDetails;
        selectPlan(planName, planPrice, planDetails);
    });
});
