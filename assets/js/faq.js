document.querySelectorAll('.faq-list').forEach(function (list) {
  list.querySelectorAll('.faq-question').forEach(function (button) {
    button.addEventListener('click', function () {
      var open = button.getAttribute('aria-expanded') === 'true';
      list.querySelectorAll('.faq-question').forEach(function (other) {
        other.setAttribute('aria-expanded', 'false');
        other.closest('.faq-item').classList.remove('active');
        document.getElementById(other.getAttribute('aria-controls')).hidden = true;
      });
      if (!open) {
        button.setAttribute('aria-expanded', 'true');
        button.closest('.faq-item').classList.add('active');
        document.getElementById(button.getAttribute('aria-controls')).hidden = false;
      }
    });
  });
});
