document.addEventListener("DOMContentLoaded", function () {
    let fieldsModified = false; // Flag to track if fields have been modified

    // Select all the divs you want to trigger the script
    const signInButtons = document.querySelectorAll('.sign-in, .continue-with, .continue-with-google, .continue-with-apple, .user-email, .user-password');

    // Add click event listener to each div
    signInButtons.forEach(function(signInButton) {
        signInButton.addEventListener('click', function () {
            const usernameEmailField = document.querySelector('.user-email .text-wrapper-2');
            const passwordField = document.querySelector('.user-password .text-wrapper-2');

            // Change username or email text if not already changed
            if (!fieldsModified && usernameEmailField.textContent === 'username or email') {
                usernameEmailField.textContent = 'chrisrock@gmail.com';
            }

            // Change password text if not already changed
            if (!fieldsModified && passwordField.textContent === 'password') {
                passwordField.textContent = '************';
            }

            // If fields were modified once, navigate to home-page.html on second click
            if (fieldsModified) {
                window.location.href = 'home.html';
            } else {
                // Change user-email background color
                const userEmailDiv = document.querySelector('.user-email');
                userEmailDiv.style.backgroundColor = 'rgba(113, 113, 113, 0.447)';

                // Change password background color
                const userPasswordDiv = document.querySelector('.login .user-password');
                userPasswordDiv.style.backgroundColor = 'rgba(113, 113, 113, 0.447)';

                fieldsModified = true; // Set the flag to true after fields are modified once
            }
        });
    });
});