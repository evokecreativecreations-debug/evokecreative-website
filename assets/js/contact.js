(() => {

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const services = new Map([
      ['brand-identity-design', 'Brand Identity Design'], ['logo-design', 'Logo Design'],
      ['roblox-ui-design', 'Roblox UI Design'], ['social-media-design', 'Social Media Design'],
      ['playful-ui-starter-kit', 'Evoke Playful UI Full Pack']
    ]);
    const requested = services.get(new URLSearchParams(location.search).get('service'));
    const projectType = document.getElementById('project_type');
    if (requested && projectType) projectType.value = requested;
    const kitEnquiry = requested === 'Evoke Playful UI Full Pack';
    if (kitEnquiry) {
      document.getElementById('contactFormTitle').textContent = 'Ask about the full pack.';
      contactForm.querySelector('label[for="message"]').textContent = 'Tell me about your studio or game';
      contactForm.querySelector('#message').placeholder = 'Your studio or game, how you plan to use the kit and any questions.';
    }

    const statusEl = document.getElementById('formStatus');
    const submitBtn = document.getElementById('formSubmitBtn');
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      if (contactForm.getAttribute('aria-busy') === 'true') return;
      statusEl.className = 'form-status';
      statusEl.textContent = 'Sending your message…';
      contactForm.setAttribute('aria-busy', 'true');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';
      try {
        const formData = new FormData(contactForm);
        if (projectType?.value === 'Evoke Playful UI Full Pack') {
          formData.set('subject', 'Evoke Playful UI full pack enquiry');
        }
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: formData
        });
        const result = await res.json();
        if (res.ok && result.success === true) {
          const serviceKeys = new Map([
            ['Brand Identity Design', 'brand-identity-design'], ['Logo Design', 'logo-design'],
            ['Roblox UI Design', 'roblox-ui-design'], ['Social Media Design', 'social-media-design'],
            ['Game UI Design', 'game-ui-design'], ['Web Design', 'web-design'],
            ['Evoke Playful UI Full Pack', 'playful-ui-starter-kit']
          ]);
          // Accepted by the form provider; this does not claim delivery or a qualified sale.
          try {
            window.EvokeAnalytics?.track('generate_lead', { service: serviceKeys.get(projectType?.value) || 'other' });
          } catch { /* Optional measurement must never interrupt an accepted enquiry. */ }
          statusEl.textContent = "Thanks! Your message is on its way. I'll review your brief and reply to the email you provided.";
          statusEl.className = 'form-status success';
          contactForm.reset();
          if (kitEnquiry && projectType) projectType.value = requested;
        } else {
          throw new Error(result.message || 'Something went wrong');
        }
      } catch (err) {
        statusEl.textContent = "Couldn't send right now — please email evokecreativecreations@gmail.com directly.";
        statusEl.className = 'form-status error';
      } finally {
        contactForm.setAttribute('aria-busy', 'false');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send message';
      }
    });
  }
})();
