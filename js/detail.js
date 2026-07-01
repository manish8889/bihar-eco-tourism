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

  // 6. Populate Local Eco Stays (Filtered by matching location coordinates/terms)
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
