(() => {
  const header = document.querySelector('.site-header');
  const progress = document.querySelector('.scroll-progress');
  const updateProgress = () => {
    if (!progress) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0}%`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  const observed = document.querySelectorAll('.reveal, .flow');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -40px' });
    observed.forEach((node) => observer.observe(node));
  } else {
    observed.forEach((node) => node.classList.add('is-visible'));
  }

  document.querySelectorAll('[data-dialog-open]').forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      const dialog = document.getElementById(trigger.dataset.dialogOpen);
      if (!dialog) return;
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open', '');
    });
  });

  document.querySelectorAll('[data-dialog-close]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const dialog = trigger.closest('dialog');
      if (dialog) dialog.close();
    });
  });

  document.querySelectorAll('dialog').forEach((dialog) => {
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
  });

  document.querySelectorAll('[data-copy]').forEach((trigger) => {
    trigger.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(trigger.dataset.copy);
        const toast = document.querySelector('.toast');
        if (toast) {
          toast.textContent = '已复制';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 1400);
        }
      } catch {
        // Clipboard may be unavailable on file://; links remain usable without it.
      }
    });
  });

  const year = document.querySelectorAll('[data-current-year]');
  year.forEach((node) => { node.textContent = String(new Date().getFullYear()); });
})();
