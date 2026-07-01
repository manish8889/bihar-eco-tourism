/* Wildlife Showcase Carousel Script */

class WildlifeCarousel {
  constructor() {
    this.slider = document.getElementById('wildlife-slider');
    this.prevBtn = document.getElementById('wild-prev');
    this.nextBtn = document.getElementById('wild-next');
    this.currentIndex = 0;
    this.cardWidth = 280 + 32; // card size + margin gap
    this.isDragging = false;
    this.startX = 0;
    this.scrollLeft = 0;

    if (!this.slider || !this.prevBtn || !this.nextBtn) return;

    this.initEvents();
    this.updateNavButtons();
  }

  initEvents() {
    // Nav Button Clicks
    this.prevBtn.addEventListener('click', () => this.slide(-1));
    this.nextBtn.addEventListener('click', () => this.slide(1));

    // Mouse and Touch Drag support
    this.slider.addEventListener('mousedown', (e) => this.dragStart(e));
    this.slider.addEventListener('mouseleave', () => this.dragEnd());
    this.slider.addEventListener('mouseup', () => this.dragEnd());
    this.slider.addEventListener('mousemove', (e) => this.dragMove(e));

    this.slider.addEventListener('touchstart', (e) => this.dragStart(e));
    this.slider.addEventListener('touchend', () => this.dragEnd());
    this.slider.addEventListener('touchmove', (e) => this.dragMove(e));

    // Listen to resize to recalculate slider steps
    window.addEventListener('resize', () => {
      this.cardWidth = this.slider.querySelector('.wildlife-card')?.offsetWidth + 32 || this.cardWidth;
      this.slide(0); // Snap back to correct alignment
    });
  }

  slide(direction) {
    const maxVisibleIndex = this.getMaxScrollIndex();
    this.currentIndex += direction;

    if (this.currentIndex < 0) {
      this.currentIndex = 0;
    } else if (this.currentIndex > maxVisibleIndex) {
      this.currentIndex = maxVisibleIndex;
    }

    const offset = -this.currentIndex * this.cardWidth;
    
    if (window.gsap) {
      window.gsap.to(this.slider, {
        x: offset,
        duration: 0.5,
        ease: "power2.out"
      });
    } else {
      this.slider.style.transform = `translateX(${offset}px)`;
    }

    this.updateNavButtons();
  }

  getMaxScrollIndex() {
    const totalCards = this.slider.children.length;
    const containerWidth = this.slider.parentElement.offsetWidth;
    const cardsInView = Math.floor(containerWidth / this.cardWidth) || 1;
    const maxIndex = totalCards - cardsInView;
    return maxIndex < 0 ? 0 : maxIndex;
  }

  updateNavButtons() {
    const maxIndex = this.getMaxScrollIndex();
    
    // Disable styling based on scroll positions
    this.prevBtn.style.opacity = this.currentIndex === 0 ? '0.4' : '1';
    this.prevBtn.style.pointerEvents = this.currentIndex === 0 ? 'none' : 'auto';

    this.nextBtn.style.opacity = this.currentIndex >= maxIndex ? '0.4' : '1';
    this.nextBtn.style.pointerEvents = this.currentIndex >= maxIndex ? 'none' : 'auto';
  }

  dragStart(e) {
    this.isDragging = true;
    this.startX = (e.pageX || e.touches[0].pageX) - this.slider.offsetLeft;
    // Extract current transform value
    const transform = window.getComputedStyle(this.slider).getPropertyValue('transform');
    if (transform && transform !== 'none') {
      const matrix = new DOMMatrixReadOnly(transform);
      this.scrollLeft = matrix.m41;
    } else {
      this.scrollLeft = 0;
    }
    this.slider.style.cursor = 'grabbing';
  }

  dragEnd() {
    if (!this.isDragging) return;
    this.isDragging = false;
    this.slider.style.cursor = 'pointer';

    // Snap to nearest card
    const targetIndex = Math.round(-this.scrollLeft / this.cardWidth);
    this.currentIndex = targetIndex;
    this.slide(0);
  }

  dragMove(e) {
    if (!this.isDragging) return;
    e.preventDefault();
    const x = (e.pageX || e.touches[0].pageX) - this.slider.offsetLeft;
    const walk = x - this.startX;
    this.scrollLeft += walk * 0.25; // dampening drag rate
    this.slider.style.transform = `translateX(${this.scrollLeft}px)`;
  }
}

// Instantiate on load
document.addEventListener('DOMContentLoaded', () => {
  window.WildlifeCarouselInstance = new WildlifeCarousel();
});
