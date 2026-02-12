# Zadanie 5: Sprawdzanie klasy (Contains)

## Cel zadania

Nauczysz się używać metody `classList.contains()`. Pozwala ona sprawdzić, czy element posiada daną klasę, co zwraca wartość `true` lub `false`. Jest to kluczowe przy tworzeniu logiki "jeśli ma klasę X, to zrób Y".

## Kroki do wykonania

1. Otwórz `index.html`. Znajduje się tam prosty przycisk "Polub to".
2. Pobierz ten przycisk w `skrypt.js` (id `btnLike`).
3. Dodaj nasłuchiwanie kliknięcia.
4. Wewnątrz funkcji sprawdź za pomocą instrukcji `if` oraz metody `contains('liked')`:
   - Jeśli przycisk **MA** klasę `liked`:
     - Usuń klasę `liked`.
     - Zmień treść przycisku na "Polub to".
     - Zmień treść ikony (span id `icon`) na "♡" (puste serce).
   - Jeśli przycisk **NIE MA** klasy `liked`:
     - Dodaj klasę `liked`.
     - Zmień treść przycisku na "Lubisz to!".
     - Zmień treść ikony na "♥" (pełne serce).

## Wskazówka

Metoda `toggle()` robiłaby samo przełączanie klasy automatycznie, ale tutaj chcemy, abyś przećwiczył instrukcje warunkowe i ręczne sterowanie w zależności od stanu.
