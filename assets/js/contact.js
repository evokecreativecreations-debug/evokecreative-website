(() => {

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const services = new Map([
      ['brand-identity-design', 'Brand Identity Design'], ['logo-design', 'Logo Design'],
      ['roblox-ui-design', 'Roblox UI Design'], ['social-media-design', 'Social Media Design']
    ]);
    const requested = services.get(new URLSearchParams(location.search).get('service'));
    const projectType = document.getElementById('project_type');
    if (requested && projectType) projectType.value = requested;

    const statusEl = document.getElementById('formStatus');
    const submitBtn = document.getElementById('formSubmitBtn');
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      statusEl.className = 'form-status';
      statusEl.textContent = 'Sending your message…';
      contactForm.setAttribute('aria-busy', 'true');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';
      try {
        const formData = new FormData(contactForm);
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: formData
        });
        const result = await res.json();
        if (result.success) {
          statusEl.textContent = "Thanks! Your message is on its way — I'll reply within a few hours.";
          statusEl.className = 'form-status success';
          contactForm.reset();
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
