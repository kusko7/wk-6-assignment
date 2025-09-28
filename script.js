// Custom form validation and submission handling
document.getElementById('feedback-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const messageDisplay = document.getElementById('form-message');

  // Custom validation
  if (name === '' || email === '' || message === '') {
    messageDisplay.textContent = 'Please fill in all fields.';
    messageDisplay.style.color = 'red';
    return;
  }

  // Basic email format check (not using HTML5 pattern)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    messageDisplay.textContent = 'Please enter a valid email.';
    messageDisplay.style.color = 'red';
    return;
  }

  // If all is valid
  messageDisplay.textContent = 'Thank you for your feedback!';
  messageDisplay.style.color = 'green';

  // Reset form
  document.getElementById('feedback-form').reset();
});


// Interactive Feature 1: Toggle FAQ answers
const questions = document.querySelectorAll('.question');
questions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle('hidden');
  });
});

// Interactive Feature 2: Change background color
const colors = ['#f0f8ff', '#ffefd5', '#e6e6fa', '#fffacd', '#e0ffff'];
let currentColor = 0;

document.getElementById('color-button').addEventListener('click', () => {
  currentColor = (currentColor + 1) % colors.length;
  document.body.style.backgroundColor = colors[currentColor];
});
