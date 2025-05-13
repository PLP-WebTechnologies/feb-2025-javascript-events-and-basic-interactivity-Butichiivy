// Handle "Request Records" button click
const statusText = document.getElementById('status-text');
const changeTextBtn = document.getElementById('change-text-btn');

changeTextBtn.addEventListener('click', () => {
  statusText.textContent = 'Records requested. Please wait...';
  statusText.style.color = '#006400';
});

// Bonus: Long press secret action
const secretBtn = document.getElementById('secret-btn');
let pressTimer;

secretBtn.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => {
    alert('You discovered the secret! 🎉');
  }, 1500);
});

secretBtn.addEventListener('mouseup', () => {
  clearTimeout(pressTimer);
});

// Patient registration box management
const box = document.getElementById('box');
const registerBtn = document.getElementById('Register-btn');
const cancelBtn = document.getElementById('Cancel-btn');

registerBtn.addEventListener('click', () => {
  const newDiv = document.createElement('div');
  newDiv.classList.add('patient-box');
  newDiv.textContent = 'New Patient Registered';
  box.appendChild(newDiv);
});

cancelBtn.addEventListener('click', () => {
  const lastBox = box.lastElementChild;
  if (lastBox) lastBox.remove();
});

// Hover effects for image gallery
const galleryImages = document.querySelectorAll('.gallery-img');

galleryImages.forEach(img => {
  img.addEventListener('mouseover', () => {
    img.style.transform = 'scale(1.05)';
    img.style.border = '2px solid #4caf50';
  });
  img.addEventListener('mouseout', () => {
    img.style.transform = 'scale(1)';
    img.style.border = 'none';
  });
});

// Keypress detection
document.addEventListener('keydown', (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// Form validation
const form = document.getElementById('signup-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailFeedback = document.getElementById('email-feedback');
const passwordFeedback = document.getElementById('password-feedback');

// Real-time email validation
emailInput.addEventListener('input', () => {
  if (!emailInput.validity.valid) {
    emailFeedback.textContent = 'Please enter a valid email.';
    emailFeedback.style.color = 'red';
  } else {
    emailFeedback.textContent = '✓';
    emailFeedback.style.color = 'green';
  }
});

// Real-time password validation
passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length < 8) {
    passwordFeedback.textContent = 'Password must be at least 8 characters.';
    passwordFeedback.style.color = 'red';
  } else {
    passwordFeedback.textContent = '✓';
    passwordFeedback.style.color = 'green';
  }
});

// On form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (emailInput.validity.valid && passwordInput.value.length >= 8) {
    alert('Form submitted successfully!');
    form.reset();
    emailFeedback.textContent = '';
    passwordFeedback.textContent = '';
  } else {
    alert('Please fix the errors in the form.');
  }
});
