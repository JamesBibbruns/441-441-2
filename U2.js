/'James Renhuaiyuan 223190623'/
// Get all "Add" buttons
const addButtons = document.querySelectorAll('.button.add');

// Get the cart table and total amount element
const cartTable = document.getElementById('cart-table');
const cartTotal = document.getElementById('cart-total');

// Cart object to store courses and their quantities
let cart = {};

// Attach event listener to each "Add" button
addButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Get course information
    const courseDiv = button.closest('.course');
    const courseId = courseDiv.querySelector('h2').textContent;
    const courseFee = parseFloat(courseDiv.querySelector('h3 p').textContent);
    const courseQuantity = parseInt(courseDiv.querySelector('.quantity-input').value);

    // If the course is already in the cart, update the quantity
    if (cart[courseId]) {
      cart[courseId].quantity += courseQuantity;
    } else {
      // Add new course to the cart
      cart[courseId] = {
        fee: courseFee,
        quantity: courseQuantity
      };
    }

    // Update the cart display
    updateCart();
  });
});

// Function to update the cart display
function updateCart() {
  // Clear the cart table
  cartTable.innerHTML = '';

  // Iterate through the cart object and update the table
  let total = 0;
  for (const courseId in cart) {
    const item = cart[courseId];
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${courseId}</td>
      <td>$${item.fee}</td>
      <td>${item.quantity}</td>
      <td>$${(item.fee * item.quantity).toFixed(2)}</td>
      <td><button class="remove" data-course="${courseId}">Remove</button></td>
    `;
    cartTable.appendChild(row);

    // Calculate the total amount
    total += item.fee * item.quantity;
  }

  // Update the total amount display
  cartTotal.textContent = total.toFixed(2);

  // Attach event listener to each "Remove" button
  const removeButtons = document.querySelectorAll('.remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const courseId = button.getAttribute('data-course');
      delete cart[courseId]; // Remove the course from the cart
      updateCart(); // Refresh the cart display
    });
  });
}

// Checkout function
function checkout() {
  // If the cart is empty, show an alert
  if (Object.keys(cart).length === 0) {
    alert('Your cart is empty.');
    return;
  }
  // Display a thank you message and the total amount
  alert('Thank you for your purchase! Total: $' + cartTotal.textContent);
  clearCart(); // Clear the cart after checkout
}

// Function to clear the cart
function clearCart() {
  cart = {}; // Reset the cart object
  updateCart(); // Refresh the cart display
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

function redirectToRegister(event) {
    event.preventDefault(); // Prevent form submission

    // Redirect to the register page
    window.location.href = "register.html";
}
