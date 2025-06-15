const seeMoreButtons = document.querySelectorAll('.card-button');
const modal = document.getElementById('lessonModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalDetails = document.getElementById('modalDetails');
const closeModal = document.getElementById('closeModal');
const modalVideoWrapper = modal.querySelector('.lesson-video-wrapper');

seeMoreButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.lesson-card');
        const title = card.querySelector('.card-title').textContent;
        const description = card.querySelector('.card-description').textContent;
        const language = card.dataset.language;
        const level = card.dataset.level;
        const price = card.dataset.priceValue || card.dataset.price;
        const duration = card.dataset.durationValue || card.dataset.duration;

        const iframe = card.querySelector('iframe');
        if (iframe) {
            const clonedIframe = iframe.cloneNode(true);
            modalVideoWrapper.innerHTML = '';
            modalVideoWrapper.appendChild(clonedIframe);
        } else {
            modalVideoWrapper.innerHTML = '<p><em>No video available.</em></p>';
        }

        modalTitle.textContent = "Course: " + title;
        modalDescription.textContent = description;
        modalDetails.innerHTML = `
            <li><strong>Language:</strong> ${language}</li>
            <li><strong>Level:</strong> ${level}</li>
            <li><strong>Price:</strong> ${price}</li>
            <li><strong>Duration:</strong> ${duration}</li>
        `;

        modal.classList.remove('hidden');
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    modalVideoWrapper.innerHTML = '';
});

window.addEventListener('click', e => {
    if (e.target === modal) {
        modal.classList.add('hidden');
        modalVideoWrapper.innerHTML = '';
    }
});
