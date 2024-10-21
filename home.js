// Music Player Functionality
let isPlaying = false;

const playButton = document.querySelector(".controls img[src='images/play.png']");

playButton.addEventListener("click", function() {
    if (!isPlaying) {
        playButton.src = "images/pause.png"; // Change to pause icon
        isPlaying = true;
    } else {
        playButton.src = "images/play.png"; // Change back to play icon
        isPlaying = false;
    }
});

// Mood-Based Playlist Generator Functionality
document.getElementById("generate-playlist").addEventListener("click", function() {
    const mood = document.getElementById("mood").value;
    const playlistContainer = document.getElementById("generated-playlist");

    // Example of generating playlist based on mood
    let playlist = "";

    if (mood === "happy") {
        playlist = "<p>Happy Playlist: <br> 1. Song A <br> 2. Song B <br> 3. Song C</p>";
    } else if (mood === "sad") {
        playlist = "<p>Sad Playlist: <br> 1. Song D <br> 2. Song E <br> 3. Song F</p>";
    } else if (mood === "calm") {
        playlist = "<p>Calm Playlist: <br> 1. Song G <br> 2. Song H <br> 3. Song I</p>";
    } else if (mood === "energetic") {
        playlist = "<p>Energetic Playlist: <br> 1. Song J <br> 2. Song K <br> 3. Song L</p>";
    }

    // Display the generated playlist
    playlistContainer.innerHTML = playlist;
});

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');

// Load the saved theme on page load
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
        themeLabel.textContent = "Dark Mode";
    }
};

themeToggle.addEventListener('change', () => {
    const isDarkMode = themeToggle.checked;
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.querySelector('.navbar').classList.toggle('dark-mode', isDarkMode);
    document.querySelector('.sidebar').classList.toggle('dark-mode', isDarkMode);
    document.querySelector('.main-content').classList.toggle('dark-mode', isDarkMode);
    document.querySelector('.music-control-bar').classList.toggle('dark-mode', isDarkMode);
    
    // Save the theme to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Update label based on theme
    themeLabel.textContent = isDarkMode ? "Dark Mode" : "Light Mode";
});
