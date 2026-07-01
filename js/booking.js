/* Multi-Step Booking Wizard System */

class BookingWizard {
  constructor() {
    this.modal = document.getElementById('booking-modal');
    this.currentStep = 1;
    this.totalSteps = 7;
    this.bookingData = {
      destination: "",
      date: "",
      guests: 1,
      accommodation: "",
      activities: [],
      name: "",
      email: ""
    };

    this.initEvents();
  }

  initEvents() {
    // Open Booking modal on click of any CTA buttons
    document.addEventListener('click', (e) => {
      const target = e.target.closest('.book-cta') || (e.target.classList.contains('book-cta') ? e.target : null);
      if (target) {
        const destId = target.dataset.destination || "";
        if (destId === 'rajgir') {
          e.preventDefault();
          window.open('https://rajgirsafari.bihar.gov.in/', '_blank');
          return;
        }
        if (destId === 'valmiki') {
          e.preventDefault();
          window.open('https://www.valmikitigerreserve.com', '_blank');
          return;
        }
        if (destId === 'kaimur') {
          e.preventDefault();
          const helplinesEl = document.getElementById('helplines');
          if (helplinesEl) {
            const headerOffset = 95;
            const elementPosition = helplinesEl.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          } else {
            window.location.href = "destination-detail.html?id=kaimur#helplines";
          }
          return;
        }
        e.preventDefault();
        this.openWizard(destId);
      }
    });

    // Close Modal
    const closeBtn = document.querySelector('.booking-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeWizard());
    }

    // Modal click out to close
    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.closeWizard();
      });
    }

    // Step Navigations
    const prevBtn = document.getElementById('btn-prev');
    const nextBtn = document.getElementById('btn-next');

    if (prevBtn) prevBtn.addEventListener('click', () => this.navigateStep(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => this.navigateStep(1));

    // Handle Accommodation cards select
    document.querySelectorAll('.booking-card-option[data-accom]').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.booking-card-option[data-accom]').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        this.bookingData.accommodation = card.dataset.accom;
      });
    });

    // Handle Activities checklist checkboxes
    document.querySelectorAll('.activity-checkbox').forEach(chk => {
      chk.addEventListener('change', () => {
        const val = chk.value;
        if (chk.checked) {
          if (!this.bookingData.activities.includes(val)) this.bookingData.activities.push(val);
        } else {
          this.bookingData.activities = this.bookingData.activities.filter(a => a !== val);
        }
      });
    });
  }

  openWizard(preselectedDestId = "") {
    this.modal.classList.add('active');
    this.currentStep = 1;
    this.showStep(this.currentStep);
    
    // Set dynamic dropdown options if available
    const destSelect = document.getElementById('booking-dest-select');
    if (destSelect && window.EcoData) {
      destSelect.innerHTML = '<option value="">-- Choose a Destination --</option>';
      window.EcoData.destinations.forEach(dest => {
        const opt = document.createElement('option');
        opt.value = dest.id;
        opt.textContent = dest.name;
        if (dest.id === preselectedDestId) {
          opt.selected = true;
          this.bookingData.destination = dest.id;
        }
        destSelect.appendChild(opt);
      });
    }

    // Reset fields
    this.bookingData = {
      destination: preselectedDestId,
      date: "",
      guests: 1,
      accommodation: "",
      activities: [],
      name: "",
      email: ""
    };

    // Reset selection indicators in UI
    document.querySelectorAll('.booking-card-option[data-accom]').forEach(c => c.classList.remove('selected'));
    document.querySelectorAll('.activity-checkbox').forEach(chk => chk.checked = false);
    
    const nameField = document.getElementById('booking-name');
    const emailField = document.getElementById('booking-email');
    const dateField = document.getElementById('booking-date');
    const guestsField = document.getElementById('booking-guests');
    
    if (nameField) nameField.value = "";
    if (emailField) emailField.value = "";
    if (dateField) dateField.value = "";
    if (guestsField) guestsField.value = 1;
  }

  closeWizard() {
    this.modal.classList.remove('active');
  }

  showStep(step) {
    // Hide all steps
    document.querySelectorAll('.booking-step').forEach(s => s.classList.remove('active'));
    
    // Show current step
    const targetStep = document.getElementById(`booking-step-${step}`);
    if (targetStep) targetStep.classList.add('active');

    // Update Progress Fill
    const progressFill = document.querySelector('.booking-progress-fill');
    if (progressFill) {
      const percentage = (step / this.totalSteps) * 100;
      progressFill.style.width = `${percentage}%`;
    }

    // Update buttons visibility
    const prevBtn = document.getElementById('btn-prev');
    const nextBtn = document.getElementById('btn-next');

    if (prevBtn) {
      prevBtn.style.visibility = (step === 1 || step === 7) ? 'hidden' : 'visible';
    }

    if (nextBtn) {
      if (step === 6) {
        nextBtn.textContent = 'Confirm & Pay';
      } else if (step === 7) {
        nextBtn.style.visibility = 'hidden';
      } else {
        nextBtn.textContent = 'Next Step';
        nextBtn.style.visibility = 'visible';
      }
    }

    // If step is 6, render the summary details
    if (step === 6) {
      this.renderSummary();
    }
    
    // If step is 7, render the final e-ticket
    if (step === 7) {
      this.generateTicket();
    }
  }

  navigateStep(delta) {
    const nextStep = this.currentStep + delta;
    
    // Validation before moving forward
    if (delta > 0 && !this.validateCurrentStep()) {
      return;
    }

    if (nextStep >= 1 && nextStep <= this.totalSteps) {
      this.currentStep = nextStep;
      this.showStep(this.currentStep);
    }
  }

  validateCurrentStep() {
    if (this.currentStep === 1) {
      const destSelect = document.getElementById('booking-dest-select');
      if (destSelect) this.bookingData.destination = destSelect.value;
      if (!this.bookingData.destination) {
        alert("Please select your dream destination.");
        return false;
      }
    } 
    else if (this.currentStep === 2) {
      const dateVal = document.getElementById('booking-date').value;
      if (!dateVal) {
        alert("Please select a tour date.");
        return false;
      }
      this.bookingData.date = dateVal;
    } 
    else if (this.currentStep === 3) {
      const guestsVal = parseInt(document.getElementById('booking-guests').value, 10);
      if (isNaN(guestsVal) || guestsVal < 1) {
        alert("Please enter at least 1 guest.");
        return false;
      }
      this.bookingData.guests = guestsVal;
    } 
    else if (this.currentStep === 4) {
      if (!this.bookingData.accommodation) {
        alert("Please choose an eco accommodation style.");
        return false;
      }
    } 
    else if (this.currentStep === 5) {
      // Activities checklist is optional, so no strict blocks
    } 
    else if (this.currentStep === 6) {
      const nameVal = document.getElementById('booking-name').value.trim();
      const emailVal = document.getElementById('booking-email').value.trim();

      if (!nameVal || !emailVal) {
        alert("Please fill in your name and email contact.");
        return false;
      }
      this.bookingData.name = nameVal;
      this.bookingData.email = emailVal;
    }
    return true;
  }

  renderSummary() {
    const summaryBox = document.getElementById('booking-summary-details');
    if (!summaryBox || !window.EcoData) return;

    const destObj = window.EcoData.destinations.find(d => d.id === this.bookingData.destination);
    const destName = destObj ? destObj.name : this.bookingData.destination;

    let basePrice = 2000; // default eco-fee
    const stayObj = window.EcoData.stays.find(s => s.category.toLowerCase().includes(this.bookingData.accommodation.toLowerCase()));
    if (stayObj) basePrice = stayObj.price;

    const totalCost = basePrice * this.bookingData.guests;

    summaryBox.innerHTML = `
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
        <div>
          <strong style="color:var(--text-light); font-size:0.85rem; text-transform:uppercase;">Destination</strong>
          <p style="font-weight:600; font-size:1.1rem; margin-top:3px;">${destName}</p>
        </div>
        <div>
          <strong style="color:var(--text-light); font-size:0.85rem; text-transform:uppercase;">Date</strong>
          <p style="font-weight:600; font-size:1.1rem; margin-top:3px;">${this.bookingData.date}</p>
        </div>
        <div>
          <strong style="color:var(--text-light); font-size:0.85rem; text-transform:uppercase;">Guests</strong>
          <p style="font-weight:600; font-size:1.1rem; margin-top:3px;">${this.bookingData.guests} Traveller(s)</p>
        </div>
        <div>
          <strong style="color:var(--text-light); font-size:0.85rem; text-transform:uppercase;">Stay Style</strong>
          <p style="font-weight:600; font-size:1.1rem; margin-top:3px; text-transform:capitalize;">${this.bookingData.accommodation}</p>
        </div>
      </div>
      <div style="border-top:1px dashed var(--glass-border); padding-top:15px; margin-bottom: 20px;">
        <strong style="color:var(--text-light); font-size:0.85rem; text-transform:uppercase;">Activities Checklist</strong>
        <p style="font-size:1rem; margin-top:3px;">${this.bookingData.activities.length > 0 ? this.bookingData.activities.join(', ') : 'None selected'}</p>
      </div>
      <div style="background:var(--bg-tertiary); padding: 15px; border-radius: var(--radius-md); display:flex; justify-content:space-between; align-items:center;">
        <strong style="font-size:1.1rem;">Total Cost Estimate:</strong>
        <span style="font-size:1.5rem; font-weight:700; color:var(--primary);">₹${totalCost.toLocaleString('en-IN')}</span>
      </div>
    `;
  }

  generateTicket() {
    const ticketBox = document.getElementById('booking-ticket-box');
    if (!ticketBox || !window.EcoData) return;

    const destObj = window.EcoData.destinations.find(d => d.id === this.bookingData.destination);
    const destName = destObj ? destObj.name : this.bookingData.destination;
    const ticketId = "BET-" + Math.floor(100000 + Math.random() * 900000);

    ticketBox.innerHTML = `
      <div class="ticket-wrapper" style="text-align: center;">
        <div style="margin-bottom: 20px;">
          <h4 style="color: var(--primary); font-size:1.4rem;">BIHAR ECO TOURISM</h4>
          <span style="font-size: 0.8rem; text-transform:uppercase; color: var(--text-light); letter-spacing:1.5px;">Official E-Ticket</span>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap:15px; text-align:left; margin-bottom: 30px; position:relative; z-index: 5;">
          <div>
            <strong style="font-size:0.75rem; color:var(--text-light); text-transform:uppercase;">Tourist Name</strong>
            <p style="font-weight:600;">${this.bookingData.name}</p>
          </div>
          <div>
            <strong style="font-size:0.75rem; color:var(--text-light); text-transform:uppercase;">Booking Ref ID</strong>
            <p style="font-weight:600; color:var(--primary);">${ticketId}</p>
          </div>
          <div>
            <strong style="font-size:0.75rem; color:var(--text-light); text-transform:uppercase;">Destination</strong>
            <p style="font-weight:600;">${destName}</p>
          </div>
          <div>
            <strong style="font-size:0.75rem; color:var(--text-light); text-transform:uppercase;">Date of Tour</strong>
            <p style="font-weight:600;">${this.bookingData.date}</p>
          </div>
          <div>
            <strong style="font-size:0.75rem; color:var(--text-light); text-transform:uppercase;">Traveller Count</strong>
            <p style="font-weight:600;">${this.bookingData.guests} Guest(s)</p>
          </div>
          <div>
            <strong style="font-size:0.75rem; color:var(--text-light); text-transform:uppercase;">Stay Category</strong>
            <p style="font-weight:600; text-transform:capitalize;">${this.bookingData.accommodation}</p>
          </div>
        </div>
        
        <!-- Barcode styling mockup -->
        <div style="margin: 25px 0 15px 0; display:flex; flex-direction:column; align-items:center;">
          <div style="width:180px; height:45px; background: repeating-linear-gradient(90deg, #122415, #122415 2px, transparent 2px, transparent 6px); opacity:0.85;"></div>
          <span style="font-size:0.75rem; font-family:monospace; margin-top:5px; color:var(--text-light);">${ticketId}</span>
        </div>
        
        <p style="font-size:0.8rem; color:var(--text-light); font-style:italic;">Please carry a soft copy of this ticket and an ID card during the tour.</p>
        <button class="btn btn-primary" onclick="window.print()" style="margin-top:20px; padding: 0.6rem 1.5rem; font-size:0.85rem;">Print Ticket</button>
      </div>
    `;
  }
}

// Instantiate on load
document.addEventListener('DOMContentLoaded', () => {
  window.BookingWizardInstance = new BookingWizard();
});
