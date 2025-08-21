<script>
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Skill bar animation
    function animateSkillBars() {
        document.querySelectorAll('.skill-progress').forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    }

    animateSkillBars();

    // Spin the Wheel
    const wheel = document.getElementById('wheel');
    const spinBtn = document.getElementById('spinBtn');
    const factDisplay = document.getElementById('factDisplay');

    const facts = [
        "I have a secret stash of cute stickers on my laptop! 🌸",
        "I drink bubble tea while coding - it's my favorite fuel! 🧋",
        "My code editor theme is always pink and purple! 💜",
        "I name all my coding projects with cute animal names! 🦄",
        "I learned HTML by building fan pages for my favorite shows! 📺",
        "I have a collection of programming socks with cute patterns! 🧦",
        "My desk setup includes fairy lights and succulents! ✨",
        "I celebrate every working code with a little happy dance! 💃"
    ];

    let isSpinning = false;

    spinBtn.addEventListener('click', function () {
        if (isSpinning) return;

        isSpinning = true;
        spinBtn.disabled = true;
        spinBtn.textContent = 'Spinning...';

        const randomRotation = Math.floor(Math.random() * 720) + 1440;
        wheel.style.transition = 'transform 4s ease-out';
        wheel.style.transform = `rotate(${randomRotation}deg)`;

        const normalizedRotation = randomRotation % 360;
        const index = Math.floor((360 - normalizedRotation + 22.5) / 45) % 8;

        setTimeout(() => {
            factDisplay.innerHTML = `<p><strong>Fun Fact:</strong> ${facts[index]}</p>`;
            spinBtn.disabled = false;
            spinBtn.textContent = 'Spin Again!';
            isSpinning = false;
        }, 4000);
    });
});
</script>
