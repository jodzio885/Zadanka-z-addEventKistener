// Tutaj wpisz swój kod
const text = document.getElementById('text');
const changeBtn = document.getElementById('changeBtn');

changeBtn.addEventListener("click", function () {
    text.innerHTML = "Tekst został zmieniony";
    document.body.style.backgroundColor = "lightblue";
  });

