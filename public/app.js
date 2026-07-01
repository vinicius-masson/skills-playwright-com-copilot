document.querySelector('form')?.addEventListener('submit', (event) => {
  event.preventDefault();

  const status = document.createElement('div');
  status.setAttribute('role', 'status');
  status.textContent = 'Inscrição confirmada!';

  document.querySelector('main')?.appendChild(status);
});
