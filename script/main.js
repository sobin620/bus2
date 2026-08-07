const promoPanels = document.querySelectorAll('.promo-panel');

promoPanels.forEach((panel) => {
  panel.addEventListener('click', (event) => {
    event.preventDefault();

    promoPanels.forEach((item) => {
      item.classList.remove('is-active');
    });

    panel.classList.add('is-active');
  });
});
