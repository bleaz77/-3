document.getElementById('showImageBtn').addEventListener('click', function() {
    var surpriseContent = document.getElementById('surpriseContent');
    var message = document.querySelector('.message');
    var audio = document.getElementById('surpriseAudio');

    if (surpriseContent.style.display === 'block') {
        // Hide surprise content and show the message
        surpriseContent.style.display = 'none';
        message.style.display = 'block';
        audio.pause(); // Pause the audio if it’s playing
        audio.currentTime = 0; // Reset audio to start
    } else {
        // Show surprise content and hide the message
        surpriseContent.style.display = 'block';
        message.style.display = 'none';
        audio.play(); // Play the audio
    }
});