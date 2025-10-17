document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    if (!header) return;

    function toggleHeaderScroll() {
        if (window.scrollY > 20) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    }
    toggleHeaderScroll();

    window.addEventListener('scroll', toggleHeaderScroll);
});
