// Alterna entre tema escuro e claro
const toggleBtn = document.getElementById('toggleTheme');
const body = document.body;

function updateToggleText() {
  toggleBtn.textContent = body.classList.contains('light') ? 'Dark Mode' : 'Light Mode';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light');
  updateToggleText();
});

updateToggleText();
