/* Clickable Bihar SVG Map Interaction Engine */

class TourismMap {
  constructor() {
    this.mapSvg = document.getElementById('bihar-svg-map');
    this.cardContainer = document.getElementById('map-details-card');
    
    if (!this.mapSvg) return;
    
    this.initEvents();
  }

  initEvents() {
    // Listen for clicks on paths (Districts/Regions)
    this.mapSvg.addEventListener('click', (e) => {
      const targetPath = e.target.closest('.map-path');
      const targetSpot = e.target.closest('.map-spot');

      if (targetPath) {
        const destId = targetPath.dataset.dest;
        this.selectLocation(destId, targetPath, null);
      } 
      else if (targetSpot) {
        const destId = targetSpot.dataset.dest;
        this.selectLocation(destId, null, targetSpot);
      }
    });
  }

  selectLocation(destId, pathElement, spotElement) {
    if (!destId || !window.EcoData) return;

    // Reset active classes on all paths and spots
    const paths = this.mapSvg.querySelectorAll('.map-path');
    const spots = this.mapSvg.querySelectorAll('.map-spot');

    paths.forEach(p => p.classList.remove('active'));
    spots.forEach(s => s.classList.remove('active'));

    // Highlight active element
    if (pathElement) {
      pathElement.classList.add('active');
    } else {
      // Find path matching ID
      const matchingPath = this.mapSvg.querySelector(`.map-path[data-dest="${destId}"]`);
      if (matchingPath) matchingPath.classList.add('active');
    }

    if (spotElement) {
      spotElement.classList.add('active');
    } else {
      // Find spot matching ID
      const matchingSpot = this.mapSvg.querySelector(`.map-spot[data-dest="${destId}"]`);
      if (matchingSpot) matchingSpot.classList.add('active');
    }

    // Get Destination details
    const dest = window.EcoData.destinations.find(d => d.id === destId);
    if (dest) {
      this.renderDetailsCard(dest);
    }
  }

  renderDetailsCard(dest) {
    if (!this.cardContainer) return;

    // Animate transition using GSAP if loaded
    if (window.gsap) {
      window.gsap.fromTo(this.cardContainer, 
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power1.out" }
      );
    }

    const factsHtml = Object.entries(dest.facts).map(([key, val]) => {
      if (key.toLowerCase() === 'coordinates') {
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(val)}`;
        return `
          <div style="margin-bottom:8px; border-bottom:1px solid var(--glass-border); padding-bottom:5px;">
            <span style="font-size:0.75rem; color:var(--text-light); text-transform:uppercase;">GPS Coordinates</span>
            <p style="font-weight:600; font-size:0.95rem; margin-top:2px; display:flex; justify-content:space-between; align-items:center;">
              <span>${val}</span>
              <a href="${mapsUrl}" target="_blank" style="font-size:0.7rem; color:var(--primary); font-weight:700; text-decoration:none; display:inline-flex; align-items:center; gap:3px;">
                <svg viewBox="0 0 24 24" width="10" height="10" stroke="currentColor" stroke-width="2.5" fill="none" style="flex-shrink:0;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Map
              </a>
            </p>
          </div>
        `;
      }
      
      const title = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
      return `
        <div style="margin-bottom:8px; border-bottom:1px solid var(--glass-border); padding-bottom:5px;">
          <span style="font-size:0.75rem; color:var(--text-light); text-transform:uppercase;">${title}</span>
          <p style="font-weight:600; font-size:0.95rem; margin-top:2px;">${val}</p>
        </div>
      `;
    }).join('');

    const tagsHtml = dest.adventureTags.map(tag => `
      <span class="amenity-chip" style="background:var(--primary); color:#ffffff; padding: 4px 10px; border-radius:12px; font-size:0.75rem; font-weight:600;">${tag}</span>
    `).join(' ');

    this.cardContainer.innerHTML = `
      <div class="glass-panel" style="padding:0; overflow:hidden; border-radius:var(--radius-xl); display:flex; flex-direction:column; height:100%;">
        <div style="height:180px; position:relative; overflow:hidden;">
          <img src="${dest.image}" alt="${dest.name}" style="width:100%; height:100%; object-fit:cover;">
          <div style="position:absolute; bottom:15px; left:15px; background:rgba(0,0,0,0.6); color:#fff; padding:3px 10px; border-radius:4px; font-size:0.8rem; font-weight:600;">
            ★ ${dest.rating}
          </div>
        </div>
        <div style="padding:20px; flex:1; display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <span style="font-size:0.8rem; color:var(--secondary); text-transform:uppercase; letter-spacing:1px; font-weight:700;">${dest.location}</span>
            <h3 style="margin:5px 0 10px 0; font-size:1.35rem;">${dest.name}</h3>
            <p style="font-size:0.9rem; line-height:1.5; color:var(--text-secondary); margin-bottom:15px;">${dest.shortDesc}</p>
            
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:20px;">
              ${factsHtml}
            </div>
            
            <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:20px;">
              ${tagsHtml}
            </div>
          </div>
          
          <div style="display:flex; gap:10px; border-top:1px solid var(--glass-border); padding-top:15px;">
            <button class="btn btn-primary book-cta" data-destination="${dest.id}" style="padding: 0.6rem 1.2rem; font-size:0.85rem; flex:1;">Book Eco Tour</button>
            <a href="destination-detail.html?id=${dest.id}" class="btn btn-secondary" style="padding: 0.6rem 1.2rem; font-size:0.85rem; flex:1; text-align:center;">Read Guide</a>
          </div>
        </div>
      </div>
    `;
  }
}

// Instantiate on load
document.addEventListener('DOMContentLoaded', () => {
  window.TourismMapInstance = new TourismMap();
});
