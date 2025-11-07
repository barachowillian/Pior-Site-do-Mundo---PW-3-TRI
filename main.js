window.onload = function() {
  const popup = document.getElementById('popup-bemvindo');
  popup.style.display = 'flex';
};

function fecharPopup() {
  document.getElementById('popup-bemvindo').style.display = 'none';
}

function mostrarPopupPromo() {
  document.getElementById('popup-promo').style.display = 'flex';
}

function fecharPopupPromo() {
  document.getElementById('popup-promo').style.display = 'none';
}
