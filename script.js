const themeButton = document.querySelector('#theme');

function setTheme(dark) {
  document.body.classList.toggle('dark', dark);
  themeButton.setAttribute('aria-pressed', String(dark));
}

themeButton.addEventListener('click', () => {
  setTheme(!document.body.classList.contains('dark'));
});
