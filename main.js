document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Dummy login validation (replace this with your actual validation logic)
    if (username === "admin" && password === "123") {
        // Use SweetAlert for login success message
        Swal.fire({
          title: 'Login Successful!',
          icon: 'success',
          timer: 1500, // Set timer for auto-close (ms)
          showConfirmButton: false // Hide the "OK" button
        });

        // Redirect to home page after successful login
        window.location.href = "home.html";

    } else {
        alert("Invalid username or password. Please try again.");
    }
});
