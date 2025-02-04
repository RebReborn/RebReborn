document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Log the values to the console (for demonstration)
    console.log('Email:', email);
    console.log('Password:', password);

    // You can add further logic here, such as validation or sending data to a server
    alert('Login successful! (This is a demo)');
});