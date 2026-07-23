document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('menu-button');
  var list = document.getElementById('patterns-list');
  if (!button || !list) return;

  button.addEventListener('click', function () {
    var isOpen = list.classList.toggle('open');
    button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});
