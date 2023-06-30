// script.js

const wheel = document.querySelector('.wheel');
const spinBtn = document.getElementById('spinBtn');
const result = document.querySelector('.result');
const prizes = ['Try again', 'Gift Card'];
let spinning = false;

function spinWheel() {
  if (spinning) return;
  
  spinning = true;
  result.innerHTML = '';

  // Randomly select a prize index
  const prizeIndex = Math.floor(Math.random() * prizes.length);

  // Set the number of rotations (5 to 10 rotations)
  const rotations = Math.floor(Math.random() * 6) + 5;
  
  // Calculate the target angle based on the prize index and rotations
  const angle = prizeIndex * (360 / prizes.length) + rotations * 360;

  // Rotate the wheel using CSS transition
  wheel.style.transition = 'transform 5s ease-out';
  wheel.style.transform = `rotate(${angle}deg)`;

  // Wait for the animation to finish
  setTimeout(() => {
    result.innerHTML = `<p>${prizes[prizeIndex]}</p>`;
    spinning = false;
  }, 5000);
}

spinBtn.addEventListener('click', spinWheel);
