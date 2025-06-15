document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".footer-toggle");
  
    toggles.forEach((toggle) => {
        toggle.addEventListener("click", function () {
            const parent = toggle.closest(".footer-nav-list");
            parent.classList.toggle("active");
        });
    });
});
  