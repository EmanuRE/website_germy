
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validación simple
    if (username === "gruiz" && password === "123456") {
        localStorage.setItem('loggedInUser', username);
        window.location.href = "home.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});

// Logout
document.getElementById('logout')?.addEventListener('click', function() {
    localStorage.removeItem('loggedInUser');
    window.location.href = "index.html";
});

// Mostrar nombre de usuario en Home
const userDisplay = document.getElementById('userDisplay');
const loggedInUser = localStorage.getItem('loggedInUser');
if (userDisplay && loggedInUser) {
    userDisplay.textContent = loggedInUser;
} else if (window.location.pathname.includes('home.html') && !loggedInUser) {
    window.location.href = "login.html"; // Redirigir si no hay sesión
}