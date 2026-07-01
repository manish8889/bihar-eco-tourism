/* Seasonal Theme & Environmental Particle System */

class SeasonalEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.currentSeason = 'spring';
    this.animationFrameId = null;

    // Base settings
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
    
    // Bind buttons
    this.initControls();
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  initControls() {
    const buttons = document.querySelectorAll('.season-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const season = btn.dataset.season;
        this.switchSeason(season);
        
        // Update active class
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Start with default
    this.switchSeason('spring');
  }

  switchSeason(season) {
    this.currentSeason = season;
    document.documentElement.setAttribute('data-season', season);
    this.particles = [];
    
    // Setup initial particles based on season
    const count = season === 'monsoon' ? 120 : (season === 'winter' ? 80 : 40);
    for (let i = 0; i < count; i++) {
      this.particles.push(this.createParticle(true));
    }

    // Play smooth transition animations in UI if GSAP is available
    if (window.gsap) {
      window.gsap.fromTo("body", 
        { opacity: 0.9 }, 
        { opacity: 1, duration: 0.5, ease: "power1.out" }
      );
    }
  }

  createParticle(randomY = false) {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const y = randomY ? Math.random() * h : -20;
    const x = Math.random() * w;

    switch (this.currentSeason) {
      case 'spring': // Green leaves / Pink blossoms
        return {
          x: x,
          y: y,
          size: Math.random() * 12 + 6,
          speedY: Math.random() * 1.5 + 0.8,
          speedX: Math.sin(Math.random()) * 0.6,
          rotation: Math.random() * 360,
          rotationSpeed: Math.random() * 2 - 1,
          color: Math.random() > 0.5 ? '#a5d6a7' : '#f8bbd0', // Leaf green or blossom pink
          opacity: Math.random() * 0.6 + 0.3,
          type: 'petal'
        };
      
      case 'summer': // Sunny warm dust/glare particles
        return {
          x: x,
          y: y,
          size: Math.random() * 30 + 10,
          speedY: Math.random() * 0.4 + 0.1,
          speedX: Math.random() * 0.4 - 0.2,
          color: 'rgba(255, 235, 59, 0.12)',
          opacity: Math.random() * 0.4 + 0.1,
          type: 'flare'
        };

      case 'monsoon': // Rain drops
        return {
          x: x,
          y: y,
          length: Math.random() * 25 + 15,
          speedY: Math.random() * 8 + 6,
          speedX: -2, // slight angle for wind
          color: 'rgba(79, 195, 247, 0.4)',
          opacity: Math.random() * 0.5 + 0.2,
          type: 'rain'
        };

      case 'winter': // Mist/Snow bubbles
        return {
          x: x,
          y: y,
          size: Math.random() * 4 + 2,
          speedY: Math.random() * 0.6 + 0.3,
          speedX: Math.random() * 1 - 0.5,
          color: '#ffffff',
          opacity: Math.random() * 0.7 + 0.1,
          type: 'snow'
        };
    }
  }

  updateAndDraw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      // Update position
      p.y += p.speedY;
      if (p.speedX) p.x += p.speedX;

      // Wrap-around check
      if (p.y > this.canvas.height + 20 || p.x < -20 || p.x > this.canvas.width + 20) {
        this.particles[i] = this.createParticle(false);
        continue;
      }

      // Draw particle
      this.ctx.save();
      this.ctx.globalAlpha = p.opacity;

      if (p.type === 'petal') {
        p.rotation += p.rotationSpeed;
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rotation * Math.PI) / 180);
        this.ctx.fillStyle = p.color;
        
        // Draw organic leaf shape
        this.ctx.beginPath();
        this.ctx.moveTo(0, -p.size / 2);
        this.ctx.quadraticCurveTo(p.size / 2, 0, 0, p.size / 2);
        this.ctx.quadraticCurveTo(-p.size / 2, 0, 0, -p.size / 2);
        this.ctx.fill();
      } 
      else if (p.type === 'flare') {
        const grad = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        grad.addColorStop(0, p.color);
        grad.addColorStop(1, 'rgba(255, 235, 59, 0)');
        this.ctx.fillStyle = grad;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fill();
      } 
      else if (p.type === 'rain') {
        this.ctx.strokeStyle = p.color;
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.moveTo(p.x, p.y);
        this.ctx.lineTo(p.x + p.speedX * 2, p.y + p.length);
        this.ctx.stroke();
      } 
      else if (p.type === 'snow') {
        this.ctx.fillStyle = p.color;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fill();
      }

      this.ctx.restore();
    }
  }

  start() {
    const loop = () => {
      this.updateAndDraw();
      this.animationFrameId = requestAnimationFrame(loop);
    };
    loop();
  }

  stop() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}

// Instantiate on load
document.addEventListener('DOMContentLoaded', () => {
  const engine = new SeasonalEngine('seasonal-canvas');
  engine.start();
  window.SeasonalEngineInstance = engine; // Expose globally
});
