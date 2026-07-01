/* AI-Powered Smart Autocomplete Search Engine */

class SearchEngine {
  constructor() {
    this.searchInput = document.getElementById('search-input');
    this.suggestionsBox = document.getElementById('search-suggestions');
    this.searchIndex = [];
    
    if (!this.searchInput || !this.suggestionsBox) return;

    this.buildIndex();
    this.initEvents();
  }

  buildIndex() {
    if (!window.EcoData) return;

    // Index Destinations
    window.EcoData.destinations.forEach(dest => {
      this.searchIndex.push({
        title: dest.name,
        subtitle: dest.location,
        type: "Destination",
        targetId: `dest-card-${dest.id}`,
        anchor: "destinations",
        keywords: [dest.name, dest.location, ...dest.adventureTags, "waterfall", "sanctuary", "forest"]
      });
    });

    // Index Stays
    window.EcoData.stays.forEach(stay => {
      this.searchIndex.push({
        title: stay.name,
        subtitle: `${stay.category} in ${stay.location}`,
        type: "Resort",
        targetId: `stay-card-${stay.id}`,
        anchor: "stays",
        keywords: [stay.name, stay.category, stay.location, "hotel", "cottage", "camp", "lodge"]
      });
    });

    // Index Wildlife
    window.EcoData.wildlife.forEach(wild => {
      this.searchIndex.push({
        title: wild.name,
        subtitle: wild.scientific,
        type: "Wildlife",
        targetId: `wildlife-card-${wild.id}`,
        anchor: "wildlife",
        keywords: [wild.name, wild.scientific, "animal", "bird", "mammal", "species"]
      });
    });

    // Index general activities
    const activities = [
      { name: "Safari", keywords: ["jeep safari", "lion safari", "open tiger safari", "zoo"] },
      { name: "Bird Watching", keywords: ["birds", "wetlands", "photography", "guided birding"] },
      { name: "Nature Walk", keywords: ["trekking", "hiking", "forest path", "botany"] },
      { name: "Glass Bridge Skywalk", keywords: ["glass bridge", "rajgir skywalk", "suspension bridge"] },
      { name: "Hot Springs", keywords: ["bhimbandh springs", "warm waters", "medicinal pool"] },
      { name: "Dolphin Sightseeing", keywords: ["river cruise", "gangetic susus", "boating bhagalpur"] }
    ];

    activities.forEach(act => {
      this.searchIndex.push({
        title: act.name,
        subtitle: "Adventure Activity",
        type: "Adventure",
        targetId: "adventure",
        anchor: "adventure",
        keywords: [act.name, ...act.keywords]
      });
    });
  }

  initEvents() {
    this.searchInput.addEventListener('input', (e) => {
      const val = e.target.value.trim().toLowerCase();
      this.renderSuggestions(val);
    });

    // Close suggestions box on click outside
    document.addEventListener('click', (e) => {
      if (e.target !== this.searchInput && e.target !== this.suggestionsBox) {
        this.suggestionsBox.classList.remove('active');
      }
    });

    // Focus input to reopen suggestions if query is active
    this.searchInput.addEventListener('focus', () => {
      const val = this.searchInput.value.trim().toLowerCase();
      if (val.length > 0) this.suggestionsBox.classList.add('active');
    });
  }

  renderSuggestions(query) {
    if (query.length === 0) {
      this.suggestionsBox.classList.remove('active');
      this.suggestionsBox.innerHTML = '';
      return;
    }

    const matches = this.searchIndex.filter(item => {
      return item.title.toLowerCase().includes(query) || 
             item.subtitle.toLowerCase().includes(query) ||
             item.keywords.some(kw => kw.toLowerCase().includes(query));
    }).slice(0, 6); // Cap matches at 6

    if (matches.length === 0) {
      this.suggestionsBox.innerHTML = `
        <div style="padding:15px; color:var(--text-light); text-align:center; font-size:0.9rem;">
          No matching eco-destinations found.
        </div>
      `;
    } else {
      this.suggestionsBox.innerHTML = matches.map(match => `
        <div class="suggestion-item" data-target="${match.targetId}" data-anchor="${match.anchor}">
          <div>
            <div style="font-weight:600; color:var(--text-primary); font-size:0.95rem;">${match.title}</div>
            <div style="font-size:0.8rem; color:var(--text-light);">${match.subtitle}</div>
          </div>
          <span class="suggestion-type">${match.type}</span>
        </div>
      `).join('');

      // Add click listeners to items
      this.suggestionsBox.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', () => {
          const targetId = item.dataset.target;
          const anchor = item.dataset.anchor;
          
          this.navigateToItem(anchor, targetId);
          this.suggestionsBox.classList.remove('active');
          this.searchInput.value = '';
        });
      });
    }

    this.suggestionsBox.classList.add('active');
  }

  navigateToItem(anchorId, targetId) {
    const anchorEl = document.getElementById(anchorId);
    if (!anchorEl) return;

    // Smooth scroll to section
    anchorEl.scrollIntoView({ behavior: 'smooth' });

    // Wait for scroll to settle, then highlight card
    setTimeout(() => {
      const cardEl = document.getElementById(targetId);
      if (cardEl) {
        cardEl.style.outline = "3px solid var(--accent)";
        cardEl.style.boxShadow = "0 0 25px var(--accent)";
        
        // Remove highlight after 2.5s
        setTimeout(() => {
          cardEl.style.outline = "none";
          cardEl.style.boxShadow = "";
        }, 2500);
      }
    }, 800);
  }
}

// Instantiate on load
document.addEventListener('DOMContentLoaded', () => {
  window.SearchEngineInstance = new SearchEngine();
});
