// particles.js 
(function() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;

    let ctx = canvas.getContext('2d');
    let particles = [];
    let particleCount = 100;
    let mouseX = null, mouseY = null;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: random(1.5, 4),
                speedX: random(-0.3, 0.3),
                speedY: random(-0.3, 0.3),
                color: `rgba(100, 150, 255, ${random(0.2, 0.6)})`
            });
        }
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let p of particles) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        }
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(100, 150, 255, 0.2)';
        ctx.lineWidth = 0.5;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < 100) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function updateParticles() {
        for (let p of particles) {
            p.x += p.speedX;
            p.y += p.speedY;
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            if (mouseX !== null && mouseY !== null) {
                let dx = mouseX - p.x;
                let dy = mouseY - p.y;
                let dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < 100) {
                    let angle = Math.atan2(dy, dx);
                    let force = (100 - dist) / 100 * 0.5;
                    p.x -= Math.cos(angle) * force;
                    p.y -= Math.sin(angle) * force;
                }
            }
        }
    }

    function animate() {
        if (!canvas || !ctx) return;
        updateParticles();
        drawParticles();
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        resizeCanvas();
        initParticles();
    });

    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    });
    canvas.addEventListener('mouseleave', () => {
        mouseX = null;
        mouseY = null;
    });

    resizeCanvas();
    initParticles();
    animate();
})();
