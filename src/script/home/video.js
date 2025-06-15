document.querySelectorAll('.video-thumbnail').forEach(img => {
    img.addEventListener('click', () => {
        const videoId = img.dataset.videoId;
        const modal = document.getElementById('videoModal');
        const iframe = document.getElementById('modalVideo');

        iframe.src = `https://www.youtube.com/embed/ZtbQ5luiaTc?si=SOSSJoUFVSS5cYK9&amp;start=75?autoplay=1`;

        modal.style.display = 'block';
    });
});

document.querySelector('.close').addEventListener('click', () => {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('modalVideo');

    modal.style.display = 'none';
        iframe.src = '';
    });

    window.addEventListener('click', (e) => {
    const modal = document.getElementById('videoModal');
    if (e.target === modal) {
        modal.style.display = 'none';
        document.getElementById('modalVideo').src = '';
    }
});
