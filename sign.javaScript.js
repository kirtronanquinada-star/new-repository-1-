
const validUsername = "kirt";
const validPassword = "1234";

const loginSection = document.getElementById("login-section");
const portfolioSection = document.getElementById("portfolio-section");

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if(username === validUsername && password === validPassword) {

        loginSection.style.display = "none";
        portfolioSection.style.display = "block";
        localStorage.setItem("isLoggedIn", "true");
    } else {
        error.textContent = "Invalid username or password";
    }
}

function logout() {
    localStorage.removeItem("isLoggedIn");
    portfolioSection.style.display = "none";
    loginSection.style.display = "flex";
}


window.onload = function() {
    if(localStorage.getItem("isLoggedIn") === "true") {
        loginSection.style.display = "none";
        portfolioSection.style.display = "block";
    }
}