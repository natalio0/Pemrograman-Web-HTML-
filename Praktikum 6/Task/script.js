document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var isValid = true;
    var name = document.getElementById('name').value.trim();
    var username = document.getElementById('username').value.trim();
    var email = document.getElementById('email').value.trim();

    // Validasi Nama
    if (name === '') {
        document.getElementById('nameError').innerHTML = '*Nama harus diisi';
        isValid = false;
    } else {
        document.getElementById('nameError').innerHTML = '';
    }

    // Validasi Username
    if (username === '') {
        document.getElementById('usernameError').innerHTML = '*Username harus diisi';
        isValid = false;
    } else {
        document.getElementById('usernameError').innerHTML = '';
    }

    // Validasi Email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerHTML = '*Email tidak valid';
        isValid = false;
    } else {
        document.getElementById('emailError').innerHTML = '';
    }

    if (!isValid) {
        event.preventDefault(); // Hindari pengiriman form jika tidak valid
    }
});
