# Zadanie 1: Pierwsze zdarzenie - CLICK

## Cel

Nauczysz się obsługiwać najpopularniejsze zdarzenie - `click`.

## Krok po kroku

1.  Otwórz plik `index.html`. Zobaczysz tam przycisk (`#changeBtn`) i paragraf (`#text`).
2.  Otwórz plik `script.js`.
3.  Pobierz oba elementy do zmiennych (użyj `document.querySelector`).
4.  Dodaj nasłuchiwanie zdarzenia na przycisku:
    ```javascript
    przycisk.addEventListener("click", function () {
      // Tu wpisz kod
    });
    ```
5.  Wewnątrz funkcji:
    - Zmień tekst w paragrafie na "Tekst został zmieniony!".
    - Zmień kolor tła strony (`document.body.style.backgroundColor`) na np. "lightblue".
6.  Przetestuj działanie, klikając w przycisk.

## Standardy HTML

Pamiętaj, że plik HTML musi zawierać poprawną strukturę (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`, `meta charset`).
Dołącz plik `script.js` na końcu `<body>` lub w `<head>` z atrybutem `defer`.
Dodaj stopkę z Twoim imieniem i nazwiskiem.
