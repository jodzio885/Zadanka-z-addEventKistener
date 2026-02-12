# Zadanie 4: Formularz i Walidacja - SUBMIT

## Cel

Nauczysz się obsługiwać zdarzenie `submit` formularza i blokować jego domyślne działanie (przeładowanie strony) za pomocą `e.preventDefault()`.

## Krok po kroku

1.  W HTML znajduje się prosty formularz z polem hasła (`#passwordInput`) i obszarem na komunikaty (`#message`).
2.  Pobierz formularz (`form`) i obszar komunikatów do zmiennych.
3.  Dodaj nasłuchiwanie zdarzenia `submit` na **formularzu** (nie na przycisku!):
    ```javascript
    form.addEventListener("submit", (e) => {
      // ...
    });
    ```
4.  Wewnątrz funkcji:
    - **Najważniejsze**: Zablokuj wysyłanie formularza: `e.preventDefault()`.
    - Pobierz wartość z pola hasła.
    - Sprawdź, czy pole jest puste.
    - Jeśli puste: Wyświetl komunikat "Wpisz hasło!" w kolorze czerwonym.
    - Jeśli wpisane: Wyświetl komunikat "Formularz wysłany (teoretycznie)" w kolorze zielonym.

## Dlaczego preventDefault?

Bez tego, po kliknięciu "Zaloguj", strona by się odświeżyła (lub przeszła pod inny adres), a nasz kod JS nie zdążyłby (lub wizualnie zniknąłby) zadziałać.
