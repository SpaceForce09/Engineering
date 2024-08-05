document.addEventListener('DOMContentLoaded', function() {
    const glitchElements = document.querySelectorAll('.glitch');

    glitchElements.forEach(el => {
        setInterval(() => {
            el.classList.toggle('active');
        }, Math.random() * 2000 + 500);

        const glitchText = ["Error 404", "Page Not Found", "Oops!", "404 - Not Here", "Glitch!"];

        setInterval(() => {
            const originalText = el.getAttribute('data-text');
            const randomText = glitchText[Math.floor(Math.random() * glitchText.length)];
            el.setAttribute('data-text', randomText);
            setTimeout(() => {
                el.setAttribute('data-text', originalText);
            }, 500);
        }, Math.random() * 4000 + 2000);
    });
});
