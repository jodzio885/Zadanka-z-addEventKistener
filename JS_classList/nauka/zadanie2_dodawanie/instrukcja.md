# Zadanie 2: Dodawanie klas

## Cel zadania

Nauczysz się dodawać nowe klasy CSS do elementów za pomocą metody `classList.add()`. Pozwala to na dynamiczną zmianę wyglądu strony w reakcji na działania użytkownika.

## Kroki do wykonania

1. Zapoznaj się z plikiem `index.html`. Znajduje się tam karta produktu (div o id `card`).
2. Zapoznaj się z plikiem `style.css`. Zwróć uwagę na klasę `.featured`, która dodaje złote obramowanie i cień. Ta klasa **nie jest** przypisana do karty w HTML-u.
3. W pliku `skrypt.js` pobierz:
   - Przycisk "Wyróżnij produkt" (id `btnHighlight`).
   - Kartę produktu (id `card`).
4. Dodaj obsługę kliknięcia przycisku.
5. W funkcji obsługującej kliknięcie użyj metody `classList.add('nazwa-klasy')`, aby dodać klasę `featured` do elementu karty.
6. Przetestuj działanie. Po kliknięciu karta powinna zyskać nowy styl.

---

**Pytanie dla chętnych:** Co się stanie, jeśli klikniesz przycisk drugi raz? Czy klasa zostanie dodana podwójnie? (Sprawdź w inspektorze przeglądarki).
