function toggleDropdown(button) {
  const dropdown = button.parentElement;
  const content = dropdown.querySelector('.dropdown-content');
  const arrow = button.querySelector('.arrow');

  // Cierra cualquier otro dropdown abierto
  const openDropdowns = document.querySelectorAll('.dropdown.open');
  openDropdowns.forEach(openDropdown => {
    if (openDropdown !== dropdown) {
      openDropdown.classList.remove('open');
      openDropdown.querySelector('.dropdown-content').style.maxHeight = null;
      openDropdown.querySelector('.arrow').classList.remove('rotate-arrow');
    }
  });

  // Alterna la clase 'open' en el dropdown actual
  dropdown.classList.toggle('open');
  arrow.classList.toggle('rotate-arrow');

  // Controla la animación de apertura y cierre
  if (dropdown.classList.contains('open')) {
    content.style.maxHeight = content.scrollHeight + "px";
  } else {
    content.style.maxHeight = null;
  }
}
