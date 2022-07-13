const { response } = require("express");

async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const age = document.querySelector('#age-signup').value.trim();

    if (username && email && password && age) {
        const response = await fetch('/api/user-routes', {
            method: 'post',
            body: JSON.stringify({
            username,
            email,
            password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        // check the response status
    if (response.ok) {
        console.log('success');
        document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);