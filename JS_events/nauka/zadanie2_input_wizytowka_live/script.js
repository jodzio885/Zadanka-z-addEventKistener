// Tutaj wpisz kod
const nameInput = document.getElementById('nameInput');
const namePreview = document.getElementById('namePreview');

nameInput.addEventListener("input", (e) => {
    // ...
    namePreview.innerHTML = nameInput.value;
  });