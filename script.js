document.getElementById('surpriseButton').addEventListener('click', function() {
    var message = document.getElementById('surpriseMessage');
    message.classList.toggle('hidden');
    if (!message.classList.contains('hidden')) {
        playBirthdaySong();
        startConfetti();
    }
});

function playBirthdaySong() {
    var song = document.getElementById('birthdaySong');
    song.currentTime = 22; // Start the song at 10 seconds
    song.play();
}

function startConfetti() {
    var container = document.querySelector('.confetti-container');
    for (var i = 0; i < 100; i++) {
        var confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(confetti);
    }
}
