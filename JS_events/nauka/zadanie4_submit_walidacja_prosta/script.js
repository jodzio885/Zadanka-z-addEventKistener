// 1. Pobierz formularz
const message = document.getElementById('message');
const loginForm = document.getElementById('loginForm')

// 2. addEventListener 'submit'
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let passwordInput = document.getElementById('passwordInput').value;

    if (passwordInput == "") {
        message.innerHTML = "Wpisz hasło!";
        message.style.color = "red";
    }
    else {
        message.innerHTML = "Formularz wysłany (teoretycznie)";
        message.style.color = "green";
    }
  });
// 3. Pamiętaj o e.preventDefault()

