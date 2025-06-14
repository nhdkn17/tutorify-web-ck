document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('aimModal');
    const modalText = document.getElementById('aimModalText');
    const closeBtn = document.querySelector('.aim-modal-close');

    document.querySelectorAll('.read-more').forEach(btn => {
        btn.addEventListener('click', () => {
            const fullText = btn.dataset.full;
            modalText.textContent = fullText;
            modal.classList.remove('hidden');
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    window.addEventListener('click', e => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});
