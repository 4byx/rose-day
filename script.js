document.addEventListener('DOMContentLoaded', () => {
    const flowerWrapper = document.getElementById('flower-wrapper');
    const petalsContainer = document.querySelector('.petals');
    const messageCard = document.getElementById('message-card');
    const title = document.querySelector('.title');
    const subtitle = document.querySelector('.subtitle');

    let isBloomed = false;

    flowerWrapper.addEventListener('click', () => {
        if (!isBloomed) {
            // Add bloom class to petals container
            petalsContainer.classList.add('blooming');

            // Animation for the message card
            messageCard.style.display = 'block';
            // Slight delay to allow display:block to apply before opacity transition
            setTimeout(() => {
                messageCard.classList.add('show');
            }, 100);

            // Change subtitle text
            subtitle.style.opacity = 0;
            setTimeout(() => {
                subtitle.textContent = "A rose that never fades, just for you.";
                subtitle.style.opacity = 1;
            }, 1000);

            // Create sparkles
            createSparkles();

            isBloomed = true;
        }
    });

    function createSparkles() {
        const colors = ['#ff4d6d', '#fff0f3', '#ffccd5', '#d90429'];
        const container = document.querySelector('.container');

        setInterval(() => {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');

            // Random position around the flower
            const x = Math.random() * window.innerWidth;
            const size = Math.random() * 5 + 2;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const duration = Math.random() * 3 + 2;

            sparkle.style.left = `${x}px`;
            sparkle.style.bottom = '0px'; // Start from bottom
            sparkle.style.width = `${size}px`;
            sparkle.style.height = `${size}px`;
            sparkle.style.background = color;
            sparkle.style.animationDuration = `${duration}s`;

            document.body.appendChild(sparkle);

            // Remove after animation
            setTimeout(() => {
                sparkle.remove();
            }, duration * 1000);
        }, 100);
    }
});
