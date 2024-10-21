function createMusicTone() {
  const tone = document.createElement('div');
  tone.className = 'music-tone';
  tone.style.width = `${Math.random() * 15 + 5}px`; // Random width between 5 and 20px
  tone.style.height = tone.style.width; // Make it a circle
  tone.style.position = 'absolute'; // Position them absolutely

  // Random initial position
  tone.style.left = `${Math.random() * 100}vw`;
  tone.style.top = `${Math.random() * 100}vh`;

  // Define an array of different shades of purple
  const shadesOfPurple = [
      '#800080', // Purple
      '#8A2BE2', // BlueViolet
      '#9370DB', // MediumPurple
      '#DA70D6', // Orchid
      '#DDA0DD', // Plum
      '#EE82EE', // Violet
      '#BA55D3', // MediumOrchid
      '#9932CC', // DarkOrchid
  ];

  // Set a random color from the array
  tone.style.backgroundColor = shadesOfPurple[Math.floor(Math.random() * shadesOfPurple.length)];

  document.body.appendChild(tone);

  // Animate the tone
  tone.animate([
      { transform: 'translate(0, 0)', opacity: 0.8 },
      { transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`, opacity: 0.2 }
  ], {
      duration: Math.random() * 3000 + 2000, // Duration between 2 and 5 seconds
      easing: 'ease-in-out',
      iterations: 1,
      fill: 'forwards'
  });

  // Remove tone after animation
  tone.addEventListener('animationend', () => {
      tone.remove();
  });
}

// Create music tones at intervals
setInterval(createMusicTone, 300);

window.onload = function () {
    // First, handle the preloader animation and visibility
    setTimeout(function() {
      // Hide the preloader after 3.5 seconds
      document.querySelector('.preloader').style.display = 'none';
  
      // Redirect to the login page
      window.location.href = "login.html";
    }, 5000); // Wait 3.5 seconds for animations to finish
  };
  