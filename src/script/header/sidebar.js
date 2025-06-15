document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".header-menu-item img");
    const mobileMenu = document.getElementById("mobileMenu");
    const closeBtn = document.getElementById("closeMobileMenu");

    menuBtn.addEventListener("click", function (e) {
        e.preventDefault();
        mobileMenu.classList.toggle("active");
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            mobileMenu.classList.remove("active");
        });
    }
});
