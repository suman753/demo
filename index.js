document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    if (username === "user" && password === "pass") {
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
    }
});
