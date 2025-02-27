// Wait for the DOM to load before adding event listeners
document.addEventListener("DOMContentLoaded", function () {

  
     
  
  
  // Sign Up functionality
    document.getElementById("signupButton").addEventListener("click", async function () {
        const username = document.getElementById("signup-username").value;
        const password = document.getElementById("signup-password").value;

        // Send POST request to backend for signup
        const response = await fetch("/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        alert(data.message); // Show backend response message
    });
  

    // Login functionality
    document.getElementById("loginButton").addEventListener("click", async function () {
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;

        // Send POST request to backend for login
        const response = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        alert(data.message); // Show backend response message

        // If login is successful, redirect to dashboard
        if (data.success) {
          localStorage.setItem("token", data.token);
   		  localStorage.setItem("username", data.username);  // Store the username if needed  
          window.location.href = "dashboard.html"; // Redirect to dashboard
        } else {
            console.log("Login failed:", data.message);  // Log failure message for debugging
        }
    });

    // Password reset functionality
    document.getElementById("resetPasswordButton").addEventListener("click", async function () {
        const username = document.getElementById("reset-username").value;
        const newPassword = document.getElementById("new-password").value;

        // Send POST request to backend for password reset
        const response = await fetch("/reset-password", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, newPassword }),
        });

        const data = await response.json();
        alert(data.message); // Show backend response message
    });

});
