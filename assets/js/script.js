// script.js - Basic JavaScript Starter
document.addEventListener('DOMContentLoaded', () => {
  console.log('Page loaded!');
  
  // Example: Change button text
  const btn = document.querySelector('#myButton');
  if (btn) {
    btn.textContent = 'Click Me!';
    btn.addEventListener('click', () => {
      alert('Button clicked!');
    });
  }
});
