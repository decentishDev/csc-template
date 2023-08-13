// script.js

const background = document.querySelector('.background');

function animateBackground() {
    const time = new Date().getTime() * 0.0005; // Adjust speed

    // Calculate gradient colors dynamically using sine and cosine functions
    const r1 = Math.sin(time) * 127 + 128;
    const g1 = Math.sin(time + 2) * 127 + 128;
    const b1 = Math.sin(time + 4) * 127 + 128;
    const r2 = Math.sin(time + 1) * 127 + 128;
    const g2 = Math.sin(time + 3) * 127 + 128;
    const b2 = Math.sin(time + 5) * 127 + 128;

    background.style.background = `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)), linear-gradient(to right, rgb(${r1}, ${g1}, ${b1}), rgb(${r2}, ${g2}, ${b2}))`;

    requestAnimationFrame(animateBackground);
}

animateBackground();
