<script>
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Full Name Validation
    const fullName = document.getElementById('fullName').value;
    if (!/^[A-Za-z ]+$/.test(fullName)) {
        document.getElementById('nameError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('nameError').classList.add('hidden');
    }

    // Email Validation
    const email = document.getElementById('email').value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('emailError').classList.add('hidden');
    }

    // Mobile Number Validation
    const mobile = document.getElementById('mobile').value;
    if (!/^\+91[0-9]{10}$/.test(mobile)) {
        document.getElementById('mobileError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('mobileError').classList.add('hidden');
    }

    // Password Validation
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('passwordError').classList.add('hidden');
    }

    // Confirm Password Validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('confirmPasswordError').classList.add('hidden');
    }

    // Terms Agreement Validation
    const termsChecked = document.getElementById('terms').checked;
    if (!termsChecked) {
        document.getElementById('termsError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('termsError').classList.add('hidden');
    }

    // Form Submission
    if (isValid) {
        alert('Registration successful!');
    }
});
</script>