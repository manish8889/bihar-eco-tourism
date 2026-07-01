/* Advanced Autocomplete Search Engine with Visuals & Keyboard Navigation */

class SearchEngine {
  constructor() {
    this.searchInput = document.getElementById('search-input');
    this.suggestionsBox = document.getElementById('search-suggestions');
    this.searchIndex = [];
    this.activeIndex = -1;
    this.currentMatches = [];

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
        image: dest.image,
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
        image: stay.image,
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
        image: wild.image,
        keywords: [wild.name, wild.scientific, "animal", "bird", "mammal", "species"]
      });
    });

    // Index general activities
    const activities = [
      { name: "Safari", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=150", keywords: ["jeep safari", "lion safari", "open tiger safari", "zoo"] },
      { name: "Bird Watching", image: "https://images.unsplash.com/photo-1591821096437-40f75612d5d7?auto=format&fit=crop&q=80&w=150", keywords: ["birds", "wetlands", "photography", "guided birding"] },
      { name: "Nature Walk", image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=150", keywords: ["trekking", "hiking", "forest path", "botany"] },
      { name: "Glass Bridge Skywalk", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=150", keywords: ["glass bridge", "rajgir skywalk", "suspension bridge"] },
      { name: "Hot Springs", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=150", keywords: ["bhimbandh springs", "warm waters", "medicinal pool"] },
      { name: "Dolphin Sightseeing", image: "https://images.unsplash.com/photo-1570473541596-23797500c501?auto=format&fit=crop&q=80&w=150", keywords: ["river cruise", "gangetic susus", "boating bhagalpur"] }
    ];

    activities.forEach(act => {
      this.searchIndex.push({
        title: act.name,
        subtitle: "Adventure Activity",
        type: "Adventure",
        targetId: "adventure",
        anchor: "adventure",
        image: act.image,
        keywords: [act.name, ...act.keywords]
      });
    });
  }

  initEvents() {
    this.searchInput.addEventListener('input', (e) => {
      const val = e.target.value.trim().toLowerCase();
      this.renderSuggestions(val);
      this.filterHomepageCards(val); // Filters homepage cards in real-time as you type
    });

    // Keyboard navigation (Arrow keys + Enter + Esc)
    this.searchInput.addEventListener('keydown', (e) => {
      const isSuggestionsActive = this.suggestionsBox.classList.contains('active');

      if (e.key === 'ArrowDown' && isSuggestionsActive && this.currentMatches.length > 0) {
        e.preventDefault();
        this.activeIndex = (this.activeIndex + 1) % this.currentMatches.length;
        this.updateActiveSuggestion();
      } 
      else if (e.key === 'ArrowUp' && isSuggestionsActive && this.currentMatches.length > 0) {
        e.preventDefault();
        this.activeIndex = (this.activeIndex - 1 + this.currentMatches.length) % this.currentMatches.length;
        this.updateActiveSuggestion();
      } 
      else if (e.key === 'Enter') {
        e.preventDefault();
        if (isSuggestionsActive && this.activeIndex >= 0) {
          const selectedItem = this.currentMatches[this.activeIndex];
          this.selectSuggestion(selectedItem);
        } else {
          // Pressing Enter filters cards and scrolls down to results
          const query = this.searchInput.value;
          this.filterHomepageCards(query);
          this.suggestionsBox.classList.remove('active');
          this.searchInput.blur();
          
          const destsSection = document.getElementById('destinations');
          if (destsSection) {
            const headerOffset = 95;
            const elementPosition = destsSection.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      } 
      else if (e.key === 'Escape') {
        this.suggestionsBox.classList.remove('active');
        this.activeIndex = -1;
      }
    });

    // Bulletproof click-away safety detection (using contains for child node clicks)
    document.addEventListener('click', (e) => {
      const isClickInside = this.searchInput.contains(e.target) || this.suggestionsBox.contains(e.target);
      if (!isClickInside) {
        this.suggestionsBox.classList.remove('active');
        this.activeIndex = -1;
      }
    });

    // Make the Search Glass Icon clickable to submit searches
    const searchIcon = this.searchInput.previousElementSibling;
    if (searchIcon) {
      searchIcon.style.cursor = 'pointer';
      searchIcon.addEventListener('click', () => {
        const query = this.searchInput.value;
        this.filterHomepageCards(query);
        this.suggestionsBox.classList.remove('active');
        
        const destsSection = document.getElementById('destinations');
        if (destsSection) {
          const headerOffset = 95;
          const elementPosition = destsSection.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    }

    // Focus input to reopen suggestions if query is active
    this.searchInput.addEventListener('focus', () => {
      const val = this.searchInput.value.trim().toLowerCase();
      if (val.length > 0) this.suggestionsBox.classList.add('active');
    });
  }

  renderSuggestions(query) {
    this.activeIndex = -1; // Reset active keyboard selection pointer
    
    if (query.length === 0) {
      this.suggestionsBox.classList.remove('active');
      this.suggestionsBox.innerHTML = '';
      this.currentMatches = [];
      return;
    }

    this.currentMatches = this.searchIndex.filter(item => {
      return item.title.toLowerCase().includes(query) || 
             item.subtitle.toLowerCase().includes(query) ||
             item.keywords.some(kw => kw.toLowerCase().includes(query));
    }).slice(0, 6); // Cap matches at 6

    if (this.currentMatches.length === 0) {
      this.suggestionsBox.innerHTML = `
        <div style="padding:15px; color:var(--text-light); text-align:center; font-size:0.9rem;">
          No matching eco-destinations found.
        </div>
      `;
    } else {
      this.suggestionsBox.innerHTML = this.currentMatches.map((match, index) => `
        <div class="suggestion-item" data-index="${index}" style="display:flex; align-items:center; gap:12px; padding:10px 15px; cursor:pointer; border-bottom:1px solid var(--bg-tertiary); transition: background var(--transition-fast);">
          <img src="${match.image}" alt="" style="width:40px; height:40px; border-radius:6px; object-fit:cover; flex-shrink:0; background:var(--bg-tertiary);">
          <div style="flex:1;">
            <div style="font-weight:600; color:var(--text-primary); font-size:0.95rem; line-height:1.2;">${match.title}</div>
            <div style="font-size:0.8rem; color:var(--text-light);">${match.subtitle}</div>
          </div>
          <span class="suggestion-type" style="font-size:0.7rem; text-transform:uppercase; background:var(--primary); color:#ffffff; padding:2px 8px; border-radius:4px; font-weight:600; letter-spacing:0.5px; flex-shrink:0;">${match.type}</span>
        </div>
      `).join('');

      // Add click listeners to items
      this.suggestionsBox.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', () => {
          const index = parseInt(item.dataset.index, 10);
          this.selectSuggestion(this.currentMatches[index]);
        });
      });
    }

    this.suggestionsBox.classList.add('active');
  }

  updateActiveSuggestion() {
    const items = this.suggestionsBox.querySelectorAll('.suggestion-item');
    items.forEach((item, index) => {
      if (index === this.activeIndex) {
        item.classList.add('focused');
        item.style.backgroundColor = 'rgba(76, 175, 80, 0.12)'; // Leaf green tint
        item.style.outline = '1px solid var(--primary)';
        // Scroll item into view inside the dropdown container if needed
        item.scrollIntoView({ block: 'nearest' });
      } else {
        item.classList.remove('focused');
        item.style.backgroundColor = '';
        item.style.outline = 'none';
      }
    });
  }

  selectSuggestion(match) {
    this.navigateToItem(match.anchor, match.targetId);
    this.suggestionsBox.classList.remove('active');
    this.searchInput.value = '';
    this.activeIndex = -1;
  }

  navigateToItem(anchorId, targetId) {
    const anchorEl = document.getElementById(anchorId);
    if (!anchorEl) return;

    const cardEl = document.getElementById(targetId);
    const targetEl = cardEl || anchorEl;

    // Scroll to the card with an offset of 95px to prevent sticky header overlap
    const headerOffset = 95;
    const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Wait for scroll to settle, then highlight card
    setTimeout(() => {
      if (cardEl) {
        cardEl.style.outline = "3px solid var(--accent)";
        cardEl.style.boxShadow = "0 0 25px var(--accent)";
        cardEl.style.transition = "all 0.4s ease";
        
        // Remove highlight after 2.5s
        setTimeout(() => {
          cardEl.style.outline = "none";
          cardEl.style.boxShadow = "";
        }, 2500);
      }
    }, 800);
  }

  filterHomepageCards(query) {
    const cards = document.querySelectorAll('.dest-card');
    if (cards.length === 0) return; // Not on home page or no cards

    const normalizedQuery = query.trim().toLowerCase();

    cards.forEach(card => {
      if (normalizedQuery === "") {
        // If empty query, restore grid visibility
        card.style.display = "";
        card.style.opacity = "";
        card.style.transform = "";
        return;
      }

      const title = card.querySelector('.dest-title')?.textContent.toLowerCase() || "";
      const loc = card.querySelector('.dest-location')?.textContent.toLowerCase() || "";
      const desc = card.querySelector('.dest-desc')?.textContent.toLowerCase() || "";
      
      // Match card attributes against input query
      let isMatch = title.includes(normalizedQuery) || loc.includes(normalizedQuery) || desc.includes(normalizedQuery);
      
      // Special mappings support for VTR
      if (normalizedQuery === "vtr" && (title.includes("valmiki") || loc.includes("champaran") || loc.includes("vtr"))) {
        isMatch = true;
      }

      if (isMatch) {
        card.style.display = "";
        card.style.opacity = "1";
        card.style.transform = "scale(1)";
        card.style.transition = "all 0.4s ease";
      } else {
        card.style.display = "none";
      }
    });
  }
}

// Instantiate on load
document.addEventListener('DOMContentLoaded', () => {
  window.SearchEngineInstance = new SearchEngine();
});
