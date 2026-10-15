const button = document.querySelector('#theme');
button.addEventListener('click', () => {
  const dark = document.body.classList.toggle('dark');
  button.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
});
