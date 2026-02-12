# Zadanie 1: Wyświetlanie klas elementu

## Cel zadania

Twoim celem jest pobranie elementu z drzewa DOM, odczytanie listy jego klas CSS za pomocą właściwości `classList` oraz wyświetlenie tych informacji na stronie.

## Kroki do wykonania

1. Otwórz plik `index.html` w przeglądarce i zapoznaj się z jego strukturą. Zobaczysz "Magiczny Box", który posiada kilka klas CSS nadających mu wygląd.
2. W pliku `skrypt.js` pobierz przycisk "Pokaż klasy" (id `btnCheck`), element boxa (id `magicBox`) oraz paragraf wyniku (id `result`).
3. Podepnij nasłuchiwanie zdarzenia `click` pod przycisk.
4. W funkcji obsługującej kliknięcie:
   a. Pobierz liczbę klas przypisanych do boxa (użyj `classList.length`).
   b. Wyświetl w konsoli całą zawartość `classList`.
   c. Wstaw do elementu `result` komunikat w formacie:
   `Liczba klas: X. Lista klas: klasa1, klasa2, ...`

   _Podpowiedź:_ Aby uzyskać tekstową listę klas, możesz użyć właściwości `className`, `classList.value` lub metody tablicowej, jeśli zamienisz classList na tablicę.

5. Sprawdź działanie klikając przycisk.

---

Powodzenia!
