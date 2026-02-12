// 1. Pobierz wszystkie .box
const box = document.querySelectorAll('.box');

// 2. Pobierz #info
const info = document.getElementById('info');

// 3. Pętla forEach dla boxów
box.forEach(element => {
    
//    - addEventListener 'mouseenter'
element.addEventListener("mouseenter", function () {
    info.innerHTML = element.getAttribute('data-opis');
    element.style.backgroundColor = "yellow";
});

//    - addEventListener 'mouseleave'
element.addEventListener("mouseleave", function () {
    info.innerHTML = "Najedź na element";
    element.style.backgroundColor = '#ddd';
});

});