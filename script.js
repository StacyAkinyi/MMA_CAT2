document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.getElementById('videoContainer');
    const video = document.getElementById('wildlifeVideo');
    const toggleBtn = document.getElementById('toggleBtn');

    toggleBtn.addEventListener('click', () => {
        // Check if the video is currently hidden
        if (videoContainer.classList.contains('hidden')) {
            // Unhide the container
            videoContainer.classList.remove('hidden');
            // Play the video automatically when revealed
            video.play();
            // Update button text and accessibility attributes
            toggleBtn.textContent = 'Hide Video';
            toggleBtn.setAttribute('aria-expanded', 'true');
        } else {
            // Hide the container
            videoContainer.classList.add('hidden');
            // Pause the video so it doesn't play audio in the background
            video.pause();
            // Update button text and accessibility attributes
            toggleBtn.textContent = 'Show & Play Video';
            toggleBtn.setAttribute('aria-expanded', 'false');
        }
    });
});