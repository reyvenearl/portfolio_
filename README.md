# Tabura Portfolio

Page Link: https://reyvenearl.github.io/portfolio_/

Interactive Features


CSS Features


1. Navbar Hover Effect

Functionality: Adds underline effect when hovering over nav links

Code Snippet:nav a:hover { text-decoration: underline; }

2. Card Hover Animation

Functionality: Grows card slightly when hovered

Code Snippet: .card:hover { transform: scale(1.05); }

3. Button Hover Effect

Functionality: Button color changes and grows slightly on hover

Code Snippet: button:hover { background-color: #0056b3; transform: scale(1.05); }

4. Modal Close Hover

Functionality: Turns close (×) button red on hover

Code Snippet: .modal-close:hover { color: red; }

5. Smooth Scroll

Functionality: Enables smooth scrolling to anchor links

Code Snippet: html { scroll-behavior: smooth; }


JS Features


1. Learn More Modal (Open)

Functionality: Opens modal with dynamic title and description when "Learn More" button is clicked

Code Snippet: document.querySelectorAll(".learn-more-btn").forEach(button =>
  button.addEventListener("click", () => {
  })
);

Variables Used: buttons, button, title, description

2. Learn More Modal (Close X)

Functionality: Closes the modal when the close (×) button is clicked

Code Snippet: function closeProjectModal() {
  document.getElementById("projectModal").style.display = "none";
}

Variables Used: none

3. Learn More Modal (Click Outside)

Functionality: Closes the modal when clicking outside the modal content

Code Snippet: window.addEventListener("click", function(e) {
});

Variables Used: modal, e

4. Form Validation

Functionality: Validates input fields and shows alert with user's name

Code Snippet: function validateForm() {
}

Variables Used: name, email, message

