document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('bouncing');

        if (card.classList.contains('bouncing')) {
            startBouncing(card);
        }
    });
});

function startBouncing(card) {
    let x = Math.random() * (window.innerWidth - card.clientWidth);
    let y = Math.random() * (window.innerHeight - card.clientHeight);
    let dx = 2 + Math.random() * 3;
    let dy = 2 + Math.random() * 3;

    function move() {
        x += dx;
        y += dy;

        if (x + card.clientWidth >= window.innerWidth || x <= 0) {
            dx = -dx;
        }

        if (y + card.clientHeight >= window.innerHeight || y <= 0) {
            dy = -dy;
        }

        card.style.left = `${x}px`;
        card.style.top = `${y}px`;

        if (card.classList.contains('bouncing')) {
            requestAnimationFrame(move);
        }
    }

    move();
}
