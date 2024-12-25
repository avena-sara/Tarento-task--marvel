// Select all character sections
const characters = document.querySelectorAll('.character');

// Add hover effects
characters.forEach(character => {
  character.addEventListener('mouseover', () => {
    character.style.backgroundColor = '#333333'; // Darker background on hover
    character.style.transition = 'background-color 0.3s ease'; // Smooth transition
  });

  character.addEventListener('mouseout', () => {
    character.style.backgroundColor = ''; // Reset background on mouse out
  });
});

// Add click event to display more info
characters.forEach(character => {
  character.addEventListener('click', () => {
    const name = character.querySelector('h2').textContent;
    const description = character.querySelector('p').textContent;
    alert(`You clicked on ${name}: ${description}`);
  });
});
