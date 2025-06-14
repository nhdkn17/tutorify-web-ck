document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".filter-area-form");
    const lessonCards = Array.from(document.querySelectorAll(".lesson-card"));
    const pagination = document.getElementById("pagination");
    const itemsPerPage = 10;
    let currentPage = 1;

    const filters = {
        language: document.getElementById("language"),
        level: document.getElementById("level"),
        price: document.getElementById("price"),
        duration: document.getElementById("duration"),
    };

    function getFilteredCards() {
        return lessonCards.filter(card => {
            return Object.entries(filters).every(([key, select]) => {
                const value = select.value.toLowerCase();
                return !value || card.dataset[key].toLowerCase() === value;
            });
        });
    }

    function renderPage(page, filteredCards) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        lessonCards.forEach(card => (card.style.display = "none"));
        filteredCards.slice(start, end).forEach(card => (card.style.display = "block"));

        renderPagination(filteredCards.length, page);
    }

    function renderPagination(totalItems, current) {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        pagination.innerHTML = "";

        if (totalPages <= 1) return;

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            btn.textContent = i;
            btn.classList.toggle("active", i === current);
            btn.addEventListener("click", () => {
                currentPage = i;
                renderPage(currentPage, getFilteredCards());
            });
            pagination.appendChild(btn);
        }
    }

    function applyFiltersAndRender() {
        const filteredCards = getFilteredCards();
        currentPage = 1;
        renderPage(currentPage, filteredCards);
    }

    Object.values(filters).forEach(select => {
        select.addEventListener("change", applyFiltersAndRender);
    });

    form.addEventListener("submit", e => {
        e.preventDefault();
        applyFiltersAndRender();
    });

    const resetBtn = document.getElementById("resetFilters");
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            form.reset();
            applyFiltersAndRender();
        });
    }

    applyFiltersAndRender();
});
