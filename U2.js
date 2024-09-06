/'James Renhuaiyuan 223190623'/
const addButton = document.querySelectorAll('.add'); // Select all elements with class 'add'
const cartTable = document.getElementById('cart-table'); // Select the cart table element by its ID
const cartTotal = document.getElementById('cart-total'); // Select the element showing the cart total by its ID
let totalPrice = 0; // Initialize total price as 0

// Loop through each "add" button and add an event listener
addButton.forEach(button => {
  button.addEventListener('click', function() {
    // Get the course name, price, and quantity from the clicked button's parent element
    const course = this.parentNode.querySelector('h2').textContent;
    const price = parseInt(this.parentNode.querySelector('p').textContent);
    const quantity = parseInt(this.parentNode.querySelector('.quantity-input').value);
    const total = price * quantity; // Calculate the total price for this item

    // Create a new row for the cart
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${course}</td>
      <td>${quantity}</td>
      <td>$${total.toFixed(2)}</td>
      <td><button class="remove-btn">Remove</button></td>
    `;
    cartTable.appendChild(row); // Add the new row to the cart table

    totalPrice += total; // Update the total price
    cartTotal.textContent = totalPrice.toFixed(2); // Update the displayed total price

    // Add event listener to the "Remove" button to remove the item from the cart
    const removeButton = row.querySelector('.remove-btn');
    removeButton.addEventListener('click', function() {
      cartTable.removeChild(row); // Remove the row from the table
      totalPrice -= total; // Subtract the item's total from the total price
      cartTotal.textContent = totalPrice.toFixed(2); // Update the total price display
    });
  });
});

// Function to handle checkout action
function checkout623() {
  alert(`Total amount to pay: $${totalPrice.toFixed(2)}`);
  // Additional checkout logic can be added here
}

// Function to clear the entire cart
function clearCart623() {
  cartTable.innerHTML = ''; // Remove all rows from the cart table
  totalPrice = 0; // Reset total price
  cartTotal.textContent = totalPrice.toFixed(2); // Reset displayed total price
}

var usernameCookieName623 = "username"; // Cookie name for storing username
var passwordCookieName623 = "password"; // Cookie name for storing password

// Function to retrieve a cookie value by its name
function getCookie623(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift(); // Return the cookie value if found
}

// Function to set a cookie with a specified name, value, and expiry days
function setCookie623(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Set cookie expiry
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/"; // Set the cookie
}

// Function to check if the username cookie exists and update the login/signup link
function checkCookie623() {
    var username = getCookie623(usernameCookieName623);
    if (username) {
        document.getElementById("login-signup-link").innerHTML = "Welcome " + username + " & Sign out";
    }
}

// Function to handle navigation clicks and redirect users to login if not logged in
function navigationClick623() {
    document.querySelectorAll("nav a").forEach(function(link) {
        link.addEventListener("click", function(event) {
            if (link.href.includes("courseware.html") && !getCookie623(usernameCookieName623)) {
                event.preventDefault(); // Prevent navigation if not logged in
                window.location.href = "login.html"; // Redirect to login page
            }
        });
    });
}

// Function to handle form submission during registration
function registerFormSubmit623() {
    document.getElementById("register-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        setCookie623(usernameCookieName623, username, 7); // Set cookies for username and password
        setCookie623(passwordCookieName623, password, 7);
        window.location.href = "login.html"; // Redirect to login page after registration
    });
}

// Function to handle login form submission
function loginFormSubmit623() {
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        var username = document.getElementById("login-username").value;
        var password = document.getElementById("login-password").value;
        if (username === getCookie623(usernameCookieName623) && password === getCookie623(passwordCookieName623)) {
            window.location.href = "index.html"; // Redirect to index page on successful login
        } else {
            alert("Incorrect username or password"); // Show error message if login fails
        }
    });
}

// Function to handle the "Login/Register" button click
function loginRegisterButtonClick623() {
    document.querySelector("#login-form button:not([type='submit'])").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default behavior
        window.location.href = "register.html"; // Redirect to the registration page
    });
}

// Function to handle navigation clicks on the index page
function indexNavigationClick623() {
    document.querySelectorAll("nav a").forEach(function(link) {
        link.addEventListener("click", function(event) {
            if (link.href.includes("courseware.html") && !getCookie623(usernameCookieName623)) {
                event.preventDefault(); // Prevent access if not logged in
                window.location.href = "login.html"; // Redirect to login
            } else if (link.href.includes("login.html")) {
                event.preventDefault(); // Redirect to login page
                window.location.href = "login.html";
            }
        });
    });
}

// Function to handle the "Login/Signup" link click on the index page
function indexLoginSignupClick623() {
    document.getElementById("login-signup-link").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default behavior
        window.location.href = "login.html"; // Redirect to login page
    });
}

// Function to check login status and set up index page behavior
function indexCheckLogin623() {
    checkCookie623(); // Check if user is logged in
    indexNavigationClick623(); // Set up navigation click handlers
    indexLoginSignupClick623(); // Set up login/signup link click handler
}

// Function to initialize the index page
function initIndexPage623() {
    indexCheckLogin623(); // Check login status and set up event handlers
}

// Function to initialize the registration page
function initRegisterPage623() {
    registerFormSubmit623(); // Set up form submission handler
}

// Function to initialize the login page
function initLoginPage623() {
    loginFormSubmit623(); // Set up form submission handler
    loginRegisterButtonClick623(); // Set up button click handler
}

// Function to initialize the page based on the current path
function initPage623() {
    var path = window.location.pathname;
    if (path.includes("index.html")) {
        initIndexPage623(); // Initialize index page
    } else if (path.includes("register.html")) {
        initRegisterPage623(); // Initialize registration page
    } else if (path.includes("login.html")) {
        initLoginPage623(); // Initialize login page
    } else {
        navigationClick623(); // Set up general navigation
    }
}

window.onload = initPage623; // Run initPage function when the page loads

// Select the button with the class 'btns_more' and add a click event listener
const button = document.querySelector('.btns_more');
button.addEventListener('click', function() {
    window.location.href = 'page7.html'; // Redirect to page7.html on click
});

// Function to validate the enquiry form
function validateForm623() {
    var name = document.forms["enquiryForm"]["name"].value;
    var email = document.forms["enquiryForm"]["email"].value;
    var course = document.forms["enquiryForm"]["course"].value;
    var age = document.forms["enquiryForm"]["age"].value;
    var major = document.forms["enquiryForm"]["major"].value;
    var gender = document.forms["enquiryForm"]["gender"].value;

    // Simple validation to check if all fields are filled
    if (name && email && course && age && major && gender) {
        window.location.href = "login.html"; // Redirect to login page if validation passes
        return false; // Prevent form submission
    } else {
        alert("Please fill all the fields."); // Show alert if validation fails
        return false; // Prevent form submission
    }
}
