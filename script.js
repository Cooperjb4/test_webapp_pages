// Determine which page we're on and set up the appropriate event listeners
const currentPage = window.location.pathname.split("/").pop();

if (currentPage === "entry.html" || currentPage === "") {
    // Entry page handlers
    document.getElementById("signupBtn")?.addEventListener("click", function() {
        window.location.href = "signup.html";
    });
    document.getElementById("loginBtn")?.addEventListener("click", function() {
        window.location.href = "login.html";
    });
}

else if (currentPage === "signup.html") {
    // Signup page handlers
    document.getElementById("backBtn")?.addEventListener("click", function() {
        window.location.href = "entry.html";
    });
    document.getElementById("loginBtn")?.addEventListener("click", function() {
        window.location.href = "login.html";
    });

    const signupForm = document.querySelector("form");
    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();
            window.location.href = "login.html";
        });
    }
} 

else if (currentPage === "login.html") {
    // Signup page handlers
    document.getElementById("backBtn")?.addEventListener("click", function() {
        window.location.href = "entry.html";
    });
    document.getElementById("signupBtn")?.addEventListener("click", function() {
        window.location.href = "signup.html";
    });

    const loginForm = document.querySelector("form");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            window.location.href = "home.html";
        });
    }
}

else if (currentPage === "home.html") {
    // Signup page handlers
    document.getElementById("signoutBtn")?.addEventListener("click", function() {
        window.location.href = "entry.html";
    });
    document.getElementById("cartBtn")?.addEventListener("click", function() {
        window.location.href = "cart.html";
    });

    const searchForm = document.querySelector("form");
    if (searchForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            window.location.href = "home.html";
        });
    }
} 

else if (currentPage === "cart.html") {
    // Signup page handlers
    document.getElementById("homeBtn")?.addEventListener("click", function() {
        window.location.href = "home.html";
    });
    document.getElementById("checkoutBtn")?.addEventListener("click", function() {
        window.location.href = "checkout.html";
    });
} 

else if (currentPage === "checkout.html") {
    // Signup page handlers
    document.getElementById("homeBtn")?.addEventListener("click", function() {
        window.location.href = "home.html";
    });
    document.getElementById("cartBtn")?.addEventListener("click", function() {
        window.location.href = "cart.html";
    });
    document.getElementById("confirmBtn")?.addEventListener("click", function() {
        window.location.href = "checkoutDetails.html";
    });
} 

else if (currentPage === "checkoutDetails.html") {
    // Signup page handlers
    document.getElementById("homeBtn")?.addEventListener("click", function() {
        window.location.href = "home.html";
    });
} 

