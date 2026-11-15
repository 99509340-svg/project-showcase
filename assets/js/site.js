(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(pointer: fine)');
  const header = document.querySelector('[data-header]');
  const progress = document.querySelector('.scroll-progress');
  const intro = document.querySelector('.intro-curtain');

  let scrollTicking = false;
  const updateProgress = () => {
    scrollTicking = false;
    if (!progress) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const amount = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    progress.style.transform = `scaleX(${amount})`;
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  const requestProgress = () => {
    if (scrollTicking) return;
    scrollTicking = true;
    window.requestAnimationFrame(updateProgress);
  };
  window.addEventListener('scroll', requestProgress, { passive: true });
  window.addEventListener('resize', requestProgress, { passive: true });
  updateProgress();

  if (intro) {
    window.setTimeout(() => intro.remove(), reducedMotion.matches ? 0 : 1450);
  }

  const staggerGroups = document.querySelectorAll('[data-stagger], [data-sequence]');
  staggerGroups.forEach((group) => {
    const items = group.querySelectorAll(':scope > *');
    items.forEach((item, index) => item.style.setProperty('--i', String(index)));
  });

  const revealTargets = document.querySelectorAll('[data-reveal], [data-stagger], [data-sequence], [data-case-panel]');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -48px' });
    revealTargets.forEach((node) => revealObserver.observe(node));
  } else {
    revealTargets.forEach((node) => node.classList.add('is-visible'));
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

  const attachMagneticControl = (control) => {
    control.addEventListener('pointermove', (event) => {
      if (!finePointer.matches || reducedMotion.matches) return;
      const rect = control.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      control.style.setProperty('--mx', `${x * 8}px`);
      control.style.setProperty('--my', `${y * 6}px`);
    });
    control.addEventListener('pointerleave', () => {
      control.style.setProperty('--mx', '0px');
      control.style.setProperty('--my', '0px');
    });
  };
  document.querySelectorAll('.magnet').forEach(attachMagneticControl);

  document.querySelectorAll('[data-parallax]').forEach((surface) => {
    const frame = surface.closest('section') || surface;
    frame.addEventListener('pointermove', (event) => {
      if (!finePointer.matches || reducedMotion.matches) return;
      const rect = surface.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      surface.style.setProperty('--px', `${x * 12}px`);
      surface.style.setProperty('--py', `${y * 9}px`);
    });
    frame.addEventListener('pointerleave', () => {
      surface.style.setProperty('--px', '0px');
      surface.style.setProperty('--py', '0px');
    });
  });

  reducedMotion.addEventListener?.('change', (event) => {
    if (!event.matches) return;
    document.querySelectorAll('[data-parallax], .magnet').forEach((node) => {
      node.style.setProperty('--px', '0px');
      node.style.setProperty('--py', '0px');
      node.style.setProperty('--mx', '0px');
      node.style.setProperty('--my', '0px');
    });
  });
})();
