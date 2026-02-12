# Zadanie 6: Praca z listą elementów

## Cel zadania

Do tej pory pracowaliśmy na pojedynczych elementach. Teraz nauczysz się zarządzać klasami wielu elementów jednocześnie. Wykorzystasz do tego `querySelectorAll` oraz pętlę `forEach`.

## Kroki do wykonania

1. Otwórz `index.html`. Zobaczysz listę zakupów.
2. W `skrypt.js` pobierz:
   - Wszystkie elementy listy `li` (użyj `document.querySelectorAll('li')`).
   - Przycisk "Zaznacz co drugie" (id `btnEven`).
3. Dodaj obsługę kliknięcia przycisku.
4. Wewnątrz funkcji użyj metody `forEach` na pobranej liście elementów `li`.
5. Metoda `forEach` przyjmuje funkcję zwrotną z dwoma argumentami: elementem i indeksem (`(item, index) => { ... }`).
6. Wewnątrz pętli sprawdź, czy indeks jest nieparzysty (co drugi element wizualnie, bo indeksy są od 0).
   - `if (index % 2 !== 0)`
7. Jeśli warunek jest spełniony, dodaj do elementu klasę `highlight` (zdefiniowaną w CSS).

## Efekt

Po kliknięciu przycisku, co druga pozycja na liście powinna zostać podświetlona na żółto.
