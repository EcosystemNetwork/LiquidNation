document.addEventListener('DOMContentLoaded', function () {
    const rainContainer = document.querySelector('.rain');
    const dropsCount = 50; // Adjust number of drops

    for (let i = 0; i < dropsCount; i++) {
        const drop = document.createElement('div');
        drop.className = 'drop';
        drop.style.left = `${Math.random() * 100}vw`;
        drop.style.animationDuration = `${Math.random() * 1.5 + 1}s`;
        drop.style.animationDelay = `${Math.random() * 1.5}s`;
        rainContainer.appendChild(drop);
    }
});