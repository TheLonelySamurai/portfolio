document.addEventListener('DOMContentLoaded', function() {
    const centerTitles = document.querySelectorAll('.center-title');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const centerTitle = entry.target;
                centerTitle.classList.add('highlight');
                setTimeout(() => {
                    centerTitle.classList.remove('highlight');
                }, 1000); // Change color for 1 second
            }
        });
    }, { threshold: 0.1 });

    centerTitles.forEach(centerTitle => observer.observe(centerTitle));
});