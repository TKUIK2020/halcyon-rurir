function viewBlock() {
  const modal = document.getElementById('modal');
  modal.removeAttribute('hidden');
}
viewBlock();
function hideBlock() {
  const modal = document.getElementById('modal');
  modal.setAttribute('hidden', '');
}
hideBlock();
