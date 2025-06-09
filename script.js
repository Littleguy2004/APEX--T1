

document.addEventListener('DOMContentLoaded', function() {
    
    const paradiseBtn = document.getElementById('paradiseBtn');
    

    const beachMessages = [
        "🌊 Welcome to paradise! Feel the ocean breeze on your skin...",
        "🏖️ You're now transported to a tropical beach! Hear the waves crashing...",
        "🌴 Paradise found! Palm trees sway as you relax on golden sands...",
        "🐚 The ocean calls to you! Seashells whisper secrets of the deep...",
        "🌅 Sunset paradise! Watch the sun paint the sky in tropical colors...",
        "🏝️ Island vibes activated! You're officially in beach mode...",
        "🌺 Tropical bliss! Hibiscus flowers bloom as you enter paradise..."
    ];
    

    paradiseBtn.addEventListener('click', function() {
        const randomMessage = beachMessages[Math.floor(Math.random() * beachMessages.length)];
        
        alert(randomMessage);
        

        paradiseBtn.classList.add('clicked');
        
        setTimeout(() => {
            paradiseBtn.classList.remove('clicked');
        }, 300);
    });

    const beachImage = document.querySelector('.beach-image');
    
    if (beachImage) {
        beachImage.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1) saturate(1.2)';
        });
        
        beachImage.addEventListener('mouseleave', function() {
            this.style.filter = 'brightness(1) saturate(1)';
        });
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
});