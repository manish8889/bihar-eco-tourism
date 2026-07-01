/* Dynamic Destination Detail Page Loader */

document.addEventListener('DOMContentLoaded', () => {
  loadDestinationDetail();
});

function loadDestinationDetail() {
  if (!window.EcoData) {
    console.error("EcoData dataset not found!");
    return;
  }

  // Parse URL parameter ?id=<destination_id>
  const urlParams = new URLSearchParams(window.location.search);
  const destId = urlParams.get('id');

  if (!destId) {
    // If no ID is specified, fallback gracefully to the home index page
    window.location.href = "index.html";
    return;
  }

  const dest = window.EcoData.destinations.find(d => d.id === destId);

  if (!dest) {
    // If invalid ID, redirect home
    window.location.href = "index.html";
    return;
  }

  // 1. Update Head title and SEO tag description
  document.title = `${dest.name} | Bihar Eco Tourism Guide`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute("content", `Detailed travel guidelines, eco-resort prices, adventure trails, and booking rates for ${dest.name} in Bihar.`);
  }

  // 2. Populate Hero Details
  const heroTitle = document.getElementById('detail-hero-title');
  const heroLoc = document.getElementById('detail-hero-location');
  const heroImg = document.getElementById('detail-hero-bg');
  const breadcrumbName = document.getElementById('breadcrumb-dest-name');

  if (heroTitle) heroTitle.textContent = dest.name;
  if (heroLoc) heroLoc.textContent = dest.location;
  if (breadcrumbName) breadcrumbName.textContent = dest.name;
  if (heroImg) {
    heroImg.src = dest.image;
    heroImg.alt = `${dest.name} Scenic Backdrop`;
  }

  // 3. Populate Descriptions
  const descShort = document.getElementById('detail-desc-short');
  const descLong = document.getElementById('detail-desc-long');

  if (descShort) descShort.textContent = dest.shortDesc;
  if (descLong) descLong.textContent = dest.longDesc;

  // 4. Populate Facts Bento Grid
  const factsContainer = document.getElementById('detail-facts-grid');
  if (factsContainer) {
    factsContainer.innerHTML = '';
    Object.entries(dest.facts).forEach(([key, val]) => {
      if (key.toLowerCase() === 'coordinates') {
        const factCard = document.createElement('div');
        factCard.className = 'glass-panel';
        factCard.style.padding = '15px';
        factCard.style.borderRadius = 'var(--radius-md)';
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(val)}`;
        factCard.innerHTML = `
          <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-light); font-weight:600; display:block; margin-bottom:5px;">GPS Coordinates</span>
          <strong style="font-size: 1.1rem; color: var(--primary); font-family: var(--font-headings); display:block; margin-bottom:8px;">${val}</strong>
          <a href="${mapsUrl}" target="_blank" class="btn btn-secondary" style="padding: 6px 12px; font-size: 0.75rem; display: inline-flex; align-items: center; gap: 6px; text-decoration: none;">
            <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" fill="none" style="flex-shrink:0;">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            View on Map
          </a>
        `;
        factsContainer.appendChild(factCard);
        return;
      }
      
      const readableKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
      const factCard = document.createElement('div');
      factCard.className = 'glass-panel';
      factCard.style.padding = '15px';
      factCard.style.borderRadius = 'var(--radius-md)';
      factCard.innerHTML = `
        <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-light); font-weight:600; display:block; margin-bottom:5px;">${readableKey}</span>
        <strong style="font-size: 1.1rem; color: var(--primary); font-family: var(--font-headings);">${val}</strong>
      `;
      factsContainer.appendChild(factCard);
    });
  }

  // 5. Populate Adventure Tags
  const adventureGrid = document.getElementById('detail-adventure-grid');
  if (adventureGrid) {
    adventureGrid.innerHTML = '';
    dest.adventureTags.forEach(tag => {
      const tagCard = document.createElement('div');
      tagCard.className = 'glass-panel';
      tagCard.style.padding = '12px 20px';
      tagCard.style.borderRadius = 'var(--radius-xl)';
      tagCard.style.display = 'flex';
      tagCard.style.alignItems = 'center';
      tagCard.style.gap = '10px';
      tagCard.style.fontSize = '0.9rem';
      tagCard.style.fontWeight = '600';
      tagCard.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--primary)" stroke-width="2.5" style="flex-shrink:0;">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${tag}</span>
      `;
      adventureGrid.appendChild(tagCard);
    });
  }

  // 6. Populate How to Reach Facility
  const reachGrid = document.getElementById('detail-reach-grid');
  if (reachGrid && dest.howToReach) {
    reachGrid.innerHTML = `
      <div class="glass-panel" style="display:flex; align-items:flex-start; gap:15px; padding:15px; border-radius:var(--radius-md);">
        <div style="background:var(--bg-tertiary); width:40px; height:40px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.38 3.46L16 17l-4-4-4-4z"></path>
            <line x1="21" y1="3" x2="12" y2="12"></line>
          </svg>
        </div>
        <div>
          <strong style="font-size:0.95rem; font-family:var(--font-headings); display:block; margin-bottom:3px; color:var(--text-primary);">By Air</strong>
          <p style="font-size:0.9rem; line-height:1.4; color:var(--text-secondary);">${dest.howToReach.air}</p>
        </div>
      </div>

      <div class="glass-panel" style="display:flex; align-items:flex-start; gap:15px; padding:15px; border-radius:var(--radius-md);">
        <div style="background:var(--bg-tertiary); width:40px; height:40px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12" y2="18"></line>
            <line x1="8" y1="6" x2="16" y2="6"></line>
            <line x1="8" y1="10" x2="16" y2="10"></line>
          </svg>
        </div>
        <div>
          <strong style="font-size:0.95rem; font-family:var(--font-headings); display:block; margin-bottom:3px; color:var(--text-primary);">By Train</strong>
          <p style="font-size:0.9rem; line-height:1.4; color:var(--text-secondary);">${dest.howToReach.rail}</p>
        </div>
      </div>

      <div class="glass-panel" style="display:flex; align-items:flex-start; gap:15px; padding:15px; border-radius:var(--radius-md);">
        <div style="background:var(--bg-tertiary); width:40px; height:40px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1 .4-1 1v7h2"></path>
            <circle cx="7.5" cy="17.5" r="2.5"></circle>
            <circle cx="16.5" cy="17.5" r="2.5"></circle>
          </svg>
        </div>
        <div>
          <strong style="font-size:0.95rem; font-family:var(--font-headings); display:block; margin-bottom:3px; color:var(--text-primary);">By Road</strong>
          <p style="font-size:0.9rem; line-height:1.4; color:var(--text-secondary);">${dest.howToReach.road}</p>
        </div>
      </div>
    `;
  }

  // 6.5. Populate Official Lodging Options if present
  const accommContainer = document.getElementById('detail-accomm-container');
  const accommGrid = document.getElementById('detail-accomm-grid');
  if (accommContainer && accommGrid) {
    if (dest.accommodations && dest.accommodations.length > 0) {
      accommContainer.style.display = 'block';
      accommGrid.innerHTML = '';
      dest.accommodations.forEach(acc => {
        const row = document.createElement('div');
        row.className = 'glass-panel';
        row.style.padding = '15px';
        row.style.borderRadius = 'var(--radius-md)';
        row.innerHTML = `
          <strong style="color: var(--primary); font-family: var(--font-headings); display: block; margin-bottom: 5px;">${acc.location}</strong>
          <span style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.5; display: block;">${acc.rooms}</span>
        `;
        accommGrid.appendChild(row);
      });
    } else {
      accommContainer.style.display = 'none';
    }
  }

  // 6.6. Populate Official Helplines if present
  const helplineContainer = document.getElementById('detail-helpline-container');
  const helplineNotice = document.getElementById('detail-booking-notice');
  const helplineGrid = document.getElementById('detail-helpline-grid');
  if (helplineContainer && helplineGrid) {
    if (dest.helplines && dest.helplines.length > 0) {
      helplineContainer.style.display = 'block';
      helplineContainer.id = "helplines"; // Dynamic anchor
      
      if (helplineNotice) {
        helplineNotice.textContent = dest.bookingNotice || "For tour bookings, permits, or queries, please contact the local range offices directly:";
      }
      helplineGrid.innerHTML = '';
      dest.helplines.forEach(help => {
        const item = document.createElement('div');
        item.className = 'glass-panel';
        item.style.padding = '15px';
        item.style.borderRadius = 'var(--radius-md)';
        item.style.display = 'flex';
        item.style.alignItems = 'center';
        item.style.gap = '12px';
        item.innerHTML = `
          <div style="background:var(--bg-tertiary); width:35px; height:35px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <div>
            <span style="font-size:0.8rem; color:var(--text-light); text-transform:uppercase; font-weight:600; display:block;">${help.role}</span>
            <a href="tel:${help.contact.split(' ')[0]}" style="font-size:1.05rem; font-weight:700; color:var(--primary); text-decoration:none;">${help.contact}</a>
          </div>
        `;
        helplineGrid.appendChild(item);
      });
    } else {
      helplineContainer.style.display = 'none';
    }
  }

  // 7. Populate Local Eco Stays (Filtered by matching location coordinates/terms)
  const staysGrid = document.getElementById('detail-stays-grid');
  if (staysGrid) {
    staysGrid.innerHTML = '';
    // Look up stays whose location matches target district or name keyword
    const matchLocation = dest.location.split(' ')[0].toLowerCase(); // e.g. "West" or "Nalanda"
    const filteredStays = window.EcoData.stays.filter(stay => 
      stay.location.toLowerCase().includes(matchLocation) || 
      stay.location.toLowerCase().includes(dest.id.split('_')[0])
    );

    if (filteredStays.length === 0) {
      // Fallback: show general premium stays if no specific location stay matches
      window.EcoData.stays.slice(0, 2).forEach(stay => renderStayCard(stay, staysGrid, destId));
    } else {
      filteredStays.forEach(stay => renderStayCard(stay, staysGrid, destId));
    }
  }

  // 7. Bind dynamic book CTA buttons
  const bookBtn = document.getElementById('detail-book-now-btn');
  if (bookBtn) {
    bookBtn.setAttribute('data-destination', destId);
  }
}

function renderStayCard(stay, container, destId) {
  const card = document.createElement('div');
  card.className = 'stay-card';
  card.innerHTML = `
    <div class="stay-img-box">
      <img src="${stay.image}" alt="${stay.name}">
      <span class="stay-tag">${stay.category}</span>
    </div>
    <div class="stay-info">
      <div class="stay-meta">
        <span class="stay-location">${stay.location}</span>
        <span class="stay-rating">★ ${stay.rating}</span>
      </div>
      <h3 class="stay-title" style="font-size: 1.15rem; margin-bottom:8px;">${stay.name}</h3>
      <div class="stay-pricing" style="margin-top:10px; border-top: 1px solid var(--bg-tertiary); padding-top:10px;">
        <div>
          <span style="font-size:0.7rem; color:var(--text-light); display:block;">PRICE PER NIGHT</span>
          <span class="stay-price-val" style="font-size:1.1rem;">₹${stay.price}</span>
        </div>
        <button class="btn btn-primary book-cta" data-destination="${destId}" style="padding:0.5rem 1rem; font-size:0.8rem;">Book Stays</button>
      </div>
    </div>
  `;
  container.appendChild(card);
}
