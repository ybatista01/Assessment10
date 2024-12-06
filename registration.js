function validateAndSubmit(event) {
    event.preventDefault(); // Prevent form submission if validation fails

    const errors = validateForm(); // Validate fields and get errors
    displayErrors(errors); // Show error messages

    // If there are no errors, save data to cookies and redirect
    if (Object.keys(errors).length === 0) {
        saveToCookies();
        window.location.href = "confirm.html";
    }
}

// Validate all form fields
function validateForm() {
    const errors = {};
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const passwordVerify = document.getElementById("passwordVerify").value;
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();

    if (!/^[a-zA-Z0-9]+$/.test(username)) {
        errors.username = "Username must contain only letters and numbers.";
    }
    if (password.length < 8) {
        errors.password = "Password must be at least 8 characters long.";
    }
    if (password !== passwordVerify) {
        errors.passwordVerify = "Passwords do not match.";
    }
    if (!firstName) {
        errors.firstName = "First name is required.";
    }
    if (!lastName) {
        errors.lastName = "Last name is required.";
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = "Email must be in the format example@domain.com.";
    }
    if (phoneNumber && !/^\(\d{3}\) \d{3}-\d{4}$/.test(phoneNumber)) {
        errors.phoneNumber = "Phone number must be in the format (123) 456-7890.";
    }

    return errors;
}

// Display error messages next to invalid fields
function displayErrors(errors) {
    document.querySelectorAll(".error").forEach((el) => (el.textContent = "")); // Clear previous errors

    for (const [field, message] of Object.entries(errors)) {
        const errorElement = document.getElementById(`${field}Error`);
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    // Focus on the first field with an error
    const firstErrorField = Object.keys(errors)[0];
    if (firstErrorField) {
        document.getElementById(firstErrorField).focus();
    }
}

// Save form data to cookies
function saveToCookies() {
    const formData = new FormData(document.getElementById("registrationForm"));
    formData.forEach((value, key) => {
        document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; path=/`;
    });
}


